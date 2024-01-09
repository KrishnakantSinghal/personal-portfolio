import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      
      options={{
        strings: [
          "Software Developer",
          "Python Developer",
          "Django Developer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
