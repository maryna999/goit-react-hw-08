import { Formik, Field, Form, ErrorMessage } from "formik";
import { nanoid } from "nanoid";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
import s from "./ContactForm.module.css";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(25, "Too Long!")
    .required("Required")
    .matches(/^[A-Za-z\s]+$/, "Name can only contain english letters"),
  phone: Yup.string()
    .min(4, "Too Short!")
    .max(15, "Too Long!")
    .required("Required")
    .matches(/^[+\d\s]+$/, "Phone must be a number"),
});

const nameId = nanoid();
const phoneId = nanoid();

export default function ContactForm() {
  const dispatch = useDispatch();
  const handleSubmit = (values, { resetForm }) => {
    const newContact = {
      name: values.name.trim(),
      number: values.phone.trim(),
    };
    dispatch(addContact(newContact));

    resetForm();
  };

  return (
    <div className={s.contactForm}>
      <Formik
        initialValues={{ name: "", phone: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isValid, values }) => (
          <Form className={s.form}>
            <label className={s.label} htmlFor={nameId}>
              Name
              <Field className={s.input} id={nameId} type="text" name="name" />
              <ErrorMessage name="name" component="div" />
            </label>

            <label className={s.label} htmlFor={phoneId}>
              Phone
              <Field
                className={s.input}
                id={phoneId}
                type="text"
                name="phone"
              />
              <ErrorMessage name="phone" component="div" />
            </label>

            <button
              className={s.btn}
              type="submit"
              disabled={!isValid || !values.name || !values.phone}
            >
              Add
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
