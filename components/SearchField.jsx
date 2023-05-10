"use client";

import { useState } from "react";

export default function SearchField() {
  const [searchValue, setSearchValue] = useState("");
  function handleSearchChange(e) {
    setSearchValue(e.target.value);
  }
  return (
    <div className="relative w-full flex-center my-10">
      <div className="relative w-full max-w-xl mx-auto">
        <img src="/assets/icons/search.svg" alt="Search Icon" fill="#fff" className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-white" />
        <input type="text" placeholder="Search for a champ or user" value={searchValue} onChange={handleSearchChange} className="search_input peer" />
      </div>
    </div>
  );
}
