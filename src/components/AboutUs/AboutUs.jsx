import React from "react";
import { useNavigate } from "react-router-dom";
import "./aboutus.css";

const AboutUs = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="logo-box">
        <img
          src={process.env.PUBLIC_URL + "/logo.png"}
          alt="Logo"
          className="logo-login"
          onClick={() => navigate("/")}
        />
      </div>
      <div className="kartinka">
        <img
          src="https://inspire.savee.it/content/images/size/w1000/2023/04/Just-save-it-4.png"
          alt=""
        />

        <div className="text">
          <h2>Updates</h2>
          <h1>Just save it, let us do the rest.</h1>

          <ul>
            <li>
              A big part of our experience on SAVEE is focused on how fast the
              site can load and how good it looks, and I think this is why so
              many users love it. When you h...
            </li>
          </ul>
          <ul className="mini-text">
            <li>Apr 17, 2023 ` 2 min read</li>
          </ul>
        </div>
      </div>
      <div className="bot-block">
        <ul>
          <li>Inspire © 2023</li>
          <li>Powered by Ghost</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutUs;
