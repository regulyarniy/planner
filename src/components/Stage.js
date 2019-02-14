import React, {PureComponent} from "react";
import Step from "./Step";
import StageInfo from "./StageInfo";
import AddItem from "./AddItem";
import {ElementType} from "../constants";
import Store from "../Store";

class Stage extends PureComponent {
  get steps() {
    const {steps} = this.context;
    const {items} = this.props;
    return items.reduce((stepsList, stepKey) => stepsList.concat(
      [<Step
        key={stepKey}
        name={steps[stepKey].name}
        time={steps[stepKey].time}
        items={steps[stepKey].items}
      />]
    ), [])
  }
  render() {
    const {name, time, employee, items} = this.props;
    return (
      <section className="stage process__stage">
        <StageInfo name={name} time={time} employee={employee} items={items}/>
        {this.steps}
        {items.length < 3 ? <AddItem type={ElementType.STEP}/> : null}
      </section>
    )
  }
}

Stage.contextType = Store;

export default Stage;
