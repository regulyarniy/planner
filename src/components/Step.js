import React, {Component} from "react";
import Store from "../Store";
import {withRouter} from "react-router-dom";
import {ElementType} from "../constants";

class Step extends Component {
  get elements() {
    const {elements} = this.context;
    const {items, id, history} = this.props;
    const addButton = (
      <button
        key={`add`}
        title="Добавить элемент"
        className="element element--add step__element"
        onClick={() => history.push(`/add/${ElementType.ITEM_ROUTE}/${id}`)}
      />
    );
    const listItems = items.reduce((elementsList, elementKey) => elementsList.concat(
      [
        <div className="step__item" key={elementKey}>
          <button
            className="element step__element"
            type="button"
            title={elements[elementKey].name}
            onClick={() => history.push(`/edit/${ElementType.ITEM_ROUTE}/${elementKey}`)}
          >
            <span>{elements[elementKey].name}</span>
          </button>
          <button
            className="step__delete-element"
            title="Удалить"
            onClick={() => this.context.deleteItem(id, elementKey)}
          />
        </div>
      ]
    ), []);
    switch (items.length) {
      case 0:
        return [addButton];
      case 1:
      case 2:
        return [...listItems, addButton];
      case 3:
        return [...listItems];
      default:
        return null;
    }

  }

  render() {
    const {name, time, id, parentID} = this.props;
    return (
      <section className="step stage__step">
        <h3 className="step__title" title={name}>{name}</h3>
        <button
          className="step__delete"
          title="Удалить шаг"
          onClick={() => this.context.deleteStep(parentID, id)}
        />
        <p className="step__time">
          <span>Время</span>
          <b>{time}</b>
        </p>
        {this.elements}
      </section>
    )
  }
}

export default withRouter(Step);

Step.contextType = Store; // set context type after export because issue https://github.com/facebook/react/issues/14061
