import React, {Component} from 'react';
import "./scss/style.scss";
import Layout from "./components/Layout";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Popup from "./components/Popup";
import AddItem from "./components/AddItem";
import {ElementType} from "./constants";
import Store from "./Store";
import uuid from "uuid/v4";
import {clone} from "./helpers/utils";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listOfStages: [],
      stages: {},
      steps: {},
      elements: {}
    };
    this.api = {
      saveState: this.saveState.bind(this),
      addStage: this.addStage.bind(this),
      addStep: this.addStep.bind(this),
      addItem: this.addItem.bind(this),
      deleteItem: this.deleteItem.bind(this),
      deleteStep: this.deleteStep.bind(this),
      deleteStage: this.deleteStage.bind(this),
      editItem: this.editItem.bind(this),
      editStep: this.editStep.bind(this),
      editStage: this.editStage.bind(this)
    }
  }

  componentDidMount() {
    this.loadState();
  }

  componentDidUpdate() {
    this.saveState();
  }

  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <Store.Provider value={Object.assign({}, this.state, this.api)}>
          <Layout/>
          <AddItem type={ElementType.STAGE}/>
          <Route path="/(add|edit)/:type/:parentKey?" component={Popup}/>
        </Store.Provider>
      </Router>
    );
  }

  saveState() {
    localStorage.setItem(`state`, JSON.stringify(this.state));
  }

  loadState() {
    const state = localStorage.getItem(`state`);
    if (state !== null) {
      this.setState(JSON.parse(state));
    }
  }

  addStage(data) {
    const newStages = clone(this.state.stages);
    const newKey = uuid();
    newStages[newKey] = Object.assign({}, data, {items: []});
    const newListOfStages = this.state.listOfStages.slice();
    newListOfStages.push(newKey);
    this.setState({listOfStages: newListOfStages, stages: newStages});
  }

  deleteStage(stageKey) {
    const newListOfStages = clone(this.state.listOfStages);
    const newStages = clone(this.state.stages);
    const newSteps = clone(this.state.steps);
    const newElements = clone(this.state.elements);
    newStages[stageKey].items.forEach((stepKey) => {
      newSteps[stepKey].items.forEach((itemKey) => delete newElements[itemKey]);
      delete newSteps[stepKey];
    });
    delete newStages[stageKey];
    newListOfStages.splice(newListOfStages.indexOf(stageKey), 1);
    this.setState({
      listOfStages: newListOfStages,
      stages: newStages,
      steps: newSteps,
      elements: newElements
    });
  }

  editStage(data, stageKey) {
    const newStages = clone(this.state.stages);
    newStages[stageKey] = Object.assign(newStages[stageKey], data);
    this.setState({stages: newStages});
  }

  addStep(data, stageKey) {
    const newSteps = clone(this.state.steps);
    const newKey = uuid();
    newSteps[newKey] = Object.assign({}, data, {items: []});
    const newItems = this.state.stages[stageKey].items.slice();
    newItems.push(newKey);
    const newStages = clone(this.state.stages);
    newStages[stageKey].items = newItems;
    this.setState({stages: newStages, steps: newSteps});
  }

  deleteStep(stageKey, stepKey) {
    const newStages = clone(this.state.stages);
    const newSteps = clone(this.state.steps);
    const newElements = clone(this.state.elements);
    newSteps[stepKey].items.forEach((item) => delete newElements[item]);
    delete newSteps[stepKey];
    newStages[stageKey].items.splice(newStages[stageKey].items.indexOf(stepKey), 1);
    this.setState({stages: newStages, steps: newSteps, elements: newElements});
  }

  editStep(data, stepKey) {
    const newSteps = clone(this.state.steps);
    newSteps[stepKey] = Object.assign(newSteps[stepKey], data);
    this.setState({steps: newSteps});
  }

  addItem(data, stepKey) {
    const newElements = clone(this.state.elements);
    const newKey = uuid();
    newElements[newKey] = data;
    const newItems = this.state.steps[stepKey].items.slice();
    newItems.push(newKey);
    const newSteps = clone(this.state.steps);
    newSteps[stepKey].items = newItems;
    this.setState({steps: newSteps, elements: newElements});
  }

  deleteItem(stepKey, itemKey) {
    const newSteps = clone(this.state.steps);
    const newElements = clone(this.state.elements);
    delete newElements[itemKey];
    newSteps[stepKey].items.splice(newSteps[stepKey].items.indexOf(itemKey), 1);
    this.setState({steps: newSteps, elements: newElements});
  }

  editItem(data, itemKey) {
    const newElements = clone(this.state.elements);
    newElements[itemKey] = Object.assign(newElements[itemKey], data);
    this.setState({elements: newElements});
  }

}

export default App;
