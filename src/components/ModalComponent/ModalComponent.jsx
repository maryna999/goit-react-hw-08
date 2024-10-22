import Modal from "react-modal";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Button } from "@mui/material";
import s from "./ModalComponent.module.css";

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

export default function ModalComponent({
  isOpen,
  onRequestClose,
  userData,
  onSubmit,
}) {
  return (
    <Modal
      className={s.modal}
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      ariaHideApp={false}
    >
      <Formik
        initialValues={{
          name: userData?.name || "",
          phone: userData?.number || "",
        }}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ isValid }) => (
          <Form className={s.modalForm}>
            <label className={s.modalLabel}>
              Name
              <Field
                className={s.modalInput}
                name="name"
                type="text"
                placeholder="Name"
              />
              <ErrorMessage name="name" component="div" className={s.error} />
            </label>
            <label className={s.modalLabel}>
              Number
              <Field
                className={s.modalInput}
                name="phone"
                type="text"
                placeholder="Phone"
              />
              <ErrorMessage name="phone" component="div" className={s.error} />
            </label>
            <Button
              className={s.modalBtn}
              disabled={!isValid}
              type="submit"
              color="success"
            >
              Change
            </Button>
          </Form>
        )}
      </Formik>
    </Modal>
  );
}
