import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MovieList from "./components/MoviesList";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<MovieList />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
