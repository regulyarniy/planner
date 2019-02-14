import React, {Component} from 'react';
import "./scss/style.scss";
import Layout from "./components/Layout";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Popup from "./components/Popup";
import AddItem from "./components/AddItem";
import {ElementType} from "./constants";
import Store from "./Store";
import uuid from "uuid/v4";

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
      addStep: this.addStep.bind(this)
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
    const newStages = JSON.parse(JSON.stringify(this.state.stages));
    const newKey = uuid();
    newStages[newKey] = Object.assign({}, data, {items: []});
    const newListOfStages = this.state.listOfStages.slice();
    newListOfStages.push(newKey);
    this.setState({listOfStages: newListOfStages,stages: newStages});
  }

  addStep(data, stageKey) {
    const newSteps = JSON.parse(JSON.stringify(this.state.steps));
    const newKey = uuid();
    newSteps[newKey] = Object.assign({}, data, {items: []});
    const newItems = this.state.stages[stageKey].items.slice();
    newItems.push(newKey);
    const newStages = JSON.parse(JSON.stringify(this.state.stages));
    newStages[stageKey].items = newItems;
    this.setState({stages: newStages, steps: newSteps});
  }
}

export default App;
