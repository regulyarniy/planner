import React, {PureComponent} from "react";

class StageInfo extends PureComponent {
  render() {
    return (
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
    )
  }
}

export default StageInfo;
