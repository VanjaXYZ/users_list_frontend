"use client";
import React from "react";

const FilterComponent = ({ filteredData, setFilteredData }: any) => {
  const filterData = [
    {
      filterBy: "Name",
      value: "name",
    },
    {
      filterBy: "Email",
      value: "email",
    },
    {
      filterBy: "Role",
      value: "role",
    },
  ];

  return (
    <select
      className="px-2 py-1 text-black border rounded w-fit"
      value={filteredData}
      onChange={(e) => setFilteredData(e.target.value)}
    >
      <option value="" disabled className="italic">
        Select filter
      </option>
      {filterData.map(({ filterBy, value }) => (
        <option key={filterBy + value} value={value}>
          {filterBy}
        </option>
      ))}
    </select>
  );
};

export default FilterComponent;
