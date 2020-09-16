import React, { useState } from 'react';
import { PieChart } from 'react-minimal-pie-chart';

// import Pdf from "react-to-pdf";

// const ref = React.createRef();

// function App() {
//   return (
//     <div className="App">
      // <Pdf targetRef={ref} filename="code-example.pdf">
      //   {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
      // </Pdf>
//       <div ref={ref}>
//         <h1>Hello CodeSandbox</h1>
//         <h2>Start editing to see some magic happen!</h2>
//       </div>
//     </div>
//   );
// }

// export default App;


const App = (props) => {
  const { setStage, stage } = props
  const [homeUtility, setHomeUtility] = useState("0")
  const [food, setFood] = useState("0")
  const [transportation, setTransportation] = useState("0")
  const [insurance, setInsurance] = useState("0")
  const [entertainment, setEntertainment] = useState("0")
  const [servicesAndSupport, setServicesAndSupport] = useState("0")
  const [personal, setPersonal] = useState("0")
  const [childCareNanny, setChildCareNanny] = useState("0")
  const [giving, setGiving] = useState("0")
  const [ex_InvestmentExpense, setEx_InvestmentExpense] = useState("0")

  const [totalIncome, setTotalIncome] = useState("0")
  const [totalSavings, setTotalSavings] = useState("0")
  const [totalExpenses, setTotalExpenses] = useState("0")
  const [inputData, setInputData] = useState({
    incomeMonthly: "",
    incomeMonthlyDuration: "monthly",
    incomeFamily: "",
    incomeFamilyDuration: "monthly",
    incomeOthers: "",
    incomeOthersDuration: "monthly",
    ex_HomeAndUtilitiesRent: "",
    ex_HomeAndUtilitiesRentDuration: "monthly",
    ex_HomeAndUtilitiesMaintenance: "",
    ex_HomeAndUtilitiesTelephone: "",
    ex_HomeAndUtilitiesElectricity: "",
    ex_HomeAndUtilitiesInternet: "",
    ex_HomeAndUtilitiesWater: "",
    ex_HomeAndUtilitiesTrash: "",
    ex_HomeAndUtilitiesCable: "",
    ex_HomeAndUtilitiesOthers: "",
    ex_FoodGroceries: "",
    ex_FoodCookingGas: "",
    ex_FoodEatOut: "",
    ex_TransportationFuel: "",
    ex_TransportationOil: "",
    ex_TransportationPublicTrans: "",
    ex_InsuranceCar: "",
    ex_InsuranceLife: "",
    ex_InsuranceHealth: "",
    ex_EntertainmentMeals: "",
    ex_EntertainmentMovies: "",
    ex_EntertainmentOthers: "",
    ex_ServicesAndSupportDriver: "",
    ex_ServicesAndSupportCook: "",
    ex_ServicesAndSupportGardener: "",
    ex_ServicesAndSupportOthers: "",
    ex_PersonalBeauty: "",
    ex_PersonalEducation: "",
    ex_PersonalHouseholdItems: "",
    ex_PersonalHouseholdOthers: "",
    ex_ChildCareNanny: "",
    ex_ChildCareSchoolFees: "",
    ex_ChildCareOthers: "",
    ex_GivingTithe: "",
    ex_GivingOffering: "",
    ex_GivingRandomHelpToPeople: "",
    ex_GivingFamily: "",
    ex_GivingOthers: "",
    ex_InvestmentExpense: "",
    ex_InvestmentExpenseDuration: "monthly",
    savingsEmergencyFund: "",
    savingsDollarSavingsAccount: "",
    savingsNairaSavingsAccount: "",
    savingsOthers: "",
  });

  const handleCalculate = () => {
    const incomeMonthly = inputData.incomeMonthlyDuration === "monthly" ? Number(inputData.incomeMonthly) : WeeklyToMonthConverter(Number(inputData.incomeMonthly))
    const incomeFamily = inputData.incomeFamilyDuration === "monthly" ? Number(inputData.incomeFamily) : WeeklyToMonthConverter(Number(inputData.incomeFamily))
    const incomeOthers = inputData.incomeOthersDuration === "monthly" ? Number(inputData.incomeOthers) : WeeklyToMonthConverter(Number(inputData.incomeOthers))

    const income = incomeMonthly + incomeFamily + incomeOthers;
    const ex_HomeAndUtilitiesRent = inputData.ex_HomeAndUtilitiesRentDuration === "Annual" ? AnnualToMonthConverter(Number(inputData.ex_HomeAndUtilitiesRent)) : inputData.ex_HomeAndUtilitiesRentDuration === "Weekly" ? WeeklyToMonthConverter(Number(inputData.ex_HomeAndUtilitiesRent)) : inputData.ex_HomeAndUtilitiesRentDuration === "Daily" ? DailyToMonthConverter(Number(inputData.ex_HomeAndUtilitiesRent)) : inputData.ex_HomeAndUtilitiesRentDuration === "Quarterly" ? QuarterlyToMonthConverter(Number(inputData.ex_HomeAndUtilitiesRent)) : Number(inputData.ex_HomeAndUtilitiesRent);

    const homeUtilityData =
      ex_HomeAndUtilitiesRent +
      Number(inputData.ex_HomeAndUtilitiesMaintenance) +
      Number(inputData.ex_HomeAndUtilitiesElectricity) +
      Number(inputData.ex_HomeAndUtilitiesInternet) +
      Number(inputData.ex_HomeAndUtilitiesWater) +
      Number(inputData.ex_HomeAndUtilitiesTrash) +
      Number(inputData.ex_HomeAndUtilitiesCable) +
      Number(inputData.ex_HomeAndUtilitiesOthers) +
      Number(inputData.ex_HomeAndUtilitiesTelephone);

    const foodData =
      Number(inputData.ex_FoodGroceries) +
      Number(inputData.ex_FoodCookingGas) +
      Number(inputData.ex_FoodEatOut);

    const transportationData =
      Number(inputData.ex_TransportationFuel) +
      Number(inputData.ex_TransportationOil) +
      Number(inputData.ex_TransportationPublicTrans);

    const insuranceData =
      Number(inputData.ex_InsuranceCar) +
      Number(inputData.ex_InsuranceLife) +
      Number(inputData.ex_InsuranceHealth);

    const entertainmentData =
      Number(inputData.ex_EntertainmentMeals) +
      Number(inputData.ex_EntertainmentMovies) +
      Number(inputData.ex_EntertainmentOthers);

    const servicesAndSupportData =
      Number(inputData.ex_ServicesAndSupportDriver) +
      Number(inputData.ex_ServicesAndSupportCook) +
      Number(inputData.ex_ServicesAndSupportGardener) +
      Number(inputData.ex_ServicesAndSupportOthers);

    const personalData =
      Number(inputData.ex_PersonalBeauty) +
      Number(inputData.ex_PersonalEducation) +
      Number(inputData.ex_PersonalHouseholdItems) +
      Number(inputData.ex_PersonalHouseholdOthers);

    const childCareNannyData =
      Number(inputData.ex_ChildCareNanny) +
      Number(inputData.ex_ChildCareSchoolFees) +
      Number(inputData.ex_ChildCareOthers);

    const givingData =
      Number(inputData.ex_GivingTithe) +
      Number(inputData.ex_GivingOffering) +
      Number(inputData.ex_GivingRandomHelpToPeople) +
      Number(inputData.ex_GivingFamily) +
      Number(inputData.ex_GivingOthers);

    const ex_InvestmentExpenseData = inputData.ex_InvestmentExpenseDuration === "Annual" ? AnnualToMonthConverter(Number(inputData.ex_InvestmentExpense)) : inputData.ex_InvestmentExpenseDuration === "Weekly" ? WeeklyToMonthConverter(Number(inputData.ex_InvestmentExpense)) : inputData.ex_InvestmentExpenseDuration === "Daily" ? DailyToMonthConverter(Number(inputData.ex_InvestmentExpense)) : inputData.ex_InvestmentExpenseDuration === "Quarterly" ? QuarterlyToMonthConverter(Number(inputData.ex_InvestmentExpense)) : Number(inputData.ex_InvestmentExpense);


    const expenses =
      homeUtilityData +
      foodData +
      transportationData +
      insuranceData +
      personalData +
      entertainmentData +
      givingData +
      childCareNannyData +
      ex_InvestmentExpenseData +
      servicesAndSupportData;

    const savings_investment =
      Number(inputData.savingsEmergencyFund) +
      Number(inputData.savingsDollarSavingsAccount) +
      Number(inputData.savingsOthers) +
      Number(inputData.savingsNairaSavingsAccount);

    setTotalIncome(income)
    setTotalSavings(savings_investment)
    setTotalExpenses(expenses)

    setHomeUtility(homeUtilityData)
    setFood(foodData)
    setTransportation(transportationData)
    setInsurance(insuranceData)
    setEntertainment(entertainmentData)
    setServicesAndSupport(servicesAndSupportData)
    setPersonal(personalData)
    setChildCareNanny(childCareNannyData)
    setGiving(givingData)
    setEx_InvestmentExpense(ex_InvestmentExpenseData)
  }

  const handleChange = (e) => {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value,
    });
  };

  const WeeklyToMonthConverter = (val) => {
    return Math.round(val * 4)
  }
  const AnnualToMonthConverter = (val) => {
    return Math.round(val / 12)
  }
  const DailyToMonthConverter = (val) => {
    return Math.round(val * 30)
  }
  const QuarterlyToMonthConverter = (val) => {
    return Math.round(val / 4)
  }


  return (
    <div>
      <div className="container-wealth">
        <div className="cal-wrapper">
          <div className="wealth-cal-content">
            <div>
              <form>
                {
                  {
                    stage1: (
                      <div  className="cal-stage-wrapper">
                        <div>
                       
                          <h1>My Income</h1>

                          <div class="col-12 col-md-6 input-group input-group-lg mt-3">
                            <div style={{ width: "100%" }}>
                              <label className="text-body ">
                                Salary/Business income
                                </label>
                            </div>
                            <input
                              className="form-control text-input"
                              type="number"
                              value={inputData.incomeMonthly}
                              name="incomeMonthly"
                              placeholder="Enter montly income"
                              required
                              onChange={handleChange}
                            />
                            <div className="input-group-append">
                              <div
                                style={{ background: "#F0008C" }}
                                className="input-group-text"
                              >
                                <select value={inputData.incomeMonthlyDuration} name="incomeMonthlyDuration" onChange={handleChange} class="custom-selectX">
                                  <option value="monthly" selected>monthly</option>
                                  <option value="Weekly">Weekly</option>
                                </select>
                              </div>
                            </div>
                          </div>


                          <div class="col-12 col-md-6 input-group input-group-lg mt-3">
                            <div style={{ width: "100%" }}>
                              <label className="text-body ">
                                Income from family
                                </label>
                            </div>
                            <input
                              className="form-control text-input"
                              type="number"
                              value={inputData.incomeFamily}
                              name="incomeFamily"
                              placeholder="Enter family income"
                              required
                              onChange={handleChange}
                            />
                            <div className="input-group-append">
                              <div
                                style={{ background: "#F0008C" }}
                                className="input-group-text"
                              >
                                <select value={inputData.incomeFamilyDuration} name="incomeFamilyDuration" onChange={handleChange} class="custom-selectX">
                                  <option value="monthly" selected>monthly</option>
                                  <option value="Weekly">Weekly</option>
                                </select>
                              </div>
                            </div>
                          </div>



                          <span className="form-hint ml-3 pl-3">
                            Do you have any other source of income?
                            </span>

                          <div class="col-12 col-md-6 input-group input-group-lg mt-3">
                            <div style={{ width: "100%" }}>
                              <label className="text-body ">
                                Other income
                                </label>
                            </div>
                            <input
                              className="form-control text-input"
                              type="number"
                              value={inputData.incomeOthers}
                              name="incomeOthers"
                              placeholder="Enter other income"
                              required
                              onChange={handleChange}
                            />
                            <div className="input-group-append">
                              <div
                                style={{ background: "#F0008C" }}
                                className="input-group-text"
                              >
                                <select value={inputData.incomeOthersDuration} name="incomeOthersDuration" onChange={handleChange} class="custom-selectX">
                                  <option value="monthly" selected>monthly</option>
                                  <option value="Weekly">Weekly</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="d-flex justify-content-end align-items-center mt-5">
                          <svg
                            onClick={() => setStage("stage2")}
                            className="btn"
                            width="132"
                            height="45"
                            viewBox="0 0 132 45"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              width="132"
                              height="45"
                              rx="10"
                              fill="#333333"
                            />
                            <path
                              d="M39.1416 28H36.4056L31.8296 21.072V28H29.0936V16.768H31.8296L36.4056 23.728V16.768H39.1416V28ZM49.5408 23.392C49.5408 23.648 49.5248 23.9147 49.4928 24.192H43.3008C43.3435 24.7467 43.5195 25.1733 43.8288 25.472C44.1488 25.76 44.5381 25.904 44.9968 25.904C45.6795 25.904 46.1541 25.616 46.4208 25.04H49.3328C49.1835 25.6267 48.9115 26.1547 48.5168 26.624C48.1328 27.0933 47.6475 27.4613 47.0608 27.728C46.4741 27.9947 45.8181 28.128 45.0928 28.128C44.2181 28.128 43.4395 27.9413 42.7568 27.568C42.0741 27.1947 41.5408 26.6613 41.1568 25.968C40.7728 25.2747 40.5808 24.464 40.5808 23.536C40.5808 22.608 40.7675 21.7973 41.1408 21.104C41.5248 20.4107 42.0581 19.8773 42.7408 19.504C43.4235 19.1307 44.2075 18.944 45.0928 18.944C45.9568 18.944 46.7248 19.1253 47.3968 19.488C48.0688 19.8507 48.5915 20.368 48.9648 21.04C49.3488 21.712 49.5408 22.496 49.5408 23.392ZM46.7408 22.672C46.7408 22.2027 46.5808 21.8293 46.2608 21.552C45.9408 21.2747 45.5408 21.136 45.0608 21.136C44.6021 21.136 44.2128 21.2693 43.8928 21.536C43.5835 21.8027 43.3915 22.1813 43.3168 22.672H46.7408ZM56.2642 28L54.5522 25.52L53.1122 28H50.1522L53.0962 23.44L50.0722 19.072H53.1442L54.8562 21.536L56.2962 19.072H59.2562L56.2642 23.568L59.3362 28H56.2642ZM65.3664 25.68V28H63.9744C62.9824 28 62.2091 27.76 61.6544 27.28C61.0998 26.7893 60.8224 25.9947 60.8224 24.896V21.344H59.7344V19.072H60.8224V16.896H63.5584V19.072H65.3504V21.344H63.5584V24.928C63.5584 25.1947 63.6224 25.3867 63.7504 25.504C63.8784 25.6213 64.0918 25.68 64.3904 25.68H65.3664Z"
                              fill="white"
                            />
                            <path
                              d="M85 23H99"
                              stroke="white"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M92 16L99 23L92 30"
                              stroke="white"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </div>
                      </div>
                    ),
                    stage2: (
                      <div   className="cal-stage-wrapper">
                        <div>
                       
                          <h1>My Expenses</h1>
                          <h3 className="wealth-form-heading">
                            Home and Utilities{" "}
                          </h3>

                          <div className="row mb-4 mt-5 ">
                            <div class="col-12 col-md-6 input-group input-group-lg mt-3">
                              <div style={{ width: "100%" }}>
                                <label className="text-body ">
                                  Rent/Mortgage (select housing plan)
                                  </label>
                              </div>
                              <input
                                className="form-control text-input"
                                type="number"
                                value={inputData.ex_HomeAndUtilitiesRent}
                                name="ex_HomeAndUtilitiesRent"
                                placeholder="Enter Amount"
                                required
                                onChange={handleChange}
                              />
                              <div className="input-group-append">
                                <div
                                  style={{ background: "#F0008C" }}
                                  className="input-group-text"
                                >
                                  <select value={inputData.ex_HomeAndUtilitiesRentDuration} name="ex_HomeAndUtilitiesRentDuration" onChange={handleChange} class="custom-selectX">
                                    <option selected>monthly</option>
                                    <option>Annual</option>
                                    {/* <option value="1">Weekly</option>
                                    <option value="2">Daily</option>
                                    <option value="3">Quarterly</option> */}
                                  </select>
                                </div>
                              </div>
                            </div>

                            <div className=" col-12 col-md-6 input-group input-group-lg mt-3">
                              <div style={{ width: "100%" }}>
                                <label className="text-body ">
                                  Maintenance & Repairs{" "}
                                </label>
                              </div>
                              <input
                                className="form-control text-input"
                                name="ex_HomeAndUtilitiesMaintenance"
                                value={
                                  inputData.ex_HomeAndUtilitiesMaintenance
                                }
                                onChange={handleChange}
                                type="number"
                                placeholder="Enter Amount"
                              />
                            </div>
                          </div>
                          <div class="form-row">
                            <div class="form-group col-md-6">
                              <label for="ex_HomeAndUtilitiesTelephone">
                                Telephone
                                </label>
                              <input
                                type="number"
                                name="ex_HomeAndUtilitiesTelephone"
                                value={inputData.ex_HomeAndUtilitiesTelephone}
                                onChange={handleChange}
                                class="form-control"
                                id="ex_HomeAndUtilitiesTelephone"
                                placeholder="Enter Amount"
                              />
                            </div>
                            <div class="form-group col-md-6">
                              <label for="ex_HomeAndUtilitiesElectricity">
                                Electricity
                                </label>
                              <input
                                type="number"
                                name="ex_HomeAndUtilitiesElectricity"
                                value={
                                  inputData.ex_HomeAndUtilitiesElectricity
                                }
                                onChange={handleChange}
                                class="form-control ex_HomeAndUtilitiesElectricity"
                                id="ex_HomeAndUtilitiesElectricity"
                                placeholder="Enter Amount"
                              />
                            </div>
                          </div>
                          <div class="form-row">
                            <div class="form-group col-md-6">
                              <label for="ex_HomeAndUtilitiesInternet">
                                Internet/Data
                                </label>
                              <input
                                type="number"
                                name="ex_HomeAndUtilitiesInternet"
                                value={inputData.ex_HomeAndUtilitiesInternet}
                                onChange={handleChange}
                                class="form-control"
                                id="ex_HomeAndUtilitiesInternet"
                                placeholder="Enter Amount"
                              />
                            </div>
                            <div class="form-group col-md-6">
                              <label for="ex_HomeAndUtilitiesWater">
                                Water
                                </label>
                              <input
                                type="number"
                                name="ex_HomeAndUtilitiesWater"
                                value={inputData.ex_HomeAndUtilitiesWater}
                                onChange={handleChange}
                                class="form-control input-lg"
                                id="ex_HomeAndUtilitiesWater"
                                placeholder="Enter Amount"
                              />
                            </div>
                          </div>

                          <div class="form-row">
                            <div class="form-group col-md-6">
                              <label for="ex_HomeAndUtilitiesTrash">
                                Trash ( e.g. LAWMA)
                                </label>
                              <input
                                type="number"
                                name="ex_HomeAndUtilitiesTrash"
                                value={inputData.ex_HomeAndUtilitiesTrash}
                                onChange={handleChange}
                                class="form-control"
                                id="ex_HomeAndUtilitiesTrash"
                                placeholder="Enter Amount"
                              />
                            </div>
                            <div class="form-group col-md-6">
                              <label for="ex_HomeAndUtilitiesCable">
                                Cable TV/Netflix
                                </label>
                              <input
                                type="number"
                                name="ex_HomeAndUtilitiesCable"
                                value={inputData.ex_HomeAndUtilitiesCable}
                                onChange={handleChange}
                                class="form-control input-lg"
                                id="ex_HomeAndUtilitiesCable"
                                placeholder="Enter Amount"
                              />
                            </div>
                          </div>

                          <div class="form-row">
                            <div class="form-group col-md-6">
                              <label for="ex_HomeAndUtilitiesOthers">
                                Others
                                </label>
                              <input
                                type="number"
                                name="ex_HomeAndUtilitiesOthers"
                                value={inputData.ex_HomeAndUtilitiesOthers}
                                onChange={handleChange}
                                class="form-control input-lg"
                                id="ex_HomeAndUtilitiesOthers"
                                placeholder="Enter Amount"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="d-flex justify-content-between align-items-center mt-3">
                          <svg
                            onClick={() => setStage("stage1")}
                            className="btn btn-lg"
                            width="132"
                            height="45"
                            viewBox="0 0 132 45"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              x="0.5"
                              y="0.5"
                              width="131"
                              height="44"
                              rx="9.5"
                              fill="white"
                              stroke="#333333"
                            />
                            <path
                              d="M45 23H31"
                              stroke="black"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M38 16L31 23L38 30"
                              stroke="black"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M71.7998 22.24C72.4505 22.3787 72.9731 22.704 73.3678 23.216C73.7625 23.7173 73.9598 24.2933 73.9598 24.944C73.9598 25.8827 73.6291 26.6293 72.9678 27.184C72.3171 27.728 71.4051 28 70.2318 28H64.9998V16.768H70.0558C71.1971 16.768 72.0878 17.0293 72.7278 17.552C73.3785 18.0747 73.7038 18.784 73.7038 19.68C73.7038 20.3413 73.5278 20.8907 73.1758 21.328C72.8345 21.7653 72.3758 22.0693 71.7998 22.24ZM67.7358 21.312H69.5278C69.9758 21.312 70.3171 21.216 70.5518 21.024C70.7971 20.8213 70.9198 20.528 70.9198 20.144C70.9198 19.76 70.7971 19.4667 70.5518 19.264C70.3171 19.0613 69.9758 18.96 69.5278 18.96H67.7358V21.312ZM69.7518 25.792C70.2105 25.792 70.5625 25.6907 70.8078 25.488C71.0638 25.2747 71.1918 24.9707 71.1918 24.576C71.1918 24.1813 71.0585 23.872 70.7918 23.648C70.5358 23.424 70.1785 23.312 69.7198 23.312H67.7358V25.792H69.7518ZM75.0027 23.52C75.0027 22.6027 75.1734 21.7973 75.5147 21.104C75.8667 20.4107 76.3414 19.8773 76.9387 19.504C77.536 19.1307 78.2027 18.944 78.9387 18.944C79.568 18.944 80.1174 19.072 80.5867 19.328C81.0667 19.584 81.4347 19.92 81.6907 20.336V19.072H84.4267V28H81.6907V26.736C81.424 27.152 81.0507 27.488 80.5707 27.744C80.1014 28 79.552 28.128 78.9227 28.128C78.1974 28.128 77.536 27.9413 76.9387 27.568C76.3414 27.184 75.8667 26.6453 75.5147 25.952C75.1734 25.248 75.0027 24.4373 75.0027 23.52ZM81.6907 23.536C81.6907 22.8533 81.4987 22.3147 81.1147 21.92C80.7414 21.5253 80.2827 21.328 79.7387 21.328C79.1947 21.328 78.7307 21.5253 78.3467 21.92C77.9734 22.304 77.7867 22.8373 77.7867 23.52C77.7867 24.2027 77.9734 24.7467 78.3467 25.152C78.7307 25.5467 79.1947 25.744 79.7387 25.744C80.2827 25.744 80.7414 25.5467 81.1147 25.152C81.4987 24.7573 81.6907 24.2187 81.6907 23.536ZM85.8621 23.536C85.8621 22.608 86.0487 21.7973 86.4221 21.104C86.8061 20.4107 87.3341 19.8773 88.0061 19.504C88.6887 19.1307 89.4674 18.944 90.3421 18.944C91.4621 18.944 92.3954 19.2373 93.1421 19.824C93.8994 20.4107 94.3954 21.2373 94.6301 22.304H91.7181C91.4727 21.6213 90.9981 21.28 90.2941 21.28C89.7927 21.28 89.3927 21.4773 89.0941 21.872C88.7954 22.256 88.6461 22.8107 88.6461 23.536C88.6461 24.2613 88.7954 24.8213 89.0941 25.216C89.3927 25.6 89.7927 25.792 90.2941 25.792C90.9981 25.792 91.4727 25.4507 91.7181 24.768H94.6301C94.3954 25.8133 93.8994 26.6347 93.1421 27.232C92.3847 27.8293 91.4514 28.128 90.3421 28.128C89.4674 28.128 88.6887 27.9413 88.0061 27.568C87.3341 27.1947 86.8061 26.6613 86.4221 25.968C86.0487 25.2747 85.8621 24.464 85.8621 23.536ZM101.55 28L98.8296 24.256V28H96.0936V16.16H98.8296V22.704L101.534 19.072H104.91L101.198 23.552L104.942 28H101.55Z"
                              fill="#333333"
                            />
                          </svg>

                          <svg
                            style={{ marginTop: "15px" }}
                            onClick={() => setStage("stage3")}
                            className="btn"
                            width="132"
                            height="45"
                            viewBox="0 0 132 45"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              width="132"
                              height="45"
                              rx="10"
                              fill="#333333"
                            />
                            <path
                              d="M39.1416 28H36.4056L31.8296 21.072V28H29.0936V16.768H31.8296L36.4056 23.728V16.768H39.1416V28ZM49.5408 23.392C49.5408 23.648 49.5248 23.9147 49.4928 24.192H43.3008C43.3435 24.7467 43.5195 25.1733 43.8288 25.472C44.1488 25.76 44.5381 25.904 44.9968 25.904C45.6795 25.904 46.1541 25.616 46.4208 25.04H49.3328C49.1835 25.6267 48.9115 26.1547 48.5168 26.624C48.1328 27.0933 47.6475 27.4613 47.0608 27.728C46.4741 27.9947 45.8181 28.128 45.0928 28.128C44.2181 28.128 43.4395 27.9413 42.7568 27.568C42.0741 27.1947 41.5408 26.6613 41.1568 25.968C40.7728 25.2747 40.5808 24.464 40.5808 23.536C40.5808 22.608 40.7675 21.7973 41.1408 21.104C41.5248 20.4107 42.0581 19.8773 42.7408 19.504C43.4235 19.1307 44.2075 18.944 45.0928 18.944C45.9568 18.944 46.7248 19.1253 47.3968 19.488C48.0688 19.8507 48.5915 20.368 48.9648 21.04C49.3488 21.712 49.5408 22.496 49.5408 23.392ZM46.7408 22.672C46.7408 22.2027 46.5808 21.8293 46.2608 21.552C45.9408 21.2747 45.5408 21.136 45.0608 21.136C44.6021 21.136 44.2128 21.2693 43.8928 21.536C43.5835 21.8027 43.3915 22.1813 43.3168 22.672H46.7408ZM56.2642 28L54.5522 25.52L53.1122 28H50.1522L53.0962 23.44L50.0722 19.072H53.1442L54.8562 21.536L56.2962 19.072H59.2562L56.2642 23.568L59.3362 28H56.2642ZM65.3664 25.68V28H63.9744C62.9824 28 62.2091 27.76 61.6544 27.28C61.0998 26.7893 60.8224 25.9947 60.8224 24.896V21.344H59.7344V19.072H60.8224V16.896H63.5584V19.072H65.3504V21.344H63.5584V24.928C63.5584 25.1947 63.6224 25.3867 63.7504 25.504C63.8784 25.6213 64.0918 25.68 64.3904 25.68H65.3664Z"
                              fill="white"
                            />
                            <path
                              d="M85 23H99"
                              stroke="white"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M92 16L99 23L92 30"
                              stroke="white"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </div>
                      </div>
                    ),
                    stage3: (
                      <div className="cal-stage-wrapper">
                        <div>
                          <h1>My Expenses</h1>
                          <h3 className="wealth-form-heading">Food </h3>
                          <div class="form-row">
                            <div class="form-group col-md-6">
                              <label for="ex_FoodGroceries">groceries</label>
                              <input
                                type="number"
                                name="ex_FoodGroceries"
                                onChange={handleChange}
                                value={inputData.ex_FoodGroceries}
                                class="form-control"
                                id="ex_FoodGroceries"
                                placeholder="Enter Amount"
                              />
                            </div>
                            <div class="form-group col-md-6">
                              <label for="ex_FoodCookingGas">
                                Cooking gas
                                </label>
                              <input
                                type="number"
                                name="ex_FoodCookingGas"
                                onChange={handleChange}
                                value={inputData.ex_FoodCookingGas}
                                class="form-control input-lg"
                                id="ex_FoodCookingGas"
                                placeholder="Enter Amount"
                              />
                            </div>
                          </div>
                          <div class="form-row">
                            <div class="form-group col-md-6">
                              <label for="ex_FoodEatOut"> Eat out</label>
                              <input
                                type="number"
                                name="ex_FoodEatOut"
                                onChange={handleChange}
                                value={inputData.ex_FoodEatOut}
                                class="form-control"
                                id="ex_FoodEatOut"
                                placeholder="Enter Amount"
                              />
                            </div>
                          </div>

                          <h3 className="wealth-form-heading mt-4 mb-2">
                            Transportation{" "}
                          </h3>
                          <div class="form-row">
                            <div class="form-group col-md-6">
                              <label for="ex_TransportationFuel">Fuel</label>
                              <input
                                type="number"
                                name="ex_TransportationFuel"
                                value={inputData.ex_TransportationFuel}
                                onChange={handleChange}
                                class="form-control"
                                id="ex_TransportationFuel"
                                placeholder="Enter Amount"
                              />
                            </div>
                            <div class="form-group col-md-6">
                              <label for="ex_TransportationOil">
                                Car repair and maintenance
                                </label>
                              <input
                                type="number"
                                name="ex_TransportationOil"
                                value={inputData.ex_TransportationOil}
                                onChange={handleChange}
                                class="form-control input-lg"
                                id="ex_TransportationOil"
                                placeholder="Enter Amount"
                              />
                            </div>
                          </div>
                          <div class="form-row">
                            <div class="form-group col-md-6">
                              <label for="ex_TransportationPublicTrans">
                                Public transportation
                                </label>
                              <input
                                type="number"
                                value={inputData.ex_TransportationPublicTrans}
                                onChange={handleChange}
                                name="ex_TransportationPublicTrans"
                                class="form-control"
                                id="ex_TransportationPublicTrans"
                                placeholder="Enter Amount"
                              />
                            </div>
                          </div>

                          <h3 className="wealth-form-heading mt-4 mb-2">
                            Insurance{" "}
                          </h3>
                          <div class="form-row">
                            <div class="form-group col-md-6">
                              <label for="ex_InsuranceCar">Car</label>
                              <input
                                type="number"
                                name="ex_InsuranceCar"
                                value={inputData.ex_InsuranceCar}
                                onChange={handleChange}
                                class="form-control"
                                id="ex_InsuranceCar"
                                placeholder="Enter Amount"
                              />
                            </div>
                            <div class="form-group col-md-6">
                              <label for="life">Life</label>
                              <input
                                type="number"
                                name="life"
                                value={inputData.life}
                                onChange={handleChange}
                                class="form-control input-lg"
                                id="life"
                                placeholder="Enter Amount"
                              />
                            </div>
                          </div>
                          <div class="form-row">
                            <div class="form-group col-md-6">
                              <label for="ex_InsuranceHealth">Health</label>
                              <input
                                type="number"
                                name="ex_InsuranceHealth"
                                value={inputData.ex_InsuranceHealth}
                                onChange={handleChange}
                                class="form-control"
                                id="ex_InsuranceHealth"
                                placeholder="Enter Amount"
                              />
                            </div>
                          </div>

                          <h3 className="wealth-form-heading mt-4 mb-2">
                            Entertainment{" "}
                          </h3>
                          <div class="form-row">
                            {/* <div class="form-group col-md-6">
                              <label for="ex_EntertainmentMeals">Meals</label>
                              <input
                                type="number"
                                name="ex_EntertainmentMeals"
                                value={inputData.ex_EntertainmentMeals}
                                onChange={handleChange}
                                class="form-control"
                                id="ex_EntertainmentMeals"
                                placeholder="Enter Amount"
                              />
                            </div> */}
                            <div class="form-group col-md-6">
                              <label for="ex_EntertainmentMovies">
                                Movies/Events
                                </label>
                              <input
                                type="number"
                                name="ex_EntertainmentMovies"
                                value={inputData.ex_EntertainmentMovies}
                                onChange={handleChange}
                                class="form-control input-lg"
                                id="ex_EntertainmentMovies"
                                placeholder="Enter Amount"
                              />
                            </div>
                            <div class="form-group col-md-6">
                              <label for="ex_EntertainmentOthers">
                                Others
                                </label>
                              <input
                                type="number"
                                name="ex_EntertainmentOthers"
                                value={inputData.ex_EntertainmentOthers}
                                onChange={handleChange}
                                class="form-control input-lg"
                                id="ex_EntertainmentOthers"
                                placeholder="Enter Amount"
                              />
                            </div>
                          </div>
                          {/* <div class="form-row">
                            <div class="form-group col-md-6">
                              <label for="ex_EntertainmentOthers">
                                Others
                                </label>
                              <input
                                type="number"
                                name="ex_EntertainmentOthers"
                                value={inputData.ex_EntertainmentOthers}
                                onChange={handleChange}
                                class="form-control input-lg"
                                id="ex_EntertainmentOthers"
                                placeholder="Enter Amount"
                              />
                            </div>
                          </div> */}
                        </div>

                        <div className="d-flex justify-content-between align-items-center mt-3">
                          <svg
                            onClick={() => setStage("stage2")}
                            className="btn btn-lg"
                            width="132"
                            height="45"
                            viewBox="0 0 132 45"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              x="0.5"
                              y="0.5"
                              width="131"
                              height="44"
                              rx="9.5"
                              fill="white"
                              stroke="#333333"
                            />
                            <path
                              d="M45 23H31"
                              stroke="black"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M38 16L31 23L38 30"
                              stroke="black"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M71.7998 22.24C72.4505 22.3787 72.9731 22.704 73.3678 23.216C73.7625 23.7173 73.9598 24.2933 73.9598 24.944C73.9598 25.8827 73.6291 26.6293 72.9678 27.184C72.3171 27.728 71.4051 28 70.2318 28H64.9998V16.768H70.0558C71.1971 16.768 72.0878 17.0293 72.7278 17.552C73.3785 18.0747 73.7038 18.784 73.7038 19.68C73.7038 20.3413 73.5278 20.8907 73.1758 21.328C72.8345 21.7653 72.3758 22.0693 71.7998 22.24ZM67.7358 21.312H69.5278C69.9758 21.312 70.3171 21.216 70.5518 21.024C70.7971 20.8213 70.9198 20.528 70.9198 20.144C70.9198 19.76 70.7971 19.4667 70.5518 19.264C70.3171 19.0613 69.9758 18.96 69.5278 18.96H67.7358V21.312ZM69.7518 25.792C70.2105 25.792 70.5625 25.6907 70.8078 25.488C71.0638 25.2747 71.1918 24.9707 71.1918 24.576C71.1918 24.1813 71.0585 23.872 70.7918 23.648C70.5358 23.424 70.1785 23.312 69.7198 23.312H67.7358V25.792H69.7518ZM75.0027 23.52C75.0027 22.6027 75.1734 21.7973 75.5147 21.104C75.8667 20.4107 76.3414 19.8773 76.9387 19.504C77.536 19.1307 78.2027 18.944 78.9387 18.944C79.568 18.944 80.1174 19.072 80.5867 19.328C81.0667 19.584 81.4347 19.92 81.6907 20.336V19.072H84.4267V28H81.6907V26.736C81.424 27.152 81.0507 27.488 80.5707 27.744C80.1014 28 79.552 28.128 78.9227 28.128C78.1974 28.128 77.536 27.9413 76.9387 27.568C76.3414 27.184 75.8667 26.6453 75.5147 25.952C75.1734 25.248 75.0027 24.4373 75.0027 23.52ZM81.6907 23.536C81.6907 22.8533 81.4987 22.3147 81.1147 21.92C80.7414 21.5253 80.2827 21.328 79.7387 21.328C79.1947 21.328 78.7307 21.5253 78.3467 21.92C77.9734 22.304 77.7867 22.8373 77.7867 23.52C77.7867 24.2027 77.9734 24.7467 78.3467 25.152C78.7307 25.5467 79.1947 25.744 79.7387 25.744C80.2827 25.744 80.7414 25.5467 81.1147 25.152C81.4987 24.7573 81.6907 24.2187 81.6907 23.536ZM85.8621 23.536C85.8621 22.608 86.0487 21.7973 86.4221 21.104C86.8061 20.4107 87.3341 19.8773 88.0061 19.504C88.6887 19.1307 89.4674 18.944 90.3421 18.944C91.4621 18.944 92.3954 19.2373 93.1421 19.824C93.8994 20.4107 94.3954 21.2373 94.6301 22.304H91.7181C91.4727 21.6213 90.9981 21.28 90.2941 21.28C89.7927 21.28 89.3927 21.4773 89.0941 21.872C88.7954 22.256 88.6461 22.8107 88.6461 23.536C88.6461 24.2613 88.7954 24.8213 89.0941 25.216C89.3927 25.6 89.7927 25.792 90.2941 25.792C90.9981 25.792 91.4727 25.4507 91.7181 24.768H94.6301C94.3954 25.8133 93.8994 26.6347 93.1421 27.232C92.3847 27.8293 91.4514 28.128 90.3421 28.128C89.4674 28.128 88.6887 27.9413 88.0061 27.568C87.3341 27.1947 86.8061 26.6613 86.4221 25.968C86.0487 25.2747 85.8621 24.464 85.8621 23.536ZM101.55 28L98.8296 24.256V28H96.0936V16.16H98.8296V22.704L101.534 19.072H104.91L101.198 23.552L104.942 28H101.55Z"
                              fill="#333333"
                            />
                          </svg>

                          <svg
                            style={{ marginTop: "15px" }}
                            onClick={() => setStage("stage4")}
                            className="btn"
                            width="132"
                            height="45"
                            viewBox="0 0 132 45"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              width="132"
                              height="45"
                              rx="10"
                              fill="#333333"
                            />
                            <path
                              d="M39.1416 28H36.4056L31.8296 21.072V28H29.0936V16.768H31.8296L36.4056 23.728V16.768H39.1416V28ZM49.5408 23.392C49.5408 23.648 49.5248 23.9147 49.4928 24.192H43.3008C43.3435 24.7467 43.5195 25.1733 43.8288 25.472C44.1488 25.76 44.5381 25.904 44.9968 25.904C45.6795 25.904 46.1541 25.616 46.4208 25.04H49.3328C49.1835 25.6267 48.9115 26.1547 48.5168 26.624C48.1328 27.0933 47.6475 27.4613 47.0608 27.728C46.4741 27.9947 45.8181 28.128 45.0928 28.128C44.2181 28.128 43.4395 27.9413 42.7568 27.568C42.0741 27.1947 41.5408 26.6613 41.1568 25.968C40.7728 25.2747 40.5808 24.464 40.5808 23.536C40.5808 22.608 40.7675 21.7973 41.1408 21.104C41.5248 20.4107 42.0581 19.8773 42.7408 19.504C43.4235 19.1307 44.2075 18.944 45.0928 18.944C45.9568 18.944 46.7248 19.1253 47.3968 19.488C48.0688 19.8507 48.5915 20.368 48.9648 21.04C49.3488 21.712 49.5408 22.496 49.5408 23.392ZM46.7408 22.672C46.7408 22.2027 46.5808 21.8293 46.2608 21.552C45.9408 21.2747 45.5408 21.136 45.0608 21.136C44.6021 21.136 44.2128 21.2693 43.8928 21.536C43.5835 21.8027 43.3915 22.1813 43.3168 22.672H46.7408ZM56.2642 28L54.5522 25.52L53.1122 28H50.1522L53.0962 23.44L50.0722 19.072H53.1442L54.8562 21.536L56.2962 19.072H59.2562L56.2642 23.568L59.3362 28H56.2642ZM65.3664 25.68V28H63.9744C62.9824 28 62.2091 27.76 61.6544 27.28C61.0998 26.7893 60.8224 25.9947 60.8224 24.896V21.344H59.7344V19.072H60.8224V16.896H63.5584V19.072H65.3504V21.344H63.5584V24.928C63.5584 25.1947 63.6224 25.3867 63.7504 25.504C63.8784 25.6213 64.0918 25.68 64.3904 25.68H65.3664Z"
                              fill="white"
                            />
                            <path
                              d="M85 23H99"
                              stroke="white"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M92 16L99 23L92 30"
                              stroke="white"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </div>
                      </div>
                    ),
                    stage4: (
                      <div className="cal-stage-wrapper">
                        <h1>My Expenses</h1>
                        <h3 className="wealth-form-heading">
                          Services and Support{" "}
                        </h3>

                        <div class="form-row">
                          <div class="form-group col-md-6">
                            <label for="ex_ServicesAndSupportDriver">
                              Driver
                              </label>
                            <input
                              type="number"
                              name="ex_ServicesAndSupportDriver"
                              onChange={handleChange}
                              value={inputData.ex_ServicesAndSupportDriver}
                              class="form-control"
                              id="ex_ServicesAndSupportDriver"
                              placeholder="Enter Amount"
                            />
                          </div>
                          <div class="form-group col-md-6">
                            <label for="ex_ServicesAndSupportCook">
                              Cook
                              </label>
                            <input
                              type="number"
                              name="ex_ServicesAndSupportCook"
                              onChange={handleChange}
                              value={inputData.ex_ServicesAndSupportCook}
                              class="form-control input-lg"
                              id="ex_ServicesAndSupportCook"
                              placeholder="Enter Amount"
                            />
                          </div>
                        </div>
                        <div class="form-row">
                          <div class="form-group col-md-6">
                            <label for="ex_ServicesAndSupportGardener">
                              Gardener
                              </label>
                            <input
                              type="number"
                              name="ex_ServicesAndSupportGardener"
                              onChange={handleChange}
                              value={inputData.ex_ServicesAndSupportGardener}
                              class="form-control input-lg"
                              id="ex_ServicesAndSupportGardener"
                              placeholder="Enter Amount"
                            />
                          </div>
                          <div class="form-group col-md-6">
                            <label for="ex_ServicesAndSupportOthers">
                              Others
                              </label>
                            <input
                              type="number"
                              name="ex_ServicesAndSupportOthers"
                              onChange={handleChange}
                              value={inputData.ex_ServicesAndSupportOthers}
                              class="form-control input-lg"
                              id="ex_ServicesAndSupportOthers"
                              placeholder="Enter Amount"
                            />
                          </div>
                        </div>

                        <h3 className="wealth-form-heading mt-4 mb-2">
                          Personal{" "}
                        </h3>
                        <div class="form-row">
                          <div class="form-group col-md-6">
                            <label for="ex_PersonalBeauty">Beauty</label>
                            <input
                              type="number"
                              name="ex_PersonalBeauty"
                              value={inputData.ex_PersonalBeauty}
                              onChange={handleChange}
                              class="form-control"
                              id="ex_PersonalBeauty"
                              placeholder="Enter Amount"
                            />
                          </div>
                          <div class="form-group col-md-6">
                            <label for="ex_PersonalEducation">
                              Education (e.g. Upskilling workshops)
                              </label>
                            <input
                              type="number"
                              name="ex_PersonalEducation"
                              value={inputData.ex_PersonalEducation}
                              onChange={handleChange}
                              class="form-control input-lg"
                              id="ex_PersonalEducation"
                              placeholder="Enter Amount"
                            />
                          </div>
                        </div>
                        <div class="form-row">
                          <div class="form-group col-md-6">
                            <label for="ex_PersonalHouseholdItems">
                              Household Items
                              </label>
                            <input
                              type="number"
                              name="ex_PersonalHouseholdItems"
                              value={inputData.ex_PersonalHouseholdItems}
                              onChange={handleChange}
                              class="form-control input-lg"
                              id="ex_PersonalHouseholdItems"
                              placeholder="Enter Amount"
                            />
                          </div>
                          <div class="form-group col-md-6">
                            <label for="ex_PersonalHouseholdOthers">
                              Others
                              </label>
                            <input
                              type="number"
                              name="ex_PersonalHouseholdOthers"
                              value={inputData.ex_PersonalHouseholdOthers}
                              onChange={handleChange}
                              class="form-control input-lg"
                              id="ex_PersonalHouseholdOthers"
                              placeholder="Enter Amount"
                            />
                          </div>
                        </div>
                        <h3 className="wealth-form-heading mt-4 mb-2">
                          Child care{" "}
                        </h3>
                        <div class="form-row">
                          <div class="form-group col-md-6">
                            <label for="ex_ChildCareNanny">
                              Child Care (Nanny)
                              </label>
                            <input
                              type="number"
                              name="ex_ChildCareNanny"
                              value={inputData.ex_ChildCareNanny}
                              onChange={handleChange}
                              class="form-control"
                              id="ex_ChildCareNanny"
                              placeholder="Enter Amount"
                            />
                          </div>
                          <div class="form-group col-md-6">
                            <label for="ex_ChildCareSchoolFees">
                              School Fees
                              </label>
                            <input
                              type="number"
                              name="ex_ChildCareSchoolFees"
                              value={inputData.ex_ChildCareSchoolFees}
                              onChange={handleChange}
                              class="form-control input-lg"
                              id="ex_ChildCareSchoolFees"
                              placeholder="Enter Amount"
                            />
                          </div>
                        </div>

                        <div class="form-row">
                          <div class="form-group col-md-6">
                            <label for="ex_ChildCareOthers">Others</label>
                            <input
                              type="number"
                              name="ex_ChildCareOthers"
                              value={inputData.ex_ChildCareOthers}
                              onChange={handleChange}
                              class="form-control input-lg"
                              id="ex_ChildCareOthers"
                              placeholder="Enter Amount"
                            />
                          </div>
                        </div>

                        <h3 className="wealth-form-heading mt-4 mb-2">
                          Giving{" "}
                        </h3>
                        <div class="form-row">
                          <div class="form-group col-md-6">
                            <label for="ex_GivingTithe">Tithe/Charity</label>
                            <input
                              type="number"
                              name="ex_GivingTithe"
                              value={inputData.ex_GivingTithe}
                              onChange={handleChange}
                              class="form-control"
                              id="ex_GivingTithe"
                              placeholder="Enter Amount"
                            />
                          </div>
                          <div class="form-group col-md-6">
                            <label for="ex_GivingOffering">Offering</label>
                            <input
                              type="number"
                              name="ex_GivingOffering"
                              value={inputData.ex_GivingOffering}
                              onChange={handleChange}
                              class="form-control input-lg"
                              id="ex_GivingOffering"
                              placeholder="Enter Amount"
                            />
                          </div>
                        </div>
                        <div class="form-row">
                          <div class="form-group col-md-6">
                            <label for="ex_GivingRandomHelpToPeople">
                              Random help to people
                              </label>
                            <input
                              type="number"
                              name="ex_GivingRandomHelpToPeople"
                              value={inputData.ex_GivingRandomHelpToPeople}
                              onChange={handleChange}
                              class="form-control"
                              id="ex_GivingRandomHelpToPeople"
                              placeholder="Enter Amount"
                            />
                          </div>
                          <div class="form-group col-md-6">
                            <label for="ex_GivingFamily">Family</label>
                            <input
                              type="number"
                              name="ex_GivingFamily"
                              value={inputData.ex_GivingFamily}
                              onChange={handleChange}
                              class="form-control input-lg"
                              id="ex_GivingFamily"
                              placeholder="Enter Amount"
                            />
                          </div>
                        </div>
                        <div class="form-row">
                          <div class="form-group col-md-6">
                            <label for="ex_GivingOthers">Others</label>
                            <input
                              type="number"
                              name="ex_GivingOthers"
                              value={inputData.ex_GivingOthers}
                              onChange={handleChange}
                              class="form-control input-lg"
                              id="ex_GivingOthers"
                              placeholder="Enter Amount"
                            />
                          </div>
                        </div>

                        {/* <h3 className="wealth-form-heading mt-4 mb-2">
                         
                            Investment Expense
                        </h3>
                        <div
                          class="col-12 col-md-12 input-group input-group-lg mt-3"
                          style={{ marginLeft: "-10px" }}
                        >
                          <div style={{ width: "100%" }}>
                            <label className="text-body ">
                              Fixed income (treasury bill, fixed deposit,
                              bond)
                              </label>
                          </div>
                          <input
                            className="form-control text-input"
                            type="number"
                            name="ex_InvestmentExpense"
                            value={inputData.ex_InvestmentExpense}
                            onChange={handleChange}
                            placeholder="Enter Investment Expense"
                            required
                          />
                          <div className="input-group-append">
                            <div
                              style={{ background: "#F0008C" }}
                              className="input-group-text"
                            >
                              <select value={inputData.ex_InvestmentExpenseDuration} name="ex_InvestmentExpenseDuration" onChange={handleChange} class="custom-selectX">
                                <option selected>monthly</option>
                                <option>Annual</option>
                               
                              </select>
                            </div>
                          </div>
                        </div> */}

                        <div className="d-flex justify-content-between align-items-center mt-3">
                          <svg
                            onClick={() => setStage("stage3")}
                            className="btn btn-lg"
                            width="132"
                            height="45"
                            viewBox="0 0 132 45"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              x="0.5"
                              y="0.5"
                              width="131"
                              height="44"
                              rx="9.5"
                              fill="white"
                              stroke="#333333"
                            />
                            <path
                              d="M45 23H31"
                              stroke="black"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M38 16L31 23L38 30"
                              stroke="black"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M71.7998 22.24C72.4505 22.3787 72.9731 22.704 73.3678 23.216C73.7625 23.7173 73.9598 24.2933 73.9598 24.944C73.9598 25.8827 73.6291 26.6293 72.9678 27.184C72.3171 27.728 71.4051 28 70.2318 28H64.9998V16.768H70.0558C71.1971 16.768 72.0878 17.0293 72.7278 17.552C73.3785 18.0747 73.7038 18.784 73.7038 19.68C73.7038 20.3413 73.5278 20.8907 73.1758 21.328C72.8345 21.7653 72.3758 22.0693 71.7998 22.24ZM67.7358 21.312H69.5278C69.9758 21.312 70.3171 21.216 70.5518 21.024C70.7971 20.8213 70.9198 20.528 70.9198 20.144C70.9198 19.76 70.7971 19.4667 70.5518 19.264C70.3171 19.0613 69.9758 18.96 69.5278 18.96H67.7358V21.312ZM69.7518 25.792C70.2105 25.792 70.5625 25.6907 70.8078 25.488C71.0638 25.2747 71.1918 24.9707 71.1918 24.576C71.1918 24.1813 71.0585 23.872 70.7918 23.648C70.5358 23.424 70.1785 23.312 69.7198 23.312H67.7358V25.792H69.7518ZM75.0027 23.52C75.0027 22.6027 75.1734 21.7973 75.5147 21.104C75.8667 20.4107 76.3414 19.8773 76.9387 19.504C77.536 19.1307 78.2027 18.944 78.9387 18.944C79.568 18.944 80.1174 19.072 80.5867 19.328C81.0667 19.584 81.4347 19.92 81.6907 20.336V19.072H84.4267V28H81.6907V26.736C81.424 27.152 81.0507 27.488 80.5707 27.744C80.1014 28 79.552 28.128 78.9227 28.128C78.1974 28.128 77.536 27.9413 76.9387 27.568C76.3414 27.184 75.8667 26.6453 75.5147 25.952C75.1734 25.248 75.0027 24.4373 75.0027 23.52ZM81.6907 23.536C81.6907 22.8533 81.4987 22.3147 81.1147 21.92C80.7414 21.5253 80.2827 21.328 79.7387 21.328C79.1947 21.328 78.7307 21.5253 78.3467 21.92C77.9734 22.304 77.7867 22.8373 77.7867 23.52C77.7867 24.2027 77.9734 24.7467 78.3467 25.152C78.7307 25.5467 79.1947 25.744 79.7387 25.744C80.2827 25.744 80.7414 25.5467 81.1147 25.152C81.4987 24.7573 81.6907 24.2187 81.6907 23.536ZM85.8621 23.536C85.8621 22.608 86.0487 21.7973 86.4221 21.104C86.8061 20.4107 87.3341 19.8773 88.0061 19.504C88.6887 19.1307 89.4674 18.944 90.3421 18.944C91.4621 18.944 92.3954 19.2373 93.1421 19.824C93.8994 20.4107 94.3954 21.2373 94.6301 22.304H91.7181C91.4727 21.6213 90.9981 21.28 90.2941 21.28C89.7927 21.28 89.3927 21.4773 89.0941 21.872C88.7954 22.256 88.6461 22.8107 88.6461 23.536C88.6461 24.2613 88.7954 24.8213 89.0941 25.216C89.3927 25.6 89.7927 25.792 90.2941 25.792C90.9981 25.792 91.4727 25.4507 91.7181 24.768H94.6301C94.3954 25.8133 93.8994 26.6347 93.1421 27.232C92.3847 27.8293 91.4514 28.128 90.3421 28.128C89.4674 28.128 88.6887 27.9413 88.0061 27.568C87.3341 27.1947 86.8061 26.6613 86.4221 25.968C86.0487 25.2747 85.8621 24.464 85.8621 23.536ZM101.55 28L98.8296 24.256V28H96.0936V16.16H98.8296V22.704L101.534 19.072H104.91L101.198 23.552L104.942 28H101.55Z"
                              fill="#333333"
                            />
                          </svg>

                          <svg
                            style={{ marginTop: "15px" }}
                            onClick={() => setStage("stage5")}
                            className="btn"
                            width="132"
                            height="45"
                            viewBox="0 0 132 45"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              width="132"
                              height="45"
                              rx="10"
                              fill="#333333"
                            />
                            <path
                              d="M39.1416 28H36.4056L31.8296 21.072V28H29.0936V16.768H31.8296L36.4056 23.728V16.768H39.1416V28ZM49.5408 23.392C49.5408 23.648 49.5248 23.9147 49.4928 24.192H43.3008C43.3435 24.7467 43.5195 25.1733 43.8288 25.472C44.1488 25.76 44.5381 25.904 44.9968 25.904C45.6795 25.904 46.1541 25.616 46.4208 25.04H49.3328C49.1835 25.6267 48.9115 26.1547 48.5168 26.624C48.1328 27.0933 47.6475 27.4613 47.0608 27.728C46.4741 27.9947 45.8181 28.128 45.0928 28.128C44.2181 28.128 43.4395 27.9413 42.7568 27.568C42.0741 27.1947 41.5408 26.6613 41.1568 25.968C40.7728 25.2747 40.5808 24.464 40.5808 23.536C40.5808 22.608 40.7675 21.7973 41.1408 21.104C41.5248 20.4107 42.0581 19.8773 42.7408 19.504C43.4235 19.1307 44.2075 18.944 45.0928 18.944C45.9568 18.944 46.7248 19.1253 47.3968 19.488C48.0688 19.8507 48.5915 20.368 48.9648 21.04C49.3488 21.712 49.5408 22.496 49.5408 23.392ZM46.7408 22.672C46.7408 22.2027 46.5808 21.8293 46.2608 21.552C45.9408 21.2747 45.5408 21.136 45.0608 21.136C44.6021 21.136 44.2128 21.2693 43.8928 21.536C43.5835 21.8027 43.3915 22.1813 43.3168 22.672H46.7408ZM56.2642 28L54.5522 25.52L53.1122 28H50.1522L53.0962 23.44L50.0722 19.072H53.1442L54.8562 21.536L56.2962 19.072H59.2562L56.2642 23.568L59.3362 28H56.2642ZM65.3664 25.68V28H63.9744C62.9824 28 62.2091 27.76 61.6544 27.28C61.0998 26.7893 60.8224 25.9947 60.8224 24.896V21.344H59.7344V19.072H60.8224V16.896H63.5584V19.072H65.3504V21.344H63.5584V24.928C63.5584 25.1947 63.6224 25.3867 63.7504 25.504C63.8784 25.6213 64.0918 25.68 64.3904 25.68H65.3664Z"
                              fill="white"
                            />
                            <path
                              d="M85 23H99"
                              stroke="white"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M92 16L99 23L92 30"
                              stroke="white"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </div>
                      </div>
                    ),
                    stage5: (
                      <div className="cal-stage-wrapper">
                        <h1> Current Net Worth</h1>
                        
                        <h3 className="wealth-form-heading">Savings </h3>
                        <div class="form-row">
                          <div class="form-group col-md-6">
                            <label for="savingsEmergencyFund">
                              How much do you have in your emergency fund?{" "}
                            </label>
                            <input
                              type="number"
                              name="savingsEmergencyFund"
                              value={inputData.savingsEmergencyFund}
                              onChange={handleChange}
                              class="form-control"
                              id="savingsEmergencyFund"
                              placeholder="Enter Amount"
                            />
                          </div>
                          <div class="form-group col-md-6">
                            <label for="savingsDollarSavingsAccount">
                              Dollar Savings Account
                              </label>
                            <input
                              type="number"
                              name="savingsDollarSavingsAccount"
                              value={inputData.savingsDollarSavingsAccount}
                              onChange={handleChange}
                              class="form-control input-lg"
                              id="savingsDollarSavingsAccount"
                              placeholder="Enter Amount"
                            />
                          </div>
                        </div>
                        
                        <div class="form-row">
                          <div class="form-group col-md-6">
                            <label for="savingsNairaSavingsAccount">
                              Naira Savings Account
                              </label>
                            <input
                              type="number"
                              onChange={handleChange}
                              name="savingsNairaSavingsAccount"
                              value={inputData.savingsNairaSavingsAccount}
                              class="form-control input-lg"
                              id="savingsNairaSavingsAccount"
                              placeholder="Enter Amount"
                            />
                          </div>
                        </div>

                        <h3 className="wealth-form-heading mt-4 mb-2">
                          Others{" "}
                        </h3>
                        <div class="form-row">
                          <div class="form-group col-md-6">
                            <label for="savingsOthers">Others</label>
                            <input
                              type="number"
                              name="savingsOthers"
                              value={inputData.savingsOthers}
                              onChange={handleChange}
                              class="form-control"
                              id="savingsOthers"
                              placeholder="Enter Amount"
                            />
                          </div>
                        </div>

                        <div className="d-flex justify-content-between align-items-center mt-3">
                          <svg
                            onClick={() => setStage("stage4")}
                            className="btn btn-lg"
                            width="132"
                            height="45"
                            viewBox="0 0 132 45"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              x="0.5"
                              y="0.5"
                              width="131"
                              height="44"
                              rx="9.5"
                              fill="white"
                              stroke="#333333"
                            />
                            <path
                              d="M45 23H31"
                              stroke="black"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M38 16L31 23L38 30"
                              stroke="black"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M71.7998 22.24C72.4505 22.3787 72.9731 22.704 73.3678 23.216C73.7625 23.7173 73.9598 24.2933 73.9598 24.944C73.9598 25.8827 73.6291 26.6293 72.9678 27.184C72.3171 27.728 71.4051 28 70.2318 28H64.9998V16.768H70.0558C71.1971 16.768 72.0878 17.0293 72.7278 17.552C73.3785 18.0747 73.7038 18.784 73.7038 19.68C73.7038 20.3413 73.5278 20.8907 73.1758 21.328C72.8345 21.7653 72.3758 22.0693 71.7998 22.24ZM67.7358 21.312H69.5278C69.9758 21.312 70.3171 21.216 70.5518 21.024C70.7971 20.8213 70.9198 20.528 70.9198 20.144C70.9198 19.76 70.7971 19.4667 70.5518 19.264C70.3171 19.0613 69.9758 18.96 69.5278 18.96H67.7358V21.312ZM69.7518 25.792C70.2105 25.792 70.5625 25.6907 70.8078 25.488C71.0638 25.2747 71.1918 24.9707 71.1918 24.576C71.1918 24.1813 71.0585 23.872 70.7918 23.648C70.5358 23.424 70.1785 23.312 69.7198 23.312H67.7358V25.792H69.7518ZM75.0027 23.52C75.0027 22.6027 75.1734 21.7973 75.5147 21.104C75.8667 20.4107 76.3414 19.8773 76.9387 19.504C77.536 19.1307 78.2027 18.944 78.9387 18.944C79.568 18.944 80.1174 19.072 80.5867 19.328C81.0667 19.584 81.4347 19.92 81.6907 20.336V19.072H84.4267V28H81.6907V26.736C81.424 27.152 81.0507 27.488 80.5707 27.744C80.1014 28 79.552 28.128 78.9227 28.128C78.1974 28.128 77.536 27.9413 76.9387 27.568C76.3414 27.184 75.8667 26.6453 75.5147 25.952C75.1734 25.248 75.0027 24.4373 75.0027 23.52ZM81.6907 23.536C81.6907 22.8533 81.4987 22.3147 81.1147 21.92C80.7414 21.5253 80.2827 21.328 79.7387 21.328C79.1947 21.328 78.7307 21.5253 78.3467 21.92C77.9734 22.304 77.7867 22.8373 77.7867 23.52C77.7867 24.2027 77.9734 24.7467 78.3467 25.152C78.7307 25.5467 79.1947 25.744 79.7387 25.744C80.2827 25.744 80.7414 25.5467 81.1147 25.152C81.4987 24.7573 81.6907 24.2187 81.6907 23.536ZM85.8621 23.536C85.8621 22.608 86.0487 21.7973 86.4221 21.104C86.8061 20.4107 87.3341 19.8773 88.0061 19.504C88.6887 19.1307 89.4674 18.944 90.3421 18.944C91.4621 18.944 92.3954 19.2373 93.1421 19.824C93.8994 20.4107 94.3954 21.2373 94.6301 22.304H91.7181C91.4727 21.6213 90.9981 21.28 90.2941 21.28C89.7927 21.28 89.3927 21.4773 89.0941 21.872C88.7954 22.256 88.6461 22.8107 88.6461 23.536C88.6461 24.2613 88.7954 24.8213 89.0941 25.216C89.3927 25.6 89.7927 25.792 90.2941 25.792C90.9981 25.792 91.4727 25.4507 91.7181 24.768H94.6301C94.3954 25.8133 93.8994 26.6347 93.1421 27.232C92.3847 27.8293 91.4514 28.128 90.3421 28.128C89.4674 28.128 88.6887 27.9413 88.0061 27.568C87.3341 27.1947 86.8061 26.6613 86.4221 25.968C86.0487 25.2747 85.8621 24.464 85.8621 23.536ZM101.55 28L98.8296 24.256V28H96.0936V16.16H98.8296V22.704L101.534 19.072H104.91L101.198 23.552L104.942 28H101.55Z"
                              fill="#333333"
                            />
                          </svg>

                          <svg
                            style={{ marginTop: "15px" }}
                            onClick={() => {
                              handleCalculate()
                              setStage("stage6")
                            }}
                            className="btn"
                            width="132"
                            height="45"
                            viewBox="0 0 132 45"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              width="132"
                              height="45"
                              rx="10"
                              fill="#333333"
                            />
                            <path
                              d="M26.9421 22.368C26.9421 21.2587 27.1821 20.272 27.6621 19.408C28.1421 18.5333 28.8087 17.856 29.6621 17.376C30.5261 16.8853 31.5021 16.64 32.5901 16.64C33.9234 16.64 35.0647 16.992 36.0141 17.696C36.9634 18.4 37.5981 19.36 37.9181 20.576H34.9101C34.6861 20.1067 34.3661 19.7493 33.9501 19.504C33.5447 19.2587 33.0807 19.136 32.5581 19.136C31.7154 19.136 31.0327 19.4293 30.5101 20.016C29.9874 20.6027 29.7261 21.3867 29.7261 22.368C29.7261 23.3493 29.9874 24.1333 30.5101 24.72C31.0327 25.3067 31.7154 25.6 32.5581 25.6C33.0807 25.6 33.5447 25.4773 33.9501 25.232C34.3661 24.9867 34.6861 24.6293 34.9101 24.16H37.9181C37.5981 25.376 36.9634 26.336 36.0141 27.04C35.0647 27.7333 33.9234 28.08 32.5901 28.08C31.5021 28.08 30.5261 27.84 29.6621 27.36C28.8087 26.8693 28.1421 26.192 27.6621 25.328C27.1821 24.464 26.9421 23.4773 26.9421 22.368ZM39.0496 23.52C39.0496 22.6027 39.2202 21.7973 39.5616 21.104C39.9136 20.4107 40.3882 19.8773 40.9856 19.504C41.5829 19.1307 42.2496 18.944 42.9856 18.944C43.6149 18.944 44.1642 19.072 44.6336 19.328C45.1136 19.584 45.4816 19.92 45.7376 20.336V19.072H48.4736V28H45.7376V26.736C45.4709 27.152 45.0976 27.488 44.6176 27.744C44.1482 28 43.5989 28.128 42.9696 28.128C42.2442 28.128 41.5829 27.9413 40.9856 27.568C40.3882 27.184 39.9136 26.6453 39.5616 25.952C39.2202 25.248 39.0496 24.4373 39.0496 23.52ZM45.7376 23.536C45.7376 22.8533 45.5456 22.3147 45.1616 21.92C44.7882 21.5253 44.3296 21.328 43.7856 21.328C43.2416 21.328 42.7776 21.5253 42.3936 21.92C42.0202 22.304 41.8336 22.8373 41.8336 23.52C41.8336 24.2027 42.0202 24.7467 42.3936 25.152C42.7776 25.5467 43.2416 25.744 43.7856 25.744C44.3296 25.744 44.7882 25.5467 45.1616 25.152C45.5456 24.7573 45.7376 24.2187 45.7376 23.536ZM53.1889 16.16V28H50.4529V16.16H53.1889ZM54.6277 23.536C54.6277 22.608 54.8144 21.7973 55.1877 21.104C55.5717 20.4107 56.0997 19.8773 56.7717 19.504C57.4544 19.1307 58.233 18.944 59.1077 18.944C60.2277 18.944 61.161 19.2373 61.9077 19.824C62.665 20.4107 63.161 21.2373 63.3957 22.304H60.4837C60.2384 21.6213 59.7637 21.28 59.0597 21.28C58.5584 21.28 58.1584 21.4773 57.8597 21.872C57.561 22.256 57.4117 22.8107 57.4117 23.536C57.4117 24.2613 57.561 24.8213 57.8597 25.216C58.1584 25.6 58.5584 25.792 59.0597 25.792C59.7637 25.792 60.2384 25.4507 60.4837 24.768H63.3957C63.161 25.8133 62.665 26.6347 61.9077 27.232C61.1504 27.8293 60.217 28.128 59.1077 28.128C58.233 28.128 57.4544 27.9413 56.7717 27.568C56.0997 27.1947 55.5717 26.6613 55.1877 25.968C54.8144 25.2747 54.6277 24.464 54.6277 23.536ZM73.6752 19.072V28H70.9392V26.784C70.6619 27.1787 70.2832 27.4987 69.8032 27.744C69.3339 27.9787 68.8112 28.096 68.2352 28.096C67.5525 28.096 66.9499 27.9467 66.4272 27.648C65.9045 27.3387 65.4992 26.896 65.2112 26.32C64.9232 25.744 64.7792 25.0667 64.7792 24.288V19.072H67.4992V23.92C67.4992 24.5173 67.6539 24.9813 67.9632 25.312C68.2725 25.6427 68.6885 25.808 69.2112 25.808C69.7445 25.808 70.1659 25.6427 70.4752 25.312C70.7845 24.9813 70.9392 24.5173 70.9392 23.92V19.072H73.6752ZM78.3764 16.16V28H75.6404V16.16H78.3764ZM79.8152 23.52C79.8152 22.6027 79.9859 21.7973 80.3272 21.104C80.6792 20.4107 81.1539 19.8773 81.7512 19.504C82.3485 19.1307 83.0152 18.944 83.7512 18.944C84.3805 18.944 84.9299 19.072 85.3992 19.328C85.8792 19.584 86.2472 19.92 86.5032 20.336V19.072H89.2392V28H86.5032V26.736C86.2365 27.152 85.8632 27.488 85.3832 27.744C84.9139 28 84.3645 28.128 83.7352 28.128C83.0099 28.128 82.3485 27.9413 81.7512 27.568C81.1539 27.184 80.6792 26.6453 80.3272 25.952C79.9859 25.248 79.8152 24.4373 79.8152 23.52ZM86.5032 23.536C86.5032 22.8533 86.3112 22.3147 85.9272 21.92C85.5539 21.5253 85.0952 21.328 84.5512 21.328C84.0072 21.328 83.5432 21.5253 83.1592 21.92C82.7859 22.304 82.5992 22.8373 82.5992 23.52C82.5992 24.2027 82.7859 24.7467 83.1592 25.152C83.5432 25.5467 84.0072 25.744 84.5512 25.744C85.0952 25.744 85.5539 25.5467 85.9272 25.152C86.3112 24.7573 86.5032 24.2187 86.5032 23.536ZM96.1946 25.68V28H94.8026C93.8106 28 93.0372 27.76 92.4826 27.28C91.9279 26.7893 91.6506 25.9947 91.6506 24.896V21.344H90.5626V19.072H91.6506V16.896H94.3866V19.072H96.1786V21.344H94.3866V24.928C94.3866 25.1947 94.4506 25.3867 94.5786 25.504C94.7066 25.6213 94.9199 25.68 95.2186 25.68H96.1946ZM106.135 23.392C106.135 23.648 106.119 23.9147 106.087 24.192H99.8946C99.9372 24.7467 100.113 25.1733 100.423 25.472C100.743 25.76 101.132 25.904 101.591 25.904C102.273 25.904 102.748 25.616 103.015 25.04H105.927C105.777 25.6267 105.505 26.1547 105.111 26.624C104.727 27.0933 104.241 27.4613 103.655 27.728C103.068 27.9947 102.412 28.128 101.687 28.128C100.812 28.128 100.033 27.9413 99.3506 27.568C98.6679 27.1947 98.1346 26.6613 97.7506 25.968C97.3666 25.2747 97.1746 24.464 97.1746 23.536C97.1746 22.608 97.3612 21.7973 97.7346 21.104C98.1186 20.4107 98.6519 19.8773 99.3346 19.504C100.017 19.1307 100.801 18.944 101.687 18.944C102.551 18.944 103.319 19.1253 103.991 19.488C104.663 19.8507 105.185 20.368 105.559 21.04C105.943 21.712 106.135 22.496 106.135 23.392ZM103.335 22.672C103.335 22.2027 103.175 21.8293 102.855 21.552C102.535 21.2747 102.135 21.136 101.655 21.136C101.196 21.136 100.807 21.2693 100.487 21.536C100.177 21.8027 99.9852 22.1813 99.9106 22.672H103.335Z"
                              fill="white"
                            />
                          </svg>
                        </div>

                      </div>
                    ),
                    stage6: (
                      <div >
                        <div className="cal-stage-wrapper">
                          <h1 className="h11">Overview</h1>
                          <div className="overview-result">
                            <div className="overview-result-left">
                              <div className="d-flex align-items-center justify-content-between">
                                <div className="d-flex align-items-center">
                                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="6" cy="6" r="6" fill="#FF5660" />
                                  </svg>
                                  <div className="ml-2" style={{ fontSize: "18px", color: " #333333" }}>Expenses</div>
                                </div>
                                {/* <p>₦ {totalExpenses}</p> */}
                              </div>
                              <svg width="225" height="1" viewBox="0 0 225 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="225" height="1" fill="#DDDDDD" />
                              </svg>


                              <div className="d-flex justify-content-between  wealth-row2">
                                <p className="ml-3">Home/Utility</p>
                                <p> ₦{homeUtility} </p>
                              </div>
                              <div className="d-flex justify-content-between  wealth-row2">
                                <p className="ml-3">Food</p>
                                <p> ₦ {food} </p>
                              </div>
                              <div className="d-flex justify-content-between  wealth-row2">
                                <p className="ml-3">Transportation</p>
                                <p> ₦ {transportation} </p>
                              </div>
                              <div className="d-flex justify-content-between  wealth-row2">
                                <p className="ml-3">Insurance</p>
                                <p> ₦ {insurance} </p>
                              </div>
                              <div className="d-flex justify-content-between  wealth-row2">
                                <p className="ml-3">Entertainment</p>
                                <p> ₦ {entertainment} </p>
                              </div>
                              <div className="d-flex justify-content-between  wealth-row2">
                                <p className="ml-3">Services And Support</p>
                                <p> ₦ {servicesAndSupport} </p>
                              </div>
                              <div className="d-flex justify-content-between  wealth-row2">
                                <p className="ml-3">Personal</p>
                                <p> ₦ {personal} </p>
                              </div>
                              <div className="d-flex justify-content-between  wealth-row2">
                                <p className="ml-3">Child Care </p>
                                <p> ₦ {childCareNanny} </p>
                              </div>
                              <div className="d-flex justify-content-between  wealth-row2">
                                <p className="ml-3">Giving</p>
                                <p> ₦ {giving} </p>
                              </div>
                              <div className="d-flex justify-content-between  wealth-row2">
                                <p className="ml-3">Investment Expense</p>
                                <p> ₦ {ex_InvestmentExpense} </p>
                              </div>
                              <svg width="225" height="1" viewBox="0 0 225 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="225" height="1" fill="#DDDDDD" />
                              </svg>
                              <div className="d-flex justify-content-between  wealth-row2">
                                <p className="ml-3">{""}</p>
                                <p> ₦{totalExpenses} / month</p>
                              </div>



                            </div>

                            <div className="overview-result-right">

                              <div className="d-flex align-items-center justify-content-between">
                                <div className="d-flex align-items-center">
                                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="6" cy="6" r="6" fill="#24CCB8" />
                                  </svg>

                                  <div className="ml-2" style={{ fontSize: "18px", color: " #333333" }}>Income</div>
                                </div>

                                <p className="m-0">₦ {totalIncome} / month</p>



                              </div>
                              <svg width="225" height="1" viewBox="0 0 225 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="225" height="1" fill="#DDDDDD" />
                              </svg>

                              <div className="d-flex align-items-center justify-content-between">
                                <div className="d-flex align-items-center">
                                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="6" cy="6" r="6" fill="#FFC400" />
                                  </svg>

                                  <div className="ml-2" style={{ fontSize: "18px", color: " #333333" }}>Savings & Investment</div>
                                </div>
                                <p className="m-0"> ₦ {totalSavings} / month</p>



                              </div>
                              <svg width="225" height="1" viewBox="0 0 225 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="225" height="1" fill="#DDDDDD" />
                              </svg>
                              <div className="d-flex justify-content-center align-items-center mt-3">
                                <div className="chart-wrapper">
                                  <PieChart
                                    title="Pie Chart Representation"
                                    animate
                                    animationDuration={500}
                                    animationEasing="ease-out"
                                    label={({ dataEntry }) => `${Math.round(dataEntry.percentage)}%`}
                                    labelPosition={65}
                                    labelStyle={{
                                      fontSize: "5px",
                                      fontWeight: "600",
                                      fill: '#FFFFFF',

                                    }}
                                    data={[
                                      { title: 'Income', value: Math.round((totalIncome * 100) / (totalIncome + totalSavings + totalExpenses)), color: '#24CCB8' },
                                      { title: 'Expenses', value: Math.round((totalExpenses * 100) / (totalIncome + totalSavings + totalExpenses)), color: '#FF5660' },
                                      { title: 'Savings', value: Math.round((totalSavings * 100) / (totalIncome + totalSavings + totalExpenses)), color: '#FFC400' },
                                    ]}
                                  />
                                </div>
                              </div>
                              <div className="d-flex justify-content-center align-items-center mt-3">
                                <svg width="182" height="36" viewBox="0 0 182 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M22.352 2.242V12H21.078V2.242H22.352ZM28.2613 4.188C29.1946 4.188 29.9506 4.47267 30.5293 5.042C31.108 5.602 31.3973 6.414 31.3973 7.478V12H30.1373V7.66C30.1373 6.89467 29.946 6.31133 29.5633 5.91C29.1806 5.49933 28.658 5.294 27.9953 5.294C27.3233 5.294 26.7866 5.504 26.3853 5.924C25.9933 6.344 25.7973 6.95533 25.7973 7.758V12H24.5233V4.328H25.7973V5.42C26.0493 5.028 26.39 4.72467 26.8193 4.51C27.258 4.29533 27.7386 4.188 28.2613 4.188ZM33.0024 8.15C33.0024 7.35667 33.1611 6.666 33.4784 6.078C33.7957 5.48067 34.2344 5.01867 34.7944 4.692C35.3637 4.36533 36.0124 4.202 36.7404 4.202C37.6831 4.202 38.4577 4.43067 39.0644 4.888C39.6804 5.34533 40.0864 5.98 40.2824 6.792H38.9104C38.7797 6.32533 38.5231 5.95667 38.1404 5.686C37.7671 5.41533 37.3004 5.28 36.7404 5.28C36.0124 5.28 35.4244 5.532 34.9764 6.036C34.5284 6.53067 34.3044 7.23533 34.3044 8.15C34.3044 9.074 34.5284 9.788 34.9764 10.292C35.4244 10.796 36.0124 11.048 36.7404 11.048C37.3004 11.048 37.7671 10.9173 38.1404 10.656C38.5137 10.3947 38.7704 10.0213 38.9104 9.536H40.2824C40.0771 10.32 39.6664 10.95 39.0504 11.426C38.4344 11.8927 37.6644 12.126 36.7404 12.126C36.0124 12.126 35.3637 11.9627 34.7944 11.636C34.2344 11.3093 33.7957 10.8473 33.4784 10.25C33.1611 9.65267 33.0024 8.95267 33.0024 8.15ZM45.3283 12.126C44.6096 12.126 43.9563 11.9627 43.3683 11.636C42.7896 11.3093 42.3323 10.8473 41.9963 10.25C41.6696 9.64333 41.5063 8.94333 41.5063 8.15C41.5063 7.366 41.6743 6.67533 42.0103 6.078C42.3556 5.47133 42.8223 5.00933 43.4103 4.692C43.9983 4.36533 44.6563 4.202 45.3843 4.202C46.1123 4.202 46.7703 4.36533 47.3583 4.692C47.9463 5.00933 48.4083 5.46667 48.7443 6.064C49.0896 6.66133 49.2623 7.35667 49.2623 8.15C49.2623 8.94333 49.085 9.64333 48.7303 10.25C48.385 10.8473 47.9136 11.3093 47.3163 11.636C46.719 11.9627 46.0563 12.126 45.3283 12.126ZM45.3283 11.006C45.7856 11.006 46.215 10.8987 46.6163 10.684C47.0176 10.4693 47.3396 10.1473 47.5823 9.718C47.8343 9.28867 47.9603 8.766 47.9603 8.15C47.9603 7.534 47.839 7.01133 47.5963 6.582C47.3536 6.15267 47.0363 5.83533 46.6443 5.63C46.2523 5.41533 45.8276 5.308 45.3703 5.308C44.9036 5.308 44.4743 5.41533 44.0823 5.63C43.6996 5.83533 43.3916 6.15267 43.1583 6.582C42.925 7.01133 42.8083 7.534 42.8083 8.15C42.8083 8.77533 42.9203 9.30267 43.1443 9.732C43.3776 10.1613 43.6856 10.4833 44.0683 10.698C44.451 10.9033 44.871 11.006 45.3283 11.006ZM60.1634 4.188C60.7607 4.188 61.2927 4.314 61.7594 4.566C62.226 4.80867 62.5947 5.17733 62.8654 5.672C63.136 6.16667 63.2714 6.76867 63.2714 7.478V12H62.0114V7.66C62.0114 6.89467 61.82 6.31133 61.4374 5.91C61.064 5.49933 60.5554 5.294 59.9114 5.294C59.2487 5.294 58.7214 5.50867 58.3294 5.938C57.9374 6.358 57.7414 6.96933 57.7414 7.772V12H56.4814V7.66C56.4814 6.89467 56.29 6.31133 55.9074 5.91C55.534 5.49933 55.0254 5.294 54.3814 5.294C53.7187 5.294 53.1914 5.50867 52.7994 5.938C52.4074 6.358 52.2114 6.96933 52.2114 7.772V12H50.9374V4.328H52.2114V5.434C52.4634 5.03267 52.7994 4.72467 53.2194 4.51C53.6487 4.29533 54.12 4.188 54.6334 4.188C55.2774 4.188 55.8467 4.33267 56.3414 4.622C56.836 4.91133 57.2047 5.336 57.4474 5.896C57.662 5.35467 58.0167 4.93467 58.5114 4.636C59.006 4.33733 59.5567 4.188 60.1634 4.188ZM72.3612 7.87C72.3612 8.11267 72.3472 8.36933 72.3192 8.64H66.1872C66.2339 9.396 66.4905 9.98867 66.9572 10.418C67.4332 10.838 68.0072 11.048 68.6792 11.048C69.2299 11.048 69.6872 10.922 70.0512 10.67C70.4245 10.4087 70.6859 10.0633 70.8352 9.634H72.2072C72.0019 10.3713 71.5912 10.9733 70.9752 11.44C70.3592 11.8973 69.5939 12.126 68.6792 12.126C67.9512 12.126 67.2979 11.9627 66.7192 11.636C66.1499 11.3093 65.7019 10.8473 65.3752 10.25C65.0485 9.64333 64.8852 8.94333 64.8852 8.15C64.8852 7.35667 65.0439 6.66133 65.3612 6.064C65.6785 5.46667 66.1219 5.00933 66.6912 4.692C67.2699 4.36533 67.9325 4.202 68.6792 4.202C69.4072 4.202 70.0512 4.36067 70.6112 4.678C71.1712 4.99533 71.6005 5.434 71.8992 5.994C72.2072 6.54467 72.3612 7.17 72.3612 7.87ZM71.0452 7.604C71.0452 7.11867 70.9379 6.70333 70.7232 6.358C70.5085 6.00333 70.2145 5.73733 69.8412 5.56C69.4772 5.37333 69.0712 5.28 68.6232 5.28C67.9792 5.28 67.4285 5.48533 66.9712 5.896C66.5232 6.30667 66.2665 6.876 66.2012 7.604H71.0452Z" fill="#333333" />
                                  <circle cx="6" cy="7" r="6" fill="#24CCB8" />
                                  <path d="M119.352 3.278V6.54H122.908V7.59H119.352V10.95H123.328V12H118.078V2.228H123.328V3.278H119.352ZM129.26 12L127.44 9.144L125.69 12H124.36L126.838 8.192L124.36 4.328H125.802L127.622 7.17L129.358 4.328H130.688L128.224 8.122L130.702 12H129.26ZM133.229 5.742C133.481 5.30333 133.854 4.93933 134.349 4.65C134.853 4.35133 135.436 4.202 136.099 4.202C136.78 4.202 137.396 4.36533 137.947 4.692C138.507 5.01867 138.946 5.48067 139.263 6.078C139.58 6.666 139.739 7.352 139.739 8.136C139.739 8.91067 139.58 9.60133 139.263 10.208C138.946 10.8147 138.507 11.286 137.947 11.622C137.396 11.958 136.78 12.126 136.099 12.126C135.446 12.126 134.867 11.9813 134.363 11.692C133.868 11.3933 133.49 11.0247 133.229 10.586V15.64H131.955V4.328H133.229V5.742ZM138.437 8.136C138.437 7.55733 138.32 7.05333 138.087 6.624C137.854 6.19467 137.536 5.868 137.135 5.644C136.743 5.42 136.309 5.308 135.833 5.308C135.366 5.308 134.932 5.42467 134.531 5.658C134.139 5.882 133.822 6.21333 133.579 6.652C133.346 7.08133 133.229 7.58067 133.229 8.15C133.229 8.72867 133.346 9.23733 133.579 9.676C133.822 10.1053 134.139 10.4367 134.531 10.67C134.932 10.894 135.366 11.006 135.833 11.006C136.309 11.006 136.743 10.894 137.135 10.67C137.536 10.4367 137.854 10.1053 138.087 9.676C138.32 9.23733 138.437 8.724 138.437 8.136ZM148.416 7.87C148.416 8.11267 148.402 8.36933 148.374 8.64H142.242C142.289 9.396 142.545 9.98867 143.012 10.418C143.488 10.838 144.062 11.048 144.734 11.048C145.285 11.048 145.742 10.922 146.106 10.67C146.479 10.4087 146.741 10.0633 146.89 9.634H148.262C148.057 10.3713 147.646 10.9733 147.03 11.44C146.414 11.8973 145.649 12.126 144.734 12.126C144.006 12.126 143.353 11.9627 142.774 11.636C142.205 11.3093 141.757 10.8473 141.43 10.25C141.103 9.64333 140.94 8.94333 140.94 8.15C140.94 7.35667 141.099 6.66133 141.416 6.064C141.733 5.46667 142.177 5.00933 142.746 4.692C143.325 4.36533 143.987 4.202 144.734 4.202C145.462 4.202 146.106 4.36067 146.666 4.678C147.226 4.99533 147.655 5.434 147.954 5.994C148.262 6.54467 148.416 7.17 148.416 7.87ZM147.1 7.604C147.1 7.11867 146.993 6.70333 146.778 6.358C146.563 6.00333 146.269 5.73733 145.896 5.56C145.532 5.37333 145.126 5.28 144.678 5.28C144.034 5.28 143.483 5.48533 143.026 5.896C142.578 6.30667 142.321 6.876 142.256 7.604H147.1ZM153.836 4.188C154.769 4.188 155.525 4.47267 156.104 5.042C156.682 5.602 156.972 6.414 156.972 7.478V12H155.712V7.66C155.712 6.89467 155.52 6.31133 155.138 5.91C154.755 5.49933 154.232 5.294 153.57 5.294C152.898 5.294 152.361 5.504 151.96 5.924C151.568 6.344 151.372 6.95533 151.372 7.758V12H150.098V4.328H151.372V5.42C151.624 5.028 151.964 4.72467 152.394 4.51C152.832 4.29533 153.313 4.188 153.836 4.188ZM161.769 12.126C161.181 12.126 160.653 12.028 160.187 11.832C159.72 11.6267 159.351 11.3467 159.081 10.992C158.81 10.628 158.661 10.2127 158.633 9.746H159.949C159.986 10.1287 160.163 10.4413 160.481 10.684C160.807 10.9267 161.232 11.048 161.755 11.048C162.24 11.048 162.623 10.9407 162.903 10.726C163.183 10.5113 163.323 10.2407 163.323 9.914C163.323 9.578 163.173 9.33067 162.875 9.172C162.576 9.004 162.114 8.84067 161.489 8.682C160.919 8.53267 160.453 8.38333 160.089 8.234C159.734 8.07533 159.426 7.84667 159.165 7.548C158.913 7.24 158.787 6.83867 158.787 6.344C158.787 5.952 158.903 5.59267 159.137 5.266C159.37 4.93933 159.701 4.68267 160.131 4.496C160.56 4.3 161.05 4.202 161.601 4.202C162.45 4.202 163.136 4.41667 163.659 4.846C164.181 5.27533 164.461 5.86333 164.499 6.61H163.225C163.197 6.20867 163.033 5.88667 162.735 5.644C162.445 5.40133 162.053 5.28 161.559 5.28C161.101 5.28 160.737 5.378 160.467 5.574C160.196 5.77 160.061 6.02667 160.061 6.344C160.061 6.596 160.14 6.806 160.299 6.974C160.467 7.13267 160.672 7.26333 160.915 7.366C161.167 7.45933 161.512 7.56667 161.951 7.688C162.501 7.83733 162.949 7.98667 163.295 8.136C163.64 8.276 163.934 8.49067 164.177 8.78C164.429 9.06933 164.559 9.44733 164.569 9.914C164.569 10.334 164.452 10.712 164.219 11.048C163.985 11.384 163.654 11.65 163.225 11.846C162.805 12.0327 162.319 12.126 161.769 12.126ZM173.367 7.87C173.367 8.11267 173.353 8.36933 173.325 8.64H167.193C167.24 9.396 167.496 9.98867 167.963 10.418C168.439 10.838 169.013 11.048 169.685 11.048C170.236 11.048 170.693 10.922 171.057 10.67C171.43 10.4087 171.692 10.0633 171.841 9.634H173.213C173.008 10.3713 172.597 10.9733 171.981 11.44C171.365 11.8973 170.6 12.126 169.685 12.126C168.957 12.126 168.304 11.9627 167.725 11.636C167.156 11.3093 166.708 10.8473 166.381 10.25C166.054 9.64333 165.891 8.94333 165.891 8.15C165.891 7.35667 166.05 6.66133 166.367 6.064C166.684 5.46667 167.128 5.00933 167.697 4.692C168.276 4.36533 168.938 4.202 169.685 4.202C170.413 4.202 171.057 4.36067 171.617 4.678C172.177 4.99533 172.606 5.434 172.905 5.994C173.213 6.54467 173.367 7.17 173.367 7.87ZM172.051 7.604C172.051 7.11867 171.944 6.70333 171.729 6.358C171.514 6.00333 171.22 5.73733 170.847 5.56C170.483 5.37333 170.077 5.28 169.629 5.28C168.985 5.28 168.434 5.48533 167.977 5.896C167.529 6.30667 167.272 6.876 167.207 7.604H172.051ZM177.765 12.126C177.177 12.126 176.649 12.028 176.183 11.832C175.716 11.6267 175.347 11.3467 175.077 10.992C174.806 10.628 174.657 10.2127 174.629 9.746H175.945C175.982 10.1287 176.159 10.4413 176.477 10.684C176.803 10.9267 177.228 11.048 177.751 11.048C178.236 11.048 178.619 10.9407 178.899 10.726C179.179 10.5113 179.319 10.2407 179.319 9.914C179.319 9.578 179.169 9.33067 178.871 9.172C178.572 9.004 178.11 8.84067 177.485 8.682C176.915 8.53267 176.449 8.38333 176.085 8.234C175.73 8.07533 175.422 7.84667 175.161 7.548C174.909 7.24 174.783 6.83867 174.783 6.344C174.783 5.952 174.899 5.59267 175.133 5.266C175.366 4.93933 175.697 4.68267 176.127 4.496C176.556 4.3 177.046 4.202 177.597 4.202C178.446 4.202 179.132 4.41667 179.655 4.846C180.177 5.27533 180.457 5.86333 180.495 6.61H179.221C179.193 6.20867 179.029 5.88667 178.731 5.644C178.441 5.40133 178.049 5.28 177.555 5.28C177.097 5.28 176.733 5.378 176.463 5.574C176.192 5.77 176.057 6.02667 176.057 6.344C176.057 6.596 176.136 6.806 176.295 6.974C176.463 7.13267 176.668 7.26333 176.911 7.366C177.163 7.45933 177.508 7.56667 177.947 7.688C178.497 7.83733 178.945 7.98667 179.291 8.136C179.636 8.276 179.93 8.49067 180.173 8.78C180.425 9.06933 180.555 9.44733 180.565 9.914C180.565 10.334 180.448 10.712 180.215 11.048C179.981 11.384 179.65 11.65 179.221 11.846C178.801 12.0327 178.315 12.126 177.765 12.126Z" fill="#333333" />
                                  <circle cx="103" cy="7" r="6" fill="#FF5660" />
                                  <path d="M24.172 32.098C23.528 32.098 22.9493 31.986 22.436 31.762C21.932 31.5287 21.5353 31.2113 21.246 30.81C20.9567 30.3993 20.8073 29.928 20.798 29.396H22.156C22.2027 29.8533 22.3893 30.2407 22.716 30.558C23.052 30.866 23.5373 31.02 24.172 31.02C24.7787 31.02 25.2547 30.8707 25.6 30.572C25.9547 30.264 26.132 29.872 26.132 29.396C26.132 29.0227 26.0293 28.7193 25.824 28.486C25.6187 28.2527 25.362 28.0753 25.054 27.954C24.746 27.8327 24.3307 27.702 23.808 27.562C23.164 27.394 22.646 27.226 22.254 27.058C21.8713 26.89 21.54 26.6287 21.26 26.274C20.9893 25.91 20.854 25.4247 20.854 24.818C20.854 24.286 20.9893 23.8147 21.26 23.404C21.5307 22.9933 21.9087 22.676 22.394 22.452C22.8887 22.228 23.4533 22.116 24.088 22.116C25.0027 22.116 25.7493 22.3447 26.328 22.802C26.916 23.2593 27.2473 23.866 27.322 24.622H25.922C25.8753 24.2487 25.6793 23.922 25.334 23.642C24.9887 23.3527 24.5313 23.208 23.962 23.208C23.43 23.208 22.996 23.348 22.66 23.628C22.324 23.8987 22.156 24.2813 22.156 24.776C22.156 25.1307 22.254 25.42 22.45 25.644C22.6553 25.868 22.9027 26.0407 23.192 26.162C23.4907 26.274 23.906 26.4047 24.438 26.554C25.082 26.7313 25.6 26.9087 25.992 27.086C26.384 27.254 26.72 27.52 27 27.884C27.28 28.2387 27.42 28.724 27.42 29.34C27.42 29.816 27.294 30.264 27.042 30.684C26.79 31.104 26.4167 31.4447 25.922 31.706C25.4273 31.9673 24.844 32.098 24.172 32.098ZM28.8188 28.136C28.8188 27.352 28.9775 26.666 29.2948 26.078C29.6121 25.4807 30.0461 25.0187 30.5968 24.692C31.1568 24.3653 31.7775 24.202 32.4588 24.202C33.1308 24.202 33.7141 24.3467 34.2088 24.636C34.7035 24.9253 35.0721 25.2893 35.3148 25.728V24.328H36.6028V32H35.3148V30.572C35.0628 31.02 34.6848 31.3933 34.1808 31.692C33.6861 31.9813 33.1075 32.126 32.4448 32.126C31.7635 32.126 31.1475 31.958 30.5968 31.622C30.0461 31.286 29.6121 30.8147 29.2948 30.208C28.9775 29.6013 28.8188 28.9107 28.8188 28.136ZM35.3148 28.15C35.3148 27.5713 35.1981 27.0673 34.9648 26.638C34.7315 26.2087 34.4141 25.882 34.0128 25.658C33.6208 25.4247 33.1868 25.308 32.7108 25.308C32.2348 25.308 31.8008 25.42 31.4088 25.644C31.0168 25.868 30.7041 26.1947 30.4708 26.624C30.2375 27.0533 30.1208 27.5573 30.1208 28.136C30.1208 28.724 30.2375 29.2373 30.4708 29.676C30.7041 30.1053 31.0168 30.4367 31.4088 30.67C31.8008 30.894 32.2348 31.006 32.7108 31.006C33.1868 31.006 33.6208 30.894 34.0128 30.67C34.4141 30.4367 34.7315 30.1053 34.9648 29.676C35.1981 29.2373 35.3148 28.7287 35.3148 28.15ZM41.6117 30.824L43.9917 24.328H45.3497L42.3397 32H40.8557L37.8457 24.328H39.2177L41.6117 30.824ZM47.2614 23.082C47.0187 23.082 46.8134 22.998 46.6454 22.83C46.4774 22.662 46.3934 22.4567 46.3934 22.214C46.3934 21.9713 46.4774 21.766 46.6454 21.598C46.8134 21.43 47.0187 21.346 47.2614 21.346C47.4947 21.346 47.6907 21.43 47.8494 21.598C48.0174 21.766 48.1014 21.9713 48.1014 22.214C48.1014 22.4567 48.0174 22.662 47.8494 22.83C47.6907 22.998 47.4947 23.082 47.2614 23.082ZM47.8774 24.328V32H46.6034V24.328H47.8774ZM53.7867 24.188C54.72 24.188 55.476 24.4727 56.0547 25.042C56.6334 25.602 56.9227 26.414 56.9227 27.478V32H55.6627V27.66C55.6627 26.8947 55.4714 26.3113 55.0887 25.91C54.706 25.4993 54.1834 25.294 53.5207 25.294C52.8487 25.294 52.312 25.504 51.9107 25.924C51.5187 26.344 51.3227 26.9553 51.3227 27.758V32H50.0487V24.328H51.3227V25.42C51.5747 25.028 51.9154 24.7247 52.3447 24.51C52.7834 24.2953 53.264 24.188 53.7867 24.188ZM62.1678 24.202C62.8304 24.202 63.4091 24.3467 63.9038 24.636C64.4078 24.9253 64.7811 25.2893 65.0238 25.728V24.328H66.3118V32.168C66.3118 32.868 66.1624 33.4887 65.8638 34.03C65.5651 34.5807 65.1358 35.01 64.5758 35.318C64.0251 35.626 63.3811 35.78 62.6438 35.78C61.6358 35.78 60.7958 35.542 60.1238 35.066C59.4518 34.59 59.0551 33.9413 58.9338 33.12H60.1938C60.3338 33.5867 60.6231 33.96 61.0618 34.24C61.5004 34.5293 62.0278 34.674 62.6438 34.674C63.3438 34.674 63.9131 34.4547 64.3518 34.016C64.7998 33.5773 65.0238 32.9613 65.0238 32.168V30.558C64.7718 31.006 64.3984 31.3793 63.9038 31.678C63.4091 31.9767 62.8304 32.126 62.1678 32.126C61.4864 32.126 60.8658 31.958 60.3058 31.622C59.7551 31.286 59.3211 30.8147 59.0038 30.208C58.6864 29.6013 58.5278 28.9107 58.5278 28.136C58.5278 27.352 58.6864 26.666 59.0038 26.078C59.3211 25.4807 59.7551 25.0187 60.3058 24.692C60.8658 24.3653 61.4864 24.202 62.1678 24.202ZM65.0238 28.15C65.0238 27.5713 64.9071 27.0673 64.6738 26.638C64.4404 26.2087 64.1231 25.882 63.7218 25.658C63.3298 25.4247 62.8958 25.308 62.4198 25.308C61.9438 25.308 61.5098 25.42 61.1178 25.644C60.7258 25.868 60.4131 26.1947 60.1798 26.624C59.9464 27.0533 59.8298 27.5573 59.8298 28.136C59.8298 28.724 59.9464 29.2373 60.1798 29.676C60.4131 30.1053 60.7258 30.4367 61.1178 30.67C61.5098 30.894 61.9438 31.006 62.4198 31.006C62.8958 31.006 63.3298 30.894 63.7218 30.67C64.1231 30.4367 64.4404 30.1053 64.6738 29.676C64.9071 29.2373 65.0238 28.7287 65.0238 28.15ZM71.1807 32.126C70.5927 32.126 70.0654 32.028 69.5987 31.832C69.1321 31.6267 68.7634 31.3467 68.4927 30.992C68.2221 30.628 68.0727 30.2127 68.0447 29.746H69.3607C69.3981 30.1287 69.5754 30.4413 69.8927 30.684C70.2194 30.9267 70.6441 31.048 71.1667 31.048C71.6521 31.048 72.0347 30.9407 72.3147 30.726C72.5947 30.5113 72.7347 30.2407 72.7347 29.914C72.7347 29.578 72.5854 29.3307 72.2867 29.172C71.9881 29.004 71.5261 28.8407 70.9007 28.682C70.3314 28.5327 69.8647 28.3833 69.5007 28.234C69.1461 28.0753 68.8381 27.8467 68.5767 27.548C68.3247 27.24 68.1987 26.8387 68.1987 26.344C68.1987 25.952 68.3154 25.5927 68.5487 25.266C68.7821 24.9393 69.1134 24.6827 69.5427 24.496C69.9721 24.3 70.4621 24.202 71.0127 24.202C71.8621 24.202 72.5481 24.4167 73.0707 24.846C73.5934 25.2753 73.8734 25.8633 73.9107 26.61H72.6367C72.6087 26.2087 72.4454 25.8867 72.1467 25.644C71.8574 25.4013 71.4654 25.28 70.9707 25.28C70.5134 25.28 70.1494 25.378 69.8787 25.574C69.6081 25.77 69.4727 26.0267 69.4727 26.344C69.4727 26.596 69.5521 26.806 69.7107 26.974C69.8787 27.1327 70.0841 27.2633 70.3267 27.366C70.5787 27.4593 70.9241 27.5667 71.3627 27.688C71.9134 27.8373 72.3614 27.9867 72.7067 28.136C73.0521 28.276 73.3461 28.4907 73.5887 28.78C73.8407 29.0693 73.9714 29.4473 73.9807 29.914C73.9807 30.334 73.8641 30.712 73.6307 31.048C73.3974 31.384 73.0661 31.65 72.6367 31.846C72.2167 32.0327 71.7314 32.126 71.1807 32.126ZM87.0016 32L85.7276 30.712C85.2516 31.2067 84.7429 31.5753 84.2016 31.818C83.6603 32.0513 83.0489 32.168 82.3676 32.168C81.6956 32.168 81.0983 32.0467 80.5756 31.804C80.0623 31.5613 79.6609 31.216 79.3716 30.768C79.0916 30.32 78.9516 29.7973 78.9516 29.2C78.9516 28.5187 79.1429 27.9213 79.5256 27.408C79.9176 26.8853 80.4916 26.4747 81.2476 26.176C80.9489 25.8213 80.7343 25.4947 80.6036 25.196C80.4729 24.8973 80.4076 24.5707 80.4076 24.216C80.4076 23.8053 80.5103 23.4367 80.7156 23.11C80.9303 22.774 81.2336 22.5127 81.6256 22.326C82.0176 22.1393 82.4703 22.046 82.9836 22.046C83.4876 22.046 83.9263 22.144 84.2996 22.34C84.6729 22.536 84.9529 22.8113 85.1396 23.166C85.3263 23.5113 85.4103 23.8987 85.3916 24.328H84.1176C84.1269 23.9453 84.0196 23.6467 83.7956 23.432C83.5716 23.208 83.2823 23.096 82.9276 23.096C82.5543 23.096 82.2509 23.2033 82.0176 23.418C81.7936 23.6233 81.6816 23.8893 81.6816 24.216C81.6816 24.496 81.7563 24.7667 81.9056 25.028C82.0643 25.2893 82.3256 25.6113 82.6896 25.994L85.6016 28.92L85.8536 28.528L86.8056 26.932H88.1776L87.0296 28.92C86.8709 29.2 86.6843 29.494 86.4696 29.802L88.6676 32H87.0016ZM82.3676 31.076C82.8716 31.076 83.3243 30.978 83.7256 30.782C84.1363 30.586 84.5236 30.2827 84.8876 29.872L82.0176 26.988C80.8229 27.4453 80.2256 28.1687 80.2256 29.158C80.2256 29.7087 80.4216 30.166 80.8136 30.53C81.2149 30.894 81.7329 31.076 82.3676 31.076ZM94.8676 22.242V32H93.5936V22.242H94.8676ZM100.777 24.188C101.71 24.188 102.466 24.4727 103.045 25.042C103.624 25.602 103.913 26.414 103.913 27.478V32H102.653V27.66C102.653 26.8947 102.462 26.3113 102.079 25.91C101.696 25.4993 101.174 25.294 100.511 25.294C99.8389 25.294 99.3023 25.504 98.9009 25.924C98.5089 26.344 98.3129 26.9553 98.3129 27.758V32H97.0389V24.328H98.3129V25.42C98.5649 25.028 98.9056 24.7247 99.3349 24.51C99.7736 24.2953 100.254 24.188 100.777 24.188ZM108.85 30.824L111.23 24.328H112.588L109.578 32H108.094L105.084 24.328H106.456L108.85 30.824ZM120.842 27.87C120.842 28.1127 120.828 28.3693 120.8 28.64H114.668C114.714 29.396 114.971 29.9887 115.438 30.418C115.914 30.838 116.488 31.048 117.16 31.048C117.71 31.048 118.168 30.922 118.532 30.67C118.905 30.4087 119.166 30.0633 119.316 29.634H120.688C120.482 30.3713 120.072 30.9733 119.456 31.44C118.84 31.8973 118.074 32.126 117.16 32.126C116.432 32.126 115.778 31.9627 115.2 31.636C114.63 31.3093 114.182 30.8473 113.856 30.25C113.529 29.6433 113.366 28.9433 113.366 28.15C113.366 27.3567 113.524 26.6613 113.842 26.064C114.159 25.4667 114.602 25.0093 115.172 24.692C115.75 24.3653 116.413 24.202 117.16 24.202C117.888 24.202 118.532 24.3607 119.092 24.678C119.652 24.9953 120.081 25.434 120.38 25.994C120.688 26.5447 120.842 27.17 120.842 27.87ZM119.526 27.604C119.526 27.1187 119.418 26.7033 119.204 26.358C118.989 26.0033 118.695 25.7373 118.322 25.56C117.958 25.3733 117.552 25.28 117.104 25.28C116.46 25.28 115.909 25.4853 115.452 25.896C115.004 26.3067 114.747 26.876 114.682 27.604H119.526ZM125.239 32.126C124.651 32.126 124.124 32.028 123.657 31.832C123.191 31.6267 122.822 31.3467 122.551 30.992C122.281 30.628 122.131 30.2127 122.103 29.746H123.419C123.457 30.1287 123.634 30.4413 123.951 30.684C124.278 30.9267 124.703 31.048 125.225 31.048C125.711 31.048 126.093 30.9407 126.373 30.726C126.653 30.5113 126.793 30.2407 126.793 29.914C126.793 29.578 126.644 29.3307 126.345 29.172C126.047 29.004 125.585 28.8407 124.959 28.682C124.39 28.5327 123.923 28.3833 123.559 28.234C123.205 28.0753 122.897 27.8467 122.635 27.548C122.383 27.24 122.257 26.8387 122.257 26.344C122.257 25.952 122.374 25.5927 122.607 25.266C122.841 24.9393 123.172 24.6827 123.601 24.496C124.031 24.3 124.521 24.202 125.071 24.202C125.921 24.202 126.607 24.4167 127.129 24.846C127.652 25.2753 127.932 25.8633 127.969 26.61H126.695C126.667 26.2087 126.504 25.8867 126.205 25.644C125.916 25.4013 125.524 25.28 125.029 25.28C124.572 25.28 124.208 25.378 123.937 25.574C123.667 25.77 123.531 26.0267 123.531 26.344C123.531 26.596 123.611 26.806 123.769 26.974C123.937 27.1327 124.143 27.2633 124.385 27.366C124.637 27.4593 124.983 27.5667 125.421 27.688C125.972 27.8373 126.42 27.9867 126.765 28.136C127.111 28.276 127.405 28.4907 127.647 28.78C127.899 29.0693 128.03 29.4473 128.039 29.914C128.039 30.334 127.923 30.712 127.689 31.048C127.456 31.384 127.125 31.65 126.695 31.846C126.275 32.0327 125.79 32.126 125.239 32.126ZM131.392 25.378V29.9C131.392 30.2733 131.471 30.5393 131.63 30.698C131.788 30.8473 132.064 30.922 132.456 30.922H133.394V32H132.246C131.536 32 131.004 31.8367 130.65 31.51C130.295 31.1833 130.118 30.6467 130.118 29.9V25.378H129.124V24.328H130.118V22.396H131.392V24.328H133.394V25.378H131.392ZM144.163 24.188C144.761 24.188 145.293 24.314 145.759 24.566C146.226 24.8087 146.595 25.1773 146.865 25.672C147.136 26.1667 147.271 26.7687 147.271 27.478V32H146.011V27.66C146.011 26.8947 145.82 26.3113 145.437 25.91C145.064 25.4993 144.555 25.294 143.911 25.294C143.249 25.294 142.721 25.5087 142.329 25.938C141.937 26.358 141.741 26.9693 141.741 27.772V32H140.481V27.66C140.481 26.8947 140.29 26.3113 139.907 25.91C139.534 25.4993 139.025 25.294 138.381 25.294C137.719 25.294 137.191 25.5087 136.799 25.938C136.407 26.358 136.211 26.9693 136.211 27.772V32H134.937V24.328H136.211V25.434C136.463 25.0327 136.799 24.7247 137.219 24.51C137.649 24.2953 138.12 24.188 138.633 24.188C139.277 24.188 139.847 24.3327 140.341 24.622C140.836 24.9113 141.205 25.336 141.447 25.896C141.662 25.3547 142.017 24.9347 142.511 24.636C143.006 24.3373 143.557 24.188 144.163 24.188ZM156.361 27.87C156.361 28.1127 156.347 28.3693 156.319 28.64H150.187C150.234 29.396 150.491 29.9887 150.957 30.418C151.433 30.838 152.007 31.048 152.679 31.048C153.23 31.048 153.687 30.922 154.051 30.67C154.425 30.4087 154.686 30.0633 154.835 29.634H156.207C156.002 30.3713 155.591 30.9733 154.975 31.44C154.359 31.8973 153.594 32.126 152.679 32.126C151.951 32.126 151.298 31.9627 150.719 31.636C150.15 31.3093 149.702 30.8473 149.375 30.25C149.049 29.6433 148.885 28.9433 148.885 28.15C148.885 27.3567 149.044 26.6613 149.361 26.064C149.679 25.4667 150.122 25.0093 150.691 24.692C151.27 24.3653 151.933 24.202 152.679 24.202C153.407 24.202 154.051 24.3607 154.611 24.678C155.171 24.9953 155.601 25.434 155.899 25.994C156.207 26.5447 156.361 27.17 156.361 27.87ZM155.045 27.604C155.045 27.1187 154.938 26.7033 154.723 26.358C154.509 26.0033 154.215 25.7373 153.841 25.56C153.477 25.3733 153.071 25.28 152.623 25.28C151.979 25.28 151.429 25.4853 150.971 25.896C150.523 26.3067 150.267 26.876 150.201 27.604H155.045ZM161.781 24.188C162.714 24.188 163.47 24.4727 164.049 25.042C164.628 25.602 164.917 26.414 164.917 27.478V32H163.657V27.66C163.657 26.8947 163.466 26.3113 163.083 25.91C162.7 25.4993 162.178 25.294 161.515 25.294C160.843 25.294 160.306 25.504 159.905 25.924C159.513 26.344 159.317 26.9553 159.317 27.758V32H158.043V24.328H159.317V25.42C159.569 25.028 159.91 24.7247 160.339 24.51C160.778 24.2953 161.258 24.188 161.781 24.188ZM168.552 25.378V29.9C168.552 30.2733 168.631 30.5393 168.79 30.698C168.949 30.8473 169.224 30.922 169.616 30.922H170.554V32H169.406C168.697 32 168.165 31.8367 167.81 31.51C167.455 31.1833 167.278 30.6467 167.278 29.9V25.378H166.284V24.328H167.278V22.396H168.552V24.328H170.554V25.378H168.552Z" fill="#333333" />
                                  <circle cx="6" cy="27" r="6" fill="#FFC400" />
                                </svg>
                              </div>

                            </div>

                          </div>
                        </div>


                        {/*  */}

                        <div className="cal-stage-wrapper mt-5">
                          <h1 className="h11">My Financial Report</h1>
                          <p className="p1"> A. Present Inflow and Outflow Analysis</p>
                          {/* <div className="overview-result"> */}

                          <div className="overview-result-first">
                            <div className="overview-result-inflow">
                              <h2>Inflow Analysis</h2>

                              <div className="d-flex mt-3 mb-3 align-items-center flex-flow-wrap justify-content-center">
                                <div className="chart-wrapper">
                                  <PieChart
                                    animate
                                    animationDuration={500}
                                    animationEasing="ease-out"
                                    label={({ dataEntry }) => `${Math.round(dataEntry.percentage)}%`}
                                    labelPosition={65}
                                    labelStyle={{
                                      fontSize: "5px",
                                      fontWeight: "600",
                                      fill: '#FFFFFF',

                                    }}
                                    data={[
                                      { title: "Monthly Income", value: Math.round((Number(inputData.incomeMonthly) * 100) / (totalIncome)), color: '#219653' },
                                      { title: "Spouse income", value: Math.round((Number(inputData.incomeFamily) * 100) / (totalIncome)), color: '#EB5757' },
                                      { title: "Other income", value: Math.round((Number(inputData.incomeOthers) * 100) / (totalIncome)), color: '#2F80ED' },
                                    ]}
                                  />

                                </div>

                                <div className="m-3 ml-5">
                                  <svg width="111" height="62" viewBox="0 0 111 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M24.1289 2.18164C24.5117 2.18164 24.874 2.25456 25.2158 2.40039C25.5576 2.54167 25.8538 2.73991 26.1045 2.99512C26.3551 3.24577 26.5557 3.53743 26.7061 3.87012C26.8564 4.19824 26.9316 4.5446 26.9316 4.90918C26.9316 5.27376 26.8564 5.6224 26.7061 5.95508C26.5557 6.2832 26.3551 6.57487 26.1045 6.83008C25.8538 7.08073 25.5576 7.27897 25.2158 7.4248C24.874 7.56608 24.5117 7.63672 24.1289 7.63672H22.2422V11H21.1211V2.18164H24.1289ZM24.1289 6.65918C24.3522 6.65918 24.5664 6.61589 24.7715 6.5293C24.9766 6.43815 25.1566 6.3151 25.3115 6.16016C25.4665 6.00065 25.5872 5.8138 25.6738 5.59961C25.765 5.38086 25.8105 5.15072 25.8105 4.90918C25.8105 4.66764 25.765 4.43978 25.6738 4.22559C25.5872 4.01139 25.4665 3.82454 25.3115 3.66504C25.1566 3.50553 24.9766 3.38249 24.7715 3.2959C24.5664 3.20475 24.3522 3.15918 24.1289 3.15918H22.2422V6.65918H24.1289ZM33.3779 9.31836C33.2731 9.54167 33.141 9.7627 32.9814 9.98145C32.8219 10.1956 32.6351 10.3825 32.4209 10.542C32.2067 10.6969 31.9629 10.8245 31.6895 10.9248C31.4206 11.0205 31.1198 11.0684 30.7871 11.0684C30.3861 11.0684 30.0055 10.9909 29.6455 10.8359C29.2855 10.6764 28.971 10.4554 28.7021 10.1729C28.4378 9.88574 28.2282 9.54622 28.0732 9.1543C27.9229 8.76237 27.8477 8.32715 27.8477 7.84863C27.8477 7.37467 27.9229 6.94173 28.0732 6.5498C28.2282 6.15788 28.4355 5.82064 28.6953 5.53809C28.9596 5.25098 29.2673 5.02767 29.6182 4.86816C29.9691 4.70866 30.3359 4.62891 30.7188 4.62891C31.1016 4.62891 31.4616 4.7041 31.7988 4.85449C32.1406 5.00488 32.4368 5.21908 32.6875 5.49707C32.9427 5.77051 33.1432 6.10091 33.2891 6.48828C33.4395 6.87565 33.5146 7.30632 33.5146 7.78027C33.5146 7.87142 33.5101 7.95117 33.501 8.01953C33.4919 8.08333 33.4827 8.13802 33.4736 8.18359C33.4645 8.23828 33.4554 8.29069 33.4463 8.34082H28.9688C28.987 8.56413 29.0485 8.78288 29.1533 8.99707C29.2627 9.21126 29.3971 9.39811 29.5566 9.55762C29.7207 9.71712 29.9098 9.84701 30.124 9.94727C30.3428 10.043 30.5638 10.0908 30.7871 10.0908C30.9831 10.0908 31.1562 10.0635 31.3066 10.0088C31.4616 9.94954 31.6029 9.88346 31.7305 9.81055C31.8581 9.73763 31.9629 9.65788 32.0449 9.57129C32.1315 9.48014 32.2021 9.39583 32.2568 9.31836H33.3779ZM30.7188 5.61328C30.5046 5.61328 30.2995 5.65885 30.1035 5.75C29.9121 5.84115 29.7367 5.96647 29.5771 6.12598C29.4222 6.28548 29.29 6.47689 29.1807 6.7002C29.0758 6.9235 29.0052 7.16732 28.9688 7.43164H32.3936C32.3206 6.87109 32.127 6.42904 31.8125 6.10547C31.5026 5.77734 31.138 5.61328 30.7188 5.61328ZM37.917 5.68164H37.6367C37.14 5.68164 36.7367 5.84115 36.4268 6.16016C36.1169 6.47461 35.9619 6.89844 35.9619 7.43164V11H34.9092V4.69727H35.6816L35.9619 5.40137C36.0941 5.26009 36.2467 5.13477 36.4199 5.02539C36.5794 4.92057 36.7708 4.82943 36.9941 4.75195C37.2174 4.66992 37.4795 4.62891 37.7803 4.62891H37.917V5.68164ZM43.167 9.18164C43.167 9.44141 43.1146 9.68522 43.0098 9.91309C42.9095 10.141 42.766 10.3415 42.5791 10.5146C42.3923 10.6878 42.1667 10.8245 41.9023 10.9248C41.638 11.0205 41.3372 11.0684 41 11.0684C40.2982 11.0684 39.7467 10.8815 39.3457 10.5078C38.9447 10.1341 38.7259 9.66927 38.6895 9.11328H39.7422C39.7786 9.39128 39.8994 9.6237 40.1045 9.81055C40.3096 9.9974 40.6081 10.0908 41 10.0908C41.3555 10.0908 41.6312 9.99967 41.8271 9.81738C42.0231 9.63509 42.1211 9.42318 42.1211 9.18164C42.1211 8.94922 42.0391 8.77376 41.875 8.65527C41.7109 8.53678 41.5081 8.44336 41.2666 8.375C41.0251 8.30664 40.7607 8.24284 40.4736 8.18359C40.1911 8.11979 39.9268 8.02865 39.6807 7.91016C39.4391 7.78711 39.2363 7.61393 39.0723 7.39062C38.9082 7.16276 38.8262 6.84831 38.8262 6.44727C38.8262 6.20573 38.8763 5.97559 38.9766 5.75684C39.0814 5.53809 39.2249 5.3444 39.4072 5.17578C39.5895 5.00716 39.8083 4.875 40.0635 4.7793C40.3232 4.67904 40.6126 4.62891 40.9316 4.62891C41.6016 4.62891 42.1211 4.80436 42.4902 5.15527C42.8594 5.50618 43.0622 5.96191 43.0986 6.52246H42.0459C42.0094 6.24447 41.9023 6.02344 41.7246 5.85938C41.5469 5.69531 41.2826 5.61328 40.9316 5.61328C40.6126 5.61328 40.3574 5.69987 40.166 5.87305C39.9746 6.04167 39.8789 6.23307 39.8789 6.44727C39.8789 6.67969 39.9609 6.85514 40.125 6.97363C40.2891 7.09212 40.4919 7.18783 40.7334 7.26074C40.9749 7.3291 41.237 7.3929 41.5195 7.45215C41.8066 7.51139 42.071 7.60254 42.3125 7.72559C42.5586 7.84408 42.7614 8.01953 42.9209 8.25195C43.085 8.47982 43.167 8.78971 43.167 9.18164ZM45.1904 7.84863C45.1904 8.18587 45.2406 8.49349 45.3408 8.77148C45.4456 9.04492 45.5869 9.27962 45.7646 9.47559C45.9424 9.67155 46.1452 9.82422 46.373 9.93359C46.6055 10.0384 46.8424 10.0908 47.084 10.0908C47.3255 10.0908 47.5602 10.0384 47.7881 9.93359C48.016 9.82422 48.2165 9.67155 48.3896 9.47559C48.5628 9.27962 48.7018 9.04492 48.8066 8.77148C48.916 8.49349 48.9707 8.18587 48.9707 7.84863C48.9707 7.51139 48.916 7.20605 48.8066 6.93262C48.7018 6.65918 48.5628 6.42448 48.3896 6.22852C48.2165 6.03255 48.016 5.88216 47.7881 5.77734C47.5602 5.66797 47.3255 5.61328 47.084 5.61328C46.8424 5.61328 46.6055 5.66797 46.373 5.77734C46.1452 5.88216 45.9424 6.03255 45.7646 6.22852C45.5869 6.42448 45.4456 6.65918 45.3408 6.93262C45.2406 7.20605 45.1904 7.51139 45.1904 7.84863ZM50.0234 7.84863C50.0234 8.32259 49.946 8.75781 49.791 9.1543C49.6361 9.54622 49.4264 9.88574 49.1621 10.1729C48.8978 10.4554 48.5856 10.6764 48.2256 10.8359C47.8656 10.9909 47.485 11.0684 47.084 11.0684C46.6829 11.0684 46.3024 10.9909 45.9424 10.8359C45.5824 10.6764 45.2679 10.4554 44.999 10.1729C44.7347 9.88574 44.5251 9.54622 44.3701 9.1543C44.2197 8.76237 44.1445 8.32715 44.1445 7.84863C44.1445 7.37467 44.2197 6.94173 44.3701 6.5498C44.5251 6.15788 44.7347 5.82064 44.999 5.53809C45.2679 5.25098 45.5824 5.02767 45.9424 4.86816C46.3024 4.70866 46.6829 4.62891 47.084 4.62891C47.485 4.62891 47.8656 4.70866 48.2256 4.86816C48.5856 5.02767 48.8978 5.25098 49.1621 5.53809C49.4264 5.82064 49.6361 6.15788 49.791 6.5498C49.946 6.94173 50.0234 7.37467 50.0234 7.84863ZM54.2959 4.62891C54.6331 4.62891 54.9476 4.69727 55.2393 4.83398C55.5355 4.9707 55.7952 5.15755 56.0186 5.39453C56.2419 5.63151 56.4173 5.91862 56.5449 6.25586C56.6771 6.58854 56.7432 6.95768 56.7432 7.36328V11H55.6973V7.36328C55.6973 7.10352 55.654 6.86654 55.5674 6.65234C55.4854 6.43359 55.3737 6.24674 55.2324 6.0918C55.0911 5.93685 54.9271 5.81836 54.7402 5.73633C54.5579 5.6543 54.362 5.61328 54.1523 5.61328C53.6556 5.61328 53.2523 5.77279 52.9424 6.0918C52.6325 6.40625 52.4775 6.83008 52.4775 7.36328V11H51.4248V4.69727H52.1973L52.4775 5.40137C52.6097 5.26009 52.7624 5.13477 52.9355 5.02539C53.0951 4.92057 53.2865 4.82943 53.5098 4.75195C53.7331 4.66992 53.9951 4.62891 54.2959 4.62891ZM60.8721 4.62891C61.2184 4.62891 61.5374 4.68815 61.8291 4.80664C62.1253 4.92057 62.3783 5.07552 62.5879 5.27148C62.7975 5.46745 62.9593 5.69759 63.0732 5.96191C63.1917 6.22168 63.251 6.50195 63.251 6.80273V11H62.4854L62.2051 10.3027C62.0638 10.4531 61.9043 10.583 61.7266 10.6924C61.5671 10.7972 61.3711 10.8861 61.1387 10.959C60.9062 11.0319 60.6305 11.0684 60.3115 11.0684C59.9925 11.0684 59.7054 11.0205 59.4502 10.9248C59.195 10.8245 58.9762 10.6878 58.7939 10.5146C58.6117 10.3415 58.4681 10.141 58.3633 9.91309C58.263 9.68522 58.2129 9.44141 58.2129 9.18164C58.2129 8.88086 58.2721 8.60742 58.3906 8.36133C58.5137 8.11523 58.7233 7.90104 59.0195 7.71875C59.3203 7.53646 59.7305 7.39746 60.25 7.30176C60.7695 7.2015 61.4212 7.15137 62.2051 7.15137V6.80273C62.2051 6.48372 62.0798 6.20573 61.8291 5.96875C61.583 5.73177 61.264 5.61328 60.8721 5.61328C60.4801 5.61328 60.1908 5.69531 60.0039 5.85938C59.8171 6.01888 59.6872 6.23991 59.6143 6.52246H58.4932C58.5296 6.2627 58.6094 6.01888 58.7324 5.79102C58.8555 5.55859 59.0173 5.35579 59.2178 5.18262C59.4183 5.00944 59.6553 4.875 59.9287 4.7793C60.2021 4.67904 60.5166 4.62891 60.8721 4.62891ZM60.3115 10.0908C60.5895 10.0908 60.8447 10.0475 61.0771 9.96094C61.3141 9.86979 61.5146 9.75586 61.6787 9.61914C61.8428 9.47786 61.9704 9.32064 62.0615 9.14746C62.1572 8.97428 62.2051 8.79883 62.2051 8.62109V8.12891C61.5716 8.12891 61.0635 8.15625 60.6807 8.21094C60.2979 8.26107 59.9993 8.33626 59.7852 8.43652C59.5755 8.53223 59.4365 8.64844 59.3682 8.78516C59.2998 8.91732 59.2656 9.07227 59.2656 9.25C59.2656 9.46419 59.359 9.65788 59.5459 9.83105C59.7373 10.0042 59.9925 10.0908 60.3115 10.0908ZM66.1221 11H65.0693V2.18164H66.1221V11ZM72.3496 11H71.2285V2.18164H72.3496V11ZM77.251 4.62891C77.5882 4.62891 77.9027 4.69727 78.1943 4.83398C78.4906 4.9707 78.7503 5.15755 78.9736 5.39453C79.1969 5.63151 79.3724 5.91862 79.5 6.25586C79.6322 6.58854 79.6982 6.95768 79.6982 7.36328V11H78.6523V7.36328C78.6523 7.10352 78.609 6.86654 78.5225 6.65234C78.4404 6.43359 78.3288 6.24674 78.1875 6.0918C78.0462 5.93685 77.8822 5.81836 77.6953 5.73633C77.513 5.6543 77.3171 5.61328 77.1074 5.61328C76.6107 5.61328 76.2074 5.77279 75.8975 6.0918C75.5876 6.40625 75.4326 6.83008 75.4326 7.36328V11H74.3799V4.69727H75.1523L75.4326 5.40137C75.5648 5.26009 75.7174 5.13477 75.8906 5.02539C76.0501 4.92057 76.2415 4.82943 76.4648 4.75195C76.6882 4.66992 76.9502 4.62891 77.251 4.62891ZM83.9707 5.61328C83.7292 5.61328 83.4922 5.66797 83.2598 5.77734C83.0319 5.88216 82.8291 6.03255 82.6514 6.22852C82.4736 6.42448 82.3324 6.65918 82.2275 6.93262C82.1273 7.20605 82.0771 7.51139 82.0771 7.84863C82.0771 8.18587 82.1273 8.49349 82.2275 8.77148C82.3324 9.04492 82.4736 9.27962 82.6514 9.47559C82.8291 9.67155 83.0319 9.82422 83.2598 9.93359C83.4922 10.0384 83.7292 10.0908 83.9707 10.0908C84.1758 10.0908 84.3695 10.0544 84.5518 9.98145C84.734 9.90397 84.8958 9.80599 85.0371 9.6875C85.1829 9.56445 85.306 9.42318 85.4062 9.26367C85.5111 9.10417 85.5931 8.93555 85.6523 8.75781H86.6982C86.6253 9.07682 86.5091 9.3776 86.3496 9.66016C86.1901 9.93815 85.9919 10.182 85.7549 10.3916C85.5179 10.6012 85.2467 10.7676 84.9414 10.8906C84.6406 11.0091 84.3171 11.0684 83.9707 11.0684C83.5697 11.0684 83.1891 10.9909 82.8291 10.8359C82.4691 10.6764 82.1546 10.4554 81.8857 10.1729C81.6214 9.88574 81.4118 9.54622 81.2568 9.1543C81.1064 8.76237 81.0312 8.32715 81.0312 7.84863C81.0312 7.37467 81.1064 6.94173 81.2568 6.5498C81.4118 6.15788 81.6214 5.82064 81.8857 5.53809C82.1546 5.25098 82.4691 5.02767 82.8291 4.86816C83.1891 4.70866 83.5697 4.62891 83.9707 4.62891C84.3171 4.62891 84.6406 4.69043 84.9414 4.81348C85.2467 4.93197 85.5179 5.09831 85.7549 5.3125C85.9919 5.52214 86.1901 5.76595 86.3496 6.04395C86.5091 6.32194 86.6253 6.62044 86.6982 6.93945H85.6523C85.5977 6.76172 85.5179 6.59538 85.4131 6.44043C85.3083 6.28092 85.1829 6.13965 85.0371 6.0166C84.8958 5.89355 84.734 5.79557 84.5518 5.72266C84.3695 5.64974 84.1758 5.61328 83.9707 5.61328ZM88.6533 7.84863C88.6533 8.18587 88.7035 8.49349 88.8037 8.77148C88.9085 9.04492 89.0498 9.27962 89.2275 9.47559C89.4053 9.67155 89.6081 9.82422 89.8359 9.93359C90.0684 10.0384 90.3053 10.0908 90.5469 10.0908C90.7884 10.0908 91.0231 10.0384 91.251 9.93359C91.4788 9.82422 91.6794 9.67155 91.8525 9.47559C92.0257 9.27962 92.1647 9.04492 92.2695 8.77148C92.3789 8.49349 92.4336 8.18587 92.4336 7.84863C92.4336 7.51139 92.3789 7.20605 92.2695 6.93262C92.1647 6.65918 92.0257 6.42448 91.8525 6.22852C91.6794 6.03255 91.4788 5.88216 91.251 5.77734C91.0231 5.66797 90.7884 5.61328 90.5469 5.61328C90.3053 5.61328 90.0684 5.66797 89.8359 5.77734C89.6081 5.88216 89.4053 6.03255 89.2275 6.22852C89.0498 6.42448 88.9085 6.65918 88.8037 6.93262C88.7035 7.20605 88.6533 7.51139 88.6533 7.84863ZM93.4863 7.84863C93.4863 8.32259 93.4089 8.75781 93.2539 9.1543C93.099 9.54622 92.8893 9.88574 92.625 10.1729C92.3607 10.4554 92.0485 10.6764 91.6885 10.8359C91.3285 10.9909 90.9479 11.0684 90.5469 11.0684C90.1458 11.0684 89.7653 10.9909 89.4053 10.8359C89.0452 10.6764 88.7308 10.4554 88.4619 10.1729C88.1976 9.88574 87.988 9.54622 87.833 9.1543C87.6826 8.76237 87.6074 8.32715 87.6074 7.84863C87.6074 7.37467 87.6826 6.94173 87.833 6.5498C87.988 6.15788 88.1976 5.82064 88.4619 5.53809C88.7308 5.25098 89.0452 5.02767 89.4053 4.86816C89.7653 4.70866 90.1458 4.62891 90.5469 4.62891C90.9479 4.62891 91.3285 4.70866 91.6885 4.86816C92.0485 5.02767 92.3607 5.25098 92.625 5.53809C92.8893 5.82064 93.099 6.15788 93.2539 6.5498C93.4089 6.94173 93.4863 7.37467 93.4863 7.84863ZM101.115 4.62891C101.393 4.62891 101.66 4.68815 101.915 4.80664C102.17 4.92057 102.396 5.09147 102.592 5.31934C102.788 5.54264 102.94 5.81608 103.05 6.13965C103.164 6.45866 103.221 6.81868 103.221 7.21973V11H102.168V7.21973C102.168 6.68652 102.047 6.28548 101.806 6.0166C101.564 5.74772 101.266 5.61328 100.91 5.61328C100.555 5.61328 100.243 5.75684 99.9736 6.04395C99.7093 6.33105 99.5771 6.72298 99.5771 7.21973V11H98.5312V7.21973C98.5312 6.68652 98.4082 6.28548 98.1621 6.0166C97.9206 5.74772 97.6221 5.61328 97.2666 5.61328C97.098 5.61328 96.9316 5.65202 96.7676 5.72949C96.6081 5.80697 96.4668 5.91862 96.3438 6.06445C96.2207 6.21029 96.1227 6.38118 96.0498 6.57715C95.9769 6.77311 95.9404 6.9873 95.9404 7.21973V11H94.8877V4.69727H95.6602L95.9404 5.40137C96.0452 5.26009 96.1706 5.13477 96.3164 5.02539C96.4486 4.92057 96.6081 4.82943 96.7949 4.75195C96.9818 4.66992 97.2096 4.62891 97.4785 4.62891C97.7975 4.62891 98.0664 4.68815 98.2852 4.80664C98.5039 4.92057 98.6839 5.04818 98.8252 5.18945C98.9938 5.35807 99.1283 5.54492 99.2285 5.75C99.3516 5.54492 99.502 5.35807 99.6797 5.18945C99.8392 5.04818 100.033 4.92057 100.261 4.80664C100.493 4.68815 100.778 4.62891 101.115 4.62891ZM110.077 9.31836C109.972 9.54167 109.84 9.7627 109.681 9.98145C109.521 10.1956 109.334 10.3825 109.12 10.542C108.906 10.6969 108.662 10.8245 108.389 10.9248C108.12 11.0205 107.819 11.0684 107.486 11.0684C107.085 11.0684 106.705 10.9909 106.345 10.8359C105.985 10.6764 105.67 10.4554 105.401 10.1729C105.137 9.88574 104.927 9.54622 104.772 9.1543C104.622 8.76237 104.547 8.32715 104.547 7.84863C104.547 7.37467 104.622 6.94173 104.772 6.5498C104.927 6.15788 105.135 5.82064 105.395 5.53809C105.659 5.25098 105.966 5.02767 106.317 4.86816C106.668 4.70866 107.035 4.62891 107.418 4.62891C107.801 4.62891 108.161 4.7041 108.498 4.85449C108.84 5.00488 109.136 5.21908 109.387 5.49707C109.642 5.77051 109.842 6.10091 109.988 6.48828C110.139 6.87565 110.214 7.30632 110.214 7.78027C110.214 7.87142 110.209 7.95117 110.2 8.01953C110.191 8.08333 110.182 8.13802 110.173 8.18359C110.164 8.23828 110.155 8.29069 110.146 8.34082H105.668C105.686 8.56413 105.748 8.78288 105.853 8.99707C105.962 9.21126 106.096 9.39811 106.256 9.55762C106.42 9.71712 106.609 9.84701 106.823 9.94727C107.042 10.043 107.263 10.0908 107.486 10.0908C107.682 10.0908 107.855 10.0635 108.006 10.0088C108.161 9.94954 108.302 9.88346 108.43 9.81055C108.557 9.73763 108.662 9.65788 108.744 9.57129C108.831 9.48014 108.901 9.39583 108.956 9.31836H110.077ZM107.418 5.61328C107.204 5.61328 106.999 5.65885 106.803 5.75C106.611 5.84115 106.436 5.96647 106.276 6.12598C106.121 6.28548 105.989 6.47689 105.88 6.7002C105.775 6.9235 105.704 7.16732 105.668 7.43164H109.093C109.02 6.87109 108.826 6.42904 108.512 6.10547C108.202 5.77734 107.837 5.61328 107.418 5.61328Z" fill="#333333" />
                                    <circle cx="6" cy="6" r="6" fill="#219653" />
                                    <path d="M20.6289 27.4922C20.6289 27.1914 20.6995 26.8997 20.8408 26.6172C20.9821 26.3301 21.1803 26.0749 21.4355 25.8516C21.6908 25.6283 21.9938 25.4505 22.3447 25.3184C22.6956 25.1816 23.0807 25.1133 23.5 25.1133C23.8828 25.1133 24.2383 25.1839 24.5664 25.3252C24.8991 25.4619 25.1885 25.6488 25.4346 25.8857C25.6852 26.1227 25.8789 26.4053 26.0156 26.7334C26.1569 27.0615 26.2275 27.4079 26.2275 27.7725H25.1133C25.1133 27.2757 24.9583 26.8724 24.6484 26.5625C24.3385 26.248 23.9557 26.0908 23.5 26.0908C23.2402 26.0908 23.001 26.1318 22.7822 26.2139C22.568 26.2913 22.3835 26.3962 22.2285 26.5283C22.0781 26.6559 21.9596 26.804 21.873 26.9727C21.791 27.1413 21.75 27.3145 21.75 27.4922C21.75 27.8568 21.8662 28.1393 22.0986 28.3398C22.3311 28.5404 22.6204 28.709 22.9668 28.8457C23.3132 28.9779 23.6891 29.1032 24.0947 29.2217C24.5003 29.3356 24.8763 29.4883 25.2227 29.6797C25.569 29.8711 25.8584 30.124 26.0908 30.4385C26.3232 30.7484 26.4395 31.1654 26.4395 31.6895C26.4395 32.0085 26.3711 32.3115 26.2344 32.5986C26.1022 32.8812 25.9085 33.1318 25.6533 33.3506C25.4027 33.5693 25.0951 33.7448 24.7305 33.877C24.3659 34.0046 23.9557 34.0684 23.5 34.0684C23.0443 34.0684 22.6341 34.0046 22.2695 33.877C21.9049 33.7448 21.5951 33.5602 21.3398 33.3232C21.0892 33.0817 20.8955 32.7992 20.7588 32.4756C20.6266 32.1475 20.5605 31.792 20.5605 31.4092H21.6816C21.6816 31.9424 21.8343 32.3571 22.1396 32.6533C22.4495 32.945 22.903 33.0908 23.5 33.0908C24.097 33.0908 24.5482 32.9564 24.8535 32.6875C25.1634 32.4141 25.3184 32.0814 25.3184 31.6895C25.3184 31.3249 25.2021 31.0423 24.9697 30.8418C24.7373 30.6413 24.4479 30.4749 24.1016 30.3428C23.7552 30.2061 23.3792 30.0807 22.9736 29.9668C22.568 29.8483 22.1921 29.6934 21.8457 29.502C21.5039 29.3105 21.2145 29.0599 20.9775 28.75C20.7451 28.4355 20.6289 28.0163 20.6289 27.4922ZM28.75 30.8486C28.75 31.1859 28.8024 31.4935 28.9072 31.7715C29.0166 32.0449 29.1602 32.2796 29.3379 32.4756C29.5156 32.6715 29.723 32.8242 29.96 32.9336C30.2015 33.0384 30.4521 33.0908 30.7119 33.0908C30.9717 33.0908 31.2201 33.0384 31.457 32.9336C31.6986 32.8242 31.9082 32.6715 32.0859 32.4756C32.2637 32.2796 32.4049 32.0449 32.5098 31.7715C32.6191 31.4935 32.6738 31.1859 32.6738 30.8486C32.6738 30.5114 32.6191 30.2061 32.5098 29.9326C32.4049 29.6592 32.2637 29.4245 32.0859 29.2285C31.9082 29.0326 31.6986 28.8822 31.457 28.7773C31.2201 28.668 30.9717 28.6133 30.7119 28.6133C30.4521 28.6133 30.2015 28.668 29.96 28.7773C29.723 28.8822 29.5156 29.0326 29.3379 29.2285C29.1602 29.4245 29.0166 29.6592 28.9072 29.9326C28.8024 30.2061 28.75 30.5114 28.75 30.8486ZM28.8936 28.4014C29.0257 28.2601 29.1829 28.1348 29.3652 28.0254C29.5247 27.9206 29.7207 27.8294 29.9531 27.752C30.1901 27.6699 30.4658 27.6289 30.7803 27.6289C31.1813 27.6289 31.5618 27.7087 31.9219 27.8682C32.2819 28.0277 32.5941 28.251 32.8584 28.5381C33.1273 28.8206 33.3369 29.1579 33.4873 29.5498C33.6423 29.9417 33.7197 30.3747 33.7197 30.8486C33.7197 31.3226 33.6423 31.7578 33.4873 32.1543C33.3369 32.5462 33.1273 32.8857 32.8584 33.1729C32.5941 33.4554 32.2819 33.6764 31.9219 33.8359C31.5618 33.9909 31.1813 34.0684 30.7803 34.0684C30.4613 34.0684 30.1855 34.0251 29.9531 33.9385C29.7207 33.8473 29.5247 33.7516 29.3652 33.6514C29.1784 33.5283 29.0212 33.387 28.8936 33.2275V36.2422H27.8408V27.6973H28.6133L28.8936 28.4014ZM35.7432 30.8486C35.7432 31.1859 35.7933 31.4935 35.8936 31.7715C35.9984 32.0449 36.1396 32.2796 36.3174 32.4756C36.4951 32.6715 36.6979 32.8242 36.9258 32.9336C37.1582 33.0384 37.3952 33.0908 37.6367 33.0908C37.8783 33.0908 38.113 33.0384 38.3408 32.9336C38.5687 32.8242 38.7692 32.6715 38.9424 32.4756C39.1156 32.2796 39.2546 32.0449 39.3594 31.7715C39.4688 31.4935 39.5234 31.1859 39.5234 30.8486C39.5234 30.5114 39.4688 30.2061 39.3594 29.9326C39.2546 29.6592 39.1156 29.4245 38.9424 29.2285C38.7692 29.0326 38.5687 28.8822 38.3408 28.7773C38.113 28.668 37.8783 28.6133 37.6367 28.6133C37.3952 28.6133 37.1582 28.668 36.9258 28.7773C36.6979 28.8822 36.4951 29.0326 36.3174 29.2285C36.1396 29.4245 35.9984 29.6592 35.8936 29.9326C35.7933 30.2061 35.7432 30.5114 35.7432 30.8486ZM40.5762 30.8486C40.5762 31.3226 40.4987 31.7578 40.3438 32.1543C40.1888 32.5462 39.9792 32.8857 39.7148 33.1729C39.4505 33.4554 39.1383 33.6764 38.7783 33.8359C38.4183 33.9909 38.0378 34.0684 37.6367 34.0684C37.2357 34.0684 36.8551 33.9909 36.4951 33.8359C36.1351 33.6764 35.8206 33.4554 35.5518 33.1729C35.2874 32.8857 35.0778 32.5462 34.9229 32.1543C34.7725 31.7624 34.6973 31.3271 34.6973 30.8486C34.6973 30.3747 34.7725 29.9417 34.9229 29.5498C35.0778 29.1579 35.2874 28.8206 35.5518 28.5381C35.8206 28.251 36.1351 28.0277 36.4951 27.8682C36.8551 27.7087 37.2357 27.6289 37.6367 27.6289C38.0378 27.6289 38.4183 27.7087 38.7783 27.8682C39.1383 28.0277 39.4505 28.251 39.7148 28.5381C39.9792 28.8206 40.1888 29.1579 40.3438 29.5498C40.4987 29.9417 40.5762 30.3747 40.5762 30.8486ZM44.4316 34.0684C44.0944 34.0684 43.7777 34.0023 43.4814 33.8701C43.1898 33.7334 42.93 33.5465 42.7021 33.3096C42.4788 33.068 42.3011 32.7809 42.1689 32.4482C42.0413 32.111 41.9775 31.7419 41.9775 31.3408V27.6973H43.0303V31.3408C43.0303 31.6006 43.069 31.8376 43.1465 32.0518C43.2285 32.266 43.3379 32.4505 43.4746 32.6055C43.6159 32.7604 43.7799 32.8812 43.9668 32.9678C44.1536 33.0498 44.3542 33.0908 44.5684 33.0908C45.0651 33.0908 45.4684 32.9336 45.7783 32.6191C46.0928 32.3001 46.25 31.874 46.25 31.3408V27.6973H47.2959V34H46.5303L46.25 33.3027C46.1178 33.4531 45.9629 33.583 45.7852 33.6924C45.6257 33.7972 45.4342 33.8861 45.2109 33.959C44.9922 34.0319 44.7324 34.0684 44.4316 34.0684ZM53.2432 32.1816C53.2432 32.4414 53.1908 32.6852 53.0859 32.9131C52.9857 33.141 52.8421 33.3415 52.6553 33.5146C52.4684 33.6878 52.2428 33.8245 51.9785 33.9248C51.7142 34.0205 51.4134 34.0684 51.0762 34.0684C50.3743 34.0684 49.8229 33.8815 49.4219 33.5078C49.0208 33.1341 48.8021 32.6693 48.7656 32.1133H49.8184C49.8548 32.3913 49.9756 32.6237 50.1807 32.8105C50.3857 32.9974 50.6842 33.0908 51.0762 33.0908C51.4316 33.0908 51.7074 32.9997 51.9033 32.8174C52.0993 32.6351 52.1973 32.4232 52.1973 32.1816C52.1973 31.9492 52.1152 31.7738 51.9512 31.6553C51.7871 31.5368 51.5843 31.4434 51.3428 31.375C51.1012 31.3066 50.8369 31.2428 50.5498 31.1836C50.2673 31.1198 50.0029 31.0286 49.7568 30.9102C49.5153 30.7871 49.3125 30.6139 49.1484 30.3906C48.9844 30.1628 48.9023 29.8483 48.9023 29.4473C48.9023 29.2057 48.9525 28.9756 49.0527 28.7568C49.1576 28.5381 49.3011 28.3444 49.4834 28.1758C49.6657 28.0072 49.8844 27.875 50.1396 27.7793C50.3994 27.679 50.6888 27.6289 51.0078 27.6289C51.6777 27.6289 52.1973 27.8044 52.5664 28.1553C52.9355 28.5062 53.1383 28.9619 53.1748 29.5225H52.1221C52.0856 29.2445 51.9785 29.0234 51.8008 28.8594C51.623 28.6953 51.3587 28.6133 51.0078 28.6133C50.6888 28.6133 50.4336 28.6999 50.2422 28.873C50.0508 29.0417 49.9551 29.2331 49.9551 29.4473C49.9551 29.6797 50.0371 29.8551 50.2012 29.9736C50.3652 30.0921 50.568 30.1878 50.8096 30.2607C51.0511 30.3291 51.3132 30.3929 51.5957 30.4521C51.8828 30.5114 52.1471 30.6025 52.3887 30.7256C52.6348 30.8441 52.8376 31.0195 52.9971 31.252C53.1611 31.4798 53.2432 31.7897 53.2432 32.1816ZM59.751 32.3184C59.6462 32.5417 59.514 32.7627 59.3545 32.9814C59.195 33.1956 59.0081 33.3825 58.7939 33.542C58.5798 33.6969 58.3359 33.8245 58.0625 33.9248C57.7936 34.0205 57.4928 34.0684 57.1602 34.0684C56.7591 34.0684 56.3786 33.9909 56.0186 33.8359C55.6585 33.6764 55.3441 33.4554 55.0752 33.1729C54.8109 32.8857 54.6012 32.5462 54.4463 32.1543C54.2959 31.7624 54.2207 31.3271 54.2207 30.8486C54.2207 30.3747 54.2959 29.9417 54.4463 29.5498C54.6012 29.1579 54.8086 28.8206 55.0684 28.5381C55.3327 28.251 55.6403 28.0277 55.9912 27.8682C56.3421 27.7087 56.709 27.6289 57.0918 27.6289C57.4746 27.6289 57.8346 27.7041 58.1719 27.8545C58.5137 28.0049 58.8099 28.2191 59.0605 28.4971C59.3158 28.7705 59.5163 29.1009 59.6621 29.4883C59.8125 29.8757 59.8877 30.3063 59.8877 30.7803C59.8877 30.8714 59.8831 30.9512 59.874 31.0195C59.8649 31.0833 59.8558 31.138 59.8467 31.1836C59.8376 31.2383 59.8285 31.2907 59.8193 31.3408H55.3418C55.36 31.5641 55.4215 31.7829 55.5264 31.9971C55.6357 32.2113 55.7702 32.3981 55.9297 32.5576C56.0938 32.7171 56.2829 32.847 56.4971 32.9473C56.7158 33.043 56.9368 33.0908 57.1602 33.0908C57.3561 33.0908 57.5293 33.0635 57.6797 33.0088C57.8346 32.9495 57.9759 32.8835 58.1035 32.8105C58.2311 32.7376 58.3359 32.6579 58.418 32.5713C58.5046 32.4801 58.5752 32.3958 58.6299 32.3184H59.751ZM57.0918 28.6133C56.8776 28.6133 56.6725 28.6589 56.4766 28.75C56.2852 28.8411 56.1097 28.9665 55.9502 29.126C55.7952 29.2855 55.6631 29.4769 55.5537 29.7002C55.4489 29.9235 55.3783 30.1673 55.3418 30.4316H58.7666C58.6937 29.8711 58.5 29.429 58.1855 29.1055C57.8757 28.7773 57.5111 28.6133 57.0918 28.6133ZM65.3428 34H64.29V27.6973H65.3428V34ZM64.1533 25.9199C64.1533 25.724 64.2148 25.5645 64.3379 25.4414C64.4655 25.3138 64.6227 25.25 64.8096 25.25C65.0055 25.25 65.165 25.3138 65.2881 25.4414C65.4157 25.5645 65.4795 25.724 65.4795 25.9199C65.4795 26.1068 65.4157 26.264 65.2881 26.3916C65.165 26.5192 65.0055 26.583 64.8096 26.583C64.6227 26.583 64.4655 26.5192 64.3379 26.3916C64.2148 26.264 64.1533 26.1068 64.1533 25.9199ZM70.0322 27.6289C70.3695 27.6289 70.6839 27.6973 70.9756 27.834C71.2718 27.9707 71.5316 28.1576 71.7549 28.3945C71.9782 28.6315 72.1536 28.9186 72.2812 29.2559C72.4134 29.5885 72.4795 29.9577 72.4795 30.3633V34H71.4336V30.3633C71.4336 30.1035 71.3903 29.8665 71.3037 29.6523C71.2217 29.4336 71.11 29.2467 70.9688 29.0918C70.8275 28.9368 70.6634 28.8184 70.4766 28.7363C70.2943 28.6543 70.0983 28.6133 69.8887 28.6133C69.3919 28.6133 68.9886 28.7728 68.6787 29.0918C68.3688 29.4062 68.2139 29.8301 68.2139 30.3633V34H67.1611V27.6973H67.9336L68.2139 28.4014C68.346 28.2601 68.4987 28.1348 68.6719 28.0254C68.8314 27.9206 69.0228 27.8294 69.2461 27.752C69.4694 27.6699 69.7314 27.6289 70.0322 27.6289ZM76.752 28.6133C76.5104 28.6133 76.2734 28.668 76.041 28.7773C75.8132 28.8822 75.6104 29.0326 75.4326 29.2285C75.2549 29.4245 75.1136 29.6592 75.0088 29.9326C74.9085 30.2061 74.8584 30.5114 74.8584 30.8486C74.8584 31.1859 74.9085 31.4935 75.0088 31.7715C75.1136 32.0449 75.2549 32.2796 75.4326 32.4756C75.6104 32.6715 75.8132 32.8242 76.041 32.9336C76.2734 33.0384 76.5104 33.0908 76.752 33.0908C76.957 33.0908 77.1507 33.0544 77.333 32.9814C77.5153 32.904 77.6771 32.806 77.8184 32.6875C77.9642 32.5645 78.0872 32.4232 78.1875 32.2637C78.2923 32.1042 78.3743 31.9355 78.4336 31.7578H79.4795C79.4066 32.0768 79.2904 32.3776 79.1309 32.6602C78.9714 32.9382 78.7731 33.182 78.5361 33.3916C78.2992 33.6012 78.028 33.7676 77.7227 33.8906C77.4219 34.0091 77.0983 34.0684 76.752 34.0684C76.3509 34.0684 75.9704 33.9909 75.6104 33.8359C75.2503 33.6764 74.9359 33.4554 74.667 33.1729C74.4027 32.8857 74.193 32.5462 74.0381 32.1543C73.8877 31.7624 73.8125 31.3271 73.8125 30.8486C73.8125 30.3747 73.8877 29.9417 74.0381 29.5498C74.193 29.1579 74.4027 28.8206 74.667 28.5381C74.9359 28.251 75.2503 28.0277 75.6104 27.8682C75.9704 27.7087 76.3509 27.6289 76.752 27.6289C77.0983 27.6289 77.4219 27.6904 77.7227 27.8135C78.028 27.932 78.2992 28.0983 78.5361 28.3125C78.7731 28.5221 78.9714 28.766 79.1309 29.0439C79.2904 29.3219 79.4066 29.6204 79.4795 29.9395H78.4336C78.3789 29.7617 78.2992 29.5954 78.1943 29.4404C78.0895 29.2809 77.9642 29.1396 77.8184 29.0166C77.6771 28.8936 77.5153 28.7956 77.333 28.7227C77.1507 28.6497 76.957 28.6133 76.752 28.6133ZM81.4346 30.8486C81.4346 31.1859 81.4847 31.4935 81.585 31.7715C81.6898 32.0449 81.8311 32.2796 82.0088 32.4756C82.1865 32.6715 82.3893 32.8242 82.6172 32.9336C82.8496 33.0384 83.0866 33.0908 83.3281 33.0908C83.5697 33.0908 83.8044 33.0384 84.0322 32.9336C84.2601 32.8242 84.4606 32.6715 84.6338 32.4756C84.807 32.2796 84.946 32.0449 85.0508 31.7715C85.1602 31.4935 85.2148 31.1859 85.2148 30.8486C85.2148 30.5114 85.1602 30.2061 85.0508 29.9326C84.946 29.6592 84.807 29.4245 84.6338 29.2285C84.4606 29.0326 84.2601 28.8822 84.0322 28.7773C83.8044 28.668 83.5697 28.6133 83.3281 28.6133C83.0866 28.6133 82.8496 28.668 82.6172 28.7773C82.3893 28.8822 82.1865 29.0326 82.0088 29.2285C81.8311 29.4245 81.6898 29.6592 81.585 29.9326C81.4847 30.2061 81.4346 30.5114 81.4346 30.8486ZM86.2676 30.8486C86.2676 31.3226 86.1901 31.7578 86.0352 32.1543C85.8802 32.5462 85.6706 32.8857 85.4062 33.1729C85.1419 33.4554 84.8298 33.6764 84.4697 33.8359C84.1097 33.9909 83.7292 34.0684 83.3281 34.0684C82.9271 34.0684 82.5465 33.9909 82.1865 33.8359C81.8265 33.6764 81.512 33.4554 81.2432 33.1729C80.9788 32.8857 80.7692 32.5462 80.6143 32.1543C80.4639 31.7624 80.3887 31.3271 80.3887 30.8486C80.3887 30.3747 80.4639 29.9417 80.6143 29.5498C80.7692 29.1579 80.9788 28.8206 81.2432 28.5381C81.512 28.251 81.8265 28.0277 82.1865 27.8682C82.5465 27.7087 82.9271 27.6289 83.3281 27.6289C83.7292 27.6289 84.1097 27.7087 84.4697 27.8682C84.8298 28.0277 85.1419 28.251 85.4062 28.5381C85.6706 28.8206 85.8802 29.1579 86.0352 29.5498C86.1901 29.9417 86.2676 30.3747 86.2676 30.8486ZM93.8965 27.6289C94.1745 27.6289 94.4411 27.6882 94.6963 27.8066C94.9515 27.9206 95.1771 28.0915 95.373 28.3193C95.569 28.5426 95.7217 28.8161 95.8311 29.1396C95.945 29.4587 96.002 29.8187 96.002 30.2197V34H94.9492V30.2197C94.9492 29.6865 94.8285 29.2855 94.5869 29.0166C94.3454 28.7477 94.0469 28.6133 93.6914 28.6133C93.3359 28.6133 93.0238 28.7568 92.7549 29.0439C92.4906 29.3311 92.3584 29.723 92.3584 30.2197V34H91.3125V30.2197C91.3125 29.6865 91.1895 29.2855 90.9434 29.0166C90.7018 28.7477 90.4033 28.6133 90.0479 28.6133C89.8792 28.6133 89.7129 28.652 89.5488 28.7295C89.3893 28.807 89.248 28.9186 89.125 29.0645C89.002 29.2103 88.904 29.3812 88.8311 29.5771C88.7581 29.7731 88.7217 29.9873 88.7217 30.2197V34H87.6689V27.6973H88.4414L88.7217 28.4014C88.8265 28.2601 88.9518 28.1348 89.0977 28.0254C89.2298 27.9206 89.3893 27.8294 89.5762 27.752C89.763 27.6699 89.9909 27.6289 90.2598 27.6289C90.5788 27.6289 90.8477 27.6882 91.0664 27.8066C91.2852 27.9206 91.4652 28.0482 91.6064 28.1895C91.7751 28.3581 91.9095 28.5449 92.0098 28.75C92.1328 28.5449 92.2832 28.3581 92.4609 28.1895C92.6204 28.0482 92.8141 27.9206 93.042 27.8066C93.2744 27.6882 93.5592 27.6289 93.8965 27.6289ZM102.858 32.3184C102.754 32.5417 102.621 32.7627 102.462 32.9814C102.302 33.1956 102.116 33.3825 101.901 33.542C101.687 33.6969 101.443 33.8245 101.17 33.9248C100.901 34.0205 100.6 34.0684 100.268 34.0684C99.8665 34.0684 99.486 33.9909 99.126 33.8359C98.766 33.6764 98.4515 33.4554 98.1826 33.1729C97.9183 32.8857 97.7087 32.5462 97.5537 32.1543C97.4033 31.7624 97.3281 31.3271 97.3281 30.8486C97.3281 30.3747 97.4033 29.9417 97.5537 29.5498C97.7087 29.1579 97.916 28.8206 98.1758 28.5381C98.4401 28.251 98.7477 28.0277 99.0986 27.8682C99.4495 27.7087 99.8164 27.6289 100.199 27.6289C100.582 27.6289 100.942 27.7041 101.279 27.8545C101.621 28.0049 101.917 28.2191 102.168 28.4971C102.423 28.7705 102.624 29.1009 102.77 29.4883C102.92 29.8757 102.995 30.3063 102.995 30.7803C102.995 30.8714 102.991 30.9512 102.981 31.0195C102.972 31.0833 102.963 31.138 102.954 31.1836C102.945 31.2383 102.936 31.2907 102.927 31.3408H98.4492C98.4674 31.5641 98.529 31.7829 98.6338 31.9971C98.7432 32.2113 98.8776 32.3981 99.0371 32.5576C99.2012 32.7171 99.3903 32.847 99.6045 32.9473C99.8232 33.043 100.044 33.0908 100.268 33.0908C100.464 33.0908 100.637 33.0635 100.787 33.0088C100.942 32.9495 101.083 32.8835 101.211 32.8105C101.339 32.7376 101.443 32.6579 101.525 32.5713C101.612 32.4801 101.683 32.3958 101.737 32.3184H102.858ZM100.199 28.6133C99.985 28.6133 99.7799 28.6589 99.584 28.75C99.3926 28.8411 99.2171 28.9665 99.0576 29.126C98.9027 29.2855 98.7705 29.4769 98.6611 29.7002C98.5563 29.9235 98.4857 30.1673 98.4492 30.4316H101.874C101.801 29.8711 101.607 29.429 101.293 29.1055C100.983 28.7773 100.618 28.6133 100.199 28.6133Z" fill="#333333" />
                                    <circle cx="6" cy="29" r="6" fill="#EB5757" />
                                    <path d="M21.6133 52.5908C21.6133 53.0967 21.6953 53.5638 21.8594 53.9922C22.028 54.4206 22.2513 54.792 22.5293 55.1064C22.8118 55.4163 23.1354 55.6579 23.5 55.8311C23.8646 56.0042 24.2383 56.0908 24.6211 56.0908C25.0039 56.0908 25.3776 56.0042 25.7422 55.8311C26.1068 55.6579 26.4281 55.4163 26.7061 55.1064C26.984 54.792 27.2074 54.4206 27.376 53.9922C27.5446 53.5592 27.6289 53.0921 27.6289 52.5908C27.6289 52.085 27.5446 51.6178 27.376 51.1895C27.2074 50.7611 26.984 50.3919 26.7061 50.082C26.4281 49.7676 26.1068 49.5238 25.7422 49.3506C25.3776 49.1774 25.0039 49.0908 24.6211 49.0908C24.2383 49.0908 23.8646 49.1774 23.5 49.3506C23.1354 49.5238 22.8118 49.7676 22.5293 50.082C22.2513 50.3919 22.028 50.7611 21.8594 51.1895C21.6953 51.6178 21.6133 52.085 21.6133 52.5908ZM28.75 52.5908C28.75 53.2243 28.6361 53.8122 28.4082 54.3545C28.1803 54.8968 27.8773 55.3708 27.499 55.7764C27.1208 56.182 26.681 56.4987 26.1797 56.7266C25.6829 56.9544 25.1634 57.0684 24.6211 57.0684C24.0788 57.0684 23.557 56.9544 23.0557 56.7266C22.5589 56.4987 22.1214 56.182 21.7432 55.7764C21.3649 55.3708 21.0618 54.8968 20.834 54.3545C20.6061 53.8122 20.4922 53.2243 20.4922 52.5908C20.4922 51.9665 20.6061 51.3809 20.834 50.834C21.0618 50.2871 21.3649 49.8109 21.7432 49.4053C22.1214 48.9997 22.5589 48.6829 23.0557 48.4551C23.557 48.2272 24.0788 48.1133 24.6211 48.1133C25.1634 48.1133 25.6829 48.2272 26.1797 48.4551C26.681 48.6829 27.1208 48.9997 27.499 49.4053C27.8773 49.8109 28.1803 50.2871 28.4082 50.834C28.6361 51.3809 28.75 51.9665 28.75 52.5908ZM30.7803 49.0225H31.6895V50.6973H33.0908V51.6816H31.6895V54.9697C31.6895 55.3252 31.7852 55.6009 31.9766 55.7969C32.168 55.9928 32.4232 56.0908 32.7422 56.0908C32.8333 56.0908 32.9176 56.0817 32.9951 56.0635C33.0316 56.0544 33.0635 56.0407 33.0908 56.0225V56.9316C33.0452 56.959 32.9951 56.9818 32.9404 57C32.8174 57.0456 32.6579 57.0684 32.4619 57.0684C32.2204 57.0684 31.9902 57.0182 31.7715 56.918C31.5527 56.8132 31.359 56.6696 31.1904 56.4873C31.0218 56.305 30.8874 56.0863 30.7871 55.8311C30.6914 55.5758 30.6436 55.2887 30.6436 54.9697V51.6816H29.5225V50.6973H30.0146C30.5296 50.6973 30.7848 50.4421 30.7803 49.9316V49.0225ZM37.5752 50.6289C37.9124 50.6289 38.2269 50.6973 38.5186 50.834C38.8148 50.9707 39.0745 51.1576 39.2979 51.3945C39.5212 51.6315 39.6989 51.9186 39.8311 52.2559C39.9632 52.5885 40.0293 52.9577 40.0293 53.3633V57H38.9766V53.3633C38.9766 53.1035 38.9333 52.8665 38.8467 52.6523C38.7646 52.4336 38.653 52.2467 38.5117 52.0918C38.375 51.9368 38.2132 51.8184 38.0264 51.7363C37.8395 51.6543 37.6436 51.6133 37.4385 51.6133C36.9417 51.6133 36.5361 51.7728 36.2217 52.0918C35.9118 52.4062 35.7568 52.8301 35.7568 53.3633V57H34.7041V48.1816H35.7568V51.4697C35.889 51.3102 36.0439 51.1712 36.2217 51.0527C36.3812 50.9479 36.5703 50.8522 36.7891 50.7656C37.0124 50.6745 37.2744 50.6289 37.5752 50.6289ZM46.8857 55.3184C46.7809 55.5417 46.6488 55.7627 46.4893 55.9814C46.3298 56.1956 46.1429 56.3825 45.9287 56.542C45.7145 56.6969 45.4707 56.8245 45.1973 56.9248C44.9284 57.0205 44.6276 57.0684 44.2949 57.0684C43.8939 57.0684 43.5133 56.9909 43.1533 56.8359C42.7933 56.6764 42.4788 56.4554 42.21 56.1729C41.9456 55.8857 41.736 55.5462 41.5811 55.1543C41.4307 54.7624 41.3555 54.3271 41.3555 53.8486C41.3555 53.3747 41.4307 52.9417 41.5811 52.5498C41.736 52.1579 41.9434 51.8206 42.2031 51.5381C42.4674 51.251 42.7751 51.0277 43.126 50.8682C43.4769 50.7087 43.8438 50.6289 44.2266 50.6289C44.6094 50.6289 44.9694 50.7041 45.3066 50.8545C45.6484 51.0049 45.9447 51.2191 46.1953 51.4971C46.4505 51.7705 46.651 52.1009 46.7969 52.4883C46.9473 52.8757 47.0225 53.3063 47.0225 53.7803C47.0225 53.8714 47.0179 53.9512 47.0088 54.0195C46.9997 54.0833 46.9906 54.138 46.9814 54.1836C46.9723 54.2383 46.9632 54.2907 46.9541 54.3408H42.4766C42.4948 54.5641 42.5563 54.7829 42.6611 54.9971C42.7705 55.2113 42.9049 55.3981 43.0645 55.5576C43.2285 55.7171 43.4176 55.847 43.6318 55.9473C43.8506 56.043 44.0716 56.0908 44.2949 56.0908C44.4909 56.0908 44.6641 56.0635 44.8145 56.0088C44.9694 55.9495 45.1107 55.8835 45.2383 55.8105C45.3659 55.7376 45.4707 55.6579 45.5527 55.5713C45.6393 55.4801 45.71 55.3958 45.7646 55.3184H46.8857ZM44.2266 51.6133C44.0124 51.6133 43.8073 51.6589 43.6113 51.75C43.4199 51.8411 43.2445 51.9665 43.085 52.126C42.93 52.2855 42.7979 52.4769 42.6885 52.7002C42.5837 52.9235 42.513 53.1673 42.4766 53.4316H45.9014C45.8285 52.8711 45.6348 52.429 45.3203 52.1055C45.0104 51.7773 44.6458 51.6133 44.2266 51.6133ZM51.4248 51.6816H51.1445C50.6478 51.6816 50.2445 51.8411 49.9346 52.1602C49.6247 52.4746 49.4697 52.8984 49.4697 53.4316V57H48.417V50.6973H49.1895L49.4697 51.4014C49.6019 51.2601 49.7546 51.1348 49.9277 51.0254C50.0872 50.9206 50.2786 50.8294 50.502 50.752C50.7253 50.6699 50.9873 50.6289 51.2881 50.6289H51.4248V51.6816ZM56.6748 57H55.6221V50.6973H56.6748V57ZM55.4854 48.9199C55.4854 48.724 55.5469 48.5645 55.6699 48.4414C55.7975 48.3138 55.9548 48.25 56.1416 48.25C56.3376 48.25 56.4971 48.3138 56.6201 48.4414C56.7477 48.5645 56.8115 48.724 56.8115 48.9199C56.8115 49.1068 56.7477 49.264 56.6201 49.3916C56.4971 49.5192 56.3376 49.583 56.1416 49.583C55.9548 49.583 55.7975 49.5192 55.6699 49.3916C55.5469 49.264 55.4854 49.1068 55.4854 48.9199ZM61.3643 50.6289C61.7015 50.6289 62.016 50.6973 62.3076 50.834C62.6038 50.9707 62.8636 51.1576 63.0869 51.3945C63.3102 51.6315 63.4857 51.9186 63.6133 52.2559C63.7454 52.5885 63.8115 52.9577 63.8115 53.3633V57H62.7656V53.3633C62.7656 53.1035 62.7223 52.8665 62.6357 52.6523C62.5537 52.4336 62.4421 52.2467 62.3008 52.0918C62.1595 51.9368 61.9954 51.8184 61.8086 51.7363C61.6263 51.6543 61.4303 51.6133 61.2207 51.6133C60.724 51.6133 60.3206 51.7728 60.0107 52.0918C59.7008 52.4062 59.5459 52.8301 59.5459 53.3633V57H58.4932V50.6973H59.2656L59.5459 51.4014C59.6781 51.2601 59.8307 51.1348 60.0039 51.0254C60.1634 50.9206 60.3548 50.8294 60.5781 50.752C60.8014 50.6699 61.0635 50.6289 61.3643 50.6289ZM68.084 51.6133C67.8424 51.6133 67.6055 51.668 67.373 51.7773C67.1452 51.8822 66.9424 52.0326 66.7646 52.2285C66.5869 52.4245 66.4456 52.6592 66.3408 52.9326C66.2406 53.2061 66.1904 53.5114 66.1904 53.8486C66.1904 54.1859 66.2406 54.4935 66.3408 54.7715C66.4456 55.0449 66.5869 55.2796 66.7646 55.4756C66.9424 55.6715 67.1452 55.8242 67.373 55.9336C67.6055 56.0384 67.8424 56.0908 68.084 56.0908C68.2891 56.0908 68.4827 56.0544 68.665 55.9814C68.8473 55.904 69.0091 55.806 69.1504 55.6875C69.2962 55.5645 69.4193 55.4232 69.5195 55.2637C69.6243 55.1042 69.7064 54.9355 69.7656 54.7578H70.8115C70.7386 55.0768 70.6224 55.3776 70.4629 55.6602C70.3034 55.9382 70.1051 56.182 69.8682 56.3916C69.6312 56.6012 69.36 56.7676 69.0547 56.8906C68.7539 57.0091 68.4303 57.0684 68.084 57.0684C67.6829 57.0684 67.3024 56.9909 66.9424 56.8359C66.5824 56.6764 66.2679 56.4554 65.999 56.1729C65.7347 55.8857 65.5251 55.5462 65.3701 55.1543C65.2197 54.7624 65.1445 54.3271 65.1445 53.8486C65.1445 53.3747 65.2197 52.9417 65.3701 52.5498C65.5251 52.1579 65.7347 51.8206 65.999 51.5381C66.2679 51.251 66.5824 51.0277 66.9424 50.8682C67.3024 50.7087 67.6829 50.6289 68.084 50.6289C68.4303 50.6289 68.7539 50.6904 69.0547 50.8135C69.36 50.932 69.6312 51.0983 69.8682 51.3125C70.1051 51.5221 70.3034 51.766 70.4629 52.0439C70.6224 52.3219 70.7386 52.6204 70.8115 52.9395H69.7656C69.7109 52.7617 69.6312 52.5954 69.5264 52.4404C69.4215 52.2809 69.2962 52.1396 69.1504 52.0166C69.0091 51.8936 68.8473 51.7956 68.665 51.7227C68.4827 51.6497 68.2891 51.6133 68.084 51.6133ZM72.7666 53.8486C72.7666 54.1859 72.8167 54.4935 72.917 54.7715C73.0218 55.0449 73.1631 55.2796 73.3408 55.4756C73.5186 55.6715 73.7214 55.8242 73.9492 55.9336C74.1816 56.0384 74.4186 56.0908 74.6602 56.0908C74.9017 56.0908 75.1364 56.0384 75.3643 55.9336C75.5921 55.8242 75.7926 55.6715 75.9658 55.4756C76.139 55.2796 76.278 55.0449 76.3828 54.7715C76.4922 54.4935 76.5469 54.1859 76.5469 53.8486C76.5469 53.5114 76.4922 53.2061 76.3828 52.9326C76.278 52.6592 76.139 52.4245 75.9658 52.2285C75.7926 52.0326 75.5921 51.8822 75.3643 51.7773C75.1364 51.668 74.9017 51.6133 74.6602 51.6133C74.4186 51.6133 74.1816 51.668 73.9492 51.7773C73.7214 51.8822 73.5186 52.0326 73.3408 52.2285C73.1631 52.4245 73.0218 52.6592 72.917 52.9326C72.8167 53.2061 72.7666 53.5114 72.7666 53.8486ZM77.5996 53.8486C77.5996 54.3226 77.5221 54.7578 77.3672 55.1543C77.2122 55.5462 77.0026 55.8857 76.7383 56.1729C76.474 56.4554 76.1618 56.6764 75.8018 56.8359C75.4417 56.9909 75.0612 57.0684 74.6602 57.0684C74.2591 57.0684 73.8786 56.9909 73.5186 56.8359C73.1585 56.6764 72.8441 56.4554 72.5752 56.1729C72.3109 55.8857 72.1012 55.5462 71.9463 55.1543C71.7959 54.7624 71.7207 54.3271 71.7207 53.8486C71.7207 53.3747 71.7959 52.9417 71.9463 52.5498C72.1012 52.1579 72.3109 51.8206 72.5752 51.5381C72.8441 51.251 73.1585 51.0277 73.5186 50.8682C73.8786 50.7087 74.2591 50.6289 74.6602 50.6289C75.0612 50.6289 75.4417 50.7087 75.8018 50.8682C76.1618 51.0277 76.474 51.251 76.7383 51.5381C77.0026 51.8206 77.2122 52.1579 77.3672 52.5498C77.5221 52.9417 77.5996 53.3747 77.5996 53.8486ZM85.2285 50.6289C85.5065 50.6289 85.7731 50.6882 86.0283 50.8066C86.2835 50.9206 86.5091 51.0915 86.7051 51.3193C86.901 51.5426 87.0537 51.8161 87.1631 52.1396C87.277 52.4587 87.334 52.8187 87.334 53.2197V57H86.2812V53.2197C86.2812 52.6865 86.1605 52.2855 85.9189 52.0166C85.6774 51.7477 85.3789 51.6133 85.0234 51.6133C84.668 51.6133 84.3558 51.7568 84.0869 52.0439C83.8226 52.3311 83.6904 52.723 83.6904 53.2197V57H82.6445V53.2197C82.6445 52.6865 82.5215 52.2855 82.2754 52.0166C82.0339 51.7477 81.7354 51.6133 81.3799 51.6133C81.2113 51.6133 81.0449 51.652 80.8809 51.7295C80.7214 51.807 80.5801 51.9186 80.457 52.0645C80.334 52.2103 80.236 52.3812 80.1631 52.5771C80.0902 52.7731 80.0537 52.9873 80.0537 53.2197V57H79.001V50.6973H79.7734L80.0537 51.4014C80.1585 51.2601 80.2839 51.1348 80.4297 51.0254C80.5618 50.9206 80.7214 50.8294 80.9082 50.752C81.0951 50.6699 81.3229 50.6289 81.5918 50.6289C81.9108 50.6289 82.1797 50.6882 82.3984 50.8066C82.6172 50.9206 82.7972 51.0482 82.9385 51.1895C83.1071 51.3581 83.2415 51.5449 83.3418 51.75C83.4648 51.5449 83.6152 51.3581 83.793 51.1895C83.9525 51.0482 84.1462 50.9206 84.374 50.8066C84.6064 50.6882 84.8913 50.6289 85.2285 50.6289ZM94.1904 55.3184C94.0856 55.5417 93.9535 55.7627 93.7939 55.9814C93.6344 56.1956 93.4476 56.3825 93.2334 56.542C93.0192 56.6969 92.7754 56.8245 92.502 56.9248C92.2331 57.0205 91.9323 57.0684 91.5996 57.0684C91.1986 57.0684 90.818 56.9909 90.458 56.8359C90.098 56.6764 89.7835 56.4554 89.5146 56.1729C89.2503 55.8857 89.0407 55.5462 88.8857 55.1543C88.7354 54.7624 88.6602 54.3271 88.6602 53.8486C88.6602 53.3747 88.7354 52.9417 88.8857 52.5498C89.0407 52.1579 89.248 51.8206 89.5078 51.5381C89.7721 51.251 90.0798 51.0277 90.4307 50.8682C90.7816 50.7087 91.1484 50.6289 91.5312 50.6289C91.9141 50.6289 92.2741 50.7041 92.6113 50.8545C92.9531 51.0049 93.2493 51.2191 93.5 51.4971C93.7552 51.7705 93.9557 52.1009 94.1016 52.4883C94.252 52.8757 94.3271 53.3063 94.3271 53.7803C94.3271 53.8714 94.3226 53.9512 94.3135 54.0195C94.3044 54.0833 94.2952 54.138 94.2861 54.1836C94.277 54.2383 94.2679 54.2907 94.2588 54.3408H89.7812C89.7995 54.5641 89.861 54.7829 89.9658 54.9971C90.0752 55.2113 90.2096 55.3981 90.3691 55.5576C90.5332 55.7171 90.7223 55.847 90.9365 55.9473C91.1553 56.043 91.3763 56.0908 91.5996 56.0908C91.7956 56.0908 91.9688 56.0635 92.1191 56.0088C92.2741 55.9495 92.4154 55.8835 92.543 55.8105C92.6706 55.7376 92.7754 55.6579 92.8574 55.5713C92.944 55.4801 93.0146 55.3958 93.0693 55.3184H94.1904ZM91.5312 51.6133C91.3171 51.6133 91.112 51.6589 90.916 51.75C90.7246 51.8411 90.5492 51.9665 90.3896 52.126C90.2347 52.2855 90.1025 52.4769 89.9932 52.7002C89.8883 52.9235 89.8177 53.1673 89.7812 53.4316H93.2061C93.1331 52.8711 92.9395 52.429 92.625 52.1055C92.3151 51.7773 91.9505 51.6133 91.5312 51.6133Z" fill="#333333" />
                                    <circle cx="6" cy="52" r="6" fill="#2F80ED" />
                                  </svg>

                                </div>
                              </div>
                            </div>
                            <div className="summary-overview">
                              <h2>Summary</h2>
                                  {
                                    Math.round((Number(inputData.incomeMonthly) * 100) / (totalIncome)) <=50? (<p>
                                      This implies that you have several sources of income apart from income generated from your salary or business. With this percentage you can easily overcome financial hurdles when one source of income fails
                                    </p>): Math.round((Number(inputData.incomeMonthly) * 100) / (totalIncome)) >= 51 && Math.round((Number(inputData.incomeMonthly) * 100) / (totalIncome))<= 80? (<p>
                                      As this is not totally bad. It implies that {Math.round((Number(inputData.incomeMonthly) * 100) / (totalIncome))}% of your monthly incomes comes from mainly one source. <br />
                                      This could affect your financial stability if issue arises in the future <br />
                                      It is advisable you diversify more to avoid unplanned sitautions
                                    </p>) : (<p>
                                      This indicate that { Math.round((Number(inputData.incomeMonthly) * 100) / (totalIncome))}% of your incomes comes from monthly salary. <br/>
                                      This is not safe, and you might find it difficult to maintain your standard of living incase your stream of income is affected.
                                    </p>)
                                    
                                    
                                    
                                    }
                            </div>


                          </div>
                          <div className="overview-result-sec mt-5">

                            <div className="overview-result-inflow">
                              <h2>Outflow Analysis</h2>

                              <div className="d-flex mt-3 mb-3 align-items-center flex-flow-wrap justify-content-center">
                                <div className="chart-wrapper">
                                  <PieChart
                                    animate
                                    animationDuration={500}
                                    animationEasing="ease-out"
                                    label={({ dataEntry }) => `${Math.round(dataEntry.percentage)}%`}
                                    labelPosition={65}
                                    labelStyle={{
                                      fontSize: "5px",
                                      fontWeight: "600",
                                      fill: '#FFFFFF',

                                    }}
                                    data={[
                                      { title: "Home/Utility", value: Math.round((homeUtility * 100) / (totalExpenses)), color: '#2D9CDB' },
                                      { title: "Food", value: Math.round((food * 100) / (totalExpenses)), color: '#F98250' },
                                      { title: "Transportation", value: Math.round((transportation * 100) / (totalExpenses)), color: '#DED053' },
                                      { title: "Insurance", value: Math.round((insurance * 100) / (totalExpenses)), color: '#6CEB57' },
                                      { title: "Entertainment", value: Math.round((entertainment * 100) / (totalExpenses)), color: '#C04FB5' },
                                      { title: "Services And Support", value: Math.round((servicesAndSupport * 100) / (totalExpenses)), color: '#216C96' },
                                      { title: "Personal", value: Math.round((personal * 100) / (totalExpenses)), color: '#F0008C' },
                                      { title: "Child Care", value: Math.round((childCareNanny * 100) / (totalExpenses)), color: '#F1C2EC' },
                                      { title: "Giving", value: Math.round((giving * 100) / (totalExpenses)), color: '#219653' },
                                      { title: "Investment Expense", value: Math.round((ex_InvestmentExpense * 100) / (totalExpenses)), color: '#EB5757' },
                                    ]}
                                  />

                                </div>
                                <div className="m-3 ml-5">
                                  <svg width="116" height="262" viewBox="0 0 116 262" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="6" cy="171" r="6" fill="#F0008C" />
                                    <path d="M25.7188 164.922C26.1562 164.922 26.5703 165.005 26.9609 165.172C27.3516 165.333 27.6901 165.56 27.9766 165.852C28.263 166.138 28.4922 166.471 28.6641 166.852C28.8359 167.227 28.9219 167.622 28.9219 168.039C28.9219 168.456 28.8359 168.854 28.6641 169.234C28.4922 169.609 28.263 169.943 27.9766 170.234C27.6901 170.521 27.3516 170.747 26.9609 170.914C26.5703 171.076 26.1562 171.156 25.7188 171.156H23.5625V175H22.2812V164.922H25.7188ZM25.7188 170.039C25.974 170.039 26.2188 169.99 26.4531 169.891C26.6875 169.786 26.8932 169.646 27.0703 169.469C27.2474 169.286 27.3854 169.073 27.4844 168.828C27.5885 168.578 27.6406 168.315 27.6406 168.039C27.6406 167.763 27.5885 167.503 27.4844 167.258C27.3854 167.013 27.2474 166.799 27.0703 166.617C26.8932 166.435 26.6875 166.294 26.4531 166.195C26.2188 166.091 25.974 166.039 25.7188 166.039H23.5625V170.039H25.7188ZM36.2891 173.078C36.1693 173.333 36.0182 173.586 35.8359 173.836C35.6536 174.081 35.4401 174.294 35.1953 174.477C34.9505 174.654 34.6719 174.799 34.3594 174.914C34.0521 175.023 33.7083 175.078 33.3281 175.078C32.8698 175.078 32.4349 174.99 32.0234 174.812C31.612 174.63 31.2526 174.378 30.9453 174.055C30.6432 173.727 30.4036 173.339 30.2266 172.891C30.0547 172.443 29.9688 171.945 29.9688 171.398C29.9688 170.857 30.0547 170.362 30.2266 169.914C30.4036 169.466 30.6406 169.081 30.9375 168.758C31.2396 168.43 31.5911 168.174 31.9922 167.992C32.3932 167.81 32.8125 167.719 33.25 167.719C33.6875 167.719 34.099 167.805 34.4844 167.977C34.875 168.148 35.2135 168.393 35.5 168.711C35.7917 169.023 36.0208 169.401 36.1875 169.844C36.3594 170.286 36.4453 170.779 36.4453 171.32C36.4453 171.424 36.4401 171.516 36.4297 171.594C36.4193 171.667 36.4089 171.729 36.3984 171.781C36.388 171.844 36.3776 171.904 36.3672 171.961H31.25C31.2708 172.216 31.3411 172.466 31.4609 172.711C31.5859 172.956 31.7396 173.169 31.9219 173.352C32.1094 173.534 32.3255 173.682 32.5703 173.797C32.8203 173.906 33.0729 173.961 33.3281 173.961C33.5521 173.961 33.75 173.93 33.9219 173.867C34.099 173.799 34.2604 173.724 34.4062 173.641C34.5521 173.557 34.6719 173.466 34.7656 173.367C34.8646 173.263 34.9453 173.167 35.0078 173.078H36.2891ZM33.25 168.844C33.0052 168.844 32.7708 168.896 32.5469 169C32.3281 169.104 32.1276 169.247 31.9453 169.43C31.7682 169.612 31.6172 169.831 31.4922 170.086C31.3724 170.341 31.2917 170.62 31.25 170.922H35.1641C35.0807 170.281 34.8594 169.776 34.5 169.406C34.1458 169.031 33.7292 168.844 33.25 168.844ZM41.4766 168.922H41.1562C40.5885 168.922 40.1276 169.104 39.7734 169.469C39.4193 169.828 39.2422 170.312 39.2422 170.922V175H38.0391V167.797H38.9219L39.2422 168.602C39.3932 168.44 39.5677 168.297 39.7656 168.172C39.9479 168.052 40.1667 167.948 40.4219 167.859C40.6771 167.766 40.9766 167.719 41.3203 167.719H41.4766V168.922ZM47.4766 172.922C47.4766 173.219 47.4167 173.497 47.2969 173.758C47.1823 174.018 47.0182 174.247 46.8047 174.445C46.5911 174.643 46.3333 174.799 46.0312 174.914C45.7292 175.023 45.3854 175.078 45 175.078C44.1979 175.078 43.5677 174.865 43.1094 174.438C42.651 174.01 42.401 173.479 42.3594 172.844H43.5625C43.6042 173.161 43.7422 173.427 43.9766 173.641C44.2109 173.854 44.5521 173.961 45 173.961C45.4062 173.961 45.7214 173.857 45.9453 173.648C46.1693 173.44 46.2812 173.198 46.2812 172.922C46.2812 172.656 46.1875 172.456 46 172.32C45.8125 172.185 45.5807 172.078 45.3047 172C45.0286 171.922 44.7266 171.849 44.3984 171.781C44.0755 171.708 43.7734 171.604 43.4922 171.469C43.2161 171.328 42.9844 171.13 42.7969 170.875C42.6094 170.615 42.5156 170.255 42.5156 169.797C42.5156 169.521 42.5729 169.258 42.6875 169.008C42.8073 168.758 42.9714 168.536 43.1797 168.344C43.388 168.151 43.638 168 43.9297 167.891C44.2266 167.776 44.5573 167.719 44.9219 167.719C45.6875 167.719 46.2812 167.919 46.7031 168.32C47.125 168.721 47.3568 169.242 47.3984 169.883H46.1953C46.1536 169.565 46.0312 169.312 45.8281 169.125C45.625 168.938 45.3229 168.844 44.9219 168.844C44.5573 168.844 44.2656 168.943 44.0469 169.141C43.8281 169.333 43.7188 169.552 43.7188 169.797C43.7188 170.062 43.8125 170.263 44 170.398C44.1875 170.534 44.4193 170.643 44.6953 170.727C44.9714 170.805 45.2708 170.878 45.5938 170.945C45.9219 171.013 46.224 171.117 46.5 171.258C46.7812 171.393 47.013 171.594 47.1953 171.859C47.3828 172.12 47.4766 172.474 47.4766 172.922ZM49.7891 171.398C49.7891 171.784 49.8464 172.135 49.9609 172.453C50.0807 172.766 50.2422 173.034 50.4453 173.258C50.6484 173.482 50.8802 173.656 51.1406 173.781C51.4062 173.901 51.6771 173.961 51.9531 173.961C52.2292 173.961 52.4974 173.901 52.7578 173.781C53.0182 173.656 53.2474 173.482 53.4453 173.258C53.6432 173.034 53.8021 172.766 53.9219 172.453C54.0469 172.135 54.1094 171.784 54.1094 171.398C54.1094 171.013 54.0469 170.664 53.9219 170.352C53.8021 170.039 53.6432 169.771 53.4453 169.547C53.2474 169.323 53.0182 169.151 52.7578 169.031C52.4974 168.906 52.2292 168.844 51.9531 168.844C51.6771 168.844 51.4062 168.906 51.1406 169.031C50.8802 169.151 50.6484 169.323 50.4453 169.547C50.2422 169.771 50.0807 170.039 49.9609 170.352C49.8464 170.664 49.7891 171.013 49.7891 171.398ZM55.3125 171.398C55.3125 171.94 55.224 172.438 55.0469 172.891C54.8698 173.339 54.6302 173.727 54.3281 174.055C54.026 174.378 53.6693 174.63 53.2578 174.812C52.8464 174.99 52.4115 175.078 51.9531 175.078C51.4948 175.078 51.0599 174.99 50.6484 174.812C50.237 174.63 49.8776 174.378 49.5703 174.055C49.2682 173.727 49.0286 173.339 48.8516 172.891C48.6797 172.443 48.5938 171.945 48.5938 171.398C48.5938 170.857 48.6797 170.362 48.8516 169.914C49.0286 169.466 49.2682 169.081 49.5703 168.758C49.8776 168.43 50.237 168.174 50.6484 167.992C51.0599 167.81 51.4948 167.719 51.9531 167.719C52.4115 167.719 52.8464 167.81 53.2578 167.992C53.6693 168.174 54.026 168.43 54.3281 168.758C54.6302 169.081 54.8698 169.466 55.0469 169.914C55.224 170.362 55.3125 170.857 55.3125 171.398ZM60.1953 167.719C60.5807 167.719 60.9401 167.797 61.2734 167.953C61.612 168.109 61.9089 168.323 62.1641 168.594C62.4193 168.865 62.6198 169.193 62.7656 169.578C62.9167 169.958 62.9922 170.38 62.9922 170.844V175H61.7969V170.844C61.7969 170.547 61.7474 170.276 61.6484 170.031C61.5547 169.781 61.4271 169.568 61.2656 169.391C61.1042 169.214 60.9167 169.078 60.7031 168.984C60.4948 168.891 60.2708 168.844 60.0312 168.844C59.4635 168.844 59.0026 169.026 58.6484 169.391C58.2943 169.75 58.1172 170.234 58.1172 170.844V175H56.9141V167.797H57.7969L58.1172 168.602C58.2682 168.44 58.4427 168.297 58.6406 168.172C58.8229 168.052 59.0417 167.948 59.2969 167.859C59.5521 167.766 59.8516 167.719 60.1953 167.719ZM67.7109 167.719C68.1068 167.719 68.4714 167.786 68.8047 167.922C69.1432 168.052 69.4323 168.229 69.6719 168.453C69.9115 168.677 70.0964 168.94 70.2266 169.242C70.362 169.539 70.4297 169.859 70.4297 170.203V175H69.5547L69.2344 174.203C69.0729 174.375 68.8906 174.523 68.6875 174.648C68.5052 174.768 68.2812 174.87 68.0156 174.953C67.75 175.036 67.4349 175.078 67.0703 175.078C66.7057 175.078 66.3776 175.023 66.0859 174.914C65.7943 174.799 65.5443 174.643 65.3359 174.445C65.1276 174.247 64.9635 174.018 64.8438 173.758C64.7292 173.497 64.6719 173.219 64.6719 172.922C64.6719 172.578 64.7396 172.266 64.875 171.984C65.0156 171.703 65.2552 171.458 65.5938 171.25C65.9375 171.042 66.4062 170.883 67 170.773C67.5938 170.659 68.3385 170.602 69.2344 170.602V170.203C69.2344 169.839 69.0911 169.521 68.8047 169.25C68.5234 168.979 68.1589 168.844 67.7109 168.844C67.263 168.844 66.9323 168.938 66.7188 169.125C66.5052 169.307 66.3568 169.56 66.2734 169.883H64.9922C65.0339 169.586 65.125 169.307 65.2656 169.047C65.4062 168.781 65.5911 168.549 65.8203 168.352C66.0495 168.154 66.3203 168 66.6328 167.891C66.9453 167.776 67.3047 167.719 67.7109 167.719ZM67.0703 173.961C67.388 173.961 67.6797 173.911 67.9453 173.812C68.2161 173.708 68.4453 173.578 68.6328 173.422C68.8203 173.26 68.9661 173.081 69.0703 172.883C69.1797 172.685 69.2344 172.484 69.2344 172.281V171.719C68.5104 171.719 67.9297 171.75 67.4922 171.812C67.0547 171.87 66.7135 171.956 66.4688 172.07C66.2292 172.18 66.0703 172.312 65.9922 172.469C65.9141 172.62 65.875 172.797 65.875 173C65.875 173.245 65.9818 173.466 66.1953 173.664C66.4141 173.862 66.7057 173.961 67.0703 173.961ZM73.7109 175H72.5078V164.922H73.7109V175Z" fill="#4F4F4F" />
                                    <circle cx="6" cy="117" r="6" fill="#C04FB5" />
                                    <path d="M27.9453 123H22.374V113.006H27.9453V114.038H23.5361V117.258H27.6787V118.283H23.5361V121.961H27.9453V123ZM35.123 123V118.153C35.123 117.543 34.984 117.087 34.7061 116.786C34.4281 116.485 33.9928 116.335 33.4004 116.335C32.6165 116.335 32.0423 116.547 31.6777 116.971C31.3132 117.395 31.1309 118.094 31.1309 119.069V123H29.9961V115.508H30.9189L31.1035 116.533H31.1582C31.3906 116.164 31.7165 115.879 32.1357 115.679C32.555 115.474 33.0221 115.371 33.5371 115.371C34.4395 115.371 35.1185 115.59 35.5742 116.027C36.0299 116.46 36.2578 117.155 36.2578 118.112V123H35.123ZM41.0156 122.2C41.2161 122.2 41.4098 122.187 41.5967 122.159C41.7835 122.127 41.9316 122.095 42.041 122.063V122.932C41.918 122.991 41.7357 123.039 41.4941 123.075C41.2572 123.116 41.043 123.137 40.8516 123.137C39.4023 123.137 38.6777 122.373 38.6777 120.847V116.39H37.6045V115.843L38.6777 115.371L39.1562 113.771H39.8125V115.508H41.9863V116.39H39.8125V120.799C39.8125 121.25 39.9196 121.596 40.1338 121.838C40.348 122.079 40.6419 122.2 41.0156 122.2ZM46.71 123.137C45.6025 123.137 44.7275 122.799 44.085 122.125C43.4469 121.451 43.1279 120.514 43.1279 119.315C43.1279 118.108 43.4242 117.148 44.0166 116.438C44.6136 115.727 45.4134 115.371 46.416 115.371C47.3548 115.371 48.0977 115.681 48.6445 116.301C49.1914 116.916 49.4648 117.729 49.4648 118.741V119.459H44.3037C44.3265 120.339 44.5475 121.006 44.9668 121.462C45.3906 121.918 45.9854 122.146 46.751 122.146C47.5576 122.146 48.3551 121.977 49.1436 121.64V122.651C48.7425 122.825 48.362 122.948 48.002 123.021C47.6465 123.098 47.2158 123.137 46.71 123.137ZM46.4023 116.321C45.8008 116.321 45.32 116.517 44.96 116.909C44.6045 117.301 44.3949 117.843 44.3311 118.536H48.248C48.248 117.821 48.0885 117.274 47.7695 116.896C47.4505 116.513 46.9948 116.321 46.4023 116.321ZM54.8242 115.371C55.1569 115.371 55.4554 115.398 55.7197 115.453L55.5625 116.506C55.2526 116.438 54.9792 116.403 54.7422 116.403C54.1361 116.403 53.6165 116.649 53.1836 117.142C52.7552 117.634 52.541 118.247 52.541 118.98V123H51.4062V115.508H52.3428L52.4727 116.896H52.5273C52.8053 116.408 53.1403 116.032 53.5322 115.768C53.9242 115.503 54.3548 115.371 54.8242 115.371ZM59.541 122.2C59.7415 122.2 59.9352 122.187 60.1221 122.159C60.3089 122.127 60.457 122.095 60.5664 122.063V122.932C60.4434 122.991 60.2611 123.039 60.0195 123.075C59.7826 123.116 59.5684 123.137 59.377 123.137C57.9277 123.137 57.2031 122.373 57.2031 120.847V116.39H56.1299V115.843L57.2031 115.371L57.6816 113.771H58.3379V115.508H60.5117V116.39H58.3379V120.799C58.3379 121.25 58.445 121.596 58.6592 121.838C58.8734 122.079 59.1673 122.2 59.541 122.2ZM66.6777 123L66.4521 121.934H66.3975C66.0238 122.403 65.6501 122.722 65.2764 122.891C64.9072 123.055 64.4447 123.137 63.8887 123.137C63.1458 123.137 62.5625 122.945 62.1387 122.562C61.7194 122.18 61.5098 121.635 61.5098 120.929C61.5098 119.416 62.7197 118.623 65.1396 118.55L66.4111 118.509V118.044C66.4111 117.456 66.2835 117.023 66.0283 116.745C65.7777 116.463 65.3743 116.321 64.8184 116.321C64.194 116.321 63.4876 116.513 62.6992 116.896L62.3506 116.027C62.7197 115.827 63.123 115.67 63.5605 115.556C64.0026 115.442 64.4447 115.385 64.8867 115.385C65.7799 115.385 66.4408 115.583 66.8691 115.979C67.3021 116.376 67.5186 117.012 67.5186 117.887V123H66.6777ZM64.1143 122.2C64.8206 122.2 65.3743 122.007 65.7754 121.619C66.181 121.232 66.3838 120.689 66.3838 119.992V119.315L65.249 119.363C64.3467 119.395 63.695 119.536 63.2939 119.787C62.8975 120.033 62.6992 120.418 62.6992 120.942C62.6992 121.353 62.8223 121.665 63.0684 121.879C63.319 122.093 63.6676 122.2 64.1143 122.2ZM70.998 123H69.8633V115.508H70.998V123ZM69.7676 113.478C69.7676 113.218 69.8314 113.029 69.959 112.91C70.0866 112.787 70.2461 112.726 70.4375 112.726C70.6198 112.726 70.777 112.787 70.9092 112.91C71.0413 113.033 71.1074 113.222 71.1074 113.478C71.1074 113.733 71.0413 113.924 70.9092 114.052C70.777 114.175 70.6198 114.236 70.4375 114.236C70.2461 114.236 70.0866 114.175 69.959 114.052C69.8314 113.924 69.7676 113.733 69.7676 113.478ZM78.5312 123V118.153C78.5312 117.543 78.3923 117.087 78.1143 116.786C77.8363 116.485 77.401 116.335 76.8086 116.335C76.0247 116.335 75.4505 116.547 75.0859 116.971C74.7214 117.395 74.5391 118.094 74.5391 119.069V123H73.4043V115.508H74.3271L74.5117 116.533H74.5664C74.7988 116.164 75.1247 115.879 75.5439 115.679C75.9632 115.474 76.4303 115.371 76.9453 115.371C77.8477 115.371 78.5267 115.59 78.9824 116.027C79.4382 116.46 79.666 117.155 79.666 118.112V123H78.5312ZM91.5537 123V118.126C91.5537 117.529 91.4261 117.082 91.1709 116.786C90.9157 116.485 90.5192 116.335 89.9814 116.335C89.2751 116.335 88.7533 116.538 88.416 116.943C88.0788 117.349 87.9102 117.973 87.9102 118.816V123H86.7754V118.126C86.7754 117.529 86.6478 117.082 86.3926 116.786C86.1374 116.485 85.7386 116.335 85.1963 116.335C84.4854 116.335 83.9635 116.549 83.6309 116.978C83.3027 117.401 83.1387 118.099 83.1387 119.069V123H82.0039V115.508H82.9268L83.1113 116.533H83.166C83.3802 116.169 83.681 115.884 84.0684 115.679C84.4603 115.474 84.8978 115.371 85.3809 115.371C86.5521 115.371 87.3177 115.795 87.6777 116.643H87.7324C87.9557 116.251 88.2793 115.941 88.7031 115.713C89.127 115.485 89.61 115.371 90.1523 115.371C91 115.371 91.6335 115.59 92.0527 116.027C92.4766 116.46 92.6885 117.155 92.6885 118.112V123H91.5537ZM98.1982 123.137C97.0908 123.137 96.2158 122.799 95.5732 122.125C94.9352 121.451 94.6162 120.514 94.6162 119.315C94.6162 118.108 94.9124 117.148 95.5049 116.438C96.1019 115.727 96.9017 115.371 97.9043 115.371C98.8431 115.371 99.5859 115.681 100.133 116.301C100.68 116.916 100.953 117.729 100.953 118.741V119.459H95.792C95.8148 120.339 96.0358 121.006 96.4551 121.462C96.8789 121.918 97.4736 122.146 98.2393 122.146C99.0459 122.146 99.8434 121.977 100.632 121.64V122.651C100.231 122.825 99.8503 122.948 99.4902 123.021C99.1348 123.098 98.7041 123.137 98.1982 123.137ZM97.8906 116.321C97.2891 116.321 96.8083 116.517 96.4482 116.909C96.0928 117.301 95.8831 117.843 95.8193 118.536H99.7363C99.7363 117.821 99.5768 117.274 99.2578 116.896C98.9388 116.513 98.4831 116.321 97.8906 116.321ZM108.021 123V118.153C108.021 117.543 107.882 117.087 107.604 116.786C107.326 116.485 106.891 116.335 106.299 116.335C105.515 116.335 104.941 116.547 104.576 116.971C104.212 117.395 104.029 118.094 104.029 119.069V123H102.895V115.508H103.817L104.002 116.533H104.057C104.289 116.164 104.615 115.879 105.034 115.679C105.453 115.474 105.921 115.371 106.436 115.371C107.338 115.371 108.017 115.59 108.473 116.027C108.928 116.46 109.156 117.155 109.156 118.112V123H108.021ZM113.914 122.2C114.115 122.2 114.308 122.187 114.495 122.159C114.682 122.127 114.83 122.095 114.939 122.063V122.932C114.816 122.991 114.634 123.039 114.393 123.075C114.156 123.116 113.941 123.137 113.75 123.137C112.301 123.137 111.576 122.373 111.576 120.847V116.39H110.503V115.843L111.576 115.371L112.055 113.771H112.711V115.508H114.885V116.39H112.711V120.799C112.711 121.25 112.818 121.596 113.032 121.838C113.246 122.079 113.54 122.2 113.914 122.2Z" fill="#4F4F4F" />
                                    <circle cx="6" cy="144" r="6" fill="#216C96" />
                                    <path d="M28.0137 147.341C28.0137 148.22 27.6947 148.906 27.0566 149.398C26.4186 149.891 25.5527 150.137 24.459 150.137C23.2741 150.137 22.3626 149.984 21.7246 149.679V148.558C22.1348 148.731 22.5814 148.868 23.0645 148.968C23.5475 149.068 24.026 149.118 24.5 149.118C25.2747 149.118 25.8581 148.972 26.25 148.681C26.6419 148.384 26.8379 147.974 26.8379 147.45C26.8379 147.104 26.7673 146.821 26.626 146.603C26.4893 146.379 26.2568 146.174 25.9287 145.987C25.6051 145.8 25.1107 145.589 24.4453 145.352C23.5156 145.019 22.8503 144.625 22.4492 144.169C22.0527 143.713 21.8545 143.118 21.8545 142.385C21.8545 141.615 22.1439 141.002 22.7227 140.546C23.3014 140.09 24.0671 139.862 25.0195 139.862C26.013 139.862 26.9268 140.045 27.7607 140.409L27.3984 141.421C26.5736 141.075 25.7715 140.901 24.9922 140.901C24.377 140.901 23.8962 141.034 23.5498 141.298C23.2035 141.562 23.0303 141.929 23.0303 142.398C23.0303 142.745 23.0941 143.03 23.2217 143.253C23.3493 143.472 23.5635 143.674 23.8643 143.861C24.1696 144.044 24.6344 144.246 25.2588 144.47C26.307 144.843 27.027 145.244 27.4189 145.673C27.8154 146.101 28.0137 146.657 28.0137 147.341ZM33.0518 150.137C31.9443 150.137 31.0693 149.799 30.4268 149.125C29.7887 148.451 29.4697 147.514 29.4697 146.315C29.4697 145.108 29.766 144.148 30.3584 143.438C30.9554 142.727 31.7552 142.371 32.7578 142.371C33.6966 142.371 34.4395 142.681 34.9863 143.301C35.5332 143.916 35.8066 144.729 35.8066 145.741V146.459H30.6455C30.6683 147.339 30.8893 148.006 31.3086 148.462C31.7324 148.918 32.3271 149.146 33.0928 149.146C33.8994 149.146 34.6969 148.977 35.4854 148.64V149.651C35.0843 149.825 34.7038 149.948 34.3438 150.021C33.9883 150.098 33.5576 150.137 33.0518 150.137ZM32.7441 143.321C32.1426 143.321 31.6618 143.517 31.3018 143.909C30.9463 144.301 30.7367 144.843 30.6729 145.536H34.5898C34.5898 144.821 34.4303 144.274 34.1113 143.896C33.7923 143.513 33.3366 143.321 32.7441 143.321ZM41.166 142.371C41.4987 142.371 41.7972 142.398 42.0615 142.453L41.9043 143.506C41.5944 143.438 41.321 143.403 41.084 143.403C40.4779 143.403 39.9583 143.649 39.5254 144.142C39.097 144.634 38.8828 145.247 38.8828 145.98V150H37.748V142.508H38.6846L38.8145 143.896H38.8691C39.1471 143.408 39.4821 143.032 39.874 142.768C40.266 142.503 40.6966 142.371 41.166 142.371ZM45.1035 150L42.2598 142.508H43.4766L45.0898 146.951C45.4544 147.99 45.6686 148.665 45.7324 148.975H45.7871C45.8372 148.733 45.9945 148.234 46.2588 147.478C46.5277 146.716 47.127 145.06 48.0566 142.508H49.2734L46.4297 150H45.1035ZM51.6113 150H50.4766V142.508H51.6113V150ZM50.3809 140.478C50.3809 140.218 50.4447 140.029 50.5723 139.91C50.6999 139.787 50.8594 139.726 51.0508 139.726C51.2331 139.726 51.3903 139.787 51.5225 139.91C51.6546 140.033 51.7207 140.222 51.7207 140.478C51.7207 140.733 51.6546 140.924 51.5225 141.052C51.3903 141.175 51.2331 141.236 51.0508 141.236C50.8594 141.236 50.6999 141.175 50.5723 141.052C50.4447 140.924 50.3809 140.733 50.3809 140.478ZM57.0117 150.137C55.9271 150.137 55.0863 149.804 54.4893 149.139C53.8968 148.469 53.6006 147.523 53.6006 146.302C53.6006 145.049 53.9014 144.08 54.5029 143.396C55.109 142.713 55.9704 142.371 57.0869 142.371C57.4469 142.371 57.807 142.41 58.167 142.487C58.527 142.565 58.8096 142.656 59.0146 142.761L58.666 143.725C58.4154 143.624 58.1419 143.542 57.8457 143.479C57.5495 143.41 57.2874 143.376 57.0596 143.376C55.5374 143.376 54.7764 144.347 54.7764 146.288C54.7764 147.209 54.9609 147.915 55.3301 148.407C55.7038 148.899 56.2552 149.146 56.9844 149.146C57.6087 149.146 58.249 149.011 58.9053 148.742V149.747C58.404 150.007 57.7728 150.137 57.0117 150.137ZM63.8545 150.137C62.7471 150.137 61.8721 149.799 61.2295 149.125C60.5915 148.451 60.2725 147.514 60.2725 146.315C60.2725 145.108 60.5687 144.148 61.1611 143.438C61.7581 142.727 62.5579 142.371 63.5605 142.371C64.4993 142.371 65.2422 142.681 65.7891 143.301C66.3359 143.916 66.6094 144.729 66.6094 145.741V146.459H61.4482C61.471 147.339 61.6921 148.006 62.1113 148.462C62.5352 148.918 63.1299 149.146 63.8955 149.146C64.7021 149.146 65.4997 148.977 66.2881 148.64V149.651C65.887 149.825 65.5065 149.948 65.1465 150.021C64.791 150.098 64.3604 150.137 63.8545 150.137ZM63.5469 143.321C62.9453 143.321 62.4645 143.517 62.1045 143.909C61.749 144.301 61.5394 144.843 61.4756 145.536H65.3926C65.3926 144.821 65.2331 144.274 64.9141 143.896C64.5951 143.513 64.1393 143.321 63.5469 143.321ZM73.3838 147.956C73.3838 148.653 73.124 149.191 72.6045 149.569C72.085 149.948 71.3558 150.137 70.417 150.137C69.4235 150.137 68.6488 149.979 68.0928 149.665V148.612C68.4528 148.795 68.8379 148.938 69.248 149.043C69.6628 149.148 70.0615 149.2 70.4443 149.2C71.0368 149.2 71.4925 149.107 71.8115 148.92C72.1305 148.729 72.29 148.439 72.29 148.052C72.29 147.76 72.1624 147.512 71.9072 147.307C71.6566 147.097 71.1644 146.851 70.4307 146.568C69.7334 146.309 69.2367 146.083 68.9404 145.892C68.6488 145.696 68.43 145.475 68.2842 145.229C68.1429 144.982 68.0723 144.688 68.0723 144.347C68.0723 143.736 68.3206 143.255 68.8174 142.904C69.3141 142.549 69.9954 142.371 70.8613 142.371C71.668 142.371 72.4564 142.535 73.2266 142.863L72.8232 143.786C72.0713 143.476 71.39 143.321 70.7793 143.321C70.2415 143.321 69.8359 143.406 69.5625 143.574C69.2891 143.743 69.1523 143.975 69.1523 144.271C69.1523 144.472 69.2025 144.643 69.3027 144.784C69.4076 144.925 69.5739 145.06 69.8018 145.188C70.0296 145.315 70.4671 145.5 71.1143 145.741C72.0029 146.065 72.6022 146.391 72.9121 146.719C73.2266 147.047 73.3838 147.459 73.3838 147.956Z" fill="#4F4F4F" />
                                    <circle cx="6" cy="200" r="6" fill="#F1C2EC" />
                                    <path d="M26.7695 200.764H30.167V205.624C29.6383 205.793 29.1006 205.92 28.5537 206.007C28.0068 206.093 27.3734 206.137 26.6533 206.137C25.1403 206.137 23.9622 205.688 23.1191 204.79C22.276 203.888 21.8545 202.625 21.8545 201.003C21.8545 199.964 22.0618 199.055 22.4766 198.275C22.8958 197.492 23.4974 196.895 24.2812 196.484C25.0651 196.07 25.9834 195.862 27.0361 195.862C28.1025 195.862 29.096 196.058 30.0166 196.45L29.5654 197.476C28.6631 197.093 27.7949 196.901 26.9609 196.901C25.7441 196.901 24.7939 197.264 24.1104 197.988C23.4268 198.713 23.085 199.718 23.085 201.003C23.085 202.352 23.4131 203.375 24.0693 204.072C24.7301 204.77 25.6986 205.118 26.9746 205.118C27.6673 205.118 28.3441 205.038 29.0049 204.879V201.803H26.7695V200.764ZM33.5371 206H32.4023V198.508H33.5371V206ZM32.3066 196.478C32.3066 196.218 32.3704 196.029 32.498 195.91C32.6257 195.787 32.7852 195.726 32.9766 195.726C33.1589 195.726 33.3161 195.787 33.4482 195.91C33.5804 196.033 33.6465 196.222 33.6465 196.478C33.6465 196.733 33.5804 196.924 33.4482 197.052C33.3161 197.175 33.1589 197.236 32.9766 197.236C32.7852 197.236 32.6257 197.175 32.498 197.052C32.3704 196.924 32.3066 196.733 32.3066 196.478ZM37.584 206L34.7402 198.508H35.957L37.5703 202.951C37.9349 203.99 38.1491 204.665 38.2129 204.975H38.2676C38.3177 204.733 38.4749 204.234 38.7393 203.478C39.0081 202.716 39.6074 201.06 40.5371 198.508H41.7539L38.9102 206H37.584ZM44.0918 206H42.957V198.508H44.0918V206ZM42.8613 196.478C42.8613 196.218 42.9251 196.029 43.0527 195.91C43.1803 195.787 43.3398 195.726 43.5312 195.726C43.7135 195.726 43.8708 195.787 44.0029 195.91C44.1351 196.033 44.2012 196.222 44.2012 196.478C44.2012 196.733 44.1351 196.924 44.0029 197.052C43.8708 197.175 43.7135 197.236 43.5312 197.236C43.3398 197.236 43.1803 197.175 43.0527 197.052C42.9251 196.924 42.8613 196.733 42.8613 196.478ZM51.625 206V201.153C51.625 200.543 51.486 200.087 51.208 199.786C50.93 199.485 50.4948 199.335 49.9023 199.335C49.1185 199.335 48.5443 199.547 48.1797 199.971C47.8151 200.395 47.6328 201.094 47.6328 202.069V206H46.498V198.508H47.4209L47.6055 199.533H47.6602C47.8926 199.164 48.2184 198.879 48.6377 198.679C49.057 198.474 49.5241 198.371 50.0391 198.371C50.9414 198.371 51.6204 198.59 52.0762 199.027C52.5319 199.46 52.7598 200.155 52.7598 201.112V206H51.625ZM61.2295 198.508V199.226L59.8418 199.39C59.9694 199.549 60.0833 199.759 60.1836 200.019C60.2839 200.274 60.334 200.563 60.334 200.887C60.334 201.62 60.0833 202.206 59.582 202.644C59.0807 203.081 58.3926 203.3 57.5176 203.3C57.2943 203.3 57.0846 203.282 56.8887 203.245C56.4056 203.5 56.1641 203.822 56.1641 204.209C56.1641 204.414 56.2484 204.567 56.417 204.667C56.5856 204.763 56.875 204.811 57.2852 204.811H58.6113C59.4225 204.811 60.0446 204.981 60.4775 205.323C60.915 205.665 61.1338 206.162 61.1338 206.813C61.1338 207.643 60.8011 208.274 60.1357 208.707C59.4704 209.145 58.4997 209.363 57.2236 209.363C56.2438 209.363 55.4873 209.181 54.9541 208.816C54.4255 208.452 54.1611 207.937 54.1611 207.271C54.1611 206.816 54.307 206.422 54.5986 206.089C54.8903 205.756 55.3005 205.531 55.8291 205.412C55.6377 205.326 55.4759 205.191 55.3438 205.009C55.2161 204.826 55.1523 204.615 55.1523 204.373C55.1523 204.1 55.2253 203.86 55.3711 203.655C55.5169 203.45 55.7471 203.252 56.0615 203.061C55.6742 202.901 55.3574 202.63 55.1113 202.247C54.8698 201.864 54.749 201.427 54.749 200.935C54.749 200.114 54.9951 199.483 55.4873 199.041C55.9795 198.594 56.6768 198.371 57.5791 198.371C57.971 198.371 58.3242 198.417 58.6387 198.508H61.2295ZM55.2549 207.258C55.2549 207.663 55.4258 207.971 55.7676 208.181C56.1094 208.39 56.5993 208.495 57.2373 208.495C58.1898 208.495 58.8939 208.352 59.3496 208.064C59.8099 207.782 60.04 207.397 60.04 206.909C60.04 206.504 59.9147 206.221 59.6641 206.062C59.4134 205.907 58.9417 205.829 58.249 205.829H56.8887C56.3737 205.829 55.9727 205.952 55.6855 206.198C55.3984 206.444 55.2549 206.798 55.2549 207.258ZM55.8701 200.907C55.8701 201.431 56.0182 201.828 56.3145 202.097C56.6107 202.366 57.0231 202.5 57.5518 202.5C58.6592 202.5 59.2129 201.962 59.2129 200.887C59.2129 199.761 58.6523 199.198 57.5312 199.198C56.998 199.198 56.5879 199.342 56.3008 199.629C56.0137 199.916 55.8701 200.342 55.8701 200.907Z" fill="#4F4F4F" />
                                    <circle cx="6" cy="227" r="6" fill="#219653" />
                                    <path d="M28.0137 230.341C28.0137 231.22 27.6947 231.906 27.0566 232.398C26.4186 232.891 25.5527 233.137 24.459 233.137C23.2741 233.137 22.3626 232.984 21.7246 232.679V231.558C22.1348 231.731 22.5814 231.868 23.0645 231.968C23.5475 232.068 24.026 232.118 24.5 232.118C25.2747 232.118 25.8581 231.972 26.25 231.681C26.6419 231.384 26.8379 230.974 26.8379 230.45C26.8379 230.104 26.7673 229.821 26.626 229.603C26.4893 229.379 26.2568 229.174 25.9287 228.987C25.6051 228.8 25.1107 228.589 24.4453 228.352C23.5156 228.019 22.8503 227.625 22.4492 227.169C22.0527 226.713 21.8545 226.118 21.8545 225.385C21.8545 224.615 22.1439 224.002 22.7227 223.546C23.3014 223.09 24.0671 222.862 25.0195 222.862C26.013 222.862 26.9268 223.045 27.7607 223.409L27.3984 224.421C26.5736 224.075 25.7715 223.901 24.9922 223.901C24.377 223.901 23.8962 224.034 23.5498 224.298C23.2035 224.562 23.0303 224.929 23.0303 225.398C23.0303 225.745 23.0941 226.03 23.2217 226.253C23.3493 226.472 23.5635 226.674 23.8643 226.861C24.1696 227.044 24.6344 227.246 25.2588 227.47C26.307 227.843 27.027 228.244 27.4189 228.673C27.8154 229.101 28.0137 229.657 28.0137 230.341ZM34.4941 233L34.2686 231.934H34.2139C33.8402 232.403 33.4665 232.722 33.0928 232.891C32.7236 233.055 32.2611 233.137 31.7051 233.137C30.9622 233.137 30.3789 232.945 29.9551 232.562C29.5358 232.18 29.3262 231.635 29.3262 230.929C29.3262 229.416 30.5361 228.623 32.9561 228.55L34.2275 228.509V228.044C34.2275 227.456 34.0999 227.023 33.8447 226.745C33.5941 226.463 33.1908 226.321 32.6348 226.321C32.0104 226.321 31.304 226.513 30.5156 226.896L30.167 226.027C30.5361 225.827 30.9395 225.67 31.377 225.556C31.819 225.442 32.2611 225.385 32.7031 225.385C33.5964 225.385 34.2572 225.583 34.6855 225.979C35.1185 226.376 35.335 227.012 35.335 227.887V233H34.4941ZM31.9307 232.2C32.637 232.2 33.1908 232.007 33.5918 231.619C33.9974 231.232 34.2002 230.689 34.2002 229.992V229.315L33.0654 229.363C32.1631 229.395 31.5114 229.536 31.1104 229.787C30.7139 230.033 30.5156 230.418 30.5156 230.942C30.5156 231.353 30.6387 231.665 30.8848 231.879C31.1354 232.093 31.484 232.2 31.9307 232.2ZM39.3203 233L36.4766 225.508H37.6934L39.3066 229.951C39.6712 230.99 39.8854 231.665 39.9492 231.975H40.0039C40.054 231.733 40.2113 231.234 40.4756 230.478C40.7445 229.716 41.3438 228.06 42.2734 225.508H43.4902L40.6465 233H39.3203ZM45.8281 233H44.6934V225.508H45.8281V233ZM44.5977 223.478C44.5977 223.218 44.6615 223.029 44.7891 222.91C44.9167 222.787 45.0762 222.726 45.2676 222.726C45.4499 222.726 45.6071 222.787 45.7393 222.91C45.8714 223.033 45.9375 223.222 45.9375 223.478C45.9375 223.733 45.8714 223.924 45.7393 224.052C45.6071 224.175 45.4499 224.236 45.2676 224.236C45.0762 224.236 44.9167 224.175 44.7891 224.052C44.6615 223.924 44.5977 223.733 44.5977 223.478ZM53.3613 233V228.153C53.3613 227.543 53.2223 227.087 52.9443 226.786C52.6663 226.485 52.2311 226.335 51.6387 226.335C50.8548 226.335 50.2806 226.547 49.916 226.971C49.5514 227.395 49.3691 228.094 49.3691 229.069V233H48.2344V225.508H49.1572L49.3418 226.533H49.3965C49.6289 226.164 49.9548 225.879 50.374 225.679C50.7933 225.474 51.2604 225.371 51.7754 225.371C52.6777 225.371 53.3568 225.59 53.8125 226.027C54.2682 226.46 54.4961 227.155 54.4961 228.112V233H53.3613ZM62.9658 225.508V226.226L61.5781 226.39C61.7057 226.549 61.8197 226.759 61.9199 227.019C62.0202 227.274 62.0703 227.563 62.0703 227.887C62.0703 228.62 61.8197 229.206 61.3184 229.644C60.8171 230.081 60.1289 230.3 59.2539 230.3C59.0306 230.3 58.821 230.282 58.625 230.245C58.1419 230.5 57.9004 230.822 57.9004 231.209C57.9004 231.414 57.9847 231.567 58.1533 231.667C58.3219 231.763 58.6113 231.811 59.0215 231.811H60.3477C61.1589 231.811 61.7809 231.981 62.2139 232.323C62.6514 232.665 62.8701 233.162 62.8701 233.813C62.8701 234.643 62.5374 235.274 61.8721 235.707C61.2067 236.145 60.236 236.363 58.96 236.363C57.9801 236.363 57.2236 236.181 56.6904 235.816C56.1618 235.452 55.8975 234.937 55.8975 234.271C55.8975 233.816 56.0433 233.422 56.335 233.089C56.6266 232.756 57.0368 232.531 57.5654 232.412C57.374 232.326 57.2122 232.191 57.0801 232.009C56.9525 231.826 56.8887 231.615 56.8887 231.373C56.8887 231.1 56.9616 230.86 57.1074 230.655C57.2533 230.45 57.4834 230.252 57.7979 230.061C57.4105 229.901 57.0938 229.63 56.8477 229.247C56.6061 228.864 56.4854 228.427 56.4854 227.935C56.4854 227.114 56.7314 226.483 57.2236 226.041C57.7158 225.594 58.4131 225.371 59.3154 225.371C59.7074 225.371 60.0605 225.417 60.375 225.508H62.9658ZM56.9912 234.258C56.9912 234.663 57.1621 234.971 57.5039 235.181C57.8457 235.39 58.3356 235.495 58.9736 235.495C59.9261 235.495 60.6302 235.352 61.0859 235.064C61.5462 234.782 61.7764 234.397 61.7764 233.909C61.7764 233.504 61.651 233.221 61.4004 233.062C61.1497 232.907 60.6781 232.829 59.9854 232.829H58.625C58.11 232.829 57.709 232.952 57.4219 233.198C57.1348 233.444 56.9912 233.798 56.9912 234.258ZM57.6064 227.907C57.6064 228.431 57.7546 228.828 58.0508 229.097C58.347 229.366 58.7594 229.5 59.2881 229.5C60.3955 229.5 60.9492 228.962 60.9492 227.887C60.9492 226.761 60.3887 226.198 59.2676 226.198C58.7344 226.198 58.3242 226.342 58.0371 226.629C57.75 226.916 57.6064 227.342 57.6064 227.907ZM69.3369 230.956C69.3369 231.653 69.0771 232.191 68.5576 232.569C68.0381 232.948 67.3089 233.137 66.3701 233.137C65.3766 233.137 64.6019 232.979 64.0459 232.665V231.612C64.4059 231.795 64.791 231.938 65.2012 232.043C65.6159 232.148 66.0146 232.2 66.3975 232.2C66.9899 232.2 67.4456 232.107 67.7646 231.92C68.0837 231.729 68.2432 231.439 68.2432 231.052C68.2432 230.76 68.1156 230.512 67.8604 230.307C67.6097 230.097 67.1175 229.851 66.3838 229.568C65.6865 229.309 65.1898 229.083 64.8936 228.892C64.6019 228.696 64.3831 228.475 64.2373 228.229C64.096 227.982 64.0254 227.688 64.0254 227.347C64.0254 226.736 64.2738 226.255 64.7705 225.904C65.2673 225.549 65.9486 225.371 66.8145 225.371C67.6211 225.371 68.4095 225.535 69.1797 225.863L68.7764 226.786C68.0244 226.476 67.3431 226.321 66.7324 226.321C66.1947 226.321 65.7891 226.406 65.5156 226.574C65.2422 226.743 65.1055 226.975 65.1055 227.271C65.1055 227.472 65.1556 227.643 65.2559 227.784C65.3607 227.925 65.527 228.06 65.7549 228.188C65.9827 228.315 66.4202 228.5 67.0674 228.741C67.9561 229.065 68.5553 229.391 68.8652 229.719C69.1797 230.047 69.3369 230.459 69.3369 230.956Z" fill="#4F4F4F" />
                                    <circle cx="6" cy="255" r="6" fill="#EB5757" />
                                    <path d="M22.374 260V250.006H23.5361V260H22.374ZM31.2402 260V255.153C31.2402 254.543 31.1012 254.087 30.8232 253.786C30.5452 253.485 30.11 253.335 29.5176 253.335C28.7337 253.335 28.1595 253.547 27.7949 253.971C27.4303 254.395 27.248 255.094 27.248 256.069V260H26.1133V252.508H27.0361L27.2207 253.533H27.2754C27.5078 253.164 27.8337 252.879 28.2529 252.679C28.6722 252.474 29.1393 252.371 29.6543 252.371C30.5566 252.371 31.2357 252.59 31.6914 253.027C32.1471 253.46 32.375 254.155 32.375 255.112V260H31.2402ZM36.3535 260L33.5098 252.508H34.7266L36.3398 256.951C36.7044 257.99 36.9186 258.665 36.9824 258.975H37.0371C37.0872 258.733 37.2445 258.234 37.5088 257.478C37.7777 256.716 38.377 255.06 39.3066 252.508H40.5234L37.6797 260H36.3535ZM44.8916 260.137C43.7842 260.137 42.9092 259.799 42.2666 259.125C41.6286 258.451 41.3096 257.514 41.3096 256.315C41.3096 255.108 41.6058 254.148 42.1982 253.438C42.7952 252.727 43.5951 252.371 44.5977 252.371C45.5365 252.371 46.2793 252.681 46.8262 253.301C47.373 253.916 47.6465 254.729 47.6465 255.741V256.459H42.4854C42.5081 257.339 42.7292 258.006 43.1484 258.462C43.5723 258.918 44.167 259.146 44.9326 259.146C45.7393 259.146 46.5368 258.977 47.3252 258.64V259.651C46.9242 259.825 46.5436 259.948 46.1836 260.021C45.8281 260.098 45.3975 260.137 44.8916 260.137ZM44.584 253.321C43.9824 253.321 43.5016 253.517 43.1416 253.909C42.7861 254.301 42.5765 254.843 42.5127 255.536H46.4297C46.4297 254.821 46.2702 254.274 45.9512 253.896C45.6322 253.513 45.1764 253.321 44.584 253.321ZM54.4209 257.956C54.4209 258.653 54.1611 259.191 53.6416 259.569C53.1221 259.948 52.3929 260.137 51.4541 260.137C50.4606 260.137 49.6859 259.979 49.1299 259.665V258.612C49.4899 258.795 49.875 258.938 50.2852 259.043C50.6999 259.148 51.0986 259.2 51.4814 259.2C52.0739 259.2 52.5296 259.107 52.8486 258.92C53.1676 258.729 53.3271 258.439 53.3271 258.052C53.3271 257.76 53.1995 257.512 52.9443 257.307C52.6937 257.097 52.2015 256.851 51.4678 256.568C50.7705 256.309 50.2738 256.083 49.9775 255.892C49.6859 255.696 49.4671 255.475 49.3213 255.229C49.18 254.982 49.1094 254.688 49.1094 254.347C49.1094 253.736 49.3577 253.255 49.8545 252.904C50.3512 252.549 51.0326 252.371 51.8984 252.371C52.7051 252.371 53.4935 252.535 54.2637 252.863L53.8604 253.786C53.1084 253.476 52.4271 253.321 51.8164 253.321C51.2786 253.321 50.873 253.406 50.5996 253.574C50.3262 253.743 50.1895 253.975 50.1895 254.271C50.1895 254.472 50.2396 254.643 50.3398 254.784C50.4447 254.925 50.611 255.06 50.8389 255.188C51.0667 255.315 51.5042 255.5 52.1514 255.741C53.04 256.065 53.6393 256.391 53.9492 256.719C54.2637 257.047 54.4209 257.459 54.4209 257.956ZM58.6934 259.2C58.8939 259.2 59.0876 259.187 59.2744 259.159C59.4613 259.127 59.6094 259.095 59.7188 259.063V259.932C59.5957 259.991 59.4134 260.039 59.1719 260.075C58.9349 260.116 58.7207 260.137 58.5293 260.137C57.0801 260.137 56.3555 259.373 56.3555 257.847V253.39H55.2822V252.843L56.3555 252.371L56.834 250.771H57.4902V252.508H59.6641V253.39H57.4902V257.799C57.4902 258.25 57.5973 258.596 57.8115 258.838C58.0257 259.079 58.3197 259.2 58.6934 259.2ZM70.7725 260V255.126C70.7725 254.529 70.6449 254.082 70.3896 253.786C70.1344 253.485 69.738 253.335 69.2002 253.335C68.4938 253.335 67.972 253.538 67.6348 253.943C67.2975 254.349 67.1289 254.973 67.1289 255.816V260H65.9941V255.126C65.9941 254.529 65.8665 254.082 65.6113 253.786C65.3561 253.485 64.9574 253.335 64.415 253.335C63.7041 253.335 63.1823 253.549 62.8496 253.978C62.5215 254.401 62.3574 255.099 62.3574 256.069V260H61.2227V252.508H62.1455L62.3301 253.533H62.3848C62.599 253.169 62.8997 252.884 63.2871 252.679C63.679 252.474 64.1165 252.371 64.5996 252.371C65.7708 252.371 66.5365 252.795 66.8965 253.643H66.9512C67.1745 253.251 67.498 252.941 67.9219 252.713C68.3457 252.485 68.8288 252.371 69.3711 252.371C70.2188 252.371 70.8522 252.59 71.2715 253.027C71.6953 253.46 71.9072 254.155 71.9072 255.112V260H70.7725ZM77.417 260.137C76.3096 260.137 75.4346 259.799 74.792 259.125C74.154 258.451 73.835 257.514 73.835 256.315C73.835 255.108 74.1312 254.148 74.7236 253.438C75.3206 252.727 76.1204 252.371 77.123 252.371C78.0618 252.371 78.8047 252.681 79.3516 253.301C79.8984 253.916 80.1719 254.729 80.1719 255.741V256.459H75.0107C75.0335 257.339 75.2546 258.006 75.6738 258.462C76.0977 258.918 76.6924 259.146 77.458 259.146C78.2646 259.146 79.0622 258.977 79.8506 258.64V259.651C79.4495 259.825 79.069 259.948 78.709 260.021C78.3535 260.098 77.9229 260.137 77.417 260.137ZM77.1094 253.321C76.5078 253.321 76.027 253.517 75.667 253.909C75.3115 254.301 75.1019 254.843 75.0381 255.536H78.9551C78.9551 254.821 78.7956 254.274 78.4766 253.896C78.1576 253.513 77.7018 253.321 77.1094 253.321ZM87.2402 260V255.153C87.2402 254.543 87.1012 254.087 86.8232 253.786C86.5452 253.485 86.11 253.335 85.5176 253.335C84.7337 253.335 84.1595 253.547 83.7949 253.971C83.4303 254.395 83.248 255.094 83.248 256.069V260H82.1133V252.508H83.0361L83.2207 253.533H83.2754C83.5078 253.164 83.8337 252.879 84.2529 252.679C84.6722 252.474 85.1393 252.371 85.6543 252.371C86.5566 252.371 87.2357 252.59 87.6914 253.027C88.1471 253.46 88.375 254.155 88.375 255.112V260H87.2402ZM93.1328 259.2C93.3333 259.2 93.527 259.187 93.7139 259.159C93.9007 259.127 94.0488 259.095 94.1582 259.063V259.932C94.0352 259.991 93.8529 260.039 93.6113 260.075C93.3743 260.116 93.1602 260.137 92.9688 260.137C91.5195 260.137 90.7949 259.373 90.7949 257.847V253.39H89.7217V252.843L90.7949 252.371L91.2734 250.771H91.9297V252.508H94.1035V253.39H91.9297V257.799C91.9297 258.25 92.0368 258.596 92.251 258.838C92.4652 259.079 92.7591 259.2 93.1328 259.2Z" fill="#4F4F4F" />
                                    <circle cx="6" cy="7" r="6" fill="#2D9CDB" />
                                    <path d="M29.7188 0.921875V11H28.4375V6.4375H23.5625V11H22.2812V0.921875H23.5625V5.32031H28.4375V0.921875H29.7188ZM32.7578 7.39844C32.7578 7.78385 32.8151 8.13542 32.9297 8.45312C33.0495 8.76562 33.2109 9.03385 33.4141 9.25781C33.6172 9.48177 33.849 9.65625 34.1094 9.78125C34.375 9.90104 34.6458 9.96094 34.9219 9.96094C35.1979 9.96094 35.4661 9.90104 35.7266 9.78125C35.987 9.65625 36.2161 9.48177 36.4141 9.25781C36.612 9.03385 36.7708 8.76562 36.8906 8.45312C37.0156 8.13542 37.0781 7.78385 37.0781 7.39844C37.0781 7.01302 37.0156 6.66406 36.8906 6.35156C36.7708 6.03906 36.612 5.77083 36.4141 5.54688C36.2161 5.32292 35.987 5.15104 35.7266 5.03125C35.4661 4.90625 35.1979 4.84375 34.9219 4.84375C34.6458 4.84375 34.375 4.90625 34.1094 5.03125C33.849 5.15104 33.6172 5.32292 33.4141 5.54688C33.2109 5.77083 33.0495 6.03906 32.9297 6.35156C32.8151 6.66406 32.7578 7.01302 32.7578 7.39844ZM38.2812 7.39844C38.2812 7.9401 38.1927 8.4375 38.0156 8.89062C37.8385 9.33854 37.599 9.72656 37.2969 10.0547C36.9948 10.3776 36.638 10.6302 36.2266 10.8125C35.8151 10.9896 35.3802 11.0781 34.9219 11.0781C34.4635 11.0781 34.0286 10.9896 33.6172 10.8125C33.2057 10.6302 32.8464 10.3776 32.5391 10.0547C32.237 9.72656 31.9974 9.33854 31.8203 8.89062C31.6484 8.44271 31.5625 7.94531 31.5625 7.39844C31.5625 6.85677 31.6484 6.36198 31.8203 5.91406C31.9974 5.46615 32.237 5.08073 32.5391 4.75781C32.8464 4.42969 33.2057 4.17448 33.6172 3.99219C34.0286 3.8099 34.4635 3.71875 34.9219 3.71875C35.3802 3.71875 35.8151 3.8099 36.2266 3.99219C36.638 4.17448 36.9948 4.42969 37.2969 4.75781C37.599 5.08073 37.8385 5.46615 38.0156 5.91406C38.1927 6.36198 38.2812 6.85677 38.2812 7.39844ZM47 3.71875C47.3177 3.71875 47.6224 3.78646 47.9141 3.92188C48.2057 4.05208 48.4635 4.2474 48.6875 4.50781C48.9115 4.76302 49.0859 5.07552 49.2109 5.44531C49.3411 5.8099 49.4062 6.22135 49.4062 6.67969V11H48.2031V6.67969C48.2031 6.07031 48.0651 5.61198 47.7891 5.30469C47.513 4.9974 47.1719 4.84375 46.7656 4.84375C46.3594 4.84375 46.0026 5.00781 45.6953 5.33594C45.3932 5.66406 45.2422 6.11198 45.2422 6.67969V11H44.0469V6.67969C44.0469 6.07031 43.9062 5.61198 43.625 5.30469C43.349 4.9974 43.0078 4.84375 42.6016 4.84375C42.4089 4.84375 42.2188 4.88802 42.0312 4.97656C41.849 5.0651 41.6875 5.19271 41.5469 5.35938C41.4062 5.52604 41.2943 5.72135 41.2109 5.94531C41.1276 6.16927 41.0859 6.41406 41.0859 6.67969V11H39.8828V3.79688H40.7656L41.0859 4.60156C41.2057 4.4401 41.349 4.29688 41.5156 4.17188C41.6667 4.05208 41.849 3.94792 42.0625 3.85938C42.276 3.76562 42.5365 3.71875 42.8438 3.71875C43.2083 3.71875 43.5156 3.78646 43.7656 3.92188C44.0156 4.05208 44.2214 4.19792 44.3828 4.35938C44.5755 4.55208 44.7292 4.76562 44.8438 5C44.9844 4.76562 45.1562 4.55208 45.3594 4.35938C45.5417 4.19792 45.763 4.05208 46.0234 3.92188C46.2891 3.78646 46.6146 3.71875 47 3.71875ZM57.2422 9.07812C57.1224 9.33333 56.9714 9.58594 56.7891 9.83594C56.6068 10.0807 56.3932 10.2943 56.1484 10.4766C55.9036 10.6536 55.625 10.7995 55.3125 10.9141C55.0052 11.0234 54.6615 11.0781 54.2812 11.0781C53.8229 11.0781 53.388 10.9896 52.9766 10.8125C52.5651 10.6302 52.2057 10.3776 51.8984 10.0547C51.5964 9.72656 51.3568 9.33854 51.1797 8.89062C51.0078 8.44271 50.9219 7.94531 50.9219 7.39844C50.9219 6.85677 51.0078 6.36198 51.1797 5.91406C51.3568 5.46615 51.5938 5.08073 51.8906 4.75781C52.1927 4.42969 52.5443 4.17448 52.9453 3.99219C53.3464 3.8099 53.7656 3.71875 54.2031 3.71875C54.6406 3.71875 55.0521 3.80469 55.4375 3.97656C55.8281 4.14844 56.1667 4.39323 56.4531 4.71094C56.7448 5.02344 56.974 5.40104 57.1406 5.84375C57.3125 6.28646 57.3984 6.77865 57.3984 7.32031C57.3984 7.42448 57.3932 7.51562 57.3828 7.59375C57.3724 7.66667 57.362 7.72917 57.3516 7.78125C57.3411 7.84375 57.3307 7.90365 57.3203 7.96094H52.2031C52.224 8.21615 52.2943 8.46615 52.4141 8.71094C52.5391 8.95573 52.6927 9.16927 52.875 9.35156C53.0625 9.53385 53.2786 9.68229 53.5234 9.79688C53.7734 9.90625 54.026 9.96094 54.2812 9.96094C54.5052 9.96094 54.7031 9.92969 54.875 9.86719C55.0521 9.79948 55.2135 9.72396 55.3594 9.64062C55.5052 9.55729 55.625 9.46615 55.7188 9.36719C55.8177 9.26302 55.8984 9.16667 55.9609 9.07812H57.2422ZM54.2031 4.84375C53.9583 4.84375 53.724 4.89583 53.5 5C53.2812 5.10417 53.0807 5.2474 52.8984 5.42969C52.7214 5.61198 52.5703 5.83073 52.4453 6.08594C52.3255 6.34115 52.2448 6.61979 52.2031 6.92188H56.1172C56.0339 6.28125 55.8125 5.77604 55.4531 5.40625C55.099 5.03125 54.6823 4.84375 54.2031 4.84375ZM59.0703 13.8828H57.9531L62.1094 0.921875H63.2344L59.0703 13.8828ZM68.0312 11.0781C67.4896 11.0781 66.9948 10.9896 66.5469 10.8125C66.099 10.6302 65.7109 10.3802 65.3828 10.0625C65.0599 9.73958 64.8073 9.35938 64.625 8.92188C64.4427 8.48438 64.3516 8.0026 64.3516 7.47656V0.921875H65.6328V7.47656C65.6328 8.24219 65.8516 8.84896 66.2891 9.29688C66.7266 9.73958 67.3073 9.96094 68.0312 9.96094C68.7552 9.96094 69.3359 9.73958 69.7734 9.29688C70.2161 8.85417 70.4375 8.2474 70.4375 7.47656V0.921875H71.7109V7.47656C71.7109 7.9974 71.6198 8.47917 71.4375 8.92188C71.2604 9.35938 71.0078 9.73958 70.6797 10.0625C70.3568 10.3802 69.9688 10.6302 69.5156 10.8125C69.0677 10.9896 68.5729 11.0781 68.0312 11.0781ZM74.5859 1.88281H75.625V3.79688H77.2266V4.92188H75.625V8.67969C75.625 9.08594 75.7344 9.40104 75.9531 9.625C76.1719 9.84896 76.4635 9.96094 76.8281 9.96094C76.9323 9.96094 77.0286 9.95052 77.1172 9.92969C77.1589 9.91927 77.1953 9.90365 77.2266 9.88281V10.9219C77.1745 10.9531 77.1172 10.9792 77.0547 11C76.9141 11.0521 76.7318 11.0781 76.5078 11.0781C76.2318 11.0781 75.9688 11.0208 75.7188 10.9062C75.4688 10.7865 75.2474 10.6224 75.0547 10.4141C74.862 10.2057 74.7083 9.95573 74.5938 9.66406C74.4844 9.3724 74.4297 9.04427 74.4297 8.67969V4.92188H73.1484V3.79688H73.7109C74.2995 3.79688 74.5911 3.50521 74.5859 2.92188V1.88281ZM80.1953 11H78.9922V3.79688H80.1953V11ZM78.8359 1.76562C78.8359 1.54167 78.9062 1.35938 79.0469 1.21875C79.1927 1.07292 79.3724 1 79.5859 1C79.8099 1 79.9922 1.07292 80.1328 1.21875C80.2786 1.35938 80.3516 1.54167 80.3516 1.76562C80.3516 1.97917 80.2786 2.15885 80.1328 2.30469C79.9922 2.45052 79.8099 2.52344 79.5859 2.52344C79.3724 2.52344 79.1927 2.45052 79.0469 2.30469C78.9062 2.15885 78.8359 1.97917 78.8359 1.76562ZM83.5547 11H82.3516V0.921875H83.5547V11ZM86.9141 11H85.7109V3.79688H86.9141V11ZM85.5547 1.76562C85.5547 1.54167 85.625 1.35938 85.7656 1.21875C85.9115 1.07292 86.0911 1 86.3047 1C86.5286 1 86.7109 1.07292 86.8516 1.21875C86.9974 1.35938 87.0703 1.54167 87.0703 1.76562C87.0703 1.97917 86.9974 2.15885 86.8516 2.30469C86.7109 2.45052 86.5286 2.52344 86.3047 2.52344C86.0911 2.52344 85.9115 2.45052 85.7656 2.30469C85.625 2.15885 85.5547 1.97917 85.5547 1.76562ZM89.7109 1.88281H90.75V3.79688H92.3516V4.92188H90.75V8.67969C90.75 9.08594 90.8594 9.40104 91.0781 9.625C91.2969 9.84896 91.5885 9.96094 91.9531 9.96094C92.0573 9.96094 92.1536 9.95052 92.2422 9.92969C92.2839 9.91927 92.3203 9.90365 92.3516 9.88281V10.9219C92.2995 10.9531 92.2422 10.9792 92.1797 11C92.0391 11.0521 91.8568 11.0781 91.6328 11.0781C91.3568 11.0781 91.0938 11.0208 90.8438 10.9062C90.5938 10.7865 90.3724 10.6224 90.1797 10.4141C89.987 10.2057 89.8333 9.95573 89.7188 9.66406C89.6094 9.3724 89.5547 9.04427 89.5547 8.67969V4.92188H88.2734V3.79688H88.8359C89.4245 3.79688 89.7161 3.50521 89.7109 2.92188V1.88281ZM93.1562 3.79688H94.4375L96.6016 9.32031L98.7578 3.79688H100.039L96.9219 11.6406C96.6354 12.3646 96.3333 12.8776 96.0156 13.1797C95.7031 13.487 95.3125 13.6406 94.8438 13.6406C94.7812 13.6406 94.7214 13.638 94.6641 13.6328C94.612 13.6276 94.5599 13.6198 94.5078 13.6094C94.4557 13.599 94.4062 13.5833 94.3594 13.5625V12.6016C94.724 12.6016 94.9948 12.5208 95.1719 12.3594C95.3542 12.1979 95.5104 11.9583 95.6406 11.6406L95.9609 10.8438L93.1562 3.79688Z" fill="#4F4F4F" />
                                    <circle cx="6" cy="34" r="6" fill="#F98250" />
                                    <path d="M28.6016 29.0391H25.5625V38H24.2812V29.0391H21.2422V27.9219H28.6016V29.0391ZM32.9141 31.9219H32.5938C32.026 31.9219 31.5651 32.1042 31.2109 32.4688C30.8568 32.8281 30.6797 33.3125 30.6797 33.9219V38H29.4766V30.7969H30.3594L30.6797 31.6016C30.8307 31.4401 31.0052 31.2969 31.2031 31.1719C31.3854 31.0521 31.6042 30.9479 31.8594 30.8594C32.1146 30.7656 32.4141 30.7188 32.7578 30.7188H32.9141V31.9219ZM36.9141 30.7188C37.3099 30.7188 37.6745 30.7865 38.0078 30.9219C38.3464 31.0521 38.6354 31.2292 38.875 31.4531C39.1146 31.6771 39.2995 31.9401 39.4297 32.2422C39.5651 32.5391 39.6328 32.8594 39.6328 33.2031V38H38.7578L38.4375 37.2031C38.276 37.375 38.0938 37.5234 37.8906 37.6484C37.7083 37.7682 37.4844 37.8698 37.2188 37.9531C36.9531 38.0365 36.638 38.0781 36.2734 38.0781C35.9089 38.0781 35.5807 38.0234 35.2891 37.9141C34.9974 37.7995 34.7474 37.6432 34.5391 37.4453C34.3307 37.2474 34.1667 37.0182 34.0469 36.7578C33.9323 36.4974 33.875 36.2188 33.875 35.9219C33.875 35.5781 33.9427 35.2656 34.0781 34.9844C34.2188 34.7031 34.4583 34.4583 34.7969 34.25C35.1406 34.0417 35.6094 33.8828 36.2031 33.7734C36.7969 33.6589 37.5417 33.6016 38.4375 33.6016V33.2031C38.4375 32.8385 38.2943 32.5208 38.0078 32.25C37.7266 31.9792 37.362 31.8438 36.9141 31.8438C36.4661 31.8438 36.1354 31.9375 35.9219 32.125C35.7083 32.3073 35.5599 32.5599 35.4766 32.8828H34.1953C34.237 32.5859 34.3281 32.3073 34.4688 32.0469C34.6094 31.7812 34.7943 31.5495 35.0234 31.3516C35.2526 31.1536 35.5234 31 35.8359 30.8906C36.1484 30.776 36.5078 30.7188 36.9141 30.7188ZM36.2734 36.9609C36.5911 36.9609 36.8828 36.9115 37.1484 36.8125C37.4193 36.7083 37.6484 36.5781 37.8359 36.4219C38.0234 36.2604 38.1693 36.0807 38.2734 35.8828C38.3828 35.6849 38.4375 35.4844 38.4375 35.2812V34.7188C37.7135 34.7188 37.1328 34.75 36.6953 34.8125C36.2578 34.8698 35.9167 34.9557 35.6719 35.0703C35.4323 35.1797 35.2734 35.3125 35.1953 35.4688C35.1172 35.6198 35.0781 35.7969 35.0781 36C35.0781 36.2448 35.1849 36.4661 35.3984 36.6641C35.6172 36.862 35.9089 36.9609 36.2734 36.9609ZM44.9141 30.7188C45.2995 30.7188 45.6589 30.7969 45.9922 30.9531C46.3307 31.1094 46.6276 31.3229 46.8828 31.5938C47.138 31.8646 47.3385 32.1927 47.4844 32.5781C47.6354 32.9583 47.7109 33.3802 47.7109 33.8438V38H46.5156V33.8438C46.5156 33.5469 46.4661 33.276 46.3672 33.0312C46.2734 32.7812 46.1458 32.5677 45.9844 32.3906C45.8229 32.2135 45.6354 32.0781 45.4219 31.9844C45.2135 31.8906 44.9896 31.8438 44.75 31.8438C44.1823 31.8438 43.7214 32.026 43.3672 32.3906C43.013 32.75 42.8359 33.2344 42.8359 33.8438V38H41.6328V30.7969H42.5156L42.8359 31.6016C42.987 31.4401 43.1615 31.2969 43.3594 31.1719C43.5417 31.0521 43.7604 30.9479 44.0156 30.8594C44.2708 30.7656 44.5703 30.7188 44.9141 30.7188ZM54.4297 35.9219C54.4297 36.2188 54.3698 36.4974 54.25 36.7578C54.1354 37.0182 53.9714 37.2474 53.7578 37.4453C53.5443 37.6432 53.2865 37.7995 52.9844 37.9141C52.6823 38.0234 52.3385 38.0781 51.9531 38.0781C51.151 38.0781 50.5208 37.8646 50.0625 37.4375C49.6042 37.0104 49.3542 36.4792 49.3125 35.8438H50.5156C50.5573 36.1615 50.6953 36.4271 50.9297 36.6406C51.1641 36.8542 51.5052 36.9609 51.9531 36.9609C52.3594 36.9609 52.6745 36.8568 52.8984 36.6484C53.1224 36.4401 53.2344 36.1979 53.2344 35.9219C53.2344 35.6562 53.1406 35.4557 52.9531 35.3203C52.7656 35.1849 52.5339 35.0781 52.2578 35C51.9818 34.9219 51.6797 34.849 51.3516 34.7812C51.0286 34.7083 50.7266 34.6042 50.4453 34.4688C50.1693 34.3281 49.9375 34.1302 49.75 33.875C49.5625 33.6146 49.4688 33.2552 49.4688 32.7969C49.4688 32.5208 49.526 32.2578 49.6406 32.0078C49.7604 31.7578 49.9245 31.5365 50.1328 31.3438C50.3411 31.151 50.5911 31 50.8828 30.8906C51.1797 30.776 51.5104 30.7188 51.875 30.7188C52.6406 30.7188 53.2344 30.9193 53.6562 31.3203C54.0781 31.7214 54.3099 32.2422 54.3516 32.8828H53.1484C53.1068 32.5651 52.9844 32.3125 52.7812 32.125C52.5781 31.9375 52.276 31.8438 51.875 31.8438C51.5104 31.8438 51.2188 31.9427 51 32.1406C50.7812 32.3333 50.6719 32.5521 50.6719 32.7969C50.6719 33.0625 50.7656 33.263 50.9531 33.3984C51.1406 33.5339 51.3724 33.6432 51.6484 33.7266C51.9245 33.8047 52.224 33.8776 52.5469 33.9453C52.875 34.013 53.1771 34.1172 53.4531 34.2578C53.7344 34.3932 53.9661 34.5938 54.1484 34.8594C54.3359 35.1198 54.4297 35.474 54.4297 35.9219ZM57.0625 34.3984C57.0625 34.7839 57.1224 35.1354 57.2422 35.4531C57.3672 35.7656 57.5312 36.0339 57.7344 36.2578C57.9375 36.4818 58.1745 36.6562 58.4453 36.7812C58.7214 36.901 59.0078 36.9609 59.3047 36.9609C59.6016 36.9609 59.8854 36.901 60.1562 36.7812C60.4323 36.6562 60.6719 36.4818 60.875 36.2578C61.0781 36.0339 61.2396 35.7656 61.3594 35.4531C61.4844 35.1354 61.5469 34.7839 61.5469 34.3984C61.5469 34.013 61.4844 33.6641 61.3594 33.3516C61.2396 33.0391 61.0781 32.7708 60.875 32.5469C60.6719 32.3229 60.4323 32.151 60.1562 32.0312C59.8854 31.9062 59.6016 31.8438 59.3047 31.8438C59.0078 31.8438 58.7214 31.9062 58.4453 32.0312C58.1745 32.151 57.9375 32.3229 57.7344 32.5469C57.5312 32.7708 57.3672 33.0391 57.2422 33.3516C57.1224 33.6641 57.0625 34.013 57.0625 34.3984ZM57.2266 31.6016C57.3776 31.4401 57.5573 31.2969 57.7656 31.1719C57.9479 31.0521 58.1719 30.9479 58.4375 30.8594C58.7083 30.7656 59.0234 30.7188 59.3828 30.7188C59.8411 30.7188 60.276 30.8099 60.6875 30.9922C61.099 31.1745 61.4557 31.4297 61.7578 31.7578C62.0651 32.0807 62.3047 32.4661 62.4766 32.9141C62.6536 33.362 62.7422 33.8568 62.7422 34.3984C62.7422 34.9401 62.6536 35.4375 62.4766 35.8906C62.3047 36.3385 62.0651 36.7266 61.7578 37.0547C61.4557 37.3776 61.099 37.6302 60.6875 37.8125C60.276 37.9896 59.8411 38.0781 59.3828 38.0781C59.0182 38.0781 58.7031 38.0286 58.4375 37.9297C58.1719 37.8255 57.9479 37.7161 57.7656 37.6016C57.5521 37.4609 57.3724 37.2995 57.2266 37.1172V40.5625H56.0234V30.7969H56.9062L57.2266 31.6016ZM65.0547 34.3984C65.0547 34.7839 65.112 35.1354 65.2266 35.4531C65.3464 35.7656 65.5078 36.0339 65.7109 36.2578C65.9141 36.4818 66.1458 36.6562 66.4062 36.7812C66.6719 36.901 66.9427 36.9609 67.2188 36.9609C67.4948 36.9609 67.763 36.901 68.0234 36.7812C68.2839 36.6562 68.513 36.4818 68.7109 36.2578C68.9089 36.0339 69.0677 35.7656 69.1875 35.4531C69.3125 35.1354 69.375 34.7839 69.375 34.3984C69.375 34.013 69.3125 33.6641 69.1875 33.3516C69.0677 33.0391 68.9089 32.7708 68.7109 32.5469C68.513 32.3229 68.2839 32.151 68.0234 32.0312C67.763 31.9062 67.4948 31.8438 67.2188 31.8438C66.9427 31.8438 66.6719 31.9062 66.4062 32.0312C66.1458 32.151 65.9141 32.3229 65.7109 32.5469C65.5078 32.7708 65.3464 33.0391 65.2266 33.3516C65.112 33.6641 65.0547 34.013 65.0547 34.3984ZM70.5781 34.3984C70.5781 34.9401 70.4896 35.4375 70.3125 35.8906C70.1354 36.3385 69.8958 36.7266 69.5938 37.0547C69.2917 37.3776 68.9349 37.6302 68.5234 37.8125C68.112 37.9896 67.6771 38.0781 67.2188 38.0781C66.7604 38.0781 66.3255 37.9896 65.9141 37.8125C65.5026 37.6302 65.1432 37.3776 64.8359 37.0547C64.5339 36.7266 64.2943 36.3385 64.1172 35.8906C63.9453 35.4427 63.8594 34.9453 63.8594 34.3984C63.8594 33.8568 63.9453 33.362 64.1172 32.9141C64.2943 32.4661 64.5339 32.0807 64.8359 31.7578C65.1432 31.4297 65.5026 31.1745 65.9141 30.9922C66.3255 30.8099 66.7604 30.7188 67.2188 30.7188C67.6771 30.7188 68.112 30.8099 68.5234 30.9922C68.9349 31.1745 69.2917 31.4297 69.5938 31.7578C69.8958 32.0807 70.1354 32.4661 70.3125 32.9141C70.4896 33.362 70.5781 33.8568 70.5781 34.3984ZM75.6172 31.9219H75.2969C74.7292 31.9219 74.2682 32.1042 73.9141 32.4688C73.5599 32.8281 73.3828 33.3125 73.3828 33.9219V38H72.1797V30.7969H73.0625L73.3828 31.6016C73.5339 31.4401 73.7083 31.2969 73.9062 31.1719C74.0885 31.0521 74.3073 30.9479 74.5625 30.8594C74.8177 30.7656 75.1172 30.7188 75.4609 30.7188H75.6172V31.9219ZM77.6953 28.8828H78.7344V30.7969H80.3359V31.9219H78.7344V35.6797C78.7344 36.0859 78.8438 36.401 79.0625 36.625C79.2812 36.849 79.5729 36.9609 79.9375 36.9609C80.0417 36.9609 80.138 36.9505 80.2266 36.9297C80.2682 36.9193 80.3047 36.9036 80.3359 36.8828V37.9219C80.2839 37.9531 80.2266 37.9792 80.1641 38C80.0234 38.0521 79.8411 38.0781 79.6172 38.0781C79.3411 38.0781 79.0781 38.0208 78.8281 37.9062C78.5781 37.7865 78.3568 37.6224 78.1641 37.4141C77.9714 37.2057 77.8177 36.9557 77.7031 36.6641C77.5938 36.3724 77.5391 36.0443 77.5391 35.6797V31.9219H76.2578V30.7969H76.8203C77.4089 30.7969 77.7005 30.5052 77.6953 29.9219V28.8828ZM84.6641 30.7188C85.0599 30.7188 85.4245 30.7865 85.7578 30.9219C86.0964 31.0521 86.3854 31.2292 86.625 31.4531C86.8646 31.6771 87.0495 31.9401 87.1797 32.2422C87.3151 32.5391 87.3828 32.8594 87.3828 33.2031V38H86.5078L86.1875 37.2031C86.026 37.375 85.8438 37.5234 85.6406 37.6484C85.4583 37.7682 85.2344 37.8698 84.9688 37.9531C84.7031 38.0365 84.388 38.0781 84.0234 38.0781C83.6589 38.0781 83.3307 38.0234 83.0391 37.9141C82.7474 37.7995 82.4974 37.6432 82.2891 37.4453C82.0807 37.2474 81.9167 37.0182 81.7969 36.7578C81.6823 36.4974 81.625 36.2188 81.625 35.9219C81.625 35.5781 81.6927 35.2656 81.8281 34.9844C81.9688 34.7031 82.2083 34.4583 82.5469 34.25C82.8906 34.0417 83.3594 33.8828 83.9531 33.7734C84.5469 33.6589 85.2917 33.6016 86.1875 33.6016V33.2031C86.1875 32.8385 86.0443 32.5208 85.7578 32.25C85.4766 31.9792 85.112 31.8438 84.6641 31.8438C84.2161 31.8438 83.8854 31.9375 83.6719 32.125C83.4583 32.3073 83.3099 32.5599 83.2266 32.8828H81.9453C81.987 32.5859 82.0781 32.3073 82.2188 32.0469C82.3594 31.7812 82.5443 31.5495 82.7734 31.3516C83.0026 31.1536 83.2734 31 83.5859 30.8906C83.8984 30.776 84.2578 30.7188 84.6641 30.7188ZM84.0234 36.9609C84.3411 36.9609 84.6328 36.9115 84.8984 36.8125C85.1693 36.7083 85.3984 36.5781 85.5859 36.4219C85.7734 36.2604 85.9193 36.0807 86.0234 35.8828C86.1328 35.6849 86.1875 35.4844 86.1875 35.2812V34.7188C85.4635 34.7188 84.8828 34.75 84.4453 34.8125C84.0078 34.8698 83.6667 34.9557 83.4219 35.0703C83.1823 35.1797 83.0234 35.3125 82.9453 35.4688C82.8672 35.6198 82.8281 35.7969 82.8281 36C82.8281 36.2448 82.9349 36.4661 83.1484 36.6641C83.3672 36.862 83.6589 36.9609 84.0234 36.9609ZM89.9453 28.8828H90.9844V30.7969H92.5859V31.9219H90.9844V35.6797C90.9844 36.0859 91.0938 36.401 91.3125 36.625C91.5312 36.849 91.8229 36.9609 92.1875 36.9609C92.2917 36.9609 92.388 36.9505 92.4766 36.9297C92.5182 36.9193 92.5547 36.9036 92.5859 36.8828V37.9219C92.5339 37.9531 92.4766 37.9792 92.4141 38C92.2734 38.0521 92.0911 38.0781 91.8672 38.0781C91.5911 38.0781 91.3281 38.0208 91.0781 37.9062C90.8281 37.7865 90.6068 37.6224 90.4141 37.4141C90.2214 37.2057 90.0677 36.9557 89.9531 36.6641C89.8438 36.3724 89.7891 36.0443 89.7891 35.6797V31.9219H88.5078V30.7969H89.0703C89.6589 30.7969 89.9505 30.5052 89.9453 29.9219V28.8828ZM95.5547 38H94.3516V30.7969H95.5547V38ZM94.1953 28.7656C94.1953 28.5417 94.2656 28.3594 94.4062 28.2188C94.5521 28.0729 94.7318 28 94.9453 28C95.1693 28 95.3516 28.0729 95.4922 28.2188C95.638 28.3594 95.7109 28.5417 95.7109 28.7656C95.7109 28.9792 95.638 29.1589 95.4922 29.3047C95.3516 29.4505 95.1693 29.5234 94.9453 29.5234C94.7318 29.5234 94.5521 29.4505 94.4062 29.3047C94.2656 29.1589 94.1953 28.9792 94.1953 28.7656ZM98.3516 34.3984C98.3516 34.7839 98.4089 35.1354 98.5234 35.4531C98.6432 35.7656 98.8047 36.0339 99.0078 36.2578C99.2109 36.4818 99.4427 36.6562 99.7031 36.7812C99.9688 36.901 100.24 36.9609 100.516 36.9609C100.792 36.9609 101.06 36.901 101.32 36.7812C101.581 36.6562 101.81 36.4818 102.008 36.2578C102.206 36.0339 102.365 35.7656 102.484 35.4531C102.609 35.1354 102.672 34.7839 102.672 34.3984C102.672 34.013 102.609 33.6641 102.484 33.3516C102.365 33.0391 102.206 32.7708 102.008 32.5469C101.81 32.3229 101.581 32.151 101.32 32.0312C101.06 31.9062 100.792 31.8438 100.516 31.8438C100.24 31.8438 99.9688 31.9062 99.7031 32.0312C99.4427 32.151 99.2109 32.3229 99.0078 32.5469C98.8047 32.7708 98.6432 33.0391 98.5234 33.3516C98.4089 33.6641 98.3516 34.013 98.3516 34.3984ZM103.875 34.3984C103.875 34.9401 103.786 35.4375 103.609 35.8906C103.432 36.3385 103.193 36.7266 102.891 37.0547C102.589 37.3776 102.232 37.6302 101.82 37.8125C101.409 37.9896 100.974 38.0781 100.516 38.0781C100.057 38.0781 99.6224 37.9896 99.2109 37.8125C98.7995 37.6302 98.4401 37.3776 98.1328 37.0547C97.8307 36.7266 97.5911 36.3385 97.4141 35.8906C97.2422 35.4427 97.1562 34.9453 97.1562 34.3984C97.1562 33.8568 97.2422 33.362 97.4141 32.9141C97.5911 32.4661 97.8307 32.0807 98.1328 31.7578C98.4401 31.4297 98.7995 31.1745 99.2109 30.9922C99.6224 30.8099 100.057 30.7188 100.516 30.7188C100.974 30.7188 101.409 30.8099 101.82 30.9922C102.232 31.1745 102.589 31.4297 102.891 31.7578C103.193 32.0807 103.432 32.4661 103.609 32.9141C103.786 33.362 103.875 33.8568 103.875 34.3984ZM108.758 30.7188C109.143 30.7188 109.503 30.7969 109.836 30.9531C110.174 31.1094 110.471 31.3229 110.727 31.5938C110.982 31.8646 111.182 32.1927 111.328 32.5781C111.479 32.9583 111.555 33.3802 111.555 33.8438V38H110.359V33.8438C110.359 33.5469 110.31 33.276 110.211 33.0312C110.117 32.7812 109.99 32.5677 109.828 32.3906C109.667 32.2135 109.479 32.0781 109.266 31.9844C109.057 31.8906 108.833 31.8438 108.594 31.8438C108.026 31.8438 107.565 32.026 107.211 32.3906C106.857 32.75 106.68 33.2344 106.68 33.8438V38H105.477V30.7969H106.359L106.68 31.6016C106.831 31.4401 107.005 31.2969 107.203 31.1719C107.385 31.0521 107.604 30.9479 107.859 30.8594C108.115 30.7656 108.414 30.7188 108.758 30.7188Z" fill="#4F4F4F" />
                                    <circle cx="6" cy="61" r="6" fill="#DED053" />
                                    <path d="M23.5625 65H22.2812V54.9219H23.5625V65ZM29.1641 57.7188C29.5495 57.7188 29.9089 57.7969 30.2422 57.9531C30.5807 58.1094 30.8776 58.3229 31.1328 58.5938C31.388 58.8646 31.5885 59.1927 31.7344 59.5781C31.8854 59.9583 31.9609 60.3802 31.9609 60.8438V65H30.7656V60.8438C30.7656 60.5469 30.7161 60.276 30.6172 60.0312C30.5234 59.7812 30.3958 59.5677 30.2344 59.3906C30.0729 59.2135 29.8854 59.0781 29.6719 58.9844C29.4635 58.8906 29.2396 58.8438 29 58.8438C28.4323 58.8438 27.9714 59.026 27.6172 59.3906C27.263 59.75 27.0859 60.2344 27.0859 60.8438V65H25.8828V57.7969H26.7656L27.0859 58.6016C27.237 58.4401 27.4115 58.2969 27.6094 58.1719C27.7917 58.0521 28.0104 57.9479 28.2656 57.8594C28.5208 57.7656 28.8203 57.7188 29.1641 57.7188ZM38.6797 62.9219C38.6797 63.2188 38.6198 63.4974 38.5 63.7578C38.3854 64.0182 38.2214 64.2474 38.0078 64.4453C37.7943 64.6432 37.5365 64.7995 37.2344 64.9141C36.9323 65.0234 36.5885 65.0781 36.2031 65.0781C35.401 65.0781 34.7708 64.8646 34.3125 64.4375C33.8542 64.0104 33.6042 63.4792 33.5625 62.8438H34.7656C34.8073 63.1615 34.9453 63.4271 35.1797 63.6406C35.4141 63.8542 35.7552 63.9609 36.2031 63.9609C36.6094 63.9609 36.9245 63.8568 37.1484 63.6484C37.3724 63.4401 37.4844 63.1979 37.4844 62.9219C37.4844 62.6562 37.3906 62.4557 37.2031 62.3203C37.0156 62.1849 36.7839 62.0781 36.5078 62C36.2318 61.9219 35.9297 61.849 35.6016 61.7812C35.2786 61.7083 34.9766 61.6042 34.6953 61.4688C34.4193 61.3281 34.1875 61.1302 34 60.875C33.8125 60.6146 33.7188 60.2552 33.7188 59.7969C33.7188 59.5208 33.776 59.2578 33.8906 59.0078C34.0104 58.7578 34.1745 58.5365 34.3828 58.3438C34.5911 58.151 34.8411 58 35.1328 57.8906C35.4297 57.776 35.7604 57.7188 36.125 57.7188C36.8906 57.7188 37.4844 57.9193 37.9062 58.3203C38.3281 58.7214 38.5599 59.2422 38.6016 59.8828H37.3984C37.3568 59.5651 37.2344 59.3125 37.0312 59.125C36.8281 58.9375 36.526 58.8438 36.125 58.8438C35.7604 58.8438 35.4688 58.9427 35.25 59.1406C35.0312 59.3333 34.9219 59.5521 34.9219 59.7969C34.9219 60.0625 35.0156 60.263 35.2031 60.3984C35.3906 60.5339 35.6224 60.6432 35.8984 60.7266C36.1745 60.8047 36.474 60.8776 36.7969 60.9453C37.125 61.013 37.4271 61.1172 37.7031 61.2578C37.9844 61.3932 38.2161 61.5938 38.3984 61.8594C38.5859 62.1198 38.6797 62.474 38.6797 62.9219ZM43.0781 65.0781C42.6927 65.0781 42.3307 65.0026 41.9922 64.8516C41.6589 64.6953 41.362 64.4818 41.1016 64.2109C40.8464 63.9349 40.6432 63.6068 40.4922 63.2266C40.3464 62.8411 40.2734 62.4193 40.2734 61.9609V57.7969H41.4766V61.9609C41.4766 62.2578 41.5208 62.5286 41.6094 62.7734C41.7031 63.0182 41.8281 63.2292 41.9844 63.4062C42.1458 63.5833 42.3333 63.7214 42.5469 63.8203C42.7604 63.9141 42.9896 63.9609 43.2344 63.9609C43.8021 63.9609 44.263 63.7812 44.6172 63.4219C44.9766 63.0573 45.1562 62.5703 45.1562 61.9609V57.7969H46.3516V65H45.4766L45.1562 64.2031C45.0052 64.375 44.8281 64.5234 44.625 64.6484C44.4427 64.7682 44.224 64.8698 43.9688 64.9531C43.7188 65.0365 43.4219 65.0781 43.0781 65.0781ZM51.8672 58.9219H51.5469C50.9792 58.9219 50.5182 59.1042 50.1641 59.4688C49.8099 59.8281 49.6328 60.3125 49.6328 60.9219V65H48.4297V57.7969H49.3125L49.6328 58.6016C49.7839 58.4401 49.9583 58.2969 50.1562 58.1719C50.3385 58.0521 50.5573 57.9479 50.8125 57.8594C51.0677 57.7656 51.3672 57.7188 51.7109 57.7188H51.8672V58.9219ZM55.8672 57.7188C56.263 57.7188 56.6276 57.7865 56.9609 57.9219C57.2995 58.0521 57.5885 58.2292 57.8281 58.4531C58.0677 58.6771 58.2526 58.9401 58.3828 59.2422C58.5182 59.5391 58.5859 59.8594 58.5859 60.2031V65H57.7109L57.3906 64.2031C57.2292 64.375 57.0469 64.5234 56.8438 64.6484C56.6615 64.7682 56.4375 64.8698 56.1719 64.9531C55.9062 65.0365 55.5911 65.0781 55.2266 65.0781C54.862 65.0781 54.5339 65.0234 54.2422 64.9141C53.9505 64.7995 53.7005 64.6432 53.4922 64.4453C53.2839 64.2474 53.1198 64.0182 53 63.7578C52.8854 63.4974 52.8281 63.2188 52.8281 62.9219C52.8281 62.5781 52.8958 62.2656 53.0312 61.9844C53.1719 61.7031 53.4115 61.4583 53.75 61.25C54.0938 61.0417 54.5625 60.8828 55.1562 60.7734C55.75 60.6589 56.4948 60.6016 57.3906 60.6016V60.2031C57.3906 59.8385 57.2474 59.5208 56.9609 59.25C56.6797 58.9792 56.3151 58.8438 55.8672 58.8438C55.4193 58.8438 55.0885 58.9375 54.875 59.125C54.6615 59.3073 54.513 59.5599 54.4297 59.8828H53.1484C53.1901 59.5859 53.2812 59.3073 53.4219 59.0469C53.5625 58.7812 53.7474 58.5495 53.9766 58.3516C54.2057 58.1536 54.4766 58 54.7891 57.8906C55.1016 57.776 55.4609 57.7188 55.8672 57.7188ZM55.2266 63.9609C55.5443 63.9609 55.8359 63.9115 56.1016 63.8125C56.3724 63.7083 56.6016 63.5781 56.7891 63.4219C56.9766 63.2604 57.1224 63.0807 57.2266 62.8828C57.3359 62.6849 57.3906 62.4844 57.3906 62.2812V61.7188C56.6667 61.7188 56.0859 61.75 55.6484 61.8125C55.2109 61.8698 54.8698 61.9557 54.625 62.0703C54.3854 62.1797 54.2266 62.3125 54.1484 62.4688C54.0703 62.6198 54.0312 62.7969 54.0312 63C54.0312 63.2448 54.138 63.4661 54.3516 63.6641C54.5703 63.862 54.862 63.9609 55.2266 63.9609ZM63.8672 57.7188C64.2526 57.7188 64.612 57.7969 64.9453 57.9531C65.2839 58.1094 65.5807 58.3229 65.8359 58.5938C66.0911 58.8646 66.2917 59.1927 66.4375 59.5781C66.5885 59.9583 66.6641 60.3802 66.6641 60.8438V65H65.4688V60.8438C65.4688 60.5469 65.4193 60.276 65.3203 60.0312C65.2266 59.7812 65.099 59.5677 64.9375 59.3906C64.776 59.2135 64.5885 59.0781 64.375 58.9844C64.1667 58.8906 63.9427 58.8438 63.7031 58.8438C63.1354 58.8438 62.6745 59.026 62.3203 59.3906C61.9661 59.75 61.7891 60.2344 61.7891 60.8438V65H60.5859V57.7969H61.4688L61.7891 58.6016C61.9401 58.4401 62.1146 58.2969 62.3125 58.1719C62.4948 58.0521 62.7135 57.9479 62.9688 57.8594C63.224 57.7656 63.5234 57.7188 63.8672 57.7188ZM71.5469 58.8438C71.2708 58.8438 71 58.9062 70.7344 59.0312C70.474 59.151 70.2422 59.3229 70.0391 59.5469C69.8359 59.7708 69.6745 60.0391 69.5547 60.3516C69.4401 60.6641 69.3828 61.013 69.3828 61.3984C69.3828 61.7839 69.4401 62.1354 69.5547 62.4531C69.6745 62.7656 69.8359 63.0339 70.0391 63.2578C70.2422 63.4818 70.474 63.6562 70.7344 63.7812C71 63.901 71.2708 63.9609 71.5469 63.9609C71.7812 63.9609 72.0026 63.9193 72.2109 63.8359C72.4193 63.7474 72.6042 63.6354 72.7656 63.5C72.9323 63.3594 73.0729 63.1979 73.1875 63.0156C73.3073 62.8333 73.401 62.6406 73.4688 62.4375H74.6641C74.5807 62.8021 74.4479 63.1458 74.2656 63.4688C74.0833 63.7865 73.8568 64.0651 73.5859 64.3047C73.3151 64.5443 73.0052 64.7344 72.6562 64.875C72.3125 65.0104 71.9427 65.0781 71.5469 65.0781C71.0885 65.0781 70.6536 64.9896 70.2422 64.8125C69.8307 64.6302 69.4714 64.3776 69.1641 64.0547C68.862 63.7266 68.6224 63.3385 68.4453 62.8906C68.2734 62.4427 68.1875 61.9453 68.1875 61.3984C68.1875 60.8568 68.2734 60.362 68.4453 59.9141C68.6224 59.4661 68.862 59.0807 69.1641 58.7578C69.4714 58.4297 69.8307 58.1745 70.2422 57.9922C70.6536 57.8099 71.0885 57.7188 71.5469 57.7188C71.9427 57.7188 72.3125 57.7891 72.6562 57.9297C73.0052 58.0651 73.3151 58.2552 73.5859 58.5C73.8568 58.7396 74.0833 59.0182 74.2656 59.3359C74.4479 59.6536 74.5807 59.9948 74.6641 60.3594H73.4688C73.4062 60.1562 73.3151 59.9661 73.1953 59.7891C73.0755 59.6068 72.9323 59.4453 72.7656 59.3047C72.6042 59.1641 72.4193 59.0521 72.2109 58.9688C72.0026 58.8854 71.7812 58.8438 71.5469 58.8438ZM82.0234 63.0781C81.9036 63.3333 81.7526 63.5859 81.5703 63.8359C81.388 64.0807 81.1745 64.2943 80.9297 64.4766C80.6849 64.6536 80.4062 64.7995 80.0938 64.9141C79.7865 65.0234 79.4427 65.0781 79.0625 65.0781C78.6042 65.0781 78.1693 64.9896 77.7578 64.8125C77.3464 64.6302 76.987 64.3776 76.6797 64.0547C76.3776 63.7266 76.138 63.3385 75.9609 62.8906C75.7891 62.4427 75.7031 61.9453 75.7031 61.3984C75.7031 60.8568 75.7891 60.362 75.9609 59.9141C76.138 59.4661 76.375 59.0807 76.6719 58.7578C76.974 58.4297 77.3255 58.1745 77.7266 57.9922C78.1276 57.8099 78.5469 57.7188 78.9844 57.7188C79.4219 57.7188 79.8333 57.8047 80.2188 57.9766C80.6094 58.1484 80.9479 58.3932 81.2344 58.7109C81.526 59.0234 81.7552 59.401 81.9219 59.8438C82.0938 60.2865 82.1797 60.7786 82.1797 61.3203C82.1797 61.4245 82.1745 61.5156 82.1641 61.5938C82.1536 61.6667 82.1432 61.7292 82.1328 61.7812C82.1224 61.8438 82.112 61.9036 82.1016 61.9609H76.9844C77.0052 62.2161 77.0755 62.4661 77.1953 62.7109C77.3203 62.9557 77.474 63.1693 77.6562 63.3516C77.8438 63.5339 78.0599 63.6823 78.3047 63.7969C78.5547 63.9062 78.8073 63.9609 79.0625 63.9609C79.2865 63.9609 79.4844 63.9297 79.6562 63.8672C79.8333 63.7995 79.9948 63.724 80.1406 63.6406C80.2865 63.5573 80.4062 63.4661 80.5 63.3672C80.599 63.263 80.6797 63.1667 80.7422 63.0781H82.0234ZM78.9844 58.8438C78.7396 58.8438 78.5052 58.8958 78.2812 59C78.0625 59.1042 77.862 59.2474 77.6797 59.4297C77.5026 59.612 77.3516 59.8307 77.2266 60.0859C77.1068 60.3411 77.026 60.6198 76.9844 60.9219H80.8984C80.8151 60.2812 80.5938 59.776 80.2344 59.4062C79.8802 59.0312 79.4635 58.8438 78.9844 58.8438Z" fill="#4F4F4F" />
                                    <circle cx="6" cy="89" r="6" fill="#6CEB57" />
                                    <path d="M31.0488 88.9893C31.0488 90.5889 30.6432 91.8467 29.832 92.7627C29.0254 93.6787 27.902 94.1367 26.4619 94.1367C24.9899 94.1367 23.8529 93.6878 23.0508 92.79C22.2533 91.8877 21.8545 90.6162 21.8545 88.9756C21.8545 87.3486 22.2555 86.0885 23.0576 85.1953C23.8597 84.2975 24.999 83.8486 26.4756 83.8486C27.9111 83.8486 29.0322 84.3044 29.8389 85.2158C30.6455 86.1273 31.0488 87.3851 31.0488 88.9893ZM23.085 88.9893C23.085 90.3428 23.3721 91.3704 23.9463 92.0723C24.5251 92.7695 25.3636 93.1182 26.4619 93.1182C27.5693 93.1182 28.4056 92.7695 28.9707 92.0723C29.5358 91.375 29.8184 90.3473 29.8184 88.9893C29.8184 87.6449 29.5358 86.6263 28.9707 85.9336C28.4102 85.2363 27.5785 84.8877 26.4756 84.8877C25.3682 84.8877 24.5251 85.2386 23.9463 85.9404C23.3721 86.6377 23.085 87.654 23.085 88.9893ZM35.5332 93.2002C35.7337 93.2002 35.9274 93.1865 36.1143 93.1592C36.3011 93.1273 36.4492 93.0954 36.5586 93.0635V93.9316C36.4355 93.9909 36.2533 94.0387 36.0117 94.0752C35.7747 94.1162 35.5605 94.1367 35.3691 94.1367C33.9199 94.1367 33.1953 93.3734 33.1953 91.8467V87.3896H32.1221V86.8428L33.1953 86.3711L33.6738 84.7715H34.3301V86.5078H36.5039V87.3896H34.3301V91.7988C34.3301 92.25 34.4372 92.5964 34.6514 92.8379C34.8656 93.0794 35.1595 93.2002 35.5332 93.2002ZM43.1895 94V89.1533C43.1895 88.5426 43.0505 88.0869 42.7725 87.7861C42.4945 87.4854 42.0592 87.335 41.4668 87.335C40.6784 87.335 40.1019 87.5492 39.7373 87.9775C39.3773 88.4059 39.1973 89.1077 39.1973 90.083V94H38.0625V83.3633H39.1973V86.583C39.1973 86.9704 39.179 87.2917 39.1426 87.5469H39.2109C39.4342 87.1868 39.751 86.9043 40.1611 86.6992C40.5758 86.4896 41.0475 86.3848 41.5762 86.3848C42.4922 86.3848 43.1781 86.6035 43.6338 87.041C44.0941 87.474 44.3242 88.1644 44.3242 89.1123V94H43.1895ZM49.8271 94.1367C48.7197 94.1367 47.8447 93.7995 47.2021 93.125C46.5641 92.4505 46.2451 91.514 46.2451 90.3154C46.2451 89.1077 46.5413 88.1484 47.1338 87.4375C47.7308 86.7266 48.5306 86.3711 49.5332 86.3711C50.472 86.3711 51.2148 86.681 51.7617 87.3008C52.3086 87.916 52.582 88.7295 52.582 89.7412V90.459H47.4209C47.4437 91.3385 47.6647 92.0062 48.084 92.4619C48.5078 92.9176 49.1025 93.1455 49.8682 93.1455C50.6748 93.1455 51.4723 92.9769 52.2607 92.6396V93.6514C51.8597 93.8245 51.4792 93.9476 51.1191 94.0205C50.7637 94.098 50.333 94.1367 49.8271 94.1367ZM49.5195 87.3213C48.918 87.3213 48.4372 87.5173 48.0771 87.9092C47.7217 88.3011 47.512 88.8434 47.4482 89.5361H51.3652C51.3652 88.8206 51.2057 88.2738 50.8867 87.8955C50.5677 87.5127 50.112 87.3213 49.5195 87.3213ZM57.9414 86.3711C58.2741 86.3711 58.5726 86.3984 58.8369 86.4531L58.6797 87.5059C58.3698 87.4375 58.0964 87.4033 57.8594 87.4033C57.2533 87.4033 56.7337 87.6494 56.3008 88.1416C55.8724 88.6338 55.6582 89.2467 55.6582 89.9805V94H54.5234V86.5078H55.46L55.5898 87.8955H55.6445C55.9225 87.4079 56.2575 87.0319 56.6494 86.7676C57.0413 86.5033 57.472 86.3711 57.9414 86.3711ZM65.0713 91.9561C65.0713 92.6533 64.8115 93.1911 64.292 93.5693C63.7725 93.9476 63.0433 94.1367 62.1045 94.1367C61.111 94.1367 60.3363 93.9795 59.7803 93.665V92.6123C60.1403 92.7946 60.5254 92.9382 60.9355 93.043C61.3503 93.1478 61.749 93.2002 62.1318 93.2002C62.7243 93.2002 63.18 93.1068 63.499 92.9199C63.818 92.7285 63.9775 92.4391 63.9775 92.0518C63.9775 91.7601 63.8499 91.5117 63.5947 91.3066C63.3441 91.097 62.8519 90.8509 62.1182 90.5684C61.4209 90.3086 60.9242 90.083 60.6279 89.8916C60.3363 89.6956 60.1175 89.4746 59.9717 89.2285C59.8304 88.9824 59.7598 88.6885 59.7598 88.3467C59.7598 87.736 60.0081 87.2552 60.5049 86.9043C61.0016 86.5488 61.6829 86.3711 62.5488 86.3711C63.3555 86.3711 64.1439 86.5352 64.9141 86.8633L64.5107 87.7861C63.7588 87.4762 63.0775 87.3213 62.4668 87.3213C61.929 87.3213 61.5234 87.4056 61.25 87.5742C60.9766 87.7428 60.8398 87.9753 60.8398 88.2715C60.8398 88.472 60.89 88.6429 60.9902 88.7842C61.0951 88.9255 61.2614 89.0599 61.4893 89.1875C61.7171 89.3151 62.1546 89.4997 62.8018 89.7412C63.6904 90.0648 64.2897 90.3906 64.5996 90.7188C64.9141 91.0469 65.0713 91.4593 65.0713 91.9561Z" fill="#4F4F4F" />
                                  </svg>

                                </div>
                              </div>

                            </div>

                            <div className="summary-overview">
                              <h2>Summary</h2>
                              {
                                Math.round((totalExpenses * 100) / (totalIncome)) <= 70 ? (<p>Your toatal expenses agaainst your income is {Math.round((totalExpenses * 100) / (totalIncome))}%. This simply means you're spending within your means</p>) : (<p>Your toatal expenses agaainst your income is {Math.round((totalExpenses * 100) / (totalIncome))}%. This implies you are spending beyond your means.</p>)
                              }
                              <p>Please contact our financial advicer to break it down for you</p>
                            </div>

                          </div>

                          {/* </div> */}
                        </div>

                        {/*  */}

                        <div className="cal-stage-wrapperX mt-5">
                          <h1 className="h11">B. Income- More source of income</h1>
                          <p className="p1"> To be able to afford your current life by next year, your monthly income should be current income + 25% current income </p>
                          <div className="d-flex justify-content-center align-items-center flex-flow-wrap">
                            <h1 className="income-val"> {totalIncome}</h1>
                            <div className="ml-3 mr-3 ">
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0)">
                                  <path d="M12.544 9.53998V10.7466C12.544 11.1299 12.6207 11.4514 12.7716 11.7019C12.9799 12.0476 13.322 12.2457 13.7103 12.2457C14.0908 12.2457 14.469 12.0604 14.8342 11.6953L18.8197 7.70984C19.6946 6.83478 19.6946 5.41095 18.8195 4.53589L14.8342 0.550415C14.469 0.18512 14.0908 0 13.7103 0C13.1299 0 12.544 0.463623 12.544 1.49908V2.59497C6.88564 2.92914 2.20144 7.27148 1.50527 12.9567C1.46627 13.2742 1.64681 13.5782 1.94436 13.6959C2.02859 13.7292 2.11629 13.7454 2.2029 13.7454C2.42226 13.7454 2.63503 13.6426 2.77053 13.4575C4.63784 10.9061 7.63601 9.38287 10.7905 9.38287C11.3752 9.38287 11.9628 9.43561 12.544 9.53998ZM3.53829 10.6025C5.06869 6.69397 8.87765 3.98053 13.2471 3.98053C13.6355 3.98053 13.9502 3.66577 13.9502 3.2774V1.65527L17.8253 5.53015C18.1519 5.85699 18.1519 6.38873 17.8253 6.71558L13.9502 10.5905V8.96814C13.9502 8.64221 13.7263 8.35895 13.409 8.28387C12.5473 8.08008 11.6662 7.97662 10.7905 7.97662C8.97781 7.97662 7.17458 8.41534 5.57571 9.24554C4.85116 9.62164 4.16707 10.0783 3.53829 10.6025Z" fill="#333333" />
                                  <path d="M22.0432 10.3042C21.7457 10.1865 21.406 10.2846 21.217 10.5428C19.3497 13.094 16.3517 14.6173 13.197 14.6173C12.6125 14.6173 12.0249 14.5646 11.4436 14.4602V13.2535C11.4436 12.2181 10.8578 11.7544 10.2772 11.7544C9.89671 11.7544 9.5186 11.9397 9.15349 12.305L5.16801 16.2903C4.29295 17.1654 4.29295 18.5892 5.16801 19.4645L9.15349 23.4497C9.5186 23.815 9.89671 24.0002 10.2772 24.0002C10.8577 24.0002 11.4436 23.5365 11.4436 22.5011V21.4052C17.1021 21.071 21.7861 16.7287 22.4823 11.0436C22.5213 10.7259 22.3407 10.422 22.0432 10.3042ZM10.7405 20.0196C10.3521 20.0196 10.0373 20.3344 10.0373 20.7228V22.3449L6.16246 18.4702C5.83562 18.1432 5.83562 17.6114 6.16228 17.2848L10.0373 13.4097V15.032C10.0373 15.3581 10.2615 15.6414 10.5788 15.7165C11.4407 15.9201 12.3216 16.0235 13.197 16.0235C15.0099 16.0235 16.8132 15.5848 18.4118 14.7548C19.1364 14.3785 19.8205 13.922 20.4493 13.3978C18.9189 17.3062 15.1099 20.0196 10.7405 20.0196Z" fill="#333333" />
                                </g>
                                <defs>
                                  <clipPath id="clip0">
                                    <rect width="24" height="24" fill="white" />
                                  </clipPath>
                                </defs>
                              </svg>

                            </div>
                            <h1 className="income-val-percent"> {Math.round((totalIncome + (totalIncome * 0.25)))}</h1>
                          </div>
                        </div>
                        {/*  */}

                        <div className="cal-stage-wrapper mt-5">
                          <div>
                          <h1>C. Emergency Fund Analysis</h1>
                          <div className="overview-result">

                            <div className="overview-result-inflow p-3">
                              <h2>Savings & Investment</h2>
                             <div className="d-flex align-items-center mt-4">
                             <div className="chart-wrapper">
                                  <PieChart
                                    title=""
                                    animate
                                    animationDuration={500}
                                    animationEasing="ease-out"
                                    label={({ dataEntry }) => `${Math.round(dataEntry.percentage)}%`}
                                    labelPosition={65}
                                    labelStyle={{
                                      fontSize: "5px",
                                      fontWeight: "600",
                                      fill: '#FFFFFF',

                                    }}
                                    data={[
                                      { value: Math.round((totalIncome * 100) / (totalIncome + totalSavings)), title: "Income", color: '#24CCB8' },
                                      { value: Math.round((totalSavings * 100) / (totalIncome + totalSavings)), title: "Savings & Investment", color: '#FFC400' }

                                    ]}
                                  />
                                </div>
                                

                               <div className="ml-4">

                               <div class="d-flex align-items-center">
                                 <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="6" cy="6" r="6" fill="#24CCB8"></circle></svg>
                                 <div class="ml-2">Income</div>
                                </div>

                               <div class="d-flex align-items-center">
                                 <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="6" cy="6" r="6" fill="#FFC400"></circle></svg>
                                 <div class="ml-2" >Savings & Investment </div>
                                </div>
                               </div>
                             </div>
                               
                                <div className="summary-overview mt-5">
                              <h2 className="mb-4 ">Summary</h2>
                              {
                                Math.round((totalSavings * 100) / (totalIncome + totalSavings)) <= 10 ? (<p>
                                  This indicates that {Math.round((totalSavings * 100) / (totalIncome + totalSavings))}% of income goes into savings <br /> It simply means provision is not made for future exigencies <br /> The financial standard of such person will be affected if the main source of income is threatened or at retirement
                                </p>) : (<p>This indicates that {Math.round((totalSavings * 100) / (totalIncome + totalSavings))}% of income goes into savings <br /> Higher savings can help finance investment and also serve as a cushion when there is financial difficulty </p>)
                              }
                            </div>
                            </div>

                          </div>
                        

                          </div>
                         
                        </div>
                        <div>

                        
                        </div>

                        


                        <div className="d-flex justify-content-between align-items-center mt-3">
                          <svg
                            onClick={() => setStage("stage5")}
                            className="btn btn-lg"
                            width="132"
                            height="45"
                            viewBox="0 0 132 45"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              x="0.5"
                              y="0.5"
                              width="131"
                              height="44"
                              rx="9.5"
                              fill="white"
                              stroke="#333333"
                            />
                            <path
                              d="M45 23H31"
                              stroke="black"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M38 16L31 23L38 30"
                              stroke="black"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M71.7998 22.24C72.4505 22.3787 72.9731 22.704 73.3678 23.216C73.7625 23.7173 73.9598 24.2933 73.9598 24.944C73.9598 25.8827 73.6291 26.6293 72.9678 27.184C72.3171 27.728 71.4051 28 70.2318 28H64.9998V16.768H70.0558C71.1971 16.768 72.0878 17.0293 72.7278 17.552C73.3785 18.0747 73.7038 18.784 73.7038 19.68C73.7038 20.3413 73.5278 20.8907 73.1758 21.328C72.8345 21.7653 72.3758 22.0693 71.7998 22.24ZM67.7358 21.312H69.5278C69.9758 21.312 70.3171 21.216 70.5518 21.024C70.7971 20.8213 70.9198 20.528 70.9198 20.144C70.9198 19.76 70.7971 19.4667 70.5518 19.264C70.3171 19.0613 69.9758 18.96 69.5278 18.96H67.7358V21.312ZM69.7518 25.792C70.2105 25.792 70.5625 25.6907 70.8078 25.488C71.0638 25.2747 71.1918 24.9707 71.1918 24.576C71.1918 24.1813 71.0585 23.872 70.7918 23.648C70.5358 23.424 70.1785 23.312 69.7198 23.312H67.7358V25.792H69.7518ZM75.0027 23.52C75.0027 22.6027 75.1734 21.7973 75.5147 21.104C75.8667 20.4107 76.3414 19.8773 76.9387 19.504C77.536 19.1307 78.2027 18.944 78.9387 18.944C79.568 18.944 80.1174 19.072 80.5867 19.328C81.0667 19.584 81.4347 19.92 81.6907 20.336V19.072H84.4267V28H81.6907V26.736C81.424 27.152 81.0507 27.488 80.5707 27.744C80.1014 28 79.552 28.128 78.9227 28.128C78.1974 28.128 77.536 27.9413 76.9387 27.568C76.3414 27.184 75.8667 26.6453 75.5147 25.952C75.1734 25.248 75.0027 24.4373 75.0027 23.52ZM81.6907 23.536C81.6907 22.8533 81.4987 22.3147 81.1147 21.92C80.7414 21.5253 80.2827 21.328 79.7387 21.328C79.1947 21.328 78.7307 21.5253 78.3467 21.92C77.9734 22.304 77.7867 22.8373 77.7867 23.52C77.7867 24.2027 77.9734 24.7467 78.3467 25.152C78.7307 25.5467 79.1947 25.744 79.7387 25.744C80.2827 25.744 80.7414 25.5467 81.1147 25.152C81.4987 24.7573 81.6907 24.2187 81.6907 23.536ZM85.8621 23.536C85.8621 22.608 86.0487 21.7973 86.4221 21.104C86.8061 20.4107 87.3341 19.8773 88.0061 19.504C88.6887 19.1307 89.4674 18.944 90.3421 18.944C91.4621 18.944 92.3954 19.2373 93.1421 19.824C93.8994 20.4107 94.3954 21.2373 94.6301 22.304H91.7181C91.4727 21.6213 90.9981 21.28 90.2941 21.28C89.7927 21.28 89.3927 21.4773 89.0941 21.872C88.7954 22.256 88.6461 22.8107 88.6461 23.536C88.6461 24.2613 88.7954 24.8213 89.0941 25.216C89.3927 25.6 89.7927 25.792 90.2941 25.792C90.9981 25.792 91.4727 25.4507 91.7181 24.768H94.6301C94.3954 25.8133 93.8994 26.6347 93.1421 27.232C92.3847 27.8293 91.4514 28.128 90.3421 28.128C89.4674 28.128 88.6887 27.9413 88.0061 27.568C87.3341 27.1947 86.8061 26.6613 86.4221 25.968C86.0487 25.2747 85.8621 24.464 85.8621 23.536ZM101.55 28L98.8296 24.256V28H96.0936V16.16H98.8296V22.704L101.534 19.072H104.91L101.198 23.552L104.942 28H101.55Z"
                              fill="#333333"
                            />
                          </svg>


                          <a href="https://meetings.hubspot.com/hello1816" class="btn btn-shecluded btn-lg btn-margin" target="_blank">
                            Speak to a financial advisor
                            </a>

                        </div>

                      </div>
                    ),
                  }[stage]
                }
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App
