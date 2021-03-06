import React, { Component } from "react";

import features from './features';
import Spec from "./Spec";

class OptionsList extends Component {
  render() {
    
    return (
      <form className="main__form">
        <h2>Customize your laptop</h2>
        {Object.keys(features).map((feature, idx) => (
          <Spec {...this.props} feature={feature} idx={idx} key={idx} />
        ))}
      </form>
    );
  }
}

export default OptionsList;
