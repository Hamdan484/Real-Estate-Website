import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

function NavBar() {
  return (
    <div className="header">
      <span>
        <FontAwesomeIcon icon={faHouse} id="houselogo" />
        <span className="companyName">
          <b>Dan's Estate</b>.com <br />
        </span>{" "}
        Ghana's No.1 Property Website
      </span>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/Forrent">For rent</Link>
        <Link to="/Developments">Developments</Link>
        <Link to="/Agents">Agents</Link>
        <Link to="/Forrent">For sale</Link>
        <Link to="/Land">Land</Link>
        <Link to="/SignUp" id="signUpButton">
          <button>GET IN TOUCH</button>
        </Link>
      </nav>
    </div>
  );
}

export default NavBar;
