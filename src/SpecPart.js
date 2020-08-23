import React from "react";

import slugify from "slugify";

export default class SpecPart extends React.Component {
  render() {
    const { selected, USCurrencyFormat, feature, item } = this.props;
    const itemHash = slugify(JSON.stringify(item));

    return (
      <div key={itemHash} className="feature__item">
        <input
          type="radio"
          id={itemHash}
          className="feature__option"
          // assign all radio buttons in a spec category the `name` attr. of that spec, so you can only select one at a time
          name={slugify(feature)}
          checked={item.name === selected[feature].name}
          onChange={(e) => this.props.updateFeature(feature, item)}
        />
        <label htmlFor={itemHash} className="feature__label">
          {item.name} ({USCurrencyFormat.format(item.cost)})
        </label>
      </div>
    );
  }
}
