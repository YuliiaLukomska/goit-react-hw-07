import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import {
  selectError,
  selectFilteredContacts,
  selectLoading,
} from "../../redux/contactsSlice";

import Loader from "../Loader/Loader";
import Error from "../Error/Error";

const ContactList = () => {
  const visibleContacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);

  return (
    <>
      {isLoading && <Loader />}
      {isError && <Error />}
      <ul className={css.contactListWrapper}>
        {visibleContacts.length > 0 &&
          visibleContacts.map((contact) => (
            <li key={contact.id}>
              <Contact data={contact} />
            </li>
          ))}
      </ul>
    </>
  );
};

export default ContactList;
