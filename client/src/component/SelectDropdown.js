import React from 'react'
import "./SelectDropdown.css"
export default function SelectDropdown({ setSelect, filterHouse, allHouses }) {
  return (
    <div className="select-drop-container">
        <h6>House purpose</h6>
      <select onChange={(e) => setSelect(e.target.value)} className="custom-select">
        <option value="Select All">Select All</option>
        <option value="rent">Rent</option>
        <option value="for sale">For Sale</option>
      </select>
      <p>{`${filterHouse.length}/${allHouses.length} houses`}</p>
    </div>
  );
}
