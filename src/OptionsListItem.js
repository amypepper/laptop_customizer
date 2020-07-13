import React, { Component } from "react";
import slugify from "slugify";

class OptionsListItem extends Component {
  features = () => {
    Object.keys(this.props.features).map((feature, idx) => {
      const featureHash = feature + "-" + idx;

      const options = this.props.features[feature].map((item) => {
        const itemHash = slugify(JSON.stringify(item));

        return (
          <div key={itemHash} className="feature__item">
            <input
              type="radio"
              id={itemHash}
              className="feature__option"
              name={slugify(feature)}
              checked={item.name === this.props.selectedInState[feature].name}
              onChange={(e) => this.props.updateFeature(e, feature, item)}
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
  };

  render() {
    return <div>{this.features}</div>;
  }
}

export default OptionsListItem;
