import { useRef, useEffect } from "react";
import { useGlobalContext } from "../context";

function SearchForm() {
  const { setSearchTerm } = useGlobalContext();

  const searchRef = useRef("");

  useEffect(() => {
    searchRef.current.focus();
  }, []);

  const searchCocktail = () => {
    setSearchTerm(searchRef.current.value);
  };

  return (
    <section className="section search">
      <form className="search-form" onSubmit={(e) => e.preventDefault()}>
        <div className="form-control">
          <label htmlFor="name">search your favourite cocktail</label>
          <input
            type="text"
            id="name"
            ref={searchRef}
            onChange={searchCocktail}
          />
        </div>
      </form>
    </section>
  );
}

export default SearchForm;
