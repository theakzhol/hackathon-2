import React, { useEffect } from "react";
import "../Home/home.css";
import { useDispatch, useSelector } from "react-redux";
import { getPictures } from "../../store/pictures/picturesActions";
import { useNavigate } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";
import "../Favorite/favorite.css";

const ProductList = () => {
  const { pictures } = useSelector((state) => state.pictures);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPictures());
  }, []);
  const naviget = useNavigate();

  return (
    <div className="img-box">
      {pictures.map((item) => (
        <ProductCard item={item} key={item.id} />
      ))}
    </div>
  );
};

export default ProductList;
