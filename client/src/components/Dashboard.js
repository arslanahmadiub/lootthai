import React, { Component } from "react";
import { Link } from "react-router-dom";
import { savePrize } from "../services/prize";
import { getPrize } from "../services/prize";
import { deletePrize } from "../services/prize";
import { saveSecret } from "../services/secret";
import { getSecret } from "../services/secret";
import { deleteSecret } from "../services/secret";
import { saveFormula } from "../services/formula";
import { getFormula } from "../services/formula";
import { deleteFormula } from "../services/formula";

class Dashboard extends Component {
  state = {
    prize: {
      firstPrize: "",
      secondPrizeLeft: "",
      secondPrizeDown: "",
      secondPrizeRight: "",
      date: "",
    },
    secret: {
      sunSecret: "",
      moonSecret: "",
      starSecret: "",
      darkSecret: "",
      secretDate: "",
    },
    formula: {
      firstDigit: "",
      secondDigit: "",
      thirdDigit: "",
      fourthDigit: "",
      fifthDigit: "",
    },
    prizeData: [],
    secretData: [],
    formulaData: [],
  };

  async componentDidMount() {
    await this.getPrizeData();
    await this.getSecretData();
    await this.getFormulaData();
  }

  getPrizeData = async () => {
    let data = await getPrize();
    let length = data.length;
    let finalData = data[length - 1];
    let array = [];
    array.push(finalData);
    if (data.length > 0) {
      this.setState({ prizeData: array });
    }
  };
  getSecretData = async () => {
    let data = await getSecret();
    let length = data.length;
    let finalData = data[length - 1];
    let array = [];
    array.push(finalData);
    if (data.length > 0) {
      this.setState({ secretData: array });
    }
  };
  getFormulaData = async () => {
    let data = await getFormula();
    let length = data.length;
    let finalData = data[length - 1];
    let array = [];
    array.push(finalData);
    if (data.length > 0) {
      this.setState({ formulaData: array });
    }
  };

  handlePrizeChange = async (e) => {
    const prize = { ...this.state.prize };
    prize[e.target.name] = e.target.value;
    await this.setState({ prize });
  };

  handlePrizeClick = async () => {
    let data = this.state.prize;
    await savePrize(data);
    let prize = {
      firstPrize: "",
      secondPrizeLeft: "",
      secondPrizeDown: "",
      secondPrizeRight: "",
      date: "",
    };
    await this.setState({ prize });
    await this.getPrizeData();
  };

  handleSecretChange = async (e) => {
    const secret = { ...this.state.secret };
    secret[e.target.name] = e.target.value;
    await this.setState({ secret });
  };

  handleSecretClick = async () => {
    let data = this.state.secret;
    await saveSecret(data);
    let secret = {
      sunSecret: "",
      moonSecret: "",
      starSecret: "",
      darkSecret: "",
      secretDate: "",
    };
    await this.setState({ secret });
    await this.getSecretData();
  };

  handleFormulaChange = async (e) => {
    const formula = { ...this.state.formula };
    formula[e.target.name] = e.target.value;
    await this.setState({ formula });
    console.log(this.state.formula);
  };

  handleFormulaClick = async () => {
    let data = this.state.formula;

    await saveFormula(data);
    let formula = {
      firstDigit: "",
      secondDigit: "",
      thirdDigit: "",
      fourthDigit: "",
      fifthDigit: "",
    };
    await this.setState({ formula });
    await this.getFormulaData();
  };

  handlePrizeDelete = async (e) => {
    let originalData = await [...this.state.prizeData];
    await this.setState({ prizeData: [] });
    let id = { id: e._id };
    try {
      const del = await deletePrize(id);
    } catch (err) {
      await this.setState({ prizeData: originalData });
    }
  };

  handleSecretDelete = async (e) => {
    let originalData = await [...this.state.secretData];
    await this.setState({ secretData: [] });
    let id = { id: e._id };

    try {
      const del = await deleteSecret(id);
    } catch (err) {
      await this.setState({ secretData: originalData });
    }
  };

  handleFormulaDelete = async (e) => {
    let originalData = await [...this.state.formulaData];
    await this.setState({ formulaData: [] });
    let id = { id: e._id };

    try {
      const del = await deleteFormula(id);
    } catch (err) {
      await this.setState({ formulaData: originalData });
    }
  };
  prizeTable = () => {
    if (this.state.prizeData.length > 0) {
      return (
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">Date</th>
              <th scope="col">First Prize</th>
              <th scope="col">Second Prize Left</th>
              <th scope="col">Second Prize Down</th>
              <th scope="col">Second Prize Right</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.prizeData.map((data, index) => {
              const {
                date,
                firstPrize,
                secondPrizeLeft,
                secondPrizeDown,
                secondPrizeRight,
              } = data;
              return (
                <tr key={index}>
                  <td>{date}</td>
                  <td>{firstPrize}</td>
                  <td>{secondPrizeLeft}</td>
                  <td>{secondPrizeDown}</td>
                  <td>{secondPrizeRight}</td>

                  <td>
                    <button
                      type="button"
                      onClick={() => this.handlePrizeDelete(data)}
                      className="btn btn-danger btn-sm ml-1"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      );
    } else {
      return (
        <h2 style={{ textAlign: "center", color: "red" }}>No Data Found</h2>
      );
    }
  };
  secretNumberTable = () => {
    if (this.state.secretData.length > 0) {
      return (
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">Date</th>
              <th scope="col">Sun Secret Number</th>
              <th scope="col">Moon Secret Number</th>
              <th scope="col">Stars Secret Number</th>
              <th scope="col">Dark Secret Number</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.secretData.map((data, index) => {
              const {
                date,
                sunSecret,
                moonSecret,
                starSecret,
                darkSecret,
              } = data;
              return (
                <tr key={index}>
                  <td>{date}</td>
                  <td>{sunSecret}</td>
                  <td>{moonSecret}</td>
                  <td>{starSecret}</td>
                  <td>{darkSecret}</td>

                  <td>
                    <button
                      type="button"
                      onClick={() => this.handleSecretDelete(data)}
                      className="btn btn-danger btn-sm ml-1"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      );
    } else {
      return (
        <h2 style={{ textAlign: "center", color: "red" }}>No Data Found</h2>
      );
    }
  };

  xFormulaTable = () => {
    if (this.state.formulaData.length > 0) {
      return (
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">Date</th>
              <th scope="col">First Digit</th>
              <th scope="col">Second Digit</th>
              <th scope="col">Third Digit</th>
              <th scope="col">Forth Digit</th>
              <th scope="col">Fifth Digit</th>

              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.formulaData.map((data, index) => {
              const {
                date,
                firstDigit,
                secondDigit,
                thridDigit,
                fourthDigit,
                fifthDigit,
              } = data;
              return (
                <tr key={index}>
                  <td>{date}</td>
                  <td>{firstDigit}</td>
                  <td>{secondDigit}</td>
                  <td>{thridDigit}</td>
                  <td>{fourthDigit}</td>
                  <td>{fifthDigit}</td>

                  <td>
                    <button
                      type="button"
                      onClick={() => this.handleFormulaDelete(data)}
                      className="btn btn-danger btn-sm ml-1"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      );
    } else {
      return (
        <h2 style={{ textAlign: "center", color: "red" }}>No Data Found</h2>
      );
    }
  };
  render() {
    const {
      firstPrize,
      secondPrizeLeft,
      secondPrizeDown,
      secondPrizeRight,
      date,
    } = this.state.prize;
    const {
      sunSecret,
      moonSecret,
      starSecret,
      darkSecret,
      secretDate,
    } = this.state.secret;
    const {
      firstDigit,
      secondDigit,
      thirdDigit,
      fourthDigit,
      fifthDigit,
      formulaDate,
    } = this.state.formula;

    return (
      <div className="container">
        <br />
        <br />
        <div className="row">
          <div className="col d-flex justify-content-center align-items-center">
            <h1>Welocome to Dashboard</h1>
          </div>
        </div>
        <br />
        <br />
        <br />

        <div className="row">
          <div className="col">
            {/* first card here */}

            <div className="card">
              <div className="card-header bg-primary text-white">
                First and Second Prize
              </div>
              <div className="card-body">
                <div className="form-group">
                  <label htmlFor="firstPrize">First Prize Number</label>

                  <input
                    type="number"
                    className="form-control mt-2"
                    onChange={this.handlePrizeChange}
                    value={firstPrize}
                    id="firstPrize"
                    name="firstPrize"
                    aria-describedby="emailHelp"
                    placeholder="Enter First Prize Number"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="firstPrize" className="mt-2">
                    {" "}
                    Second Prize Number
                  </label>

                  <input
                    type="number"
                    className="form-control mt-2"
                    onChange={this.handlePrizeChange}
                    value={secondPrizeLeft}
                    name="secondPrizeLeft"
                    aria-describedby="emailHelp"
                    placeholder="Enter Left Number"
                  />
                  <input
                    type="number"
                    className="form-control mt-4"
                    onChange={this.handlePrizeChange}
                    name="secondPrizeDown"
                    value={secondPrizeDown}
                    aria-describedby="emailHelp"
                    placeholder="Enter Middle Number"
                  />
                  <input
                    type="number"
                    className="form-control mt-4"
                    onChange={this.handlePrizeChange}
                    name="secondPrizeRight"
                    value={secondPrizeRight}
                    aria-describedby="emailHelp"
                    placeholder="Enter Right Number"
                  />
                  <input
                    type="date"
                    className="form-control mt-4"
                    onChange={this.handlePrizeChange}
                    name="date"
                    value={date}
                    aria-describedby="emailHelp"
                    placeholder="Select Date"
                  />
                </div>
                <button
                  className="btn btn-primary mt-3"
                  style={{ float: "right" }}
                  onClick={this.handlePrizeClick}
                >
                  Submit
                </button>
              </div>
            </div>
            <br />

            {/* second card here */}

            <div className="card">
              <div className="card-header bg-primary text-white">
                Enter Secret Numbere Here
              </div>
              <div className="card-body">
                <div className="form-group">
                  <label htmlFor="firstPrize">
                    Enter Secret Numbere in these Boxes
                  </label>
                  <input
                    type="text"
                    className="form-control mt-2"
                    id="firstPrize"
                    name="sunSecret"
                    value={sunSecret}
                    onChange={this.handleSecretChange}
                    aria-describedby="emailHelp"
                    placeholder="SUN Secret Number Like 8"
                  />
                  <input
                    type="text"
                    className="form-control mt-4"
                    name="moonSecret"
                    value={moonSecret}
                    onChange={this.handleSecretChange}
                    aria-describedby="emailHelp"
                    placeholder="MOON Secret Number Like 7-2"
                  />
                  <input
                    type="text"
                    className="form-control mt-4"
                    name="starSecret"
                    value={starSecret}
                    onChange={this.handleSecretChange}
                    aria-describedby="emailHelp"
                    placeholder="STARS Secret Number Like 9-5-6"
                  />
                  <input
                    type="text"
                    className="form-control mt-4"
                    name="darkSecret"
                    value={darkSecret}
                    onChange={this.handleSecretChange}
                    aria-describedby="emailHelp"
                    placeholder="DARK Secret Number Like 0 "
                  />
                  <label htmlFor="firstPrize" style={{ marginTop: "10px" }}>
                    Forcast For
                  </label>
                  <input
                    type="date"
                    className="form-control mt-2"
                    name="secretDate"
                    value={secretDate}
                    onChange={this.handleSecretChange}
                    aria-describedby="emailHelp"
                    placeholder="X Formula 5th Digit "
                  />
                </div>

                <button
                  className="btn btn-primary mt-3"
                  style={{ float: "right" }}
                  onClick={this.handleSecretClick}
                >
                  Submit
                </button>
              </div>
            </div>
            <br />
            {/* third card here */}
            <div className="card">
              <div className="card-header bg-primary text-white">
                Enter X Formula Here
              </div>
              <div className="card-body">
                <div className="form-group">
                  <label htmlFor="firstDigit">
                    Enter X Formula in these Boxes
                  </label>

                  <input
                    type="number"
                    className="form-control mt-2"
                    id="firstDigit"
                    name="firstDigit"
                    value={firstDigit}
                    onChange={this.handleFormulaChange}
                    aria-describedby="emailHelp"
                    placeholder="X Formula First Digit"
                  />
                  <input
                    type="number"
                    className="form-control mt-4"
                    name="secondDigit"
                    value={secondDigit}
                    onChange={this.handleFormulaChange}
                    aria-describedby="emailHelp"
                    placeholder="X Formula 2nd Digit"
                  />
                  <input
                    type="text"
                    className="form-control mt-4"
                    name="thirdDigit"
                    value={thirdDigit}
                    onChange={this.handleFormulaChange}
                    aria-describedby="emailHelp"
                    placeholder="X Formula 3rd Digit Like 5-1"
                  />
                  <input
                    type="number"
                    className="form-control mt-4"
                    name="fourthDigit"
                    value={fourthDigit}
                    onChange={this.handleFormulaChange}
                    aria-describedby="emailHelp"
                    placeholder="X Formula 4th Digit "
                  />
                  <input
                    type="number"
                    name="fifthDigit"
                    value={fifthDigit}
                    onChange={this.handleFormulaChange}
                    className="form-control mt-4"
                    aria-describedby="emailHelp"
                    placeholder="X Formula 5th Digit "
                  />
                </div>

                <button
                  className="btn btn-primary mt-3"
                  style={{ float: "right" }}
                  onClick={this.handleFormulaClick}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>

        <br />
        <br />

        {/* prize table Card */}

        <div className="card">
          <div className="card-header bg-primary text-white">
            Prize Table Latest Number
          </div>
          <div className="card-body">
            <div className="table-responsive">{this.prizeTable()}</div>
          </div>
        </div>

        {/* secret number card */}
        <br />
        <br />
        <div className="card">
          <div className="card-header bg-primary text-white">
            Secret Number Table Latest Data
          </div>
          <div className="card-body">
            <div className="table-responsive">{this.secretNumberTable()}</div>
          </div>
        </div>

        {/* x formula card */}
        <br />
        <br />
        <div className="card">
          <div className="card-header bg-primary text-white">
            X Formula Table Latest Data
          </div>
          <div className="card-body">
            <div className="table-responsive">{this.xFormulaTable()}</div>
          </div>
        </div>
        <br />
        <br />
      </div>
    );
  }
}

export default Dashboard;
