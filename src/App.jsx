import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
// import { useEffect, useState } from "react";
// import initialContacts from "../initialContacts.json";
// import { nanoid } from "nanoid";
// import { useSelector } from "react-redux";
// import { selectContacts } from "./redux/contactsSlice";
// import { selectNameFilter } from "./redux/filtersSlice";

// const getVisibleContacts = (contacts, filters) => {
//   return contacts.filter((contact) =>
//     contact.name.toLowerCase().includes(filters.toLowerCase())
//   );
// };

function App() {
  // const contacts = useSelector(selectContacts);
  // const filters = useSelector(selectNameFilter);
  // const visibleContacts = getVisibleContacts(contacts, filters);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}

export default App;
