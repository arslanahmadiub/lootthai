import React, { Component } from "react";

import { getUser } from "../services/auth";

import { saveUser } from "../services/signup";

class Register extends Component {
  state = {
    userEmail: "",
    userPassword: "",
    confirmPassword: "",
    hidden: "hidden",
    passHidden: "hidden",
    user: [],
  };
  componentDidMount() {
    this.getUsers();
  }

  getUsers = async () => {
    let data = await getUser();
    await this.setState({ user: data });
  };
  handleChange = async (e) => {
    await this.setState({ [e.target.name]: e.target.value });
  };

  onRegister = async () => {
    const { userEmail, userPassword, confirmPassword } = this.state;
    if (
      userPassword.length < 1 ||
      userEmail.length < 1 ||
      confirmPassword.length < 1
    ) {
      this.setState({ hidden: "" });
    } else {
      this.setState({ hidden: "hidden" });
    }
    if (userPassword !== confirmPassword) {
      this.setState({ passHidden: "" });
    } else {
      this.setState({ passHidden: "hidden" });
      let user = {
        email: userEmail,
        password: userPassword,
      };

      await saveUser(user);
      this.setState({ userEmail: "", userPassword: "", confirmPassword: "" });
    }
  };

  showLink = () => {
    if (this.state.user.length < 1) {
      return (
        <div className="row">
          <div className="col-3"></div>

          <div className="col-6">
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>

              <input
                type="email"
                name="userEmail"
                onChange={this.handleChange}
                className="form-control mt-2"
                id="exampleInputEmail1"
                value={this.state.userEmail}
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
            </div>

            <div className="form-group mt-4">
              <label htmlFor="password">Password</label>
              <br />

              <input
                type="password"
                name="userPassword"
                onChange={this.handleChange}
                value={this.state.userPassword}
                className="form-control mt-2"
                id="password"
                placeholder="Password"
              />
            </div>
            <div className="form-group mt-4">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <br />

              <input
                type="password"
                className="form-control mt-2"
                id="confirmPassword"
                onChange={this.handleChange}
                value={this.state.confirmPassword}
                name="confirmPassword"
                placeholder="Confirm Password"
              />
            </div>
            <div className="form-check"></div>

            <button
              className="btn btn-primary"
              style={{ float: "right" }}
              onClick={this.onRegister}
            >
              Register
            </button>
          </div>
          <div className="col-3"></div>
        </div>
      );
    }
  };

  showMessage = () => {
    if (this.state.user.length < 1) {
      return (
        <div className="row">
          <div className="col d-flex justify-content-center align-items-center">
            <h1>One time sign up screen</h1>
          </div>
        </div>
      );
    } else {
      return (
        <div className="row">
          <div className="col d-flex justify-content-center align-items-center">
            <h1>One User Already Exist</h1>
          </div>
        </div>
      );
    }
  };

  render() {
    return (
      <div className="container">
        <br />
        <br />
        {this.showMessage()}
        <br />
        <br />
        <br />
        <div
          className="alert alert-danger"
          role="alert"
          hidden={this.state.hidden}
        >
          Please Fill All fileds
        </div>
        <div
          className="alert alert-danger"
          role="alert"
          hidden={this.state.passHidden}
        >
          Please Enter same password on both field
        </div>
        {this.showLink()}
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    );
  }
}

export default Register;
