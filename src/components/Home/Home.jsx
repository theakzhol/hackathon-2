import React from "react";
import "./home.css";
import { useSelector } from "react-redux";
import { ADMIN } from "../../helpers/consts";

const Home = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <div className="home-box">
      <br />
      <h1>Home</h1>
      {user === ADMIN && <p>Welcome {user}</p>}
      <br />
      <br />
      <br />
      <div className="img-box">
        <img
          src="https://dr.savee-cdn.com/things/thumbnails/6/4/877aa318a58514ac7e9886.webp"
          alt="error-img"
        />
        <img
          src="https://dr.savee-cdn.com/things/thumbnails/6/4/877aa318a58514ac7e9886.webp"
          alt="error-img"
        />
        <img
          src="https://dr.savee-cdn.com/things/thumbnails/6/4/877aa318a58514ac7e9886.webp"
          alt="error-img"
        />
        <img
          src="https://dr.savee-cdn.com/things/thumbnails/6/4/877aa318a58514ac7e9886.webp"
          alt="error-img"
        />
        <img
          src="https://dr.savee-cdn.com/things/thumbnails/6/4/877aa318a58514ac7e9886.webp"
          alt="error-img"
        />
        <img
          src="https://dr.savee-cdn.com/things/thumbnails/6/4/877aa318a58514ac7e9886.webp"
          alt="error-img"
        />
      </div>
    </div>
  );
};

export default Home;
