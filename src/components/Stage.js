import React, {PureComponent} from "react";
import Step from "./Step";
import StageInfo from "./StageInfo";
import AddItem from "./AddItem";
import {ElementType} from "../constants";
import Store from "../Store";

class Stage extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isCollapsed: true
    };
    this.handleCollapse = this.handleCollapse.bind(this);
  }

  get steps() {
    const {steps} = this.context;
    const {items, id} = this.props;
    return items.reduce((stepsList, stepKey) => stepsList.concat(
      [<Step
        key={stepKey}
        id={stepKey}
        parentID={id}
        name={steps[stepKey].name}
        time={steps[stepKey].time}
        items={steps[stepKey].items}
      />]
    ), [])
  }

  render() {
    const {name, time, employee, items, id} = this.props;
    const {isCollapsed} = this.state;
    return (
      <section className={`stage ${isCollapsed ? `stage--collapsed` : ``} process__stage`}>
        <StageInfo
          name={name}
          time={time}
          employee={employee}
          items={items}
          isCollapsed={isCollapsed}
          onCollapse={this.handleCollapse}
        />
        {this.steps}
        {items.length < 3 ? <AddItem type={ElementType.STEP} parentKey={id}/> : null}
      </section>
    )
  }

  handleCollapse() {
    this.setState({isCollapsed: !this.state.isCollapsed})
  }
}

Stage.contextType = Store;

export default Stage;
