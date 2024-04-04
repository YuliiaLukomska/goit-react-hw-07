import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";
import { nanoid } from "nanoid";

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long")
    .required("Required"),
  number: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long")
    .required("Required"),
});

const initialValues = {
  name: "",
  number: "",
};

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (data, formActions) => {
    const finalNewContact = {
      ...data,
      id: nanoid(),
    };
    /* в dispatch передаємо action-creator (який ми отримали зі слайсу), аргументом якого буде payload. 
    Цей action-creator повертає об'єкт-інструкції.
    Dispatch доставляє наш об'єкт-інструкції (action) до стору і до редюсерів(contactsSlice.js). Відповідний редюсер виконується і оновлює стан.
    Поточний стан зберігається в store.js */
    dispatch(addContact(finalNewContact));

    formActions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.formWrapper}>
        <label className={css.formLabel}>
          Name
          <Field name="name" type="text" />
          <ErrorMessage name="name" component="span" className={css.error} />
        </label>
        <label className={css.formLabel}>
          Number
          <Field name="number" type="text" />
          <ErrorMessage name="number" component="span" className={css.error} />
        </label>

        <button className={css.formBtn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
