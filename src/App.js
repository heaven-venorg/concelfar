import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import "./App.css";

// Note Navbar Style in "./App.css"
import Navbar from "./component/Navbar";
import Landing from "./component/Landing/Landing";
import Fahtocel from "./component/Fahtocel/Fahtocel";
import Celtofah from "./component/Celtofah/Celtofah";
import Notfound from "./component/Notfound/Notfound";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/celtofah" element={<Celtofah />} />
        <Route path="/fahtocel" element={<Fahtocel />} />
        <Route path="*" element={<Notfound />} />s
      </Routes>
    </Router>
  );
};

export default App;
