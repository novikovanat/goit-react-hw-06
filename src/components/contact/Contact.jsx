import { IoPerson, IoCall } from "react-icons/io5";
import css from "./Contact.module.css";
export default function Contact({ id, name, phoneNumber, onDelete }) {
  return (
    <li key={id} className={css.listItem}>
      <div className={css.contactData}>
        <p>
          <IoPerson className={css.icon} />
          <span>{name}</span>
        </p>
        <p>
          <IoCall className={css.icon} />
          <span>{phoneNumber}</span>
        </p>
      </div>
      <button className={css.button} onClick={() => onDelete(id)}>
        Delete
      </button>
    </li>
  );
}
