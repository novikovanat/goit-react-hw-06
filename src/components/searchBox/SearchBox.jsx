import css from "./SearchBox.module.css";
export default function SearchBox({ value, onSearch }) {
  return (
    <label className={css.flex}>
      Find contacts by name
      <input
        name="search"
        value={value}
        onInput={(event) => onSearch(event.target.value)}
      ></input>
    </label>
  );
}
