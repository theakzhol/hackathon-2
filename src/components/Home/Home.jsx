import React, { useEffect } from "react";
import "./home.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getPictures } from "../../store/pictures/picturesActions";

const Home = () => {
  const { pictures } = useSelector((state) => state.pictures);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  console.log(1);

  useEffect(() => {
    dispatch(getPictures());
  }, []);

  console.log(1);

  return (
    <div className="home-box">
      <div className="img-box">
        {pictures.map((item) => (
          <img
            src={item.image}
            alt="error-img"
            key={item.id}
            onClick={() => navigate("/details/" + item.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
