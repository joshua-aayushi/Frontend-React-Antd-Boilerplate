import { token } from "../../constants/ServerConstants";

export const updateRecord = async (URL) => {
  // checking final URL
  console.log("URL:", URL);

  let response = await fetch(URL, {
    method: "PUT",
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json",
    },
  });

  return response.json();
};
