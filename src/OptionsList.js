import React, { Component } from "react";

import OptionsListItem from "./OptionsListItem";

class OptionsList extends Component {
  render() {
    return (
      <form className="main__form">
        <h2>Customize your laptop</h2>
        <OptionsListItem
          features={this.props.features}
          usCurrencyFormat={this.props.usCurrencyFormat}
          updateFeature={this.props.updateFeature}
          selectedInState={this.props.selectedInState}
        />
      </form>
    );
  }
}

export default OptionsList;
