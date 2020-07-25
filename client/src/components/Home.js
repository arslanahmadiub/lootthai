import React, { Component } from "react";
import winners from "./images/winner.gif";
import left1 from "./images/leftimage3.jpg";
import left2 from "./images/leftimage4.jpg";
import left3 from "./images/leftimage5.jpg";

import { getPrize } from "../services/prize";
import { getSecret } from "../services/secret";
import { getFormula } from "../services/formula";

class Home extends Component {
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
    let date = finalData.date;
    let year = date.substring(0, 4);
    let month = date.substring(5, 7);
    let day = date.substring(8, 10);

    let mergeDate = `${day}-${month}-${year}`;
    if (data.length > 0) {
      const prizeData = {
        firstPrize: finalData.firstPrize,
        secondPrizeLeft: finalData.secondPrizeLeft,
        secondPrizeDown: finalData.secondPrizeDown,
        secondPrizeRight: finalData.secondPrizeRight,
        date: mergeDate,
      };
      await this.setState({ prize: prizeData });
    }
  };

  getSecretData = async () => {
    let data = await getSecret();
    let length = data.length;
    let finalData = data[length - 1];
    let date = finalData.date;
    let year = date.substring(0, 4);
    let month = date.substring(5, 7);
    let day = date.substring(8, 10);

    let mergeDate = `${day}-${month}-${year}`;

    if (data.length > 0) {
      const secretFinal = {
        sunSecret: finalData.sunSecret,
        moonSecret: finalData.moonSecret,
        starSecret: finalData.starSecret,
        darkSecret: finalData.darkSecret,
        secretDate: mergeDate,
      };
      this.setState({ secret: secretFinal });
    }
  };

  getFormulaData = async () => {
    let data = await getFormula();
    let length = data.length;
    let finalData = data[length - 1];

    if (data.length > 0) {
      const secretFormula = {
        firstDigit: finalData.firstDigit,
        secondDigit: finalData.secondDigit,
        thirdDigit: finalData.thirdDigit,
        fourthDigit: finalData.fourthDigit,
        fifthDigit: finalData.fifthDigit,
      };
      await this.setState({ formula: secretFormula });
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
    } = this.state.formula;

    return (
      <div className="container" id="home">
        <div className="row">
          {/* 1st column */}
          <div className="col-8 mt-3">
            {/* image row */}
            <div className="row">
              <div className="col d-flex justify-content-center">
                <img src={winners} alt="..." style={{ width: "90%" }} />
              </div>
            </div>
            <br />
            {/* result row */}
            <div className="row">
              <div className="col">
                {/* result table */}
                <div className="table-responsive">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <td>
                          <h5 style={{ color: "red" }}>
                            <b>Date</b>
                          </h5>
                        </td>
                        <td colSpan="2">
                          <h5 style={{ textAlign: "center", color: "blue" }}>
                            {date}
                          </h5>
                        </td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <h5 style={{ color: "red" }}>
                            <b>First Prize</b>
                          </h5>
                        </td>
                        <td colSpan="2">
                          <h5 style={{ textAlign: "center", color: "blue" }}>
                            {firstPrize}
                          </h5>
                        </td>
                      </tr>
                      <tr style={{ textAlign: "center" }}>
                        <td colSpan="3">
                          <h5 style={{ color: "red" }}>2nd Prize = 2 Prizes</h5>
                        </td>
                      </tr>
                      <tr style={{ textAlign: "center" }}>
                        <td width="33.33%">
                          <h5 style={{ color: "red" }}>
                            <b>{secondPrizeLeft}</b>
                          </h5>
                        </td>
                        <td width="33.33%">
                          <h5 style={{ color: "blue" }}>
                            <b>{secondPrizeDown}</b>
                          </h5>
                        </td>
                        <td>
                          <h5 style={{ color: "red" }}>
                            <b>{secondPrizeRight}</b>
                          </h5>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <br />
            {/* secret */}
            <div className="row">
              <div className="col">
                {/* secretTable */}
                <div className="table-responsive">
                  <table className="table table-bordered">
                    <thead>
                      <tr style={{ textAlign: "center" }}>
                        <td colSpan="2">
                          <h3 style={{ color: "red" }}>
                            <b>Secret Number</b>
                          </h3>
                        </td>
                      </tr>
                      <tr>
                        <td width="33.33%">
                          <h5 style={{ color: "red" }}>
                            <b>Forcast For</b>
                          </h5>
                        </td>
                        <td>
                          <h5 style={{ color: "red" }}>{secretDate}</h5>
                        </td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <h5 style={{ color: "blue" }}>
                            <b>Sun</b>
                          </h5>
                        </td>
                        <td style={{ color: "blue" }}>
                          <h5>{sunSecret}</h5>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h5 style={{ color: "red" }}>
                            <b>Moon</b>
                          </h5>
                        </td>
                        <td style={{ color: "red" }}>
                          <h5>{moonSecret}</h5>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h5 style={{ color: "blue" }}>
                            <b>Stars</b>
                          </h5>
                        </td>
                        <td>
                          <h5 style={{ color: "blue" }}>{starSecret}</h5>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h5 style={{ color: "red" }}>
                            <b>Dark</b>
                          </h5>
                        </td>
                        <td>
                          <h5 style={{ color: "red" }}>{darkSecret}</h5>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col">
                {/* xFOrmula */}
                <div className="table-responsive">
                  <table className="table table-bordered">
                    <thead>
                      <tr style={{ textAlign: "center" }}>
                        <td colSpan="3">
                          <h3 style={{ color: "red" }}>
                            <b>X-Formula</b>
                          </h3>
                        </td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td
                          style={{
                            background: "blue",
                            textAlign: "center",
                            color: "white",
                          }}
                        >
                          <h5>
                            <b>{firstDigit}</b>
                          </h5>
                        </td>
                        <td
                          style={{
                            background: "red",
                            textAlign: "center",
                            color: "white",
                          }}
                        ></td>
                        <td
                          style={{
                            background: "blue",
                            textAlign: "center",
                            color: "white",
                          }}
                        >
                          <h5>
                            <b>{secondDigit}</b>
                          </h5>
                        </td>
                      </tr>

                      <tr>
                        <td
                          style={{
                            background: "red",
                            textAlign: "center",
                            color: "white",
                          }}
                        ></td>
                        <td
                          style={{
                            background: "blue",
                            textAlign: "center",
                            color: "white",
                          }}
                        >
                          <h5>
                            <b>{thirdDigit}</b>
                          </h5>
                        </td>

                        <td
                          style={{
                            background: "red",
                            textAlign: "center",
                            color: "white",
                          }}
                        ></td>
                      </tr>
                      <tr>
                        <td
                          style={{
                            background: "blue",
                            textAlign: "center",
                            color: "white",
                          }}
                        >
                          <h5>
                            <b>{fourthDigit}</b>
                          </h5>
                        </td>
                        <td
                          style={{
                            background: "red",
                            textAlign: "center",
                            color: "white",
                          }}
                        ></td>
                        <td
                          style={{
                            background: "blue",
                            textAlign: "center",
                            color: "white",
                          }}
                        >
                          <h5>
                            <b>{fifthDigit}</b>
                          </h5>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {/* 2nd column */}

          <div className="col-4 mt-5 text-center">
            <div className="row" style={{ marginTop: "80px" }}>
              <div className="col">
                <img src={left1} alt="..." style={{ width: "90%" }} />
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col">
                <img src={left2} alt="..." style={{ width: "90%" }} />
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col">
                <img src={left3} alt="..." style={{ width: "90%" }} />
              </div>
            </div>
            <br />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
