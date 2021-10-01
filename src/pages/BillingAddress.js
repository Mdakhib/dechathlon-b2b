import React from 'react';
import BillingCardContainer from '../components/BillingCardDEtails/BillingCardContainer';
import BillingAddressContainer from '../components/CheckedContainer/BillingAddressContainer';

const BillingAddress = () => {
    return (
        <>
            <BillingAddressContainer />
            <BillingCardContainer/>
        </>
    );
};

export default BillingAddress;