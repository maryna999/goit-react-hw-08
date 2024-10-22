import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { updateContact } from "../../redux/contacts/operations";

export const EditContactModal = ({ closeModal, user }) => {
  const dispatch = useDispatch();

  const orderSchema = Yup.object({
    name: Yup.string()
      .min(3, "Minimum 3 characters")
      .max(50, "Maximum 50 characters")
      .required("Must be filled"),
    number: Yup.string()
      .matches(/^\+?[1-9]\d{1,14}$/, "Invalid phone number")
      .min(3, "Minimum 3 digits")
      .max(50, "Maximum 50 digits")
      .required("Must be filled"),
  });

  const handleForm = (values) => {
    dispatch(updateContact({ id: user.id, ...values }));
    closeModal();
  };

  return (
    <div>
      <Formik
        initialValues={{ name: "", number: "" }}
        onSubmit={handleForm}
        validationSchema={orderSchema}
      >
        <Form className="flex flex-col p-7 w-[360px] gap-4 rounded-xl shadow-custom-blue bg-light-blue mb-6 z-10 ">
          <button
            type="button"
            className="p-1 w-8 self-end rounded-full bg-blue font-bold text-light-blue hover:bg-hover-blue"
            onClick={closeModal}
          >
            X
          </button>
          <h3 className="text-center font-bold text-xl">Change Contact</h3>
          <label className="flex flex-col gap-2 font-bold">
            <div className="flex justify-between">
              <p>Name</p>
              <ErrorMessage className="text-red" name="name" component="p" />
            </div>
            <Field
              className="py-2 px-5 h-8 rounded-md border-brand-blue border-2 outline-none focus:border-hover-blue"
              name="name"
            />
          </label>
          <label className="flex flex-col gap-2 font-bold">
            <div className="flex justify-between">
              <p>Number</p>
              <ErrorMessage className="text-red" name="number" component="p" />
            </div>
            <Field
              className="py-2 px-5 h-8 rounded-md border-brand-blue border-2 outline-none focus:border-hover-blue"
              name="number"
            />
          </label>
          <button
            className="py-2 px-5 m-auto font-bold bg-blue text-light-blue rounded-lg transition-all hover:bg-hover-blue"
            type="submit"
          >
            Change
          </button>
        </Form>
      </Formik>
    </div>
  );
};
export default EditContactModal;
