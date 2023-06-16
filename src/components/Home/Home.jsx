import React, { useEffect } from "react";
import "./home.css";
import { useDispatch, useSelector } from "react-redux";
<<<<<<< HEAD
import { getPictures } from "../../store/pictures/picturesActions";
import { useNavigate } from "react-router-dom";
import ProductList from "../ProductList/ProducList";

const Home = () => {
  const { pictures } = useSelector((state) => state.pictures);
  const dispatch = useDispatch();
=======
import { useNavigate } from "react-router-dom";
import { getPictures } from "../../store/pictures/picturesActions";

const Home = () => {
  const { user } = useSelector((state) => state.auth);
  const { pictures } = useSelector((state) => state.pictures);

  const dispatch = useDispatch();
  const navigate = useNavigate();
>>>>>>> 45fcfb234055e4b35dbf6f7800cecb56d83e41f4

  useEffect(() => {
    dispatch(getPictures());
  }, []);
<<<<<<< HEAD
  const naviget = useNavigate();

  return (
    <div className="home-box">
      <br />
      <h1>Home</h1>
      <br />
      <br />
      <br />
      <ProductList />
=======

  return (
    <div className="home-box">
      <div className="img-box">
        <p>hello</p>
        {pictures.map((item) => (
          <img
            src={item.image}
            alt="error-img"
            key={item.id}
            onClick={() => navigate("/details/" + item.id)}
          />
        ))}
      </div>
>>>>>>> 45fcfb234055e4b35dbf6f7800cecb56d83e41f4
    </div>
  );
};

export default Home;
