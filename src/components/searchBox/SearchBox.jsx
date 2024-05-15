import css from "./SearchBox.module.css";
export default function SearchBox({ value, onSearch }) {
  // const filter = useSelector(state => state.filters.status);
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
