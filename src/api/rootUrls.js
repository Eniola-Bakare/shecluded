const baseUrl = "https://api.shecluded.com/api/v1/customer";
const yellowpageUrl = "https://api.shecluded.com/api/v1/adminfrontend";
// const baseUrl = "https://shecludedtest.herokuapp.com/api/v1/customer";

export const timeOut = 1000 * 60 * 3; // 3 Minutes Fetch Timeout

//AUTHENTICATIONS
export const loginUrl = `${baseUrl}/auth/login`;
export const resetPasswordUrl = `${baseUrl}/reset/password`;
export const forgotPasswordUrl = `${baseUrl}/forgot/password`;

//REGISTRATION
export const validateEmailUrl = `${baseUrl}/validate/email`;
export const registerUrl = `${baseUrl}/register`;
export const bankList = `${baseUrl}/loan/banklist`;

//Dashboard
export const profileUrl = `${baseUrl}/profile`;
export const updateVideoUrl = `${baseUrl}/multimedia/profile`;
export const changePasswordUrl = `${baseUrl}/change/password`;
export const bankListUrl = `${baseUrl}/loan/banklist`;
export const getNextLoanDetails = `${baseUrl}/loan/dashboard/details`;

//Loan Requests
export const requestLoan = `${baseUrl}/loan/request`;
export const individualLoanRequest = `${baseUrl}/loan`;
export const allLoans = `${baseUrl}/loan/all`;

//Transactions
export const allTransactions = `${baseUrl}/loan/alltransaction`;

// Contact us Page
export const sendEmailToSupport = `${baseUrl}/contactus/email`;
// Yellow pages/Business list  Page
export const BusinessList = `${yellowpageUrl}/yellowpage/all`;

export const AddBusinessList = `${yellowpageUrl}/yellowpage/create`;
