import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// Define import paths
import Home from "./pages/Home/Home";
import Saved from "./pages/Saved/Saved";
import Navbar from "./components/Navbar/Navbar";

const App = () =>
  <Router>
    <div>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/Home" component={Home} />
      <Route exact path="/Saved" component={Saved} />
    </div>
  </Router>;


export default App;