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

 

  

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox  />
      <ContactList />
    </div>
  );
};

export default App;
