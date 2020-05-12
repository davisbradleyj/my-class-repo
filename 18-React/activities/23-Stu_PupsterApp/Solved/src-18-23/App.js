import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import about from "./components/pages/about";
import discover from "./components/pages/discover";
import search from "./components/pages/search";

function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        <Route exact path="/about" component={about} />
        <Route exact path="/discover" component={discover} />
        <Route exact path="/search" component={search} />
      </div>
    </Router>
  );
}

export default App;
