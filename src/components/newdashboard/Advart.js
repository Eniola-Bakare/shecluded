import React from "react";

function Advart({heading, content, button, buttonContent}) {
  return (
    <div>
      <div className="center-main">
        <div className="top-main-div">
          <div className="center-main-content">
            <h2>{heading}</h2>
            <p className="main-p">{content}</p>
          </div>
          {button ? (
            <div className="center-mains-button">
              <button>{buttonContent} </button>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Advart;
