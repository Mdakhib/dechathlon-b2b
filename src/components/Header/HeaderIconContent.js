import {
  AccountCircleOutlined,
  LiveHelpOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import React from "react";
import { IoStorefrontOutline } from "react-icons/io5";

const HeaderIconContent = () => {
  return (
    <>
      <div className="iconContainer">
        <div className="iconContentWrap">
          <div className="iconWrap">
            <AccountCircleOutlined />
          </div>
          <p>Account</p>
        </div>
        <div className="iconContentWrap">
          <div className="iconWrap">
            <IoStorefrontOutline />
          </div>
          <p>Stores</p>
        </div>
        <div className="iconContentWrap">
          <div className="iconWrap">
            <LiveHelpOutlined />
          </div>
          <p>Help</p>
        </div>
        <div className="iconContentWrap">
          <div className="iconWrap">
            <ShoppingCartOutlined />
          </div>
          <p>My Cart</p>
        </div>
        <div className="iconContentWrap iconForTab">
          <div className="iconWrap">
            <AccountCircleOutlined />
          </div>
          <p>Account</p>
        </div>
        <div className="iconContentWrap iconForTab">
          <div className="iconWrap">
            <ShoppingCartOutlined />
          </div>
          <p>My Cart</p>
        </div>
      </div>
    </>
  );
};

export default HeaderIconContent;
