import { Component } from "react";
import "./../style.css";
import findMissingLetter from "./findMissingLetter";

// Найдите недостающую букву.
// Напишите функцию,  которая принимает в качестве параметра массив букв,
// расположенных по алфавиту и возвращает массив с недостающей буквой.
// Длина входного массива не меньше 2 и он содержит буквы только одного регистра.

// Например:
// findMissingLetter(['a','b','c','d','f']) --> 'e'

class Task2 extends Component {
  state = {
    inputValue: ["a", "b", "c", "d", "f"],
    result: "",
  };

  handleInputChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({ inputValue: event.target.value });
  };

  handleClick = () => {
    this.setState({ result: findMissingLetter(this.state.inputValue) });
  };

  render() {
    return (
      <div className="task-block">
        <div className="task-title">{"findMissingLetter"}</div>
        <div className="task-description">
          <span>
            {
              "Find the missing letter. Write a function that takes an array of letters as a parameter, arranged alphabetically and returns an array with the missing letter. The length of the input array is at least 2 and it contains letters of only one register."
            }
          </span>
          <span className="task-description-bold">
            {"For example: findMissingLetter(['a','b','c','d','f']) --> 'e'"}
          </span>
        </div>
        <div className="task-solution">
          <select
            name="country"
            onChange={this.handleInputChange}
            value={`${this.state.inputValue}`}
          >
            <option value={"value1"}>{"['a','b','c','d','f']"}</option>
          </select>
          <button onClick={this.handleClick}>{"Submit"}</button>
          <div>{this.state.result}</div>
        </div>
      </div>
    );
  }
}

export default Task2;
