import React, { useEffect, useState } from "react";
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
import { RiMenu3Fill, RiCloseFill } from "react-icons/ri";

const Navbar = () => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    dispatch(authFollower());
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 500);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className={`navbar ${isMobile ? "mobile" : ""}`}>
      <div className="container">
        <div className="logo" onClick={() => navigate("/")}>
          SAI <br /> GAK
        </div>
        <div className="menu-container">
          <ul className={`item-menu ${isMenuOpen ? "open" : ""}`}>
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
            {!user && (
              <li
                onClick={() => {
                  navigate("/login");
                  setIsMenuOpen(false); // Закрытие бургер-меню при переходе на страницу логина
                  dispatch(clearInputs());
                }}
              >
                <LuLogIn />
              </li>
            )}
          </ul>
          {user && (
            <ul className="auth-menu">
              <li onClick={() => dispatch(handleLogout(navigate))}>
                <LuLogOut />
              </li>
            </ul>
          )}
        </div>
        {isMobile && (
          <div
            className="burger-icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <RiCloseFill /> : <RiMenu3Fill />}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
