import React, {useContext} from "react";
import UserContext from "../utils/ContextAPI"

function CardTitleText() {
  const {user, capitalizeFirstLetter} = useContext(UserContext)
  return <h2>{capitalizeFirstLetter(user.firstname) +
    " " + capitalizeFirstLetter(user.lastname)}</h2>;
}

export default CardTitleText;
