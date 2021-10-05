import {
  CompareArrowsOutlined,
  KeyboardArrowDownOutlined,
} from "@material-ui/icons";
import React from "react";
import ProductCard from "./ProductCard";

const ProductsContainer = () => {
  return (
    <div className="productContainer">
      <div className="productHeaderContainer">
        <div className="productHeaderContentWrap1">
          <div className="productContent1">
            <p>GENDER</p>
            <KeyboardArrowDownOutlined />
          </div>
          <div className="productContent2">
            <p>SIZE</p>
            <KeyboardArrowDownOutlined />
          </div>
        </div>
        <div className="productHeaderContentWrap2">
          <div className="productContent3">
            <CompareArrowsOutlined />
            <p>SORT BY</p>
          </div>
          <div className="productContent4">
            <p>MOST RELAVENT</p>
            <KeyboardArrowDownOutlined />
          </div>
        </div>
      </div>
      <div className="productItemContainer">
        <ProductCard />
      </div>
    </div>
  );
};

export default ProductsContainer;
