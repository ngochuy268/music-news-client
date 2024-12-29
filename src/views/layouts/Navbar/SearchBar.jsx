import React from 'react';
import '../../../css/style.css';

const SearchBar = ({  searchValue, handleInputChange, handleSearch }) => {
  return (
    <div className="search-container">
      <form className="search-form" onSubmit={handleSearch}>
        <input
          type="text"
          className="form-control"
          placeholder="Find music..."
          value={searchValue}
          onChange={handleInputChange}
        />
        <button type="submit" className="btn btn-search">
          <i className="fa fa-search"></i>
        </button>
      </form>
    </div>
  );
};

export default SearchBar;