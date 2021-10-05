import { Star } from "@material-ui/icons";
import React from "react";
import { cardDescription } from "../../assets/data/cardDescription";
import "./productCard.css";

const ProductCard = () => {
  return (
    <>
      {cardDescription.map((item) => {
        const { id, img, price, title, mrp, rating } = item;
        return (
          <div key={id} className="productItemWrap">
            <div className="productImgWrap">
              <img src={img} alt="" />
            </div>
            <div className="productCardContent">
              <div className="productPriceWrapper">
                <div className="productPriceWrap">
                  <p className="productDiscountPrice"> ₹ {price} </p>
                  <p className="productMrpPrice">{mrp} </p>
                </div>
                <p className="productTitle"> {title} </p>
              </div>
              <div className="productRatingWrap">
                <p>{rating} </p>
                <Star />
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ProductCard;
