import React, { useState } from 'react'

export default function SelectDropdown({ setSelect, filterHouse, allHouses }) {
  return (
    <div>
      <select onChange={(e) => setSelect(e.target.value)}>
        <option value="Select All">Select All</option>
        <option value="rent">Rent</option>
        <option value="for sale">For Sale</option>
      </select>
      <p>{`${filterHouse.length}/${allHouses.length} houses`}</p>
    </div>
  );
}
