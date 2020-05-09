import React from "react";

// Create a new component named "Math"
// Render one Math component in the place of each "?" mark
// Math should accept 3 props
// num1, operator, and num2
// Math should return a span tag displaying the result e.g.  19 + 341 = 360
function Calculator(props) {
  return (
    <div>
      <p>19 + 341 = <Math /></p>
      <p>42 - 17 = {Math}</p>
      <p>100 * 3 = {Math}</p>
      <p>96 / 4 = {Math}</p>
    </div>
  );
}

export default Calculator;
