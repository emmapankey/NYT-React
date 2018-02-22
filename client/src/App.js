import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// Define import paths
import Home from "./src/components/pages/Home";
import Saved from "./src/components/pages/Saved";
import Navbar from "./src/components/Navbar";

const App = () =>
  <Router>
    <div>
      <Navbar />
      <p>Testing</p>
      <Route exact path="/" component={Home} />
      <Route exact path="/Home" component={Home} />
      <Route exact path="/Saved" component={Saved} />
    </div>
  </Router>;


export default App;