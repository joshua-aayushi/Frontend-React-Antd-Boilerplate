import { SERVER_LINK } from "./ServerConstants";

// final url constants (server link + endpoint)

// login
export const GENERATE_OTP_API_CONSTANT = `${SERVER_LINK}/v1/generate-otp`;

export const LOGIN_API_CONSTANT = `${SERVER_LINK}/v1/verify-login`;

// ------------- component ------------------------

export const NEW_RECORD_API_CONSTANT = `${SERVER_LINK}/v1/new-record`;

export const GET_ALL_RECORDS_API_CONSTANT = `${SERVER_LINK}/v1/records`;
