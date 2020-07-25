import axios from "axios";
import { apiEndPoint } from "../config.json";
const secretInsert = apiEndPoint + "/secret";
const secretGet = apiEndPoint + "/secretGet";
const secretDelete = apiEndPoint + "/secretDel";

export async function saveSecret(secret) {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify(secret);

    const res = await axios.post(secretInsert, body, config);
  } catch (err) {
    console.log(err);
  }
}

export async function getSecret() {
  let data = await axios.get(secretGet);
  return data.data;
}

export async function deleteSecret(id) {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify(id);

    const res = await axios.post(secretDelete, body, config);
    return res;
  } catch (err) {
    console.log(err);
  }
}
