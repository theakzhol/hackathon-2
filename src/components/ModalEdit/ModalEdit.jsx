import React, { useEffect, useState } from "react";
import "./ModalEdit.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  editPictures,
  getOnePicture,
  getPictures,
} from "../../store/pictures/picturesActions";

const ModalEdit = ({ handleChange, openSidebar }) => {
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

  async function handleEdit() {
    if (!name.trim() || !descr.trim() || !image.trim()) {
      alert("Заполните Поля!");
      return;
    }
<<<<<<< HEAD

=======
>>>>>>> a305771446e510ccaf3a91176afec3dbde46d2e7
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

<<<<<<< HEAD
    navigate(`/details/${editObj.id}`);
    openSidebar();
    handleChange();
=======
    navigate("/");
>>>>>>> a305771446e510ccaf3a91176afec3dbde46d2e7
  }
  useEffect(() => {
    dispatch(getPictures());

    console.log(1);
  }, []);



  return (
    <>
      <div className="modal-box">
        <p>Edit</p>
        <div className="form">
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
            <button onClick={handleEdit}>
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
        </div>
      </div>
    </>
  );
};

export default ModalEdit;
