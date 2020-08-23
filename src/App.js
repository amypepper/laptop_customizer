import React, { Component } from "react";

import "./App.css";
import Cart from "./Cart";
import OptionsList from "./OptionsList";

const USCurrencyFormat = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

class App extends Component {
  state = {
    selected: {
      Processor: {
        name: "17th Generation Intel Core HB (7 Core with donut spare)",
        cost: 700,
      },
      "Operating System": {
        name: "Ubuntu Linux 16.04",
        cost: 200,
      },
      "Video Card": {
        name: "Toyota Corolla 1.5v",
        cost: 1150.98,
      },
      Display: {
        name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
        cost: 1500,
      },
    },
  };

  updateFeature = (feature, newValue) => {
    // make a copy of the this.state.selected object
    const selected = Object.assign({}, this.state.selected);
    // grab the object inside state.selected's Processor/OS/VideoCard/Display
    // property and insert the newly selected object into its corresponding
    // category (so a Processor part gets put in the Processor property)
    selected[feature] = newValue;
    this.setState({
      selected,
    });
  };

  render() {
    console.log(this.props);
    return (
      <div className="App">
        <header>
          <h1>ELF Computing | Laptops</h1>
        </header>
        <main>
          <OptionsList
            // copy everything in state as a key-value pair on the props obj
            // so now I have this.props.selected
            {...this.state}
            {...this.props}
            USCurrencyFormat={USCurrencyFormat}
            updateFeature={this.updateFeature}
          />
          <Cart {...this.state} USCurrencyFormat={USCurrencyFormat} />
        </main>
      </div>
    );
  }
}

export default App;
