import React, {useState, useEffect} from "react";
import { Redirect } from "react-router-dom";
import Routes from './routes'
import Navbar from './navbar'
import { profileUrl, timeOut } from '../../api/rootUrls';
import axios from 'axios';
import withTimeout from "../../HOCs/withTimeout.hoc";
import { withRouter } from "react-router-dom";



function MainDashboard(props) {
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
    return (<Redirect to="/login" />)
  } else {
    return (
      <div>
        <Navbar userInfo={state}  {...props} />
        <Routes user={state}  {...props}/>
      </div>
    );
  }
}

export default withTimeout(withRouter(MainDashboard));


