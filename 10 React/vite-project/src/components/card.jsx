import React from "react";

function Card(props) {
  return (
    <div>
      <img src={props.image} alt="placeholder" />
      <h1 className="text-2xl font-bold">Card {props.name}</h1>
      <p className="text-gray-500">Card description</p>
      <button className="bg-blue-500 text-white p-2 rounded-md">
        Click me
      </button>
    </div>
  );
}

export default Card;
