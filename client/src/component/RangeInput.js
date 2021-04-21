import React from 'react'
import "./RangeInput.css"
export default function RangeInput({ priceRange, setPriceRange }) {
  return (
    <div className="rainge-container">
      <label>House Price</label>
      {` £${priceRange}`}
      <input
      className="range-input"
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
