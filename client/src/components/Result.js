import React, { Component } from "react";
import Looto from "./images/lotoImages.png";
import Looto2 from "./images/loto2.jpg";
import { getPrize } from "../services/prize";

class Result extends Component {
  state = {
    prizeData: [],
    year: "",
    filterDataByYear: [],
    finalData: [],
    slectorYear: [],
  };

  async componentDidMount() {
    await this.getPrizeData();
    await this.getYear();
    await this.filterPrizeData();
    await this.finalFilter();
    await this.yearSelector();
  }

  getPrizeData = async () => {
    let data = await getPrize();

    await this.setState({ prizeData: data });
  };

  filterPrizeData = async () => {
    let year = this.state.year;
    let data = this.state.prizeData;
    let filterData = await data.filter(function (item) {
      return item.date.includes(year);
    });
    await this.setState({ filterDataByYear: filterData });
  };

  finalFilter = async () => {
    let data = this.state.filterDataByYear;
    let newData = await data.map((item, index) => {
      return {
        date: item.date,
        down: item.secondPrizeDown,
        first: item.firstPrize.substring(3, 6),
      };
    });
    this.setState({ finalData: newData });
  };

  getYear = () => {
    let today = new Date();
    let year = today.getFullYear();
    this.setState({ year });
  };

  yearSelector = () => {
    let today = new Date();
    let firstYear = 2010;
    let year = today.getFullYear();
    let length = year - firstYear + 1;
    let yearArry = [];
    for (let i = 0; i < length; i++) {
      let list = year - i;
      yearArry.push(list);
    }
    this.setState({ slectorYear: yearArry });
  };
  handleYearChange = async (e) => {
    let value = e.target.value;
    if (value.length > 0) {
      await this.setState({ year: value });
    } else {
      this.getYear();
    }
    await this.filterPrizeData();
    await this.finalFilter();
  };

  getResultTable = () => {
    if (this.state.finalData.length > 0) {
      return (
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">Date</th>
              <th scope="col">Result</th>
              <th scope="col">Down</th>
            </tr>
          </thead>
          <tbody>
            {this.state.finalData.map((data, index) => {
              const { date, down, first } = data;
              return (
                <tr key={index}>
                  <th scope="row">{date}</th>
                  <td>{first}</td>
                  <td>{down}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      );
    } else {
      return (
        <h1 style={{ padding: "30px", textAlign: "center" }}>No Data Found</h1>
      );
    }
  };

  render() {
    return (
      <React.Fragment>
        <div className="container" id="about">
          <div className="row">
            <div className="col-9 mt-5">
              <div className="row">
                <div className="col-1"></div>
                <div className="col-3">
                  <h5>
                    <b>Select Year</b>
                  </h5>
                </div>
                <div className="col-1"></div>
                <div className="col-5">
                  {/* selector */}
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    onChange={this.handleYearChange}
                  >
                    <option value="">Select Year</option>
                    {this.state.slectorYear.map((item, index) => {
                      return (
                        <option key={index} value={item}>
                          {item}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className="col-2"></div>
              </div>
              <br />
              <div className="row">
                <div className="col ">
                  <div className="card">
                    <div className="card-header bg-primary text-white">
                      Result By Year
                    </div>
                    <div className="card-body" style={{ padding: "0px" }}>
                      <div className="table-responsive">
                        {/* Here is table */}
                        {this.getResultTable()}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-3 justify-content-center "
              style={{ marginTop: "150px" }}
            >
              <img src={Looto} className="d-block w-100" alt="..." />
              <br />
              <br />
              <br />
              <img src={Looto2} className="d-block w-100" alt="..." />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Result;
