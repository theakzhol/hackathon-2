import React from "react";
// import Login from "../components/Register/Login";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { setEmail, setPassword } from "../store/auth/authSlice";
import { handleLogin } from "../store/auth/authActions";

const LoginPage = () => {
  const { email, password, emailError, passwordError } = useSelector(
    (state) => state.auth
  );

  const [showError, setShowError] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUser = () => {
    if (!email.trim() || !password.trim()) {
      setShowError(true);
      return;
    }
    const obj = {
      email,
      password,
      navigate,
    };
    dispatch(handleLogin(obj));
  };

  return (
    <div>
      <Login />
    </div>
  );
};

export default LoginPage;
