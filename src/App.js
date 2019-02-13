import React, {Component, Fragment} from 'react';
import "./scss/style.scss";
import Layout from "./components/Layout";
// import Popup from "./components/Popup";
import AddItem from "./components/AddItem";
import {ElementType} from "./constants";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Layout/>
        {/*<Popup/>*/}
        <AddItem type={ElementType.STAGE}/>
      </Fragment>
    );
  }
}

export default App;
