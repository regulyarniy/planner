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
    const {STAGE__ROUTE, STAGE, STEP} = ElementType;
    this.type = this.props.match.params.type === STAGE__ROUTE ? STAGE : STEP;
    this.handleClose = this.handleClose.bind(this);
  }

  render() {
    const {match} = this.props;
    const {name, employee, time} = this.state;
    const action = match.path.indexOf(`add`) !== -1 ? `Создать` : `Редактировать`;

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
      if (this.type === ElementType.STAGE) {
        this.context.addStage({name, employee, time});
      } else {
        this.context.addStep({name, employee, time}, this.props.match.params.parentKey);
      }
      this.props.history.push(`/`);
    }
  }

}

Popup.contextType = Store;

export default Popup;
