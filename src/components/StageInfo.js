import React, {PureComponent} from "react";
import Store from "../Store";
import {ElementType} from "../constants";
import {withRouter} from "react-router-dom";

class StageInfo extends PureComponent {
  get elements() {
    const {steps} = this.context;
    const {items, history} = this.props;
    return items.reduce((stepsList, stepKey) => stepsList.concat(
      [
        <button
          key={stepKey}
          className="element stage__element"
          type="button"
          title={steps[stepKey].name}
          onClick={() => history.push(`/edit/${ElementType.STEP_ROUTE}/${stepKey}`)}
        >
          <span>{steps[stepKey].name}</span>
        </button>
      ]
    ), [])
  }

  render() {
    const {name, time, isCollapsed, onCollapse, id, history} = this.props;
    return (
      <header className="stage__info">
        <button
          className={`stage__collapse ${isCollapsed ? `stage__collapse--closed` : ``}`}
          type="button"
          title="Свернуть\Развернуть"
          onClick={onCollapse}
        />
        <button
          className="stage__edit"
          title="Редактировать этап"
          onClick={() => history.push(`/edit/${ElementType.STAGE__ROUTE}/${id}`)}
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

export default withRouter(StageInfo);

StageInfo.contextType = Store; // set context type after export because issue https://github.com/facebook/react/issues/14061
