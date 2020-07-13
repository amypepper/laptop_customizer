import React, { Component } from "react";

class CartItem extends Component {
  render() {
    const summary = Object.keys(this.props.selectedInState).map(
      (feature, idx) => {
        const featureHash = feature + "-" + idx;
        const selectedOption = this.props.selectedInState[feature];

        return (
          <div className="summary__option" key={featureHash}>
            <div className="summary__option__label">{feature} </div>
            <div className="summary__option__value">{selectedOption.name}</div>
            <div className="summary__option__cost">
              {this.props.usCurrencyFormat.format(selectedOption.cost)}
            </div>
          </div>
        );
      }
    );
    return summary.map((selectedFeature) => <div>{selectedFeature}</div>);
  }
}

export default CartItem;

// Object.keys(this.state.selected).map((feature, idx) => {
//   const featureHash = feature + '-' + idx;
//   const selectedOption = this.state.selected[feature];

//   return (
//     <div className="summary__option" key={featureHash}>
//       <div className="summary__option__label">{feature} </div>
//       <div className="summary__option__value">{selectedOption.name}</div>
//       <div className="summary__option__cost">
//         {USCurrencyFormat.format(selectedOption.cost)}
//       </div>
//     </div>
//   );
// });
