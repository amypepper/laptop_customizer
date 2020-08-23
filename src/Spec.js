import React, { Component } from "react";

import features from './features'
import SpecPart from "./SpecPart";

class Spec extends Component {
  render() {
    const { feature, idx } = this.props;
    const featureHash = feature + "-" + idx;

    const options = features[feature].map((item, i) => (
      <SpecPart {...this.props} item={item} key={i} />
    ));

    return (
      <fieldset className="feature" key={featureHash}>
        <legend className="feature__name">
          <h3>{feature}</h3>
        </legend>
        {options}
      </fieldset>
    );
  }
}

export default Spec;
