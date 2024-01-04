import { useEffect, useState } from "react";
import ResidentCard from "./ResidentCard";
import { paginationLogic } from "../utils/pagination";

const ResidentList = ({ residents }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const { pages, residentsInCurrentPage } = paginationLogic(
    currentPage,
    residents
  );

  const handleNewPage = (newPage) => {
    setCurrentPage(newPage);
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [residents]);

  return (
    <section className="bg-inherit">
      <section className="grid gap-8 grid-cols-[repeat(auto-fill,_250px)] justify-center max-w-[1200px] mx-auto">
        {residentsInCurrentPage.map((resident) => (
          <ResidentCard key={resident} residentURL={resident} />
        ))}
      </section>

      {/* Pagination */}
      <ul className="flex justify-center p-4 gap-6 flex-wrap items-center">
        {pages.map((page) => (
          <li key={page}>
            <button
              className={`${
                currentPage == page
                  ? "bg-green-800 p-2 text-white rounded-md"
                  : "bg-black p-2 rounded-md text-white"
              }`}
              onClick={() => handleNewPage(page)}
            >
              {page}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};
export default ResidentList;
