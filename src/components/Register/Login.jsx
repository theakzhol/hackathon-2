import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="box-register">
      <div className="logo-box">
        <p onClick={() => navigate("/")} className="logo">
          SAI <br /> GAK
        </p>
        <p>Welcome back</p>
      </div>
      <div className="register-inputs">
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Password" />
      </div>
      <div className="register-btn">
        <button onClick={() => navigate("/")}>Log in</button>
      </div>
      <div className="register-way">
        <p onClick={() => navigate("/register")}>
          If you don't have account, then click Register
        </p>
      </div>
    </div>
  );
};

export default Login;
