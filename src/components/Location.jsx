import axios from "axios";
import { useState } from "react";

const Location = ({ locationInfo, setLocationInfo }) => {
  const [suggestions, setSuggestions] = useState([]);

  const handlesubmit = (e) => {
    e.preventDefault();

    // const newLocationId = e.target.newLocation.value

    // axios
    // .get(`https://rickandmortyapi.com/api/location/${newLocationId}`)
    // .then(({data}) => setLocationInfo(data))
    // .catch((err) => console.log(err))
  };

  const handleChangeLocationName = (e) => {
    const locationName = e.target.value;
    if (locationName) {
      axios
        .get(`https://rickandmortyapi.com/api/location?name=${locationName}`)
        .then(({ data }) => setSuggestions(data.results))
        .catch((err) => console.log(err));
    } else {
      setSuggestions([]);
    }
  };

  const handleClickSuggestion = (newLocationId) => {
    axios
      .get(`https://rickandmortyapi.com/api/location/${newLocationId}`)
      .then(({ data }) => {
        setLocationInfo(data);
        setSuggestions([]);
      })
      .catch((err) => console.log(err));
  };

  return (
    <section className="'relative grid grid-rows-1 p-20 bg-[url(/images/portal.png)] translate-x-80 -translate-y-20 bg-no-repeat bg-cover'">
      <img className="-translate-x-20" src="/images/titulo.png" alt="" />
      <form
        className="max-w-max translate-x-28 translate-y-36 m-0 border border-green-500"
        onSubmit={handlesubmit}
      >
        <div>
          <input
            type="text"
            autoComplete="off"
            name="newLocation"
            placeholder="Type a location ID..."
            required
            className="p-2 outline-none"
            onChange={handleChangeLocationName}
          />

          <button
            className="relative bg-green-800 text-white p-2 font-semibold"
            type="submit"
          >
            Search
          </button>
        </div>
        <div className="absolute z-20 bottom-0 left-0 translate-y-full bg-black text-white px-2 border-r-2 border-l-2 border-green-500 w-full">
          <ul className="grid gap-1 max-h-[140px] overflow-y-auto no-scrollbar">
            {suggestions.map((suggestion) => (
              <li
                className="cursor-pointer hover:text-green-300 transition-all"
                onClick={() => handleClickSuggestion(suggestion.id)}
                key={suggestion.id}
              >
                {suggestion.name}
              </li>
            ))}
          </ul>
        </div>
      </form>

      <article className="relative -translate-x-1/4 max-w-max m-20 p-16 translate-y-full border border-green-500 ">
        <h2 className="translate-x-28 p-5 text-green-500">
          Welcome to {locationInfo?.name}!
        </h2>
        <ul className="flex flex-center gap-8 text-white">
          <li className="font-bold">Type: {locationInfo?.type}</li>
          <li className="font-bold">Dimension: {locationInfo?.dimension}</li>
          <li className="font-bold">Population: {locationInfo?.residents.length}</li>
        </ul>
      </article>
    </section>
  );
};
export default Location;
