import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BillingAddress from "./pages/BillingAddress";
import CompanyDetails from "./pages/CompanyDetails";
import ShippingAdress from "./pages/ShippingAdress";
import UploadDocuments from "./pages/UploadDocuments";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={CompanyDetails} />
          <Route path="/billingAddress" component={BillingAddress} />
          <Route path="/shippingDetails" component={ShippingAdress} />
          <Route path="/uploadDocuments" component={UploadDocuments} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
