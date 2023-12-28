import { Component } from "react";
import "./../style.css";
import moveZeros from "./moveZeros";

// Напишите функцию, которая принимает массив и переносит все 0 в конец,
// не изменяя порядок остальных элементов массива.

// Например:
// moveZeros([false,1,0,1,2,0,1,3,"a"]) --> [false,1,1,2,1,3,"a",0,0]

class Task1 extends Component {
  state = {
    inputValue: "[false,1,0,1,2,0,1,3,'a']",
    result: "",
  };

  handleInputChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({ inputValue: event.target.value });
  };

  handleClick = () => {
    this.setState({ result: moveZeros(this.value) });
  };

  value = [false, 1, 0, 1, 2, 0, 1, 3, "a"];

  render() {
    return (
      <div className="task-block">
        <div className="task-title">{"moveZeros"}</div>
        <div className="task-description">
          <span>
            {
              "Write a function that takes an array and moves all 0's to the end, without changing the order of the remaining elements of the array."
            }
          </span>
          <span className="task-description-bold">
            {
              'For example: moveZeros([false,1,0,1,2,0,1,3,"a"]) --> [false,1,1,2,1,3,"a",0,0]'
            }
          </span>
        </div>
        <div className="task-solution">
          <select name="country" onChange={this.handleInputChange}>
            <option value={"value1"}>{'[false,1,0,1,2,0,1,3,"a"]'}</option>
          </select>
          <button onClick={this.handleClick}>{"Submit"}</button>
          <div>{this.state.result}</div>
        </div>
      </div>
    );
  }
}

export default Task1;
