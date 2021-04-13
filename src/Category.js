import React from "react";

function Category({ filterItems, categories }) {
  return (
    <div className="menu">
      {categories.map((category, index) => (
        <button key={index} onClick={() => filterItems(`${category}`)}>
          {category}
        </button>
      ))}
    </div>
  );
}

export default Category;
