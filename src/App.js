import React from "react";
import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome";
import Home from "./pages/Home";

const App = () => {
  return (
    <React.Fragment>
      <Welcome />
      <Navbar />
      <Home />
    </React.Fragment>
  );
};

export default App;
