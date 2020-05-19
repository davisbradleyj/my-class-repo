import React from "react";
import UserContext from "../../utils/userContext";

function CardBody() {
  const {user} = useContext(UserContext);
  return (
    <div>
      <h4>
      Favorite language: {user.language}
      </h4>
      <h4>
      Email: {euser.mail}
      </h4>
    </div>
  );
}

export default CardBody;
