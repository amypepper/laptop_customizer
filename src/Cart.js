import React, { Component } from "react";

import CartItem from "./CartItem";
import Total from "./Total";

class Cart extends Component {
  render() {
    const { selected } = this.props;
    return (
      <section className="main__summary">
        <h2>Your cart</h2>
        {Object.keys(selected).map((feature, idx) => (
          <CartItem {...this.props} feature={feature} idx={idx} key={idx} />
        ))}

        <Total {...this.props} />
      </section>
    );
  }
}

export default Cart;
