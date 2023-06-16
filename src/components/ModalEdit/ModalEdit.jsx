import React, { useEffect, useState } from "react";
import "./ModalEdit.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  editPictures,
  getOnePicture,
} from "../../store/pictures/picturesActions";

const ModalEdit = ({ handleChange }) => {
  const [name, setName] = useState("");
  const [descr, setDescr] = useState("");
  const [image, setImage] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { id } = useParams();
  const { pictureDetails } = useSelector((state) => state.pictures);

  useEffect(() => {
    dispatch(getOnePicture(id));
  }, [id]);

  const handleModalChange = () => {
    handleChange(false);
  };

  useEffect(() => {
    setName(pictureDetails.name);
    setDescr(pictureDetails.descr);
    setImage(pictureDetails.image);
  }, [pictureDetails]);

  function handleEdit() {
    if (!name.trim() || !descr.trim() || !image.trim()) {
      alert("Заполните Поля!");
    } else {
      const editObj = {
        name,
        descr,
        image,
        id: pictureDetails.id,
      };
      dispatch(editPictures(editObj));

      setName("");
      setDescr("");
      setImage("");
    }
    navigate("/");
  }

  return (
    <>
      <div className="modal-box">
        <p>Edit</p>
        <form>
          <div className="edit-box">
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Description"
              value={descr}
              onChange={(e) => setDescr(e.target.value)}
            />
            <input
              type="text"
              placeholder="Description"
              value={image}
              onChange={(e) => setDescr(e.target.value)}
            />
          </div>
          <div className="modal-btns">
            <button onClick={() => handleEdit()}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Save
            </button>
            <button onClick={handleModalChange}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Cancel
            </button>
          </div>
        </form>
      </div>
      {/* <div className="main">
        <div className="mainBody">
          <div className="inputBody">
            <input
              type="text"
              placeholder="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              placeholder="descr"
              value={descr}
              onChange={(e) => setDescr(e.target.value)}
            />
            <input
              type="text"
              placeholder="image"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
            <div className="buttonBlock">
              <button onClick={() => handleEdit()}>Save</button>
              <button onClick={handleChange}>Close</button>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default ModalEdit;
