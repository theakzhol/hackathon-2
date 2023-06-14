import React, { useEffect } from "react";
import "./home.css";
import { useDispatch, useSelector } from "react-redux";
import { getPictures } from "../../store/pictures/picturesActions";
import { useNavigate } from "react-router-dom";
import ProductList from "../ProductList/ProducList";

const Home = () => {
  const { pictures } = useSelector((state) => state.pictures);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPictures());
  }, []);
  const naviget = useNavigate();

  return (
    <div className="home-box">
      <br />
      <h1>Home</h1>
      <br />
      <br />
      <br />
      <ProductList />
    </div>
  );
};

export default Home;
