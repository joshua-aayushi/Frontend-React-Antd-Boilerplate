import { token } from "../../constants/ServerConstants";

// common delete apis

// - single record at a time
export const deleteRecord = async (URL) => {
  // checking final URL
  console.log("URL:", URL);

  let response = await fetch(URL, {
    method: "DELETE",
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json",
    },
  });

  return response.json();
};

// - multiple records at a time
export const deleteRecords = async (URL, payload) => {
  // checking final URL
  console.log("URL:", URL);

  let response = await fetch(URL, {
    method: "POST",
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  return response.json();
};
