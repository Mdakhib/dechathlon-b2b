/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";

const ComapnyCard = () => {
  return (
    <>
      <div className="cardInputContainer">
        <h1>COMPANY DETAILS</h1>
        <form>
          <div class="floatingLabelGroup">
            <div className="floatingLabelWrap">
              <input type="text" autocomplete="off" autofocus required />
              <label class="floatingLabel">Companay name</label>
            </div>
          </div>
          <div class="floatingLabelGroup">
            <div className="floatingLabelWrap">
              <input type="text" autocomplete="off" autofocus required />
              <label class="floatingLabel">Nature of Business</label>
            </div>
          </div>
          <div class="floatingLabelGroup">
            <div className="floatingLabelWrap">
              <input type="text" autocomplete="off" autofocus required />
              <label class="floatingLabel">
                Companay ID/ Icorporation Number
              </label>
            </div>
          </div>
          <div class="floatingLabelGroup">
            <div className="floatingLabelWrap">
              <input type="text" autocomplete="off" autofocus required />
              <label class="floatingLabel">GST Number</label>
            </div>
          </div>
          <div className="gstWrap">
            <p>Without GST (for Defence, NGO etc) </p>
            <input type="checkbox" />
          </div>
          <div className="downloadWrap">
            <p>Download the letter of undertaking</p>
            <a href="#">CLICK HERE</a>
          </div>
          <div class="floatingLabelGroup">
            <div className="floatingLabelWrap">
              <input type="text" autocomplete="off" autofocus required />
              <label class="floatingLabel">Company PAN Number</label>
            </div>
          </div>
          <div className="cardBtnWrap">
            <Link to="/billing">
              <button type="submit">move to billing address</button>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default ComapnyCard;
