// src/components/widgets/Search.js

import React from 'react';

const Search = ({ searchTerm, onSearchChange }) => {
  return (
    <div className="w-full max-w-md mx-auto mb-8">
      <input
        type="text"
        placeholder="Search stories..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default Search;
