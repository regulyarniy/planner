import React, {PureComponent} from "react";
import Stage from "./Stage";

class Layout extends PureComponent {
  render() {
    return (
      <div className="container">
        <section className="process">
          <h1 className="visually-hidden">Конструктор процесса</h1>
          <p className="process__start"><span>Старт</span></p>
          <Stage/>
        </section>
      </div>
    )
  }
}

export default Layout;
