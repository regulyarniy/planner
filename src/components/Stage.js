import React, {PureComponent} from "react";
import Step from "./Step";
import StageInfo from "./StageInfo";
import AddItem from "./AddItem";
import {ElementType} from "../constants";

class Stage extends PureComponent {
  render() {
    return (
      <section className="stage process__stage">
        <StageInfo/>
        <Step/>
        <Step/>
        <AddItem type={ElementType.STEP}/>
      </section>
    )
  }
}

export default Stage;
