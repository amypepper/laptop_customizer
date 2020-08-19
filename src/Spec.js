import React, { Component } from "react";

import features from "./features";
import SpecParts from "./SpecParts";

class Spec extends Component {
  render() {
    return Object.keys(features).map((feature, idx) => {
      const featureHash = feature + "-" + idx;

      return (
        <fieldset className="feature" key={featureHash}>
          <legend className="feature__name">
            <h3>{feature}</h3>
          </legend>
          <SpecParts
            currentFeature={feature}
            currentParts={features[feature]}
            selectedInState={this.props.selectedInState}
            usCurrencyFormat={this.props.usCurrencyFormat}
            updateFeature={this.props.updateFeature}
          />
        </fieldset>
      );
    });
  }
}

export default Spec;
