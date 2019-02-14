import React, {PureComponent} from "react";
import Store from "../Store";

class StageInfo extends PureComponent {
  get elements() {
    const {steps} = this.context;
    const {items} = this.props;
    return items.reduce((stepsList, stepKey) => stepsList.concat(
      [
        <button
          key={stepKey}
          className="element stage__element"
          type="button"
          title={steps[stepKey].name}
        >
          <span>{steps[stepKey].name}</span>
        </button>
      ]
    ), [])
  }
  render() {
    const {name, time} = this.props;
    return (
      <header className="stage__info">
        <button className="stage__collapse stage__collapse--closed" type="button" title="Свернуть\Развернуть"/>
        <div className="stage__row">
          <h2 className="stage__title" title={name}>{name}</h2>
          <p className="stage__time">
            <span>Время</span>
            <b>{time}</b>
          </p>
          {this.elements}
        </div>
      </header>
    )
  }
}

StageInfo.contextType = Store;

export default StageInfo;
