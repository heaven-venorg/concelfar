import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import "./App.css";

// Note Navbar Style in "./App.css"
import Navbar from "./component/Navbar";
import Landing from "./component/Landing/Landing";
import Celtofah from "./component/Celtofah/Celtofah";
import Fahtocel from "./component/Fahtocel/Fahtocel";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/celtofah" element={<Celtofah />} />
        <Route path="/fahtocel" element={<Fahtocel />} />
      </Routes>
    </Router>
  );
};

export default App;
