import React from 'react';
import CommingSoonIMG from '../../assets/commingSoon.png'

const App = () => {
    return (
      <div style={{ width: "100%" }}>
        <img
          style={{ width: "100%" }}
          className="img-responsive"
          src={CommingSoonIMG}
          alt="comming soon"
        />
      </div>
    );
}
 
export default App;
