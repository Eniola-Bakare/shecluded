import React, { Fragment } from "react";

const LoanRepaymentTable = ({
  intervalType,
  calculation,
  sumOfTotalCharges,
  chargePercentage,
}) => {
  return (
    <Fragment>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>{intervalType === "weekly" ? "Weeks" : "Months"}</th>
            <th>Capital</th>
            <th>Interest ({`${(chargePercentage * 100).toFixed(1)}%`})</th>
            <th>Repayment</th>
          </tr>
        </thead>
        <tbody>
          {calculation.map((eachLoan, i) => {
            return (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{Number(eachLoan.capital).toFixed(2)}</td>
                <td>{eachLoan.commission.toFixed(2)}</td>
                <td>{eachLoan.totalAmountToBePaidThisMonth.toFixed(2)}</td>
              </tr>
            );
          })}
          {sumOfTotalCharges.map((sumOfTotalCharge, i) => {
            return (
              <tr className="font-bold" key={i}>
                <td>Total</td>
                <td>{sumOfTotalCharge.totalAmountToBePaid}</td>
                <td>{sumOfTotalCharge.totalCommission.toFixed(2)}</td>
                <td>
                  {sumOfTotalCharge.sumOfTotalAmountToBePaidMonthly.toFixed(2)}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Fragment>
  );
};

export default LoanRepaymentTable;
