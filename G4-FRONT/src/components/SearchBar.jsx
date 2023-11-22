import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import productos from "../data/products.json";

import "./SearchBar.css";

export const SearchBar = ({ setResults }) => {
  const [input, setInput] = useState("");

  const fetchData = (value) => {
    // fetch("http://localhost:3000/products.json")
    // .then((response) => response.json())
    // .then((json) => {
    const results = productos.filter((user) => {
      return (
        value && user && user.model && user.model.toLowerCase().includes(value)
      );
    });
    setResults(results);
    // });
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <div className="input-wrapper">
      <FaSearch id="search-icon" />
      <input
        placeholder="Buscar producto"
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};
