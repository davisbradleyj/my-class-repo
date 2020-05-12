import React from "react";
import API from "../utils/API"

function CardImg(props) {
  // pull the image from API
  const image = API.image
  return (
    <div>
      {/* add card image into src */}
      <img className="card-img" src={image} alt="user thumbnail" />
      {!props.image && <i className="fa fa-spinner fa-spin" aria-hidden="true" />}
    </div>
  );
}

export default CardImg;