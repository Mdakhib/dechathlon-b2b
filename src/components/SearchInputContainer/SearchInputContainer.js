import React from "react";
import FilterContainer from "./FilterContainer";
import ProductsContainer from "./ProductsContainer";
import "./searchInputContainer.css";

const SearchInputContainer = () => {
  return (
    <div className="searchInputContainer">
      <FilterContainer />
      <ProductsContainer />
    </div>
  );
};

export default SearchInputContainer;
