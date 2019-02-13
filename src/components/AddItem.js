import React, {PureComponent} from "react";
import {ElementType} from "../constants";

class AddItem extends PureComponent {
  render() {
    const {type} = this.props;
    const {STAGE, STEP} = ElementType;
    const isStage = type === STAGE;
    return (
      <footer className="add-item">
        <h2 className="visually-hidden">Добавление {isStage ? `${STAGE}а` : `${STEP}а`}</h2>
        <button className="add-item__button" type="button"><span>Добавить {isStage ? STAGE : STEP}</span></button>
      </footer>
    )
  }
}

export default AddItem;
