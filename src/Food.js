import React from 'react'

function Food({food}) {
    const {title, price, desc, img} = food;
    return (
      <div className="food">
        <img
          src={img}
          alt={title}
          className="image"
        />
        <div className="food-footer">
          <div className="price-section">
            <h4>{title}</h4>
            <h4>$ {price}</h4>
          </div>
          <hr className="underline"/>
          <p>{desc}
          </p>
        </div>
      </div>
    );
}

export default Food
