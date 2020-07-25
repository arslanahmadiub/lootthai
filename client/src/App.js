import React, { Component } from "react";
import logo from "./logo.svg";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import About from "./components/About";
import Footer from "./components/Footer";
import {
  Route,
  Switch,
  BrowserRouter as Router,
  Redirect,
} from "react-router-dom";
import Home from "./components/Home";
import Play from "./components/Play";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Result from "./components/Result";
import Register from "./components/Register";
import jwtDecode from "jwt-decode";

class App extends Component {
  state = {};

  async componentDidMount() {
    const jwt = await localStorage.getItem("token");
    console.log(localStorage.length);
    try {
      const user = jwtDecode(jwt);

      await this.setState({ user });
      console.log(this.state.user);
    } catch (err) {}
  }

  render() {
    const { user } = this.state;
    return (
      <React.Fragment>
        <Router>
          <Navbar user={this.state.user} />
          <Slider />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/play" component={Play} />
            <Route exact path="/admin" component={Login} />
            <Route
              exact
              path="/dashboard"
              render={(props) => {
                if (localStorage.length < 1) {
                  return <Redirect to="/admin" />;
                }
                return <Dashboard {...props} />;
              }}
            />
            <Route exact path="/result" component={Result} />
            <Route exact path="/signup" component={Register} />
          </Switch>
          <Footer />
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
