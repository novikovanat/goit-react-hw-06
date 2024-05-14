import Contact from "../contact/Contact";
import css from "./ContactList.module.css"

export default function ContactList({ contacts, onDelete }) {
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
