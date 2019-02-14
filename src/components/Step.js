import React, {PureComponent} from "react";
import Store from "../Store";

class Step extends PureComponent {
  get elements() {
    const {elements} = this.context;
    const {items} = this.props;
    return items.reduce((elementsList, elementKey) => elementsList.concat(
      [
        <button
          key={elementKey}
          className="element step__element"
          type="button"
          title={elements[elementKey].name}
        >
          <span>{elements[elementKey].name}</span>
        </button>
      ]
    ), [])
  }

  render() {
    const {name, time} = this.props;
    return (
      <section className="step stage__step">
        <h3 className="step__title" title={name}>{name}</h3>
        <p className="step__time">
          <span>Время</span>
          <b>{time}</b>
        </p>
        {this.elements}
      </section>
    )
  }
}

Step.contextType = Store;

export default Step;
