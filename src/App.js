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
      deleteItem: this.deleteItem.bind(this)
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
          <Route path="/add/:type/:parentKey?" component={Popup}/>
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
    this.setState({listOfStages: newListOfStages,stages: newStages});
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
    const newElements = clone(this.state.elements);
    delete newElements[itemKey];
    const newItems = this.state.steps[stepKey].items.slice();
    newItems.splice(newItems.indexOf(itemKey), 1);
    const newSteps = clone(this.state.steps);
    newSteps[stepKey].items = newItems;
    this.setState({steps: newSteps, elements: newElements});
  }

}

export default App;
