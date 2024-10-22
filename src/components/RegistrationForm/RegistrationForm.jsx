import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { register } from "../../redux/auth/operations";
import s from "./RegistrationForm.module.css";

export default function RegistrationForm() {
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Too Short!")
      .max(15, "Too Long!")
      .required("Required")
      .matches(/^[A-Za-z\s]+$/, "Name can only contain english letters"),
    email: Yup.string()
      .min(4, "Too short!")
      .max(30, "Too Long!")
      .required("Required")
      .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "Enter a valid email"
      ),
    password: Yup.string()
      .min(7, "Type more than 7 symbols!")
      .max(20, "Too Long!")
      .required("Required"),
  });

  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    dispatch(register(values));
  };

  return (
    <div className={s.registrationForm}>
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        className={s.form}
      >
        {({ isValid, values }) => (
          <Form>
            <label className={s.label} htmlFor="username">
              Name
              <Field
                className={s.input}
                id="username"
                type="text"
                name="name"
              />
              <ErrorMessage name="name" component="div" />
            </label>

            <label className={s.label} htmlFor="email">
              Email
              <Field className={s.input} id="email" type="text" name="email" />
              <ErrorMessage name="email" component="div" />
            </label>

            <label className={s.label} htmlFor="password">
              Password
              <Field
                className={s.input}
                id="password"
                type="password"
                name="password"
              />
              <ErrorMessage name="password" component="div" />
            </label>

            <button
              className={s.btn}
              type="submit"
              disabled={
                !isValid || !values.name || !values.email || !values.password
              }
            >
              Sign Up
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
