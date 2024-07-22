import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
           👉🏻 Hi Everyone, I am <span className="purple">Rishabh Rajput </span>
            from <span className="purple"> Bihar, India.</span>
            <br />
           👉🏻 I am currently working on skill building.
            <br />
           👉🏻 I am pursuing Btech CSE from <span className="purple">CHITKARA UNIVERSITY </span>
            <br />
            rajpura,punjab
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching sci-fi movies/series
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Rishabh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
