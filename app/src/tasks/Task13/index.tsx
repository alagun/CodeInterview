import { Component } from "react";
import "./../style.css";
import sumArrays from "./sumArrays";

// Напишите функцию с двумя параметрами, которая создает элементы массива,
// представляющими собой состав соответствующих элементов заданных массивов.

// Например:
// константный массив1 = [1, 2, 3, 4, 5];
// константный массив2 = [4, 5, 6];

// func(массив1,массив2) // [5,7,9,4,5]

class Task13 extends Component {
  state = {
    inputValue: [
      [1, 2, 3, 4, 5],
      [4, 5, 6],
    ],
    result: "",
  };
  handleInputChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({ inputValue: JSON.parse(event.target.value) });
  };

  handleClick = () => {
    this.setState({
      result: sumArrays(this.state.inputValue),
    });
  };
  render() {
    return (
      <div className="task-block">
        <div className="task-title">{"sumArrays"}</div>
        <div className="task-description">
          <span>
            {
              "Write a function with two parameters that creates the elements of an array, representing the composition of the corresponding elements of given arrays."
            }
          </span>
          <span className="task-description-bold">
            {"sumArrays([[1, 2, 3, 4, 5],[4, 5, 6]]); --> [5,7,9,4,5]"}
          </span>
        </div>
        <div className="task-solution">
          <select name="country" onChange={this.handleInputChange}>
            <option value={"[[1, 2, 3, 4, 5], [4, 5, 6]]"}>
              {"[1, 2, 3, 4, 5], [4, 5, 6]"}
            </option>
            <option value={"[[1, 1, 1, 4, 5], [0, 1, 2, 0, 0, 6]]"}>
              {"[1, 1, 1, 4, 5], [0, 1, 2, 0, 0, 6]"}
            </option>
          </select>
          <button onClick={this.handleClick}>{"Submit"}</button>
          <div>{`${this.state.result}`}</div>
        </div>
      </div>
    );
  }
}

export default Task13;
