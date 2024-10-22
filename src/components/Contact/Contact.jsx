import { FaUser } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { deleteContact, changeContact } from "../../redux/contacts/operations";
import { useDispatch } from "react-redux";
import { Button } from "@mui/material";
import { useState } from "react";
import ModalComponent from "../ModalComponent/ModalComponent";
import s from "./Contact.module.css";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(25, "Too Long!")
    .required("Required")
    .matches(/^[A-Za-z\s]+$/, "Name can only contain English letters"),
  phone: Yup.string()
    .min(4, "Too Short!")
    .max(15, "Too Long!")
    .required("Required")
    .matches(/^[+\d\s]+$/, "Phone must be a number"),
});

export default function Contact({ userData }) {
  const [openModal, setOpenModal] = useState(false);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  const handleSubmit = (id, values) => {
    const changedContact = {
      id: id,
      name: values.name.trim(),
      number: values.phone.trim(),
    };
    dispatch(changeContact(changedContact));
    handleClose();
  };

  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);

  return (
    <li className={s.list}>
      <ul className={s.svg}>
        <li className={s.item}>
          <FaUser size="16" />
          <p className={s.user}>{userData.name}</p>
        </li>
        <li className={s.item}>
          <BsFillTelephoneFill size="16" />
          <p className={s.user}>{userData.number}</p>
        </li>
      </ul>
      <div className={s.btns}>
        <Button
          className={s.change}
          onClick={handleOpen}
          variant="outlined"
          color="success"
        >
          Change
        </Button>
        <Button
          className={s.delete}
          onClick={() => handleDelete(userData.id)}
          variant="outlined"
          color="error"
        >
          Delete
        </Button>
      </div>
      <ModalComponent
        isOpen={openModal}
        onClose={handleClose}
        userData={userData}
        handleSubmit={handleSubmit}
        validationSchema={validationSchema}
        onSubmit={(values) => handleSubmit(userData.id, values)}
      />
    </li>
  );
}
