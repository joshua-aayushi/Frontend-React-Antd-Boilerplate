import {
  GENERATE_OTP_API_CONSTANT,
  LOGIN_API_CONSTANT,
} from "../../constants/APIConstants";

// generate otp
export const generateOTP = async (payload) => {
  let URL = GENERATE_OTP_API_CONSTANT;
  console.log("URL:", URL);

  let response = await fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  return response.json();
};

// login
export const verifyLogin = async (payload) => {
  let URL = LOGIN_API_CONSTANT;
  console.log("URL:", URL);

  let response = await fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  return response.json();
};
