import React, { useReducer } from "react";
import "./App.css";

function Count() {
  const dogs = [
    {
      name: "Harry",
      image: "https://images.dog.ceo/breeds/vizsla/n02100583_10960.jpg"
    },
    {
      name: "Hermione",
      image: "https://images.dog.ceo/breeds/husky/n02110185_1511.jpg"
    }
  ];

  const [count, dispatch] = useReducer((state, action) => {
    if (action === "addHarry") {
      return {...state, count: addHarry} + 1;
    } else if (action === "addHermione") {
        return {...state, count: addHermione} + 1;
    } else {
      return {state};
    }
  }, {Harry:0, Hermoione:0});

  return (
    <div className="App">
      <div className="row mt-5">
        {dogs.map(item => (
          <div key={item.name} className="card mx-auto col-4">
            <img className="card-img-top" src={item.image} alt={item.name} />
            <div className="card-body">
              <h4 className="card-title">{item.name}</h4>
              <p className="card-text">{item.name} has been praised {count} times!</p>
              <button className="btn btn-success mt-5 mr-5" onClick={() => dispatch("add"+item.name)}> Praise </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Count;
