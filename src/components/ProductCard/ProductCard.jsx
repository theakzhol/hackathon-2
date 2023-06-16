import React from "react";
import "../Home/home.css";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ item }) => {
  const navigete = useNavigate();
  return (
    <div onClick={() => navigete("/deteils/" + item.id)}>
      <img
        src={item.image}
        alt="error-img"
        key={item.id}
        className="imgNavigate"
      />
    </div>
  );
};

export default ProductCard;
