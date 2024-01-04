import { Component } from "react";
import "./../style.css";
import removeDuplicates from "./removeDuplicates";

// Напишите функцию `removeDuplicates(arr)`, которая возвращает массив,
// в котором удалены повторяющиеся элементы из массива arr.

// Например:
// let arr = ["php", "php", "css", "css",
//   "script", "script", "html", "html", "java"
// ];

// removeDuplicates(arr); --> ["php","css","script","html","java"]

class Task14 extends Component {
  state = {
    inputValue: [
      "php",
      "php",
      "css",
      "css",
      "script",
      "script",
      "html",
      "html",
      "java",
    ],
    result: "",
  };
  handleInputChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({ inputValue: JSON.parse(event.target.value) });
  };

  handleClick = () => {
    this.setState({
      result: removeDuplicates(this.state.inputValue),
    });
  };
  render() {
    return (
      <div className="task-block">
        <div className="task-title">{"removeDuplicates"}</div>
        <div className="task-description">
          <span>
            {
              "Write a function with two parameters that creates the elements of an array, representing the composition of the corresponding elements of given arrays."
            }
          </span>
          <span className="task-description-bold">
            {
              'let arr = ["php", "php", "css", "css", "script", "script", "html", "html", "java"]'
            }
          </span>
          <span className="task-description-bold">
            {'removeDuplicates(arr); --> ["php","css","script","html","java"]'}
          </span>
        </div>
        <div className="task-solution">
          <select name="country" onChange={this.handleInputChange}>
            <option
              value={
                '["php", "php", "css", "css", "script", "script", "html", "html", "java"]'
              }
            >
              {
                '["php", "php", "css", "css", "script", "script", "html", "html", "java"]'
              }
            </option>
            <option value={'["1", "2", "2", "3", "2", "1", "4", "3", "5"]'}>
              {'["1", "2", "2", "3", "2", "1", "4", "3", "5"]'}
            </option>
          </select>
          <button onClick={this.handleClick}>{"Submit"}</button>
          <div>{`${this.state.result}`}</div>
        </div>
      </div>
    );
  }
}

export default Task14;
