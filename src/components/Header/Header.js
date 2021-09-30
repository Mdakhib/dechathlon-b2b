import React from "react";
import Hamburger from "./Hamburger";
import "./header.css";
import { SearchOutlined } from "@material-ui/icons";
import HeaderIconContent from "./HeaderIconContent";

const Header = () => {
  return (
    <>
      <div className="headerContainer">
        <div className="headerContainerWrap">
          <Hamburger />
          <div className="headerContainerInputWrap">
            <div className="inputWrap">
              <input
                type="text"
                placeholder="Search 70 sports and 5000 products"
              />
              <div className="searchIcon">
                <SearchOutlined />
              </div>
            </div>
            <HeaderIconContent />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
