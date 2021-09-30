import { CheckCircleOutline } from '@material-ui/icons';
import React from 'react';
import './checkedContainer.css';

const CompanyDetails = () => {
    return (
        <>
            <div className="container">
                <div className="containerWrapper">
                    <div className="content">
                        <div className="text">
                            <p>Contact details</p>
                        </div>
                        <div className="icon">
                            <CheckCircleOutline />
                        </div>
                        <div className="lines">
                            --------------------
                        </div>
                    </div>
                    <div className="content">
                        <div className="text">
                            <p>Billing Address</p>
                        </div>
                        <div className="icon">
                            <CheckCircleOutline />
                        </div>
                        <div className="lines">
                            ---------------------
                        </div>
                    </div>
                    <div className="content">
                        <div className="texts">
                            <p>Shipping Address</p>
                        </div>
                        <div className="icons">
                            <CheckCircleOutline />
                        </div>
                        <div className="lines">
                            ---------------------
                        </div>
                    </div>
                    <div className="content">
                        <div className="text">
                            <p>Upload Documents</p>
                        </div>
                        <div className="icon">
                            <CheckCircleOutline />
                        </div>
                    </div>
                </div>


            </div>
        </>
    );
};

export default CompanyDetails;