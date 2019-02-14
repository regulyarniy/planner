import React, {PureComponent} from "react";
import {ElementType} from "../constants";
import {withRouter} from "react-router-dom";

class AddItem extends PureComponent {
  render() {
    const {type, history} = this.props;
    const {STAGE, STEP, STAGE__ROUTE, STEP_ROUTE} = ElementType;
    const isStage = type === STAGE;
    const onAdd = isStage ? () => history.push(`/add/${STAGE__ROUTE}`) : () => history.push(`/add/${STEP_ROUTE}`);
    return (
      <footer className="add-item">
        <h2 className="visually-hidden">Добавление {isStage ? `${STAGE}а` : `${STEP}а`}</h2>
        <button className="add-item__button" type="button" onClick={onAdd}><span>Добавить {isStage ? STAGE : STEP}</span></button>
      </footer>
    )
  }
}

export default withRouter(AddItem);
