import { Component } from "react";
import "./../style.css";
import depth from "./depth";

// Напишите функцию `expand(arr)`, которая разворачивает
// вложенный массив любой глубины.

// Например:
// const arr1 = [1, [2,[3,[4]]]]; --> [1,2,3,4];
// const arr2 = [1, [2], [3, [[4]]],[5,6]]; --> [1,2,3,4,5,6];

class Task12 extends Component {
  state = {
    inputValue: [1, [2, [3, [4]]]],
    result: "",
  };
  handleInputChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({ inputValue: JSON.parse(event.target.value) });
  };

  handleClick = () => {
    this.setState({
      result: depth(this.state.inputValue),
    });
  };
  render() {
    return (
      <div className="task-block">
        <div className="task-title">{"depth"}</div>
        <div className="task-description">
          <span>
            {
              "Write a function `expand(arr)` that expands nested array of any depth."
            }
          </span>
          <span className="task-description-bold">
            {"depth([1, [2,[3,[4]]]]) --> [1,2,3,4]"}
          </span>
        </div>
        <div className="task-solution">
          <select name="country" onChange={this.handleInputChange}>
            <option value={"[1, [2,[3,[4]]]]"}>{"[1, [2,[3,[4]]]]"}</option>
            <option value={"[1, [2], [3, [[4]]],[5,6]]"}>
              {"[1, [2], [3, [[4]]],[5,6]]"}
            </option>
          </select>
          <button onClick={this.handleClick}>{"Submit"}</button>
          <div>{`${this.state.result}`}</div>
        </div>
      </div>
    );
  }
}

export default Task12;
