import React, { Component, lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./styles/bootstrap.min.css";
import "./styles/font-awesome/css/all.css";
import "./styles/animate.css";
import "./styles/scss/styles.scss";
import "./styles/scss/responsive.scss";

import Preloader from "./components/shared/preloader";
import ErrorBoundary from "./components/shared/error-boundary";
import SourcesOfIncome from "./components/dashboard/sources-of-income";
const LoginPage = lazy(() => import("./components/auth/login"));
const RegisterPage = lazy(() => import("./components/auth/register"));
const CompleteRegistration = lazy(() =>
  import("./components/auth/complete-registration")
);
const ResetPasswordPage = lazy(() =>
  import("./components/auth/reset-password")
);
const ForgotPassword = lazy(() => import("./components/auth/forgot-password"));
const NewHomepage = lazy(() => import("./components/home/NewHomepage"));
// const Homepage = lazy(() => import("./components/home/homepage"));
const OurStory = lazy(() => import("./components/home/OurStory"));
const ShecludedDashboard = lazy(() => import("./components/ShecludedDashboard"));
const OurTeam = lazy(() => import("./components/home/Teams"));
const AddBusiness = lazy(() => import("./components/home/AddBusiness"));
const Blog = lazy(() => import("./components/home/Blog"));
const BlogDetails = lazy(() => import("./components/home/BlogDetials"));
const ContactUs = lazy(() => import("./components/home/contact-us"));
const BusinessListing = lazy(() => import("./components/home/BusinessList"));
const Chat = lazy(() => import("./components/home/Chat"));
const Faq = lazy(() => import("./components/home/faq"));
const LoansStatic = lazy(() => import("./components/home/loans"));
const AboutUs = lazy(() => import("./components/home/about-us"));
const UserGuard = lazy(() => import("./components/guards/user-guard"));
const ScrollTop = lazy(() => import("./components/shared/scroll-top"));
const LoanApplication = lazy(() =>
  import("./components/newdashboard/LoanApplication")
); 

const Error404 = lazy(() => import("./components/errors/error404"));
const Terms = lazy(() => import("./components/home/Terms"))
const Wealth = lazy(() => import("./components/wealth"));
const WealthPay = lazy(() => import("./components/wealth/WealthPay"));
const Calculate = lazy(() => import("./components/wealth/Calculate"));
const Dashboard = lazy(() => import("./components/newdashboard"));
 

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <ErrorBoundary>
            <Suspense fallback={<Preloader />}>
              <Switch>
                <Route exact path="/" component={NewHomepage} />
                <Route exact path="/welcome" component={NewHomepage} />
                <Route exact path="/story" component={OurStory} />
                <Route exact path="/team" component={OurTeam} />
                <Route exact path="/add-business" component={AddBusiness} />
                <Route exact path="/business-showcase" component={BusinessListing} />
                <Route exact path="/chat" component={Chat} />
                <Route exact path="/blog" component={Blog} />
                <Route exact path="/loan" component={LoansStatic} />
                <Route exact path="/blog/:id" component={BlogDetails} />
                <Route exact path="/about" component={OurStory} />
                <Route exact path="/contact" component={ContactUs} />
                <Route exact path="/faq" component={Faq} />
                <Route exact path="/login" component={LoginPage} />
                <Route exact path="/register" component={RegisterPage} />

                <Route exact path="/wealth" component={Wealth} />
                <Route exact path="/wealthpay" component={WealthPay} />
                <Route exact path="/calculate" component={Calculate} />

                {/* <Route exact path="/loanapplication" component={Dashboard} /> */}
                {/* <Route exact path="/dashboard" component={Dashboard} /> */}
                {/* <Route exact path="/loans" component={Dashboard} /> */}
                {/* <Route exact path="/loansdashboard" component={Dashboard} /> */}
                {/* <Route exact path="/settings" component={Dashboard} /> */}
                {/* <Route exact path="/loans/:id" component={Dashboard} /> */}
                {/* <Route exact path="/commingsoon" component={Dashboard} /> */}
                {/* <Route exact path="/wealthapp" component={Dashboard} /> */}
                {/* <Route exact path="/savings" component={Dashboard} /> */}
                {/* <Route exact path="/profile" component={Dashboard} /> */}
                {/* <Route exact path="/roi-calculator" component={Dashboard} /> */}

                <Route exact path="/loanapplication" component={ShecludedDashboard} />
                <Route exact path="/dashboard" component={ShecludedDashboard} />
                <Route exact path="/loansdashboard" component={ShecludedDashboard} />
                <Route exact path="/loans/:id" component={ShecludedDashboard} />
                <Route exact path="/profile" component={ShecludedDashboard} />
                <Route exact path="/settings" component={ShecludedDashboard} />
                <Route exact path="/wealthapp" component={ShecludedDashboard} />
                {/* <Route exact path="/loans" component={ShecludedDashboard} />
                
                
                
                <Route exact path="/commingsoon" component={ShecludedDashboard} />
                
                <Route exact path="/savings" component={ShecludedDashboard} />
                
                <Route exact path="/roi-calculator" component={ShecludedDashboard} /> */}

          
                <Route exact path="/terms" component={Terms} />
                <Route
                  exact
                  path="/complete-registration"
                  component={CompleteRegistration}
                />
                <Route
                  exact
                  path="/forgot-password"
                  component={ForgotPassword}
                />
                <Route
                  path="/password-reset/:id/:token"
                  component={ResetPasswordPage}
                />
                <Route path="/user" component={UserGuard} />
                <Route path="/welcome-page" component={UserGuard} />
                <Route path="/user/dashboard" component={UserGuard} />
                <Route path="/user/request-loan" component={UserGuard} />
                <Route path="/user/loans" component={UserGuard} />
                <Route path="/user/loans/:id" component={UserGuard} />
                <Route path="/user/transactions" component={UserGuard} />
                <Route
                  path="/user/source-of-income"
                  component={SourcesOfIncome}
                />
                <Route path="/user/verify-card" component={UserGuard} />
                <Route path="/user/manage-profile" component={UserGuard} />
                <Route path="/user/change-password" component={UserGuard} />
                <Route path="/user/roi-calculator/" component={UserGuard} />
                <Route
                  path="/user/roi-calculator/inventory"
                  component={UserGuard}
                />
                <Route
                  path="/user/roi-calculator/equipment"
                  component={UserGuard}
                />
                <Route
                  path="/user/roi-calculator/marketing"
                  component={UserGuard}
                />
                <Route path="*" component={Error404} />
              </Switch>
              <ScrollTop />
            </Suspense>
          </ErrorBoundary>
        </Router>
      </div>
    );
  }
}

export default App;
