import React, {Component} from 'react';
import "./scss/style.scss";
import Layout from "./components/Layout";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Popup from "./components/Popup";
import AddItem from "./components/AddItem";
import {ElementType} from "./constants";
import Store from "./Store";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      stages: {},
      steps: {},
      elements: {}
    };
    this.api = {
      saveState: this.saveState.bind(this)
    }
  }

  componentDidMount() {
    this.loadState();
  }

  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <Store.Provider value={Object.assign({}, this.state, this.api)}>
          <Layout/>
          <AddItem type={ElementType.STAGE}/>
          <Route path="/add/:type" component={Popup}/>
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
}

export default App;
