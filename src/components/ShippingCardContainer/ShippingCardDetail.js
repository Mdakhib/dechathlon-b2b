import React from "react";
import { Link } from "react-router-dom";
import "../CompanyDetails/comapanyDetail.css";

const ShippingCardDetails = () => {
    return (
        <>
            <div className="cardInputContainer">
                <h1>Shipping Address</h1>
                <div className="billingWrap">
                    <h6>Same as Billing Address</h6>
                    <input type="checkbox" />
                </div>
                <form>
                    <div class="floatingLabelGroup">
                        <div className="floatingLabelWrap">
                            <input type="text" autocomplete="off" autofocus required />
                            <label class="floatingLabel">
                                First & Last Name (Authorised Signature)
                            </label>
                        </div>
                    </div>
                    <div class="floatingLabelGroup">
                        <div className="floatingLabelWrap">
                            <input type="text" autocomplete="off" autofocus required />
                            <label class="floatingLabel">Address</label>
                        </div>
                    </div>
                    <div class="floatingLabelGroup">
                        <div className="floatingLabelWrap">
                            <input type="text" autocomplete="off" autofocus required />
                            <label class="floatingLabel">
                                Address Line2
                            </label>
                        </div>
                    </div>
                    <div class="floatingLabelGroup">
                        <div className="floatingLabelWrap">
                            <input type="text" autocomplete="off" autofocus required />
                            <label class="floatingLabel">Zip/Postal Code</label>
                        </div>
                    </div>
                    <div class="floatingLabelGroup">
                        <div className="floatingLabelWrap">
                            <input type="text" autocomplete="off" autofocus required />
                            <label class="floatingLabel">City</label>
                        </div>
                    </div>
                    <div class="floatingLabelGroup">
                        <div className="floatingLabelWrap">
                            <input type="text" autocomplete="off" autofocus required />
                            <label class="floatingLabel">State</label>
                        </div>
                    </div>
                    <div class="floatingLabelGroup">
                        <div className="floatingLabelWrap">
                            <input type="text" autocomplete="off" autofocus required />
                            <label class="floatingLabel">Country</label>
                        </div>
                    </div>
                    <div class="floatingLabelGroup">
                        <div className="floatingLabelWrap">
                            <input type="text" autocomplete="off" autofocus required />
                            <label class="floatingLabel">Mobile Number</label>
                        </div>
                    </div>
                    <div class="floatingLabelGroup">
                        <div className="floatingLabelWrap">
                            <input type="text" autocomplete="off" autofocus required />
                            <label class="floatingLabel">Land Phone</label>
                        </div>
                    </div>
                    <div className="cardBtnWrap">
                        <Link to="/upload">
                            <button type="submit">move to upload documents</button>
                        </Link>
                    </div>
                </form>
            </div>
        </>
    );
};

export default ShippingCardDetails;
