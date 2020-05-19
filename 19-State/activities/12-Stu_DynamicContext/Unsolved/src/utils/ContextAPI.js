import React from "react";

const UserContext = React.createContext ({
    firstname: "",
    lastname: "",
    email: "",
    image: "",
    language: "",
    handleBtnClick: () => {},
    capitalizeFirstLetter: () => {}
})

export default UserContext;