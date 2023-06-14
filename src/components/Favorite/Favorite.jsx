import React from "react";
import "./favorite.css";

const Favorite = () => {
  return (
    <div className="favorite-box">
      <div className="title-box">
        <h1>Your favorite images here</h1>
      </div>
      <div className="text-box">
        <p>filter</p>
        <p>search</p>
      </div>
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
      </div>
    </div>
  );
};

export default Favorite;
