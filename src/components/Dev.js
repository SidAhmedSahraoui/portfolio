import React from "react";
import { Container } from "react-bootstrap";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Noty from "../images/Home.png";
import Soc from "../images/SOC.png";
const Dev = () => {
  return (
    <Container>
      <div className="development">
        <div className="dev">
          <FontAwesomeIcon className="icon" icon={faLaptopCode} size="lg" />
          <h1 className="title">Development</h1>
        </div>
        <div className="projects">
          <div className="pro">
            <img className="preview" src={Noty} alt="Noty" />
            <img className="preview" src={Soc} alt="Soc" />
          </div>
        </div>
      </div>
    </Container>
  );
};
export default Dev;
