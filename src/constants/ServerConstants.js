// localhost server link
export const SERVER_LINK = "http://localhost:5000/api";

// dev server link
// export const SERVER_LINK = "";

// prod server link
// export const SERVER_LINK = "";

// token
export const token = sessionStorage.getItem("token");
console.log("token", token)

// export const loginUserId = parseInt(sessionStorage.getItem("login_user_id"))
// console.log("login user id", loginUserId)