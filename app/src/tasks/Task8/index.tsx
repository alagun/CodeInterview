import { Component } from "react";
import "./../style.css";
import maskify from "./maskify";

// Для того, чтобы обеспечить безопасность данных при оплате онлайн,
// нам необходимо замаскировать все цифры банковского счета, кроме последних четырех.

// Ваша задача написать функцию, которая принимает в качестве
// параметра строку, состоящую из цифр, заменяет все элементы на  '#',
// кроме последних четырех и возвращает ее.

// Например:
// maskify("4556364607935616") --> "############5616"

class Task8 extends Component {
  state = {
    inputValue: 4556364607935616,
    result: null,
  };
  handleInputChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({ inputValue: JSON.parse(event.target.value) });
  };

  handleClick = () => {
    this.setState({
      result: maskify(this.state.inputValue),
    });
  };
  render() {
    return (
      <div className="task-block">
        <div className="task-title">{"squareDigits"}</div>
        <div className="task-description">
          <span>
            {
              "In order to ensure data security when paying online, we need to mask all the bank account digits except the last four. Your task is to write a function that takes as parameter a string consisting of numbers, replaces all elements with '#', except the last four and returns it."
            }
          </span>
          <span className="task-description-bold">
            {'For example: maskify("4556364607935616") --> "############5616"'}
          </span>
        </div>
        <div className="task-solution">
          <select name="country" onChange={this.handleInputChange}>
            <option value={4556364607935616}>{4556364607935616}</option>
            <option value={3456123412341231}>{3456123412341231}</option>
            <option value={12144111212}>{12144111212}</option>
          </select>
          <button onClick={this.handleClick}>{"Submit"}</button>
          <div>{this.state.result}</div>
        </div>
      </div>
    );
  }
}

export default Task8;
