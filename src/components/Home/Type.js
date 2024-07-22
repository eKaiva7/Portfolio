import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Developer",
          "WEB Penetration Tester",
          "Ethical Works",
          "Open Source Contributor",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 25,
      }}
    />
  );
}

export default Type;
