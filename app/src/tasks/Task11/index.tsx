import { Component } from "react";
import "./../style.css";
import frequent from "./frequent";

// Напишите функцию, которая находит наиболее часто используемый элемент массива.

// Например:
// const frequent([7, 'z', 'z', 'z', 3, 7, 'z', 7, 'z', 3, 5, 7]); --> "z"

class Task11 extends Component {
  state = {
    inputValue: [7, "z", "z", "z", 3, 7, "z", 7, "z", 3, 5, 7],
    result: "",
  };
  handleInputChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({ inputValue: JSON.parse(event.target.value) });
  };

  handleClick = () => {
    this.setState({
      result: frequent(this.state.inputValue),
    });
  };
  render() {
    return (
      <div className="task-block">
        <div className="task-title">{"frequent"}</div>
        <div className="task-description">
          <span>
            {
              "Write a function that finds the most frequently used array element."
            }
          </span>
          <span className="task-description-bold">
            {
              "frequent([7, 'z', 'z', 'z', 3, 7, 'z', 7, 'z', 3, 5, 7]); --> 'z'"
            }
          </span>
        </div>
        <div className="task-solution">
          <select name="country" onChange={this.handleInputChange}>
            <option value={'[7, "z", "z", "z", 3, 7, "z", 7, "z", 3, 5, 7]'}>
              {'[7, "z", "z", "z", 3, 7, "z", 7, "z", 3, 5, 7]'}
            </option>
            <option value={'[7, "z", 7, "z", 3, 7, 7, 7, "z", 7, 5, 7]'}>
              {'[7, "z", 7, "z", 3, 7, 7, 7, "z", 7, 5, 7]'}
            </option>
          </select>
          <button onClick={this.handleClick}>{"Submit"}</button>
          <div>{`${this.state.result}`}</div>
        </div>
      </div>
    );
  }
}

export default Task11;
