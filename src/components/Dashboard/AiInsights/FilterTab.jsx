import React from "react";

const FilterTab = ({ id, label, count, color, selectedFilter, onChange }) => (
  <div
    className={`flex items-center gap-2 bg-white border border-gray-300 rounded-lg py-2 px-4 cursor-pointer select-none ${
      selectedFilter === id ? "ring-2 ring-blue-500" : ""
    }`}
    onClick={() => onChange(id)}
  >
    <input
      type="radio"
      id={id}
      name="status"
      className="cursor-pointer"
      checked={selectedFilter === id}
      readOnly
    />
    <label
      htmlFor={id}
      className={`${color} text-sm font-semibold cursor-pointer`}
    >
      {label}
    </label>
    <span className="ml-1 text-gray-700 font-semibold text-sm">{count}</span>
  </div>
);

export default FilterTab;
