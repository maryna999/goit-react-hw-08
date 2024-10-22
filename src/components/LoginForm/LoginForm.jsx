import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { login } from "../../redux/auth/operations";
import s from "./LoginForm.module.css";

export default function LoginForm() {
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .min(4, "Too Short!")
      .max(30, "Too Long!")
      .required("Required")
      .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "Enter a valid email"
      ),
    password: Yup.string()
      .min(6, "Too Short!")
      .max(20, "Too Long!")
      .required("Required"),
  });

  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    dispatch(login(values));
  };

  return (
    <div className={s.loginForm}>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        className={s.form}
      >
        {({ isValid, values }) => (
          <Form>
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
              disabled={!isValid || !values.email || !values.password}
            >
              Add
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
