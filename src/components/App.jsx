import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import ContactMe from "./ContactMe";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactMe />} />

        {/* <Route path="/contact">
          <ContactMe />
        </Route> */}
      </Routes>
    </Router>
  );
}

export default App;
