import React, {PureComponent} from "react";
import Stage from "./Stage";
import Store from "../Store";

class Layout extends PureComponent {
  get stages() {
    const {list, stages} = this.context;
    return list.reduce((stagesList, stageKey) => stagesList.concat(
      [<Stage
        key={stageKey}
        name={stages[stageKey].name}
        employee={stages[stageKey].employee}
        time={stages[stageKey].time}
        items={stages[stageKey].items}
      />]
    ), [])
  }

  render() {
    return (
      <div className="container">
        <section className="process">
          <h1 className="visually-hidden">Конструктор процесса</h1>
          <p className="process__start"><span>Старт</span></p>
          {this.stages}
        </section>
      </div>
    )
  }
}

Layout.contextType = Store;

export default Layout;
