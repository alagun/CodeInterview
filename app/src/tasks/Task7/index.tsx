import { Component } from "react";
import "./../style.css";
import squareDigits from "./squareDigits";

// Ваша задача написать функцию, которая принимает
// в качестве параметра целое число и возводит в квадрат каждую цифру числа.
// Результат также необходимо вернуть в виде целого числа.

// Например:
// squareDigits(9119) --> 811181

class Task7 extends Component {
  state = {
    inputValue: 9119,
    result: null,
  };
  handleInputChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({ inputValue: JSON.parse(event.target.value) });
  };

  handleClick = () => {
    this.setState({
      result: squareDigits(this.state.inputValue),
    });
  };
  render() {
    return (
      <div className="task-block">
        <div className="task-title">{"squareDigits"}</div>
        <div className="task-description">
          <span>
            {
              "Your task is to write a function that takes defines a number as a parameter and squares each digit of the number. The result must also be returned as an integer."
            }
          </span>
          <span className="task-description-bold">
            {"For example: squareDigits(9119) --> 811181"}
          </span>
        </div>
        <div className="task-solution">
          <select name="country" onChange={this.handleInputChange}>
            <option value={9119}>{9119}</option>
            <option value={3456}>{3456}</option>
            <option value={1111}>{1111}</option>
          </select>
          <button onClick={this.handleClick}>{"Submit"}</button>
          <div>{this.state.result}</div>
        </div>
      </div>
    );
  }
}

export default Task7;
