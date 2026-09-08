import React from "react";

function Search({ onSearch }) {
  // Send the search text to the parent component whenever it changes.
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={(event) => onSearch(event.target.value)}
      />
    </div>
  );
}

export default Search;