import {
  AnnouncementOutlined,
  LocalShippingOutlined,
  VerifiedUserOutlined,
} from "@material-ui/icons";
import React from "react";
import "./benifits.css";

const BenifitsCard = () => {
  return (
    <>
      <div className="benifitsCardContainer">
        <div className="benifirCardWrap">
          <p className='benefitHeader'>
            Benefits of <br />
            <span>Registering With Us</span>
          </p>
          <div className="benefitCardIconContainer">
            <div className="benefitCardIconWrap">
              <VerifiedUserOutlined />
              <p className="cardContent1">Minimum</p>
              <p className="cardContent2">2 years warranty</p>
            </div>{" "}
            <div className="benefitCardIconWrap">
              <LocalShippingOutlined />
              <p className="cardContent2">Free Shipping</p>
              <p className="cardContent1">on over 5000 products</p>
            </div>{" "}
            <div className="benefitCardIconWrap">
              <AnnouncementOutlined />
              <p className="cardContent2">GST Input Invoice for</p>
              <p className="cardContent1">tax credit</p>
            </div>{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default BenifitsCard;
