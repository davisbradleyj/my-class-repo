import React from "react";
import CardTitleText from "../CardTitleText";
import "./style.css";

// have to add "prop" of {title}
function CardTitle() {
  return (
    <div className="blue text-center">
      <CardTitleText />
      {/* have to add title={title} */}
    </div>
  );
}

export default CardTitle;
