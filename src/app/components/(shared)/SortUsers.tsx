"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";

const SortUsers = () => {
  const sortData = [
    {
      sortBy: "Ascending",
      value: "asc",
    },
    {
      sortBy: "Descending",
      value: "desc",
    },
  ];

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSortBy = (term: string) => {
    const sortParams = new URLSearchParams(searchParams);
    if (term) {
      sortParams.set("sort", term);
    } else {
      sortParams.delete("sort");
    }
    replace(`${pathname}?${sortParams.toString()}`);
  };

  const handleRemoveSort = () => {
    const sortParams = new URLSearchParams(searchParams);
    sortParams.delete("filter");
  };

  return (
    <select
      className="px-2 py-1 text-black border rounded"
      onChange={(e) => handleSortBy(e.target.value)}
      defaultValue={searchParams.get("sort")?.toString() || ""}
    >
      <option value="" className="italic" onClick={handleRemoveSort}>
        Sort by
      </option>
      {sortData.map(({ sortBy, value }) => (
        <option key={sortBy + value} value={value}>
          {sortBy}
        </option>
      ))}
    </select>
  );
};

export default SortUsers;
