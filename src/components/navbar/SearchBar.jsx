import React from "react";
import { useState } from "react";

const products = [
  "iphone 15",
  "samsung tv",
  "nike shoes",
  "laptop",
  "gaming mouse",
];

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestion] = useState([]);

  const handleSearch = (value) => {
    setQuery(value);
    const filterd = products.filter((item) =>
      item.toLowerCase().includes(value.toLowerCase()),
    );

    setSuggestion(filterd);
  };
  const handleSelect = (value) => {
    setQuery(value);
    setSuggestion([]);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search Products..."
        value={query}
        onChange={(e) => handleSearch(e.target.value)}
        className="search-input"
      />
      {suggestions.length > 0 && (
        <ul className="suggestion-list">
          {suggestions.map((item, index) => (
            <li
              key={index}
              onClick={() => handleSelect(item)}
              className="suggestion-item"
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
