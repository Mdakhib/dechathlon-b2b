import React from 'react';
import BenifitsCard from "../BenifitsContainer/BenifitsCard";
import BillingCardDetails from '../BillingCardDEtails/BillingCardDetails';
import "../CompanyDetails/comapanyDetail.css";


const BillingCardContainer = () => {
    return (
        <>
            <div className="companyDetailContainer">
                <BillingCardDetails />
                <BenifitsCard />
            </div>
        </>
    );
};

export default BillingCardContainer;