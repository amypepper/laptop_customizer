import React from "react";

import slugify from "slugify";

class SpecParts extends React.Component {
  render() {
    const currentFeature = this.props.currentFeature;
    const [currentParts] = this.props;
    const item = currentParts[0];
    console.log("item: ", item);

    const itemHash = slugify(JSON.stringify(item.name));
    console.log("this is itemHash: ", itemHash);

    return (
      <div key={itemHash} className="feature__item">
        <input
          type="radio"
          id={itemHash}
          className="feature__option"
          name={slugify(item.name)}
          checked={
            item.name === this.props.selectedInState[currentFeature].name
          }
          onChange={(e) => this.props.updateFeature(currentFeature, item)}
        />
        <label htmlFor={itemHash} className="feature__label">
          {item.name} ({this.props.usCurrencyFormat.format(item.cost)})
        </label>
      </div>
    );
  }
}

export default SpecParts;
