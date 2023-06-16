import React from "react";
import "./search.css";

const Search = () => {
  return (
    <div className="container-search">
      <div className="search-box">
        <input
          type="text"
          placeholder="Search new inspiration"
          className="search-inp"
        />
      </div>
      <div className="rectangle-search">
        <p>Popular images</p>
      </div>
    </div>
  );
};

export default Search;
