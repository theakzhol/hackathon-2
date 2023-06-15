import React, { useEffect } from "react";
import "./navbar.css";
import { useNavigate } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { AiOutlineSelect } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { IoIosResize } from "react-icons/io";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { LuLogIn } from "react-icons/lu";
import { LuLogOut } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
import { ADMIN } from "../../helpers/consts";
import { clearInputs } from "../../store/auth/authSlice";
import { authFollower, handleLogout } from "../../store/auth/authActions";

const Navbar = () => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authFollower());
  }, []);

  return (
    <nav>
      <div className="container">
        <ul>
          <li onClick={() => navigate("/")} className="logo">
            SAI <br /> GAK
          </li>
        </ul>
        <ul className="item-menu">
          <li onClick={() => navigate("/search")}>
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
          {user === ADMIN && (
            <li onClick={() => navigate("/create")}>
              <AiOutlinePlus />
            </li>
          )}
          {user ? (
            <li onClick={() => dispatch(handleLogout(navigate))}>
              <LuLogOut />
            </li>
          ) : (
            <li
              onClick={() => {
                navigate("/login");
                dispatch(clearInputs());
              }}
            >
              <LuLogIn />
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
