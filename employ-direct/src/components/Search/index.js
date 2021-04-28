import React from "react";


function Search () {
    return (
        <div className="search">
        <form className="form-inline">
          <input
            className="form-control"
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={e => handleSearch(e)}
          />
        </form>
      </div>
    )
}

export default Search;