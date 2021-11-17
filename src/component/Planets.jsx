import React from "react";
import Card from "react-bootstrap/Card";
import { planets } from "../Arrays";
import { useState } from "react";
import Sidebartwo from "./Sidebartwo";
import Addplanet from "./Addplanet";

const Planets = () => {
    const [Character, setCharacter] = useState(false)
    const sideclick = () => (setCharacter(!Character))
  return (
    <div className="container d-flex row ">
      {planets.map((planet) => {
        return (
          <Card className="d-flex justify-content-between" onClick={sideclick} className="m-2  shape1" href="/sidebar" style={{ width: "18rem", borderRadius: "16px" }}>
            <Card.Img
              variant="top"
              src={planet.image}
              alt="Card  cap"
              width="272px"
              height="136px"
            />
            <Card.Body>
              <Card.Title>{planet.name}</Card.Title>
              <Card.Text>{planet.friends}</Card.Text>
            </Card.Body>
          </Card>
        );
      })}
      <Addplanet />
      {
          Character && <Sidebartwo />
      }
    </div>
  );
};

export default Planets;
