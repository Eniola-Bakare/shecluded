import React, { useState } from "react";
import Employed from "./sources-of-income/employed";
import BusinessOwner from "./sources-of-income/business-owner";

export default function SourceOfIncome({
  changeRegistrationStep,
  setEmployed,
  setBusinessOwner,
  setCompletedRegistration
}) {
  const [state, setState] = useState({
    sourceOfIncomeToShow: "business-owner"
  });
  const navigate = sourceOfIncomeToShow => {
    setState({
      ...state,
      sourceOfIncomeToShow
    });
  };
  const { sourceOfIncomeToShow } = state;
  return (
    <div>
      <div className="row">
        <div className="col-12 small-vertical-padding">
          <h3 className="text-center title text-shecluded">Source Of Income</h3>
          <p className="text-center">What type of chick are you?</p>
        </div>
      </div>

      <div className="sources-of-income-navigation-buttons">
        <div
          onClick={() => navigate("business-owner")}
          className={
            sourceOfIncomeToShow === "business-owner" ? "active" : null
          }
        >
          Business Mogul
        </div>
        <div
          onClick={() => navigate("employed")}
          className={sourceOfIncomeToShow === "employed" ? "active" : null}
        >
          9-5 chick
        </div>
      </div>

      <div className="small-vertical-padding source-of-income-fields">
        {(function() {
          switch (sourceOfIncomeToShow) {
            case "business-owner":
              return (
                <BusinessOwner
                  changeRegistrationStep={changeRegistrationStep}
                  setBusinessOwner={setBusinessOwner}
                  setCompletedRegistration={setCompletedRegistration}
                />
              );
            case "employed":
              return (
                <Employed
                  changeRegistrationStep={changeRegistrationStep}
                  setEmployed={setEmployed}
                  setCompletedRegistration={setCompletedRegistration}
                />
              );
            default:
              return null;
          }
        })()}
      </div>
    </div>
  );
}
