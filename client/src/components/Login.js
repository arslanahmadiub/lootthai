import React, { Component } from "react";
import { Link } from "react-router-dom";
import { login } from "../services/auth";
import { getUser } from "../services/auth";

class Login extends Component {
  state = {
    data: {
      userEmail: "",
      userPassword: "",
    },
    user: [],
    error: "",
    hidden: "hidden",
  };

  componentDidMount() {
    this.getUsers();
  }

  getUsers = async () => {
    let data = await getUser();
    await this.setState({ user: data });
  };

  handleChange = async (e) => {
    const login = { ...this.state.data };
    login[e.target.name] = e.target.value;
    await this.setState({ data: login });
  };
  doSubmit = async () => {
    const { userEmail, userPassword } = this.state.data;

    try {
      const { data: jwt } = await login(userEmail, userPassword);
      localStorage.setItem("token", jwt);

      window.location = "/dashboard";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        this.setState({ error: ex.response.data, hidden: "" });
      }
    }
  };

  showLink = () => {
    if (this.state.user.length < 1) {
      return (
        <Link to="/signup" style={{ float: "left" }}>
          Not Have Account Click Here?
        </Link>
      );
    }
  };

  render() {
    return (
      <div className="container">
        <br />
        <br />
        <div className="row">
          <div className="col d-flex justify-content-center align-items-center">
            <h1>Only Admin can login here</h1>
          </div>
        </div>
        <br />
        <br />
        <div
          className="alert alert-danger"
          role="alert"
          hidden={this.state.hidden}
        >
          {this.state.error}
        </div>
        <br />

        <div className="row">
          <div className="col-3"></div>

          <div className="col-6">
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>

              <input
                type="email"
                className="form-control mt-2"
                id="exampleInputEmail1"
                name="userEmail"
                onChange={this.handleChange}
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
            </div>

            <div className="form-group mt-4">
              <label htmlFor="exampleInputPassword1">Password</label>
              <br />

              <input
                type="password"
                className="form-control mt-2"
                id="exampleInputPassword1"
                name="userPassword"
                onChange={this.handleChange}
                placeholder="Password"
              />
            </div>
            <div className="form-check"></div>

            <button
              className="btn btn-primary"
              style={{ float: "right" }}
              onClick={this.doSubmit}
            >
              Login
            </button>
            {this.showLink()}
            <br />
            <br />
          </div>

          <div className="col-3"></div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    );
  }
}

export default Login;
