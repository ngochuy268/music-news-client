import React from 'react';
import '../../../css/style.css';

const SearchBar = ({ searchRef, searchValue, handleInputChange, handleSearch, showResults, searchResults }) => {
  return (
    <div className="search-container" ref={searchRef}>
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
      {showResults && searchResults.length > 0 && (
        <div className="search-results-dropdown">
          {searchResults.map(item => (
            <a 
              href={`/${item.name.toLowerCase().replace(/\s+/g, '-')}`} 
              key={item.id} 
              className="search-result-item"
            >
              <div className="result-info">
                <div className="result-name">{item.name}</div>
                <div className="result-author">{item.author}</div>
              </div>
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;