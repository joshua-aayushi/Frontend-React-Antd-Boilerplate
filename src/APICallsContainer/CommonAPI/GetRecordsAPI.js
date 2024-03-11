import { token } from "../../constants/ServerConstants";

// common get api for all records - pass url as parameter
export const getAllRecords = async (URL) => {
  // checking the final URL
  console.log("URL:", URL);

  let response = await fetch(URL, {
    method: "GET",
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json",
    },
  });

  const result = await response.json();

  // handling null values
  const modified_payload = JSON.parse(
    JSON.stringify(result.payload?.data, function (key, value) {
      return value === null ||
        value === undefined ||
        value === "undefined" ||
        value === "" ||
        value === "null"
        ? "--"
        : value;
    })
  );

  //replacing response payload with modified payload
  delete result.payload["data"];
  result.payload["data"] = modified_payload;

  return result;
};
