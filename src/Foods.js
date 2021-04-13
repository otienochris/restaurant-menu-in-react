import React from "react";
import Food from "./Food";


function Foods({foods}) {
  return (
    <div className="food-section">
        {foods.map(food => {
            return <Food food={food} key={food.id}/>
        })}
    </div>
  );
}

export default Foods;
