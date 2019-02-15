import React, {PureComponent} from "react";
import {ElementType} from "../constants";
import Store from "../Store";

class Popup extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      name: ``,
      employee: ``,
      time: ``
    };
    this.isAdd = this.props.match.url.indexOf(`add`) !== -1;
    this.handleClose = this.handleClose.bind(this);
  }

  get type() {
    const {STAGE__ROUTE, STEP_ROUTE, ITEM_ROUTE, ITEM, STAGE, STEP} = ElementType;
    switch (this.props.match.params.type) {
      case STAGE__ROUTE:
        return STAGE;
      case STEP_ROUTE:
        return STEP;
      case ITEM_ROUTE:
        return ITEM;
      default:
        return null;
    }
  }

  componentDidMount() {
    if (!this.isAdd) {
      const getEditingObject = () => {
        const {STAGE__ROUTE, STEP_ROUTE, ITEM_ROUTE} = ElementType;
        switch (this.props.match.params.type) {
          case STAGE__ROUTE:
            return this.context.stages[this.props.match.params.parentKey];
          case STEP_ROUTE:
            return this.context.steps[this.props.match.params.parentKey];
          case ITEM_ROUTE:
            return this.context.elements[this.props.match.params.parentKey];
        }
      };
      const editingObject = getEditingObject();
      this.setState({
        name: editingObject.name,
        employee: editingObject.employee,
        time: editingObject.time
      });
    }
  }

  render() {
    const {name, employee, time} = this.state;
    const action = this.isAdd ? `Создать` : `Редактировать`;

    return (
      <section className="popup">
        <h2 className="visually-hidden">Всплывающее окно</h2>
        <div className="popup__overlay" onClick={this.handleClose}/>
        <form
          className="popup__form"
          onSubmit={this.handleSubmit.bind(this)}
        >
          <div className="popup__wrapper">
            <h2 className="popup__title">{action} {this.type}</h2>
            <label className="popup__label" htmlFor="popup__name">Название:</label>
            <input
              className="popup__input-text"
              value={name}
              required
              type="text"
              placeholder={`Название ${this.type}а..`}
              id="popup__name"
              onChange={(evt) => this.setState({name: evt.target.value})}
            />
            <label className="popup__label" htmlFor="popup__employee">Ответственный:</label>
            <input
              className="popup__input-text"
              value={employee}
              required
              type="text"
              placeholder="Иванов Иван.."
              id="popup__employee"
              onChange={(evt) => this.setState({employee: evt.target.value})}
            />
            <label className="popup__label" htmlFor="popup__time">Время на выполнение(ЧЧ:ММ):</label>
            <input
              className="popup__input-text"
              value={time}
              required pattern="[0-9]{2}[:][0-9]{2}"
              type="text"
              placeholder="45:00"
              id="popup__time"
              onChange={(evt) => this.setState({time: evt.target.value})}
            />
            <div className="popup__buttons">
              <button className="popup__button popup__button--cancel" type="button" onClick={this.handleClose}>Отмена
              </button>
              <button className="popup__button popup__button--submit" type="submit">Сохранить</button>
            </div>
          </div>
        </form>
      </section>
    )
  }

  handleClose() {
    this.props.history.goBack();
  }

  handleSubmit(evt) {
    const form = evt.currentTarget;
    evt.preventDefault();
    if (form.checkValidity() === false) {
      evt.stopPropagation();
    } else {
      evt.preventDefault();
      const {name, employee, time} = this.state;
      const {STAGE, STEP, ITEM} = ElementType;
      if (this.isAdd) {
        switch (this.type) {
          case STAGE:
            this.context.addStage({name, employee, time});
            break;
          case STEP:
            this.context.addStep({name, employee, time}, this.props.match.params.parentKey);
            break;
          case ITEM:
            this.context.addItem({name, employee, time}, this.props.match.params.parentKey);
            break;
        }
      } else {
        switch (this.type) {
          case STAGE:
            this.context.editStage({name, employee, time}, this.props.match.params.parentKey);
            break;
          case STEP:
            this.context.editStep({name, employee, time}, this.props.match.params.parentKey);
            break;
          case ITEM:
            this.context.editItem({name, employee, time}, this.props.match.params.parentKey);
            break;
        }
      }
      this.props.history.push(`/`);
    }
  }

}

Popup.contextType = Store;

export default Popup;
