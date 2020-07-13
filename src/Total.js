import React, { Component } from "react";

class Total extends Component {
  render() {
    const total = Object.keys(this.props.selectedInState).reduce(
      (acc, curr) => acc + this.props.selectedInState[curr].cost,
      0
    );
    return (
      <div className="summary__total">
        <div className="summary__total__label">Total</div>
        <div className="summary__total__value">
          {this.props.usCurrencyFormat.format(total)}
        </div>
      </div>
    );
  }
}

export default Total;
