import { IoIosSearch } from "react-icons/io";
import css from "./SearchBar.module.css";
import toast, { Toaster } from "react-hot-toast";

const SearchBar = ({ onSubmit }) => {
  const emptySearchError = () =>
    toast.error("Search field cannot be empty", {
      position: "top-right",
    });

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.elements.query.value.trim() === "") {
      emptySearchError();
      form.reset();
      return;
    }
    onSubmit(form.elements.query.value);
    form.reset();
  };

  return (
    <header className={css.header}>
      <form onSubmit={handleSubmit} className={css.searchBar}>
        <div className={css.inputContainer}>
          <button type="submit" className={css.iconButton}>
            <IoIosSearch />
          </button>
          <input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="query"
            className={css.searchInput}
          />
        </div>
      </form>
      <Toaster />
    </header>
  );
};

export default SearchBar;
