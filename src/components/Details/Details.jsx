import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getOnePicture } from "../../store/pictures/picturesActions";
import "./details.css";
import "./detailsSidebar";
import { VscChromeClose } from "react-icons/vsc";
import EditButton from "../EditButton/EditButton";

const Details = () => {
  const { pictureDetails } = useSelector((state) => state.pictures);
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getOnePicture(id));
  }, [id]);

  const [isOpen, setIsOpen] = useState(false);

  const openSidebar = () => {
    setIsOpen(!isOpen);
    setSidebarStyle((prev) => !prev);
  };

  const [sidebarStyle, setSidebarStyle] = useState(false);

  return (
    <>
      <div className={`${sidebarStyle ? "details-nav-active" : "details-nav"}`}>
        <p>Details</p>
        <div className="details-item">
          <button className="details-save">SAVE</button>
          <button className="details-sidebar-open" onClick={openSidebar}>
            SHOW SIDEBAR
          </button>
          <div className="details-close" onClick={() => navigate("/")}>
            <VscChromeClose />
          </div>
        </div>
      </div>
      <div className="details-box">
        <div className="details-box-img">
          <div
            className={`${
              sidebarStyle ? "details-img-active" : "details-img-noactive"
            }`}
          >
            <img src={pictureDetails?.image} alt="error-image" />
          </div>
          {isOpen && (
            <div className="details-sidebar">
              <p>{pictureDetails?.descr}</p>
            </div>
          )}
        </div>
      </div>

      <EditButton />
    </>
  );
};

export default Details;
