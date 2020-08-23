import React, { Component } from "react";
import slugify from "slugify";

class OptionsListItem extends Component {
  render() {
    // create an array of the names of the different specs ('Processor', 'Display', etc.)
    return Object.keys(this.props.features).map((feature, idx) => {
      // create a unique identifier for each spec (e.g, 'Processor-0')
      const featureHash = feature + "-" + idx;

      const options = this.props.features[feature].map((item) => {
        const itemHash = slugify(JSON.stringify(item));

        return (
          <div key={itemHash} className="feature__item">
            <input
              type="radio"
              id={itemHash}
              className="feature__option"
              // assign all radio buttons in a spec category the `name` attr. of that spec, so you can only select one at a time
              name={slugify(feature)}
              checked={item.name === this.props.selectedInState[feature].name}
              onChange={(e) => this.props.updateFeature(feature, item)}
            />
            <label htmlFor={itemHash} className="feature__label">
              {item.name} ({this.props.usCurrencyFormat.format(item.cost)})
            </label>
          </div>
        );
      });

      return (
        <fieldset className="feature" key={featureHash}>
          <legend className="feature__name">
            <h3>{feature}</h3>
          </legend>
          {options}
        </fieldset>
      );
    });
  }
}

export default OptionsListItem;
