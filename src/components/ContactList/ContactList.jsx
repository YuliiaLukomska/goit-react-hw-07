import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { selectContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";

const getVisibleContacts = (contacts, filters) => {
  return contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filters.toLowerCase())
  );
};

const ContactList = () => {
  const contacts = useSelector(selectContacts);

  const filters = useSelector(selectNameFilter);
  /* при введені слова-фільтру в SearchBox, властивість contacts стану нашого додатка не змінюється, там як було н-д три контакти 
  так і залишається, ми просто фільтруємо ці контакти за властивість contact.name і виводимо на екран вже відфільтрований 
  список (бо саме його ми використовуємо для створення списку). */
  const visibleContacts = getVisibleContacts(contacts, filters);

  return (
    <ul className={css.contactListWrapper}>
      {visibleContacts !== null &&
        visibleContacts.map((contact) => (
          <li key={contact.id}>
            <Contact data={contact} />
          </li>
        ))}
    </ul>
  );
};

export default ContactList;
