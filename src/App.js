import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [
        {
          name: "Linda",
          id: "12345a",
        },
        {
          name: "Frank",
          id: "12356ta",
        },
        {
          name: "Jacky",
          id: "1xdh6a",
        },
        {
          name: "Natassa",
          id: "89u45a",
        },
      ],
    };
  }
  render() {
    return (
      <div className="App">
        {this.state.monsters.map((monster) => {
          return (
            <div>
              <h1 key={monster.id}>{monster.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
