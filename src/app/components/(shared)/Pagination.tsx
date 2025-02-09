import Link from "next/link";
import React from "react";

const Pagination = ({
  usersPerPage,
  totalUsers,
  paginate,
  currentPage,
}: any) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav className="w-full py-2">
      <ul className="flex w-full justify-center">
        <button
          className={`px-6 text-xl flex justify-center items-center disabled:text-neutral-300`}
          disabled={currentPage === 1}
        >
          {"<<"}
        </button>
        {pageNumbers.map((pageNumber: any) => (
          <li key={pageNumber} className="w-10 h-10 ">
            <Link
              onClick={() => paginate(pageNumber)}
              href={"#"}
              className={`${
                currentPage === pageNumber
                  ? "underline bg-teal-700 text-white"
                  : ""
              } w-full h-full grid place-items-center text-xl font-semibold rounded`}
            >
              {pageNumber}
            </Link>
          </li>
        ))}
        <button
          className={`px-6 text-xl flex justify-center items-center disabled:text-neutral-300`}
          disabled={currentPage === Math.ceil(totalUsers / usersPerPage)}
        >
          {">>"}
        </button>
      </ul>
    </nav>
  );
};

export default Pagination;
