import React, { Component } from "react";

import Spec from "./Spec";

class OptionsList extends Component {
  render() {
    return (
      <form className="main__form">
        <h2>Customize your laptop</h2>
        <Spec
          usCurrencyFormat={this.props.usCurrencyFormat}
          updateFeature={this.props.updateFeature}
          selectedInState={this.props.selectedInState}
        />
      </form>
    );
  }
}

export default OptionsList;
