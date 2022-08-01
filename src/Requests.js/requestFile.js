import axios from "axios";
// export const apiLink = "http://192.168.56.1:4000/";
export const apiLink = "http://localhost:4000";

export const registerPost = async (valuesToRegister) => {
  return axios
    .post(`${apiLink}/statistics/save`, valuesToRegister)
    .then((res) => console.log("Post Registered"))
    .catch((error) => {
      console.log(`Error while Saving :${error}`);
    });
};
