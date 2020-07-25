import axios from "axios";
import { apiEndPoint } from "../config.json";

const prizeInsert = apiEndPoint + "/prize";
const prizeGet = apiEndPoint + "/prizeGet";
const prizeDelete = apiEndPoint + "/prizeDel";

export async function savePrize(prize) {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify(prize);

    const res = await axios.post(prizeInsert, body, config);
  } catch (err) {
    console.log(err);
  }
}

export async function getPrize() {
  let data = await axios.get(prizeGet);
  return data.data;
}

export async function deletePrize(id) {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify(id);

    const res = await axios.post(prizeDelete, body, config);
    return res;
  } catch (err) {
    console.log(err);
  }
}
