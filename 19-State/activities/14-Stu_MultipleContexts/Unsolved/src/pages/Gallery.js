import React, { useEffect, useState } from "react";
import API from "../utils/API";
import UserContext from "../utils/userContext";
import CardContainer from "../components/CardContainer";
import Row from "../components/Row";
import Language from "../utils/Language";

function Gallery() {

  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [userIndex, setUserIndex] = useState(0);
  const [language, setLanguage] = useState("");
  const [languages, setLanguages] = useState([]); 
  const [languageIndex, setLanguageIndex] = useState(0);


  // When the component mounts, a call will be made to get random users.
  useEffect(() => {
    API.getLanguagesList().then((languages) => {
      setLanguages(languages);
      setLanguage(langagues[0])
    loadUsers(languages[0]);
  }, []);

  function loadUsers() {
    API.getLanguagesList()
      .then(languages => {
        API.getUsersByLanguage(languages[0]).then((users) => {
          setUsers(users);
          setUser(users[0]);
        });
      })
      .catch(err => console.log(err));
  }
    
  function capitalizeFirstLetter(string = "") {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  function nextUser(userIndex) {
    // Ensure that the user index stays within our range of users
    if (userIndex >= users.length) {
      userIndex = 0;
    }
    setUserIndex(userIndex);
    setUser(users[userIndex]);
  }

  function previousUser(userIndex) {
    // Ensure that the user index stays within our range of users
    if (userIndex < 0) {
      userIndex = users.length - 1;
    }
    setUserIndex(userIndex);
    setUser(users[userIndex]);
  }

  function handleBtnClick(event) {
    // Get the title of the clicked button
    const btnName = event.target.getAttribute("data-value");
    if (btnName === "next") {
      const newUserIndex = userIndex + 1;
      nextUser(newUserIndex);
    } else {
      const newUserIndex = userIndex - 1;
      previousUser(newUserIndex);
    }
  }

  function nextLanguage(languageIndex) {
    // Ensure that the language index stays within our range of users
    if (languageIndex >= languages.length) {
      languageIndex = 0;
    }
    setLanguageIndex(languageIndex);
    setLanguage(languages[languageIndex]);
  }

  function previousLanguage(languageIndex) {
    // Ensure that the langauge index stays within our range of users
    if (languageIndex < 0) {
      languageIndex = languages.length - 1;
    }
    setLanguageIndex(languageIndex);
    setLanguage(languages[languageIndex]);
  }

  function handleLanguageClick(event) {
    // to cycle through the languages, needs to have some sort of button controlled element on the page
    const btnName = event.target.getAttribute("data-value");
    if (btnName === "next") {
      const newLanguageIndex = languageIndex + 1;
      nextLanguage(newLanguageIndex);
    } else {
      const newLanguageIndex = languageIndex - 1;
      previousLanguage(newLanguageIndex);
    }
  }

  
  return (
    <UserContext.Provider value={{ user, users, userIndex, capitalizeFirstLetter, handleBtnClick }}>
      <Language.Provider value={{ language,languages,handleLanguageClick}}>
      <div>
        <h1 className="text-center">Welcome to LinkedUp</h1>
        <h3 className="text-center">Click on the arrows to browse users</h3>
        <Languages />
        <Row>
          <CardContainer />
        </Row>
      </div>
      </Language.Provider>
    </UserContext.Provider>
  );
}


export default Gallery;
