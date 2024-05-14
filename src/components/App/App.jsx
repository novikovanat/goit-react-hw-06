import { useState, useEffect } from "react";
import { nanoid } from "nanoid";

import ContactForm from "../contactForm/ContactForm";
import SearchBox from "../searchBox/SearchBox";
import ContactList from "../contactList/ContactList";
import testData from "../testData.json";
import css from "./App.module.css";

const App = () => {
  const [searchFilter, setSearchFilter] = useState("");
  const [userContacts, setUserContacts] = useState(() => {
    const contacts = window.localStorage.getItem("contacts");

    if (contacts !== null) {
      return JSON.parse(contacts);
    }

    return testData;
  });

  useEffect(() => {
    window.localStorage.setItem("contacts", JSON.stringify(userContacts));
  }, [userContacts]);

  const shownContacts = userContacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchFilter.toLowerCase())
  );

  function handleSubmit(newContact, actions) {
    newContact.id = nanoid(6);
    setUserContacts((allContacts) => [...allContacts, newContact]);
    actions.resetForm();
  }

  function handleDelete(contactId) {
    setUserContacts((shownContacts) => {
      return shownContacts.filter((contact) => contact.id !== contactId);
    });
  }

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm handleSubmit={handleSubmit} />
      <SearchBox value={searchFilter} onSearch={setSearchFilter} />
      <ContactList contacts={shownContacts} onDelete={handleDelete} />
    </div>
  );
};

export default App;
