import Contact from "../contact/Contact";
import css from "./ContactList.module.css"
import { useSelector } from "react-redux";

export default function ContactList({ contacts, onDelete }) {
  // const contactsStore = useSelector(state => state.some.items);
  // console.log(contactsStore)

  const contactList = contacts.map(({ name, phoneNumber, id }) => (
    <Contact
      name={name}
      phoneNumber={phoneNumber}
      key={id}
      id={id}
      onDelete={onDelete}
    />
  ));
  return <ul className={css.list}>{contactList}</ul>;
}
