import React from "react";
import "./filterItem.css";
import { sportsFilter } from "../../assets/data/filterData";

const FilterItemContainer = () => {
  return (
    <>
      <div className="priceRangeContainer">
        <p className="filterRangeHeader">Price</p>
        <div className="priceInput">
          <input type="range" />
        </div>
        <div className="rangeValue">
          <p className="rangeNumber">99</p>
          <p>To</p>
          <p className="rangeNumber">21999</p>
        </div>
      </div>
      <div className="scrollingFilterRangeContainer">
        <p className="filterRangeHeader">Sport</p>
        <div className="scrollingFilterContentContainer">
          {sportsFilter.map((item) => {
            const { id, name } = item;
            return (
              <div
                
                key={id}
                className="scrollingFilterContentWrap"
              >
                <input type="checkbox" />
                <p>{name} </p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default FilterItemContainer;


// style={{ background:`${bg}` }}