import React from "react";
import "./navbar.css";
import { useNavigate } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { AiOutlineSelect } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { IoIosResize } from "react-icons/io";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { LuLogIn } from "react-icons/lu";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav>
      <div className="container">
        <ul>
          <li onClick={() => navigate("/")} className="logo">
            SAI <br /> GAK
          </li>
        </ul>
        <ul className="item-menu">
          <li>
            <BsSearch />
          </li>
          <li>
            <AiOutlineSelect />
          </li>
          <li>
            <IoIosResize />
          </li>
          <li onClick={() => navigate("/favorite")}>
            <MdOutlineFavoriteBorder />
          </li>
          <li onClick={() => navigate("/create")}>
            <AiOutlinePlus />
          </li>
          <li onClick={() => navigate("/login")}>
            <LuLogIn />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
