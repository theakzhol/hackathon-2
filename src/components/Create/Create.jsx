import React from "react";
import "./create.css";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const navigate = useNavigate();
  return (
    <div className="create-box">
      <div className="title-box">
        <h1>Just create your image here</h1>
      </div>
      <div className="form-box">
        <input autocomplete="off" type="text" placeholder="Name" />
        <input autocomplete="off" type="text" placeholder="Description" />
        <input autocomplete="off" type="text" placeholder="Image" />
      </div>
      <div className="create-btns">
        <button onClick={() => navigate("/")}>Create</button>
        <button onClick={() => navigate("/")}>Cancel</button>
      </div>
    </div>
  );
};

export default Create;
