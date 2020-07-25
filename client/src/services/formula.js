import axios from "axios";
import { apiEndPoint } from "../config.json";
const formulaInsert = apiEndPoint + "/xformula";
const formulaGet = apiEndPoint + "/xformulaGet";
const formulaDelete = apiEndPoint + "/xformuladel";

export async function saveFormula(formula) {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify(formula);

    const res = await axios.post(formulaInsert, body, config);
  } catch (err) {
    console.log(err);
  }
}

export async function getFormula() {
  let data = await axios.get(formulaGet);
  return data.data;
}

export async function deleteFormula(id) {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify(id);

    const res = await axios.post(formulaDelete, body, config);
    return res;
  } catch (err) {
    console.log(err);
  }
}
