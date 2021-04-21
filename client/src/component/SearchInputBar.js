import React, { useState, useContext } from "react";
import "./SearchInputBar.css"
export default function SearchInputBar({ searchInput, setSearchInput }) {
  const handleSearch = (e) => {
    setSearchInput(e.target.value.toLowerCase());
  };
  return (
    <div className="search-bar-container">
      <h6 className="">Search for house type</h6>
      <input
        className="form-control"
        type="text"
        placeholder="Search for a house type"
        value={searchInput}
        onChange={handleSearch}
      />
    </div>
  );
}
