import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <div className="footer">
      <div className="contact">
        <FontAwesomeIcon className="enveloped" icon={faEnvelope} size="lg" />
        <h1>Get in touche</h1>
        <h3>
          to reach out please contact me on <a href="/images/Home.png">email</a>{" "}
          or check out my <a href="/">resume</a>
        </h3>
        <div className="social">
          <a
            href="http://www.github.com/sidahmedsahraoui"
            target="_blank"
            rel="noopener noreferrer"
            className="envelope"
          >
            {" "}
            <FontAwesomeIcon
              className="envelope"
              icon={faGithub}
              size="lg"
            />{" "}
          </a>
          <a
            href="http://www.instagram.com/sid_ahmed_sahraoui"
            target="_blank"
            rel="noopener noreferrer"
            className="envelope"
          >
            {" "}
            <FontAwesomeIcon
              className="envelope"
              icon={faInstagram}
              size="lg"
            />{" "}
          </a>
        </div>
      </div>
      <div className="rights">
        <div className="copy">
          <h3 className="envelope">Sid Ahmed Sahraoui</h3>
          <div className="envelope">
            {" "}
            <FontAwesomeIcon
              className="envelope"
              icon={faCopyright}
              size="md"
            />{" "}
          </div>
        </div>

        <h4>All rights reserved</h4>
      </div>
    </div>
  );
};
export default Footer;
