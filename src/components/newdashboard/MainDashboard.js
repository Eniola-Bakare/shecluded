import React from 'react';
import Dashboardheader from './Dashboardheader';
import Dashboardrightbar from './Dashboardrightbar';
import Dashboardbody from './Dashboardbody';
import Dashboardmain from './Dashboardmain';
import { Route, Switch, withRouter, Redirect } from "react-router-dom";


function MainDashboard(props) {
    if (!sessionStorage.getItem("userData")) {
        return <Redirect to="/login" />;
    } else { 
        return (
          <div>
            <div className="right-cross">
              <div className="first-right-cross">
                <Dashboardrightbar />
              </div>

              <div className="second-right-cross">
                <Dashboardheader />
                <Dashboardbody />
              </div>
            </div>
          </div>
        );

    }
    
}

export default MainDashboard;
