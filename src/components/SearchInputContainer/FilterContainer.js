import { SettingsInputComponentOutlined } from "@material-ui/icons";
import React from "react";
import FilterItemContainer from "./FilterItemContainer";

const FilterContainer = () => {
  return (
    <>
      <div className="filterContainer">
        <div className="filterHeaderContainer">
          <p>FILTERS</p>
          <SettingsInputComponentOutlined />
        </div>
        <div className="filterItemContainer">
          <FilterItemContainer />
        </div>
      </div>
    </>
  );
};

export default FilterContainer;
