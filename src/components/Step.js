import React, {PureComponent} from "react";

class Step extends PureComponent {
  render() {
    return (
      <section className="step stage__step">
        <h3 className="step__title">Шаг №111111</h3>
        <p className="step__time">
          <span>Время</span>
          <b>00:00:00</b>
        </p>
        <button className="element step__element" type="button"><span>#130</span></button>
        <button className="element step__element" type="button"><span>#130</span></button>
      </section>
    )
  }
}

export default Step;
