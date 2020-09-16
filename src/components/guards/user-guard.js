import React, { Fragment } from "react";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import Footer from "../shared/footer";
import UserNavbar from "./user-navbar";
import Dashboard from "../dashboard/dashboard";
import RequestLoan from "../dashboard/request-loan";
import Loans from "../dashboard/loans";
import LoanDetails from "../dashboard/loan-details";
import ManageProfile from "../dashboard/manage-profile/manage-profile";
import SourcesOfIncome from "../dashboard/sources-of-income";
import Transactions from "../dashboard/transactions";
import RoI from "../../components/home/roi-calculator";
import withTimeout from "../../HOCs/withTimeout.hoc";
import WelcomePage from "../welcome-page/welcome-page";

const UserGuard = () => {
  if (!sessionStorage.getItem("userData")) {
    return <Redirect to="/login" />;
  } else {
    return (
      <div>
        <UserNavbar />
        <div className="container-fluid main-container user">
          <Switch>
            <Fragment>
              <Route exact path="/user" component={Dashboard} />
              <Route exact path="/welcome-page" component={WelcomePage} />
              <Route exact path="/user/dashboard" component={Dashboard} />
              <Route exact path="/user/request-loan" component={RequestLoan} />
              <Route exact path="/user/loans" component={Loans} />
              <Route exact path="/user/loans/:id" component={LoanDetails} />
              <Route
                exact
                path="/user/manage-profile"
                component={ManageProfile}
              />
              <Route
                exact
                path="/user/source-of-income"
                component={SourcesOfIncome}
              />
              <Route exact path="/user/transactions" component={Transactions} />
              <Route exact path="/user/roi-calculator/" component={RoI} />
              <Route
                exact
                path="/user/roi-calculator/inventory"
                component={RoI}
              />
              <Route
                exact
                path="/user/roi-calculator/equipment"
                component={RoI}
              />
              <Route
                exact
                path="/user/roi-calculator/marketing"
                component={RoI}
              />
            </Fragment>
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
};

// export default withTimeout(withRouter(UserGuard));
export default withRouter(UserGuard);
