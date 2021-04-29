import React from "react";
import "../Search/style.css";



function Search (props) {
    return (
        <div className="search">
        <form className="form-inline">
          <input
            className="form-control"
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={e => props.handleSearch(e)}
          />
        </form>
      </div>
    )
}

export default Search;