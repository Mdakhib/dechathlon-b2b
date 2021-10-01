import React from "react";
import BenifitsCard from "../BenifitsContainer/BenifitsCard";
import "../CompanyDetails/comapanyDetail.css";
import UploadCardDetail from "./UploadCardDetail";

export default function UploadCardContainer() {
  return (
    <div className="companyDetailContainer">
      <UploadCardDetail />
      <BenifitsCard />
    </div>
  );
}
