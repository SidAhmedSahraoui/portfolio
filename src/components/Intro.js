import React from "react";
import { Helmet } from "react-helmet";
import Typewriter from "typewriter-effect";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Intro = () => {
  return (
    <div className="intro">
      <Helmet>
        <title>Sid Ahmed Sahraoui | Web developer</title>
      </Helmet>
      <h1 className="hello">
        <span>Hello I'm</span> <span className="name">Ahmed</span>
      </h1>
      <h4 className="tag">@sidahmedsahraoui</h4>
      <h3 className="desc">
        I'm a 21 years Algeria based Full-Stack developer and UI/UX designer{" "}
        building robust and scalable web applications
      </h3>

      <h3 className="typing">
        {" "}
        <Typewriter
          options={{
            strings: [
              "I build robust web applications.",
              "I craft elegant front-ends",
              "I design cool projects",
            ],
            autoStart: true,
            loop: true,
          }}
        />
      </h3>
      <div className="down">
        <FontAwesomeIcon icon={faArrowDown} size="sm" />
      </div>
    </div>
  );
};
export default Intro;
