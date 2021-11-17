import React from "react";
import { Route, Routes } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Navbar from "./component/Navbar";
import Tabs from "./component/Tabs";
import Character from "./component/Character";
import Planets from "./component/Planets";


const App = () => {
  return (
    <Router>
      <Container className="p-5">
        <Row>
          <Navbar />
          <Tabs />
          <Routes>
            <Route exact path="/planets" element={<Planets />} />
            <Route exact path="/character" element={<Character />} />
          </Routes>
        </Row>
      </Container>
    </Router>
  );
};

export default App;
