import React from "react";
import { useNavigate } from "react-router-dom";
import "./register.css";

const Register = () => {
  const navigate = useNavigate();
  return (
    <div className="box-register">
      <div className="logo-box">
        <p onClick={() => navigate("/")} className="logo">
          SAI <br /> GAK
        </p>
        <p>Let's do this</p>
      </div>
      <div className="register-inputs">
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Surname" />
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Password" />
      </div>
      <div className="register-btn">
        <button onClick={() => navigate("/")}>JOIN</button>
      </div>
    </div>
  );
};

export default Register;
