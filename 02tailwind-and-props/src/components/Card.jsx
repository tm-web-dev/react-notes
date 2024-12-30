import React from "react";


function Card({brand= "Any"}) {
/*
We can directly de-structure the props in the function parameter itself or can de-structure it inside the function body
We can also set the default value of the props in the function parameter itself
*/
    
  return (
    <div className="card bg-gray-500 rounded-2xl w-96 shadow-xl">
      <div className="card-body">
        <h2 className="card-title"> {brand}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
      </div>
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
        />
      </figure>
    </div>
  );
}

export default Card;
