import { Component } from "react";
import "./../style.css";
import carry from "./carry";

// Напишите функцию, которая возвращает сумму таким образом:

// Например:
// f(1)(2)(3) --> 6

class Task8 extends Component {
  state = {
    inputValue: [1, 2, 3],
    result: "",
  };
  handleInputChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({ inputValue: JSON.parse(event.target.value) });
  };

  handleClick = () => {
    this.setState({
      result: carry(this.state.inputValue),
    });
  };
  render() {
    return (
      <div className="task-block">
        <div className="task-title">{"carry"}</div>
        <div className="task-description">
          <span>
            {
              "Given an array of words, you need to determine whether all words are made up of the same symbols."
            }
          </span>
          <span className="task-description-bold">
            {"For example: carry(1)(2)(3) --> 6"}
          </span>
        </div>
        <div className="task-solution">
          <select name="country" onChange={this.handleInputChange}>
            <option value={"[1, 2, 3]"}>{"(1)(2)(3)"}</option>
            <option value={"[10, 20, 5]"}>{"(10)(20)(5)"}</option>
          </select>
          <button onClick={this.handleClick}>{"Submit"}</button>
          <div>{`${this.state.result}`}</div>
        </div>
      </div>
    );
  }
}

export default Task8;
