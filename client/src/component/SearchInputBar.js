import React, { useState, useContext } from "react";
import { GetAllHouses } from "../component/Context/GetAllHouses";

export default function SearchInputBar({ searchInput, setSearchInput, handleSearch }) {
  const { allHouses } = useContext(GetAllHouses);
//   const [searchInput, setSearchInput] = useState("");
//   const handleSearch = (e) => {
//     setSearchInput(e.target.value.toLowerCase());
//   };
  console.log(searchInput);
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
