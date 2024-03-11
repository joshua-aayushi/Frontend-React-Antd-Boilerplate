import { token } from "../../constants/ServerConstants";

export const newRecord = async (payload) => {
  let URL = "";
  console.log("URL:", URL);

  let response = await fetch(URL, {
    method: "POST",
    headers: {
      Authorization: "Bearer " + token,
      "Content-type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  return response.json();
};

// for form data
// export const newComponent = async (payload) => {
//   let URL = POST_TASK_NEW_COMMENT_API_CONSTANT;
//   console.log("URL:", URL);

//   let response = await fetch(URL, {
//     method: "POST",
//     headers: {
//       Authorization: "Bearer " + token,
//       "Content-type": "application/json",
//     },
//     body: payload,
//   });

//   return response.json();
// };

export const updateRecord = async (payload, id) => {
  let URL = ``;
  console.log("URL:", URL);

  let response = await fetch(URL, {
    method: "PUT",
    headers: {
      Authorization: "Bearer " + token,
      "Content-type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  return response.json();
};
