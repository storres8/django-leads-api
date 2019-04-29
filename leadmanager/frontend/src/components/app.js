import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import Header from "./layout/Header";
import Dashboard from "./leads /Dashboard";
import { Provider } from "react-redux";
import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import store from "../store";
import Alerts from "../components/layout/Alerts";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import Login from "../components/accounts/Login";
import Register from "../components/accounts/Register";
import PrivateRoute from "./common/PrivateRoute";
import { loadUser } from "../actions/auth";

// Alert Optoins
const alertOptions = {
  timeout: 3000,
  position: "top center"
};

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    return (
      <Provider store={store}>
        <AlertProvider template={AlertTemplate} {...alertOptions}>
          <Router>
            <Header />
            <Alerts />
            <Switch>
              <PrivateRoute exact path="/" component={Dashboard} />
              <div className="container">
                <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} />
              </div>
            </Switch>
          </Router>
        </AlertProvider>
      </Provider>
    );
  }
}

export default App;

ReactDOM.render(<App />, document.getElementById("app"));
