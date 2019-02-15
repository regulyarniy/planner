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
    const {name, time, isCollapsed, onCollapse, id} = this.props;
    return (
      <header className="stage__info">
        <button
          className={`stage__collapse ${isCollapsed ? `stage__collapse--closed` : ``}`}
          type="button"
          title="Свернуть\Развернуть"
          onClick={onCollapse}
        />
        <button
          className="stage__delete"
          title="Удалить этап"
          onClick={() => this.context.deleteStage(id)}
        />
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
