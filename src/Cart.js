import React, { Component } from "react";

import CartItem from "./CartItem";
import Total from "./Total";

class Cart extends Component {
  render() {
    return (
      <section className="main__summary">
        <h2>Your cart</h2>
        <CartItem
          usCurrencyFormat={this.props.usCurrencyFormat}
          selectedInState={this.props.selectedInState}
        />
        <Total
          usCurrencyFormat={this.props.usCurrencyFormat}
          selectedInState={this.props.selectedInState}
        />
      </section>
    );
  }
}

export default Cart;
