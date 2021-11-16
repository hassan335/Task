import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Description from "../container/description";
import Home from "../container/home";

export default function AppRouter() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/desc" element={<Description />}></Route>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </div>
    </Router>
  );
}
