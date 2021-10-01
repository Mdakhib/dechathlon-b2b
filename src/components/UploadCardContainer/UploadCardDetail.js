import React from "react";
import { Link } from "react-router-dom";
import "../CompanyDetails/comapanyDetail.css";

const UploadCardDetail = () => {
  return (
    <>
      <div className="cardUploadInputContainer">
        <h1>Upload documents</h1>
        <p className="cardUploadHeader">
          Please upload document with Catalog Details
        </p>
        <div className="uploadContentWrap">
          <p className="uploadContent">
            - Company ID Proof (Incorporation Certificate, Partnership Deed,
            Defence Certificate, etc)
          </p>
          <button className="uploadInput " type="submit">
            UPLOAD
          </button>
        </div>
        <div className="uploadContentWrap">
          <p className="uploadContent">- GST Certificate</p>
          <button className="uploadInput " type="submit">
            UPLOAD
          </button>
        </div>
        <div className="uploadContentWrap">
          <p className="uploadContent">- Letter of Undertaking</p>
          <button className="uploadInput " type="submit">
            UPLOAD
          </button>
        </div>
        <div className="uploadContentWrap">
          <p className="uploadContent">- Company PAN</p>
          <button className="uploadInput " type="submit">
            UPLOAD
          </button>
        </div>
        <p className="uploadFormat">- Maximum document size should be 2 MB</p>
        <p className="uploadFormat">- Format JPG, PDF or PNG</p>
        <p style={{ fontWeight: "700", paddingTop: "25px",fontSize:'16px' }}>
          Click here to view terms and conditions
        </p>
        <div className="termsConditionWrap">
          <p>I accept the terms and conditions </p>
          <input type="checkbox" />
        </div>
        <div className="cardSubmitBtnWrap">
          <Link to="/">
            <button type="submit">Submit</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default UploadCardDetail;
