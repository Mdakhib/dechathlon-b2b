import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BillingAddress from "./pages/BillingAddress";
import CompanyDetails from "./pages/CompanyDetails";
import ShippingAdress from "./pages/ShippingAdress";
import UploadDocuments from "./pages/UploadDocuments";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={BillingAddress} />
          <Route path="/companyDetails" component={CompanyDetails} />
          <Route path="/shippingDetails" component={ShippingAdress} />
          <Route path="/uploadDocuments" component={UploadDocuments} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
