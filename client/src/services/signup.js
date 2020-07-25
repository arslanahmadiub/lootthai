import axios from "axios";
import { apiEndPoint } from "../config.json";

const userInsert = apiEndPoint + "/profile";

export async function saveUser(user) {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify(user);

    const res = await axios.post(userInsert, body, config);
  } catch (err) {
    console.log(err);
  }
}
