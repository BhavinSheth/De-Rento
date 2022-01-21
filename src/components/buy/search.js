import React from "react";
import { BiSearch } from "react-icons/bi";

import "./search.css";
function Search() {
  return (
    <div className="search">
      <form className="search-bar">
        <BiSearch className="search-icon" />
        <input
          type="text"
          name="search"
          className="search-area"
          placeholder="i.e mouse"
        />
      </form>
    </div>
  );
}

export default Search;
