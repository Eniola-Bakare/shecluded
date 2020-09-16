import React, {useState, useEffect} from "react";
import Dashboardheader from "./Dashboardheader";
import Dashboardrightbar from "./Dashboardrightbar";
import { Redirect } from "react-router-dom";
import Routes from './Routes'
import { profileUrl, timeOut } from '../../api/rootUrls';
import axios from 'axios';
import withTimeout from "../../HOCs/withTimeout.hoc";
import { withRouter } from "react-router-dom";



function MainDashboard(props) {
  const [res, Setres] = useState(true)
  const [state, setState] = useState({
    firstName: '',
    lastName: '',
    ProfilePicture: '',
    bio: '',
    isLoading: false,
    socialMediaDetails: []
})

useEffect(() => {
  if (sessionStorage.getItem("userData")) {

    setState({
      ...state,
      isLoading: true
    })
    const { token } = JSON.parse(sessionStorage.getItem('userData'));
    axios({
      url: `${profileUrl}`,
      method: 'get',
      headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
      timeout: timeOut
    })
    .then(result => {
      if(result.data.respCode === "Successful"){
                const {firstName, lastName, bio, socialMedia, photo } = result.data.respBody;
                
                setState({
                    ...state,
                    ...result.data.respBody,
                    firstName,
                    lastName,
                    bio,
                    socialMediaDetails: socialMedia,
                    ProfilePicture: photo
                })
      } else {
        setState({
          ...state,
          isLoading: false,
          loginErrorMessage: result.data.respDescription
        })
      }
    })
    .catch(err => {
      setState({
        ...state,
        isLoading: false,
        loginErrorMessage: err
      })
    })
    
  } else {
    sessionStorage.clear();
    props.history.push("/login");
  }

}, [])

  if (!sessionStorage.getItem("userData")) {
    return <Redirect to="/login" />;
  } else {
    return (
      <div>
        <div className="right-cross">
          <div
            className={`first-right-cross ${
              res ? "hide-content" : "show-content"
            }`}
          >
            <Dashboardrightbar Setres={Setres} {...props} />
          </div>

          <div className="second-right-cross">
            <Dashboardheader user={state} res={res} Setres={Setres} {...props} />
            <div style={{ marginTop: "90px" }}>
              <Routes user={state} {...props} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withTimeout(withRouter(MainDashboard));


