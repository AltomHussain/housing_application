import React, { useState, useContext } from "react";

export default function SearchInputBar({ searchInput, handleSearch }) {
// 
  return (
    <div>
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
