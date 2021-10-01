import React from "react";
import BenifitsCard from "../BenifitsContainer/BenifitsCard";
import ComapnyCard from "./ComapnyCard";
import './comapanyDetail.css'

const CompanyDetail = () => {
  return (
    <>
      <div className="companyDetailContainer">
        <ComapnyCard />
        <BenifitsCard />
      </div>
    </>
  );
};

export default CompanyDetail;
