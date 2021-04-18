import React from 'react'

export default function RangeInput({ priceRange, setPriceRange }) {
  return (
    <div>
      <label>Filter by price</label>
      {` price of house ${priceRange}`}
      <input
        type="range"
        name="price"
        min={0}
        max={20000}
        value={priceRange}
        onChange={(e) => setPriceRange(e.target.value)}
      />
    </div>
  );
}
