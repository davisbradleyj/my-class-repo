import React from "react";
// import API
import API from "../utils/API"
function CardTitleText() {
  // establish first and last name, add return
  const firstname = API.firstname
  const lastname = API.lastname
  return <h2>{firstname} {lastname}</h2>;
}

export default CardTitleText;
