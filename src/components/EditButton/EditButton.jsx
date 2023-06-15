import React, { useState } from "react";
import "./EditButton.css";
import ModalEdit from "../ModalEdit/ModalEdit";

const EditButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(!isOpen);
  };

  const handleChange = (value) => {
    setIsOpen(value)
  }

  return (
    <>
      <button onClick={openModal}>Edit</button>

      <div>{isOpen ? <ModalEdit onChange={handleChange}/> : ""}</div>
    </>
  );
};

export default EditButton;
