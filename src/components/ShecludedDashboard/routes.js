import React, { lazy } from "react";
import { Route, Switch } from "react-router-dom";

// const ComingSoon = lazy(() => import("../commingSoon"));
// const Roi = lazy(() => import("./ROI"));
const Editprofile = lazy(() => import("./EditProfile"));
const Profile = lazy(() => import("./Profile"));
const Dashboard = lazy(() => import("./Dashboard"));
const Loan = lazy(() => import("./Loans"));
// const ManageLoans = lazy(() => import("./ManageLoans"));
const LoanDetails = lazy(() => import("./LoanDetails"));
const LoanApplication = lazy(() => import("./LoanApplication"));
// const Savings = lazy(() => import("./SavingsDashboard/Dashboardsavingsmain"));
const Wealth = lazy(() => import("./Wealth"));


const App = (props) => {
  return (
    <Switch>
    
      <Route  exact path={`/loans/:id`} component={LoanDetails} />
      <Route exact path={`/dashboard`} component={() => <Dashboard user={props.user} {...props} />} />
      <Route exact path={`/loansdashboard`} component={() => <Loan user={props.user} {...props} />} />
      <Route exact path={`/loanapplication`} component={LoanApplication} />
      <Route exact path={`/profile`} component={() => <Profile user={props.user} {...props} />} /> 
      <Route exact path={`/settings`} component={Editprofile} />
      <Route exact path={`/wealthapp`} component={Wealth} />
    </Switch>
  );
};

export default App;
