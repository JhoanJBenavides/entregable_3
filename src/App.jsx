import axios from "axios";
import { useEffect, useState } from "react";
import { getRandomNumber } from "./helpers/random";
import Location from "./components/Location";
import ResidentList from "./components/ResidentList";

function App() {
const [locationInfo, setLocationInfo] = useState(null)



useEffect(() => {
const randomDimension = getRandomNumber(126)
console.log (randomDimension)
  axios
  .get(`https://rickandmortyapi.com/api/location/${randomDimension}`)
  .then(({data}) => setLocationInfo(data))
  .catch((err) => console.log(err))
},[])

  return (
      <main className="'flex flex-wrap justify-center items-center bg-[url(/images/bg_page.png)] bg-cover'">
        <Location locationInfo={locationInfo} setLocationInfo={setLocationInfo}/>
        <ResidentList residents={locationInfo?.residents ?? []} />
      </main>
    
  );
}

export default App;
