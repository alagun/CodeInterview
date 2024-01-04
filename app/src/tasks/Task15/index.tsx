import { Component } from "react";
import "./../style.css";
import ColonOdd from "./ColonOdd";

// Запишите функцию ColonOdd(num), которая принимает число num в
// в качестве аргумента и вставляет двоеточие (:) между двумя нечетными числами.
// Например, если вводится число 55639217, то на выходе должно быть 5:563:921:7.

class Task15 extends Component {
  state = {
    inputValue: 55639217,
    result: "",
  };
  handleInputChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({ inputValue: JSON.parse(event.target.value) });
  };

  handleClick = () => {
    this.setState({
      result: ColonOdd(this.state.inputValue),
    });
  };
  render() {
    return (
      <div className="task-block">
        <div className="task-title">{"ColonOdd"}</div>
        <div className="task-description">
          <span>
            {
              "Write a function ColonOdd(num) that takes the number num in as an argument and inserts a colon (:) between two odd numbers."
            }
          </span>

          <span className="task-description-bold">
            {"ColonOdd(55639217); --> 5:563:921:7"}
          </span>
        </div>
        <div className="task-solution">
          <select name="country" onChange={this.handleInputChange}>
            <option value={55639217}>{55639217}</option>
            <option value={24682408}>{24682408}</option>
          </select>
          <button onClick={this.handleClick}>{"Submit"}</button>
          <div>{`${this.state.result}`}</div>
        </div>
      </div>
    );
  }
}

export default Task15;
