import Contact from "../contact/Contact";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";
import { selectContacts } from "../redux/selectContacts";

export default function ContactList() {
  const contacts = useSelector(selectContacts);
  const contactList = contacts.map(({ name, phoneNumber, id }) => (
    <li key={id} className={css.listItem}>
      <Contact name={name} phoneNumber={phoneNumber} id={id} />
    </li>
  ));
  return <ul className={css.list}>{contactList}</ul>;
}
