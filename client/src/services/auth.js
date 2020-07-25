import axios from "axios";
import { apiEndPoint } from "../config.json";

const authGet = apiEndPoint + "/signin";
const profileGet = apiEndPoint + "/profileGet";

export async function login(email, password) {
  // try {
  //   const config = {
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   };
  //   const body = JSON.stringify(data);

  //   const res = await axios.post(authGet, body, config);
  //   return res;
  // } catch (err) {
  //   console.log(err);
  // }

  return await axios.post(authGet, { email, password });
}

export async function getUser() {
  let data = await axios.get(profileGet);
  return data.data;
}
