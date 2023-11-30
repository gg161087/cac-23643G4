import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";

import { getDinamic } from "./../utils/getDinamic.js";
import "./SearchBar.css";

export const SearchBar = ({ setResults }) => {
  const [input, setInput] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const response = await getDinamic("data/products.json");
      setProducts(response);
    };
    getProducts();
  }, []);

  const fetchData = (value) => {
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
      <FaSearch className="search-icon" />
      <input
        placeholder="Buscar producto"
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};
