import { Component } from "react";
import "./../style.css";
import longest from "./longest";

// Даны две строки, которые содержат только буквы от a - z.
// Ваша задача написать функцию, которая возвращает
// новую отсортированную (по порядку) строку,
// которая содержит буквы двух строк, повторяющихся только один раз.

// Например:
// longest("xyaabbbccccdefww", "xxxxyyyyabklmopq") --> "abcdefklmopqxy"

class Task6 extends Component {
  state = {
    inputValue: ["xyaabbbccccdefww", "xxxxyyyyabklmopq"],
    result: null,
  };
  handleInputChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({ inputValue: JSON.parse(event.target.value) });
  };

  handleClick = () => {
    this.setState({
      result: longest(this.state.inputValue),
    });
  };
  render() {
    return (
      <div className="task-block">
        <div className="task-title">{"longest"}</div>
        <div className="task-description">
          <span>
            {
              "Given two strings that contain only the letters a - z. Your task is to write a function that returns a new sorted (in order) string, which contains the letters of two strings that are repeated only once."
            }
          </span>
          <span className="task-description-bold">
            {
              'For example: longest("xyaabbbccccdefww", "xxxxyyyyabklmopq") --> "abcdefklmopqxy"'
            }
          </span>
        </div>
        <div className="task-solution">
          <select name="country" onChange={this.handleInputChange}>
            <option value={"['xyaabbbccccdefww','xxxxyyyyabklmopq']"}>
              {"['xyaabbbccccdefww','xxxxyyyyabklmopq']"}
            </option>
          </select>
          <button onClick={this.handleClick}>{"Submit"}</button>
          <div>{this.state.result}</div>
        </div>
      </div>
    );
  }
}

export default Task6;
