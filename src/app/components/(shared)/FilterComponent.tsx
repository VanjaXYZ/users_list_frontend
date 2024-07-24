"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";

const FilterComponent = () => {
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
    {
      filterBy: "Age",
      value: "age",
    },
    {
      filterBy: "Job",
      value: "job",
    },
    {
      filterBy: "Work experience",
      value: "work_experience",
    },
    {
      filterBy: "Hobby",
      value: "hobbies",
    },
  ];

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSelectFilter = (term: string) => {
    const filterParams = new URLSearchParams(searchParams);
    if (term) {
      filterParams.set("filter", term);
    } else {
      filterParams.delete("filter");
    }
    replace(`${pathname}?${filterParams.toString()}`);
  };

  const handleRemoveFilter = () => {
    const filterParams = new URLSearchParams(searchParams);
    filterParams.delete("filter");
  };

  return (
    <select
      className="px-2 py-1 text-black border rounded"
      onChange={(e) => handleSelectFilter(e.target.value)}
      defaultValue={searchParams.get("filter")?.toString() || ""}
    >
      <option value="" className="italic" onClick={handleRemoveFilter}>
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
