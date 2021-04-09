import React, { useState, useContext } from "react";

export default function SearchInputBar({ searchInput, setSearchInput }) {
  const handleSearch = (e) => {
    setSearchInput(e.target.value.toLowerCase());
  };
  return (
    <div>
      <h5>Search for house type</h5>
      <input
        className="serach-bar"
        type="text"
        placeholder="Search for a house type"
        value={searchInput}
        onChange={handleSearch}
      />
    </div>
  );
}
