import { INTERVALS } from "./dev-data/intervals";

export const UPLOAD_PRESET = "qltwstph";
export const UPLOAD_URL =
  "https://api.cloudinary.com/v1_1/shecludedng/image/upload";
export const UPLOAD_URL_FOR_PDFs =
  "https://api.cloudinary.com/v1_1/shecludedng/image/upload";
export const UPLOAD_URL_FOR_VIDEO =
  "https://api.cloudinary.com/v1_1/shecludedng/video/upload";
export const MAX_PHOTO_SIZE = 1024;
export const PHOTO_ERROR_MESSAGE = "File must not be larger than 1mb";

// Making the monthly interest rate change dynamically based on the amount entered
export const calcMonthlyPercentage = (amount) => {
  if (amount >= 1000000) {
    return 5 / 100;
  } else {
    return 7 / 100;
  }
};

// Making the number of loan repayment intervals change dynamically based on the amount entered
export const numberOfLoanIntervals = (amount) => {
  if (amount < 100000) {
    return INTERVALS.slice(0, 3);
  } else if (amount >= 100000 && amount < 300000) {
    return INTERVALS.slice(0, 6);
  } else if (amount >= 300000 && amount < 600000) {
    return INTERVALS.slice(0, 6);
  } else if (amount > 600000) {
    return INTERVALS.slice(0, 12);
  } else {
    return INTERVALS.slice(0, INTERVALS.length);
  }
};

// Repeating fields under handleInputChange function in requestLoan component
export const repeatingLoanRequestFields = (event) => {
  return {
    chargesArray: [],
    sumOfTotalChargesArray: [],
    repaymentSchedule: false,
    [event.target.name]: event.target.value,
  };
};
