import React, {Component, Fragment} from 'react';
import "./scss/style.scss";
import Layout from "./components/Layout";
// import Popup from "./components/Popup";
import AddItem from "./components/AddItem";
import {ElementType} from "./constants";
import Store from "./Store";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [0, 1],
      stages: {
        0: {
          name: `Этап №1`,
          employee: `Иванов Иван`,
          time: `00:01:15`,
          items: [0, 1, 1]
        },
        1: {
          name: `Этап №2`,
          employee: `Петров Петр`,
          time: `00:20:00`,
          items: [1]
        }
      },
      steps: {
        0: {
          name: `Шаг №1`,
          employee: `Иванов Иван`,
          time: `00:01:15`,
          items: [0, 1, 2]
        },
        1: {
          name: `Шаг №2`,
          employee: `Петров Петр`,
          time: `00:20:00`,
          items: [2, 0]
        }
      },
      elements: {
        0: {
          name: `Элемент №1`,
          employee: `Иванов Иван`,
          time: `00:01:15`
        },
        1: {
          name: `Элемент №2`,
          employee: `Петров Петр`,
          time: `00:20:00`
        },
        2: {
          name: `Элемент №3`,
          employee: `Сидоров Сидор`,
          time: `00:30:00`
        },
      }
    };
    this.api = {}
  }

  render() {
    return (
      <Fragment>
        <Store.Provider value={Object.assign({}, this.state, this.api)}>
          <Layout/>
          {/*<Popup/>*/}
          <AddItem type={ElementType.STAGE}/>
        </Store.Provider>
      </Fragment>
    );
  }
}

export default App;
