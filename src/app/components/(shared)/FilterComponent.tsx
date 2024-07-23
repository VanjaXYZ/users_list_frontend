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

  return (
    <select
      className="px-2 py-1 text-black border rounded w-fit"
      onChange={(e) => handleSelectFilter(e.target.value)}
      defaultValue={searchParams.get("filter")?.toString()}
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
