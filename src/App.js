import React, {Component, Fragment} from 'react';
import "./scss/style.scss";

class App extends Component {
  render() {
    return (
      <Fragment>
        <div className="container">
          <section className="process">
            <h1 className="visually-hidden">Конструктор процесса</h1>
            <p className="process__start"><span>Старт</span></p>
            <section className="stage process__stage">
              <header className="stage__info">
                <button className="stage__collapse stage__collapse--closed" type="button" title="Свернуть\Развернуть"/>
                <div className="stage__row">
                  <h2 className="stage__title">Этап №1</h2>
                  <p className="stage__time">
                    <span>Время</span>
                    <b>00:00:00</b>
                  </p>
                  <button className="element stage__element" type="button"><span>#130</span></button>
                  <button className="element stage__element" type="button"><span>#130</span></button>
                  <button className="element stage__element" type="button"><span>#130</span></button>
                </div>
              </header>
              <section className="step stage__step">
                <h3 className="step__title">Шаг №1</h3>
                <p className="step__time">
                  <span>Время</span>
                  <b>00:00:00</b>
                </p>
                <button className="element step__element" type="button">#130</button>
                <button className="element step__element" type="button">#130</button>
              </section>
              <section className="step stage__step">
                <h3 className="step__title">Шаг №2</h3>
                <p className="step__time">
                  <span>Время</span>
                  <b>00:00:00</b>
                </p>
                <button className="element step__element" type="button">#130</button>
              </section>
              <footer className="stage__step-add">
                <h2 className="visually-hidden">Добавление шага</h2>
                <button type="button">Добавить шаг</button>
              </footer>
            </section>
          </section>

          <section className="popup">
            <h2 className="visually-hidden">Всплывающее окно</h2>
            <div className="popup__overlay"/>
            <form className="popup__form">
              <label className="popup__label" htmlFor="popup__name">Название:</label>
              <input className="popup__input-text" type="text" placeholder="Название шага.." id="popup__name"/>
              <label className="popup__label" htmlFor="popup__employee">Ответственный:</label>
              <input className="popup__input-text" type="text" placeholder="Иванов Иван.." id="popup__employee"/>
              <label className="popup__label" htmlFor="popup__time">Время на выполнение:</label>
              <input className="popup__input-text" type="text" placeholder="45:00" id="popup__time"/>
              <button className="popup__button popup__button--cancel" type="button">Отмена</button>
              <button className="popup__button popup__button--submit" type="submit">Сохранить</button>
            </form>
          </section>
        </div>
      </Fragment>
    );
  }
}

export default App;
