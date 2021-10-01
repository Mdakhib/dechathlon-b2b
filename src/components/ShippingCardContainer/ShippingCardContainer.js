import React from 'react';
import BenifitsCard from "../BenifitsContainer/BenifitsCard";
import ShippingCardDetail from "../ShippingCardContainer/ShippingCardDetail";
import "../CompanyDetails/comapanyDetail.css";


const ShippingCardContainer = () => {
    return (
        <>
            <div className="companyDetailContainer">
                <ShippingCardDetail />
                <BenifitsCard />
            </div>
        </>
    );
};

export default ShippingCardContainer;