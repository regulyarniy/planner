import React, {PureComponent} from "react";
import {ElementType} from "../constants";

class Popup extends PureComponent {
  constructor(props) {
    super(props);
    this.handleClose = this.handleClose.bind(this);
  }
  render() {
    const {match} = this.props;
    const {STAGE__ROUTE, STAGE, STEP} = ElementType;
    const action = match.path.indexOf(`add`) !== -1 ? `Создать` : `Редактировать`;
    const type = match.params.type === STAGE__ROUTE ? STAGE : STEP;
    return (
      <section className="popup">
        <h2 className="visually-hidden">Всплывающее окно</h2>
        <div className="popup__overlay" onClick={this.handleClose}/>
        <form className="popup__form">
          <div className="popup__wrapper">
            <h2 className="popup__title">{action} {type}</h2>
            <label className="popup__label" htmlFor="popup__name">Название:</label>
            <input className="popup__input-text" required type="text" placeholder="Название шага.." id="popup__name"/>
            <label className="popup__label" htmlFor="popup__employee">Ответственный:</label>
            <input className="popup__input-text"
                   required type="text"
                   placeholder="Иванов Иван.."
                   id="popup__employee"
            />
            <label className="popup__label" htmlFor="popup__time">Время на выполнение(ЧЧ:ММ):</label>
            <input
              className="popup__input-text"
              required pattern="[0-9]{2}[:][0-9]{2}"
              type="text"
              placeholder="45:00"
              id="popup__time"
            />
            <div className="popup__buttons">
              <button className="popup__button popup__button--cancel" type="button" onClick={this.handleClose}>Отмена</button>
              <button className="popup__button popup__button--submit" type="submit">Сохранить</button>
            </div>
          </div>
        </form>
      </section>
    )
  }

  handleClose() {
    this.props.history.push(`/`);
  }
}

export default Popup;
