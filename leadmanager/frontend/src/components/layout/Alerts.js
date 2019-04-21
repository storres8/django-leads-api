import React, { Component, Fragment } from "react";
import { withAlert } from "react-alert";

class Alerts extends Component {
  render() {
    const { alert } = this.props;
    return (
      <Fragment>
        <button
          onClick={() => {
            alert.show("Oh look, an alert!");
          }}
        >
          Show Alert
        </button>
      </Fragment>
    );
  }
}

export default withAlert()(Alerts);
