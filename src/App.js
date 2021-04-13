import React, { useState } from "react";
import "./App.css";
import Foods from "./Foods";
import Category from "./Category";
import data from "./data";

const allCategories = ["all", ...new Set(data.map((item) => item.category))];

function App() {
  const [foods, setFoods] = useState(data);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "all") {
      setFoods(data);
      return;
    }
    const filteredItems = data.filter((item) => {
      return item.category === category;
    });
    setFoods(filteredItems);
  };

  return (
    <main>
      <div className="section">
        <h1>Our Menu</h1>
        <Category filterItems={filterItems} categories={categories} />
        <div className="food-section">
          <Foods foods={foods} />
        </div>
      </div>
    </main>
  );
}

export default App;
