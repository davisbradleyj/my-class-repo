import React from "react";

const name = "Brad";
const opinion = "interesting, but I do not know enough about it yet to make an informed opinion";
const vowels = function(name) {
  return name.replace(/[aeiou]/,"")
}
function JSXVariables() {
  return (
    <div className="main-container">
      <div className="container">
        <div className="jumbotron">
          <h1>Hi! My name is {name}</h1>
          <h2>My name has {name.length} letters</h2>
          <h2>My name without vowels is: {vowels}</h2>
          <h2>I think React is {opinion}</h2>
        </div>
      </div>
    </div>
  );
}

export default JSXVariables;
