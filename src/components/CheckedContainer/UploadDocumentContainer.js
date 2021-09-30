import { CheckCircleOutline, RadioButtonUncheckedOutlined } from '@material-ui/icons';
import React from 'react';
import './checkedContainer.css';

const CompanyDetails = () => {
    return (
      <>
        <div className="deatilContainer">
          <div className="detailWrapper">
            <div className="detailContentWrap">
              <p className="detailchecked detailTitle">Contact Details</p>
              <div className="iconWrap">
                <CheckCircleOutline className="detailcheckedIcon detailIcon" />
              </div>
            </div>
            <div className="detailLine">
              <p>- - - - </p>
            </div>
            <div className="detailContentWrap">
              <p className=" detailTitle">Billing Address</p>
              <div className="iconWrap">
                <CheckCircleOutline className="detailcheckedIcon detailIcon" />
              </div>
            </div>
            <div className="detailLine">
              <p>- - - - </p>
            </div>
            <div className="detailContentWrap">
              <p className=" detailTitle">Shipping Address</p>
              <div className="iconWrap">
                <CheckCircleOutline className="detailcheckedIcon detailIcon" />
              </div>
            </div>
            <div className="detailLine">
              <p>- - - - </p>
            </div>
            <div className="detailContentWrap">
              <p className="detailchecked detailTitle">Upload Documents</p>
              <div className="iconWrap">
                <CheckCircleOutline className="detailcheckedIcon detailIcon" />
              </div>
            </div>
          </div>
        </div>
      </>
    );
};

export default CompanyDetails;