import React from "react";
// import API
import API from "../utils/API"

function CardBody() {
  // establish languague and email (Add to h4 tags)
  const language = API.language
  const email = API.email
  return (
    <div>
      <h4>
      Favorite language: {language}
      </h4>
      <h4>
      Email: {email}
      </h4>
    </div>
  );
}

export default CardBody;
