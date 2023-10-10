// src/components/widgets/Search.js

import React, { useState } from "react";

const Search = ({ items }) => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  // Handle input change
  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    // Filter items based on query
    if (value.length > 0) {
      const filteredSuggestions = items.filter((item) =>
        item.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions.slice(0, 5)); // Limit to top 5 results
    } else {
      setSuggestions([]);
    }
  };

  // Handle suggestion click
  const handleSuggestionClick = (suggestion) => {
    setQuery(suggestion);
    setSuggestions([]);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search stories..."
        className="search-input"
      />
      {suggestions.length > 0 && (
        <ul className="suggestions-list">
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              onClick={() => handleSuggestionClick(suggestion)}
              className="suggestion-item"
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Search;
