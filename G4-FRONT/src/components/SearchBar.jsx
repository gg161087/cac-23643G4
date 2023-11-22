import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import productos from "../data/products.json";

import { getDinamic } from './../utils/getDinamic.js';
import "./SearchBar.css";

export const SearchBar = ({ setResults }) => {

  const [input, setInput] = useState("");

  const fetchData = async (value) => {
    const products = await getDinamic('data/products.json')    
    //se reemplazo productos por products
    const results = products.filter((user) => {
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
