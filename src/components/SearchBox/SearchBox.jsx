import { useState } from "react";
import { changeFilter } from "../../redux/filters/slice";
import { useDispatch } from "react-redux";
import s from "./SearchBox.module.css";

export default function SearchBox() {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    dispatch(changeFilter(newValue));
    localStorage.setItem("filter-value", newValue);
  };

  const [inputValue, setInputValue] = useState(
    localStorage.getItem("filter-value") || ""
  );

  return (
    <div className={s.searchBox}>
      <label className={s.label} htmlFor="search">
        Search Your Contacts
        <input
          className={s.input}
          placeholder="Filter your Contacts..."
          onChange={handleChange}
          type="text"
          id="search"
          value={inputValue}
        />
      </label>
    </div>
  );
}
