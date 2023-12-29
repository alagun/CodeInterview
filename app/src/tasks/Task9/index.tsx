import { Component } from "react";
import "./../style.css";
import anagram from "./anagram";

// Дан массив слов, необходимо определить,
// составлены ли все слова из одних и тех же символов.

// Например:
// ["кот", "ток", "кто"] --> true
// ["кот", "тк", "кТо"] --> false

class Task8 extends Component {
  state = {
    inputValue: ["кот", "ток", "кто"],
    result: null,
  };
  handleInputChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({ inputValue: JSON.parse(event.target.value) });
  };

  handleClick = () => {
    this.setState({
      result: anagram(this.state.inputValue),
    });
  };
  render() {
    return (
      <div className="task-block">
        <div className="task-title">{"squareDigits"}</div>
        <div className="task-description">
          <span>
            {
              "Given an array of words, you need to determine whether all words are made up of the same symbols."
            }
          </span>
          <span className="task-description-bold">
            {'For example: anagram(["кот", "ток", "кто"] --> true'}
          </span>
        </div>
        <div className="task-solution">
          <select name="country" onChange={this.handleInputChange}>
            <option value={'["кот", "ток", "кто"]'}>
              {'["кот", "ток", "кто"]'}
            </option>
            <option value={'["лот", "тл", "лТо"]'}>
              {'["лот", "тл", "лТо"]'}
            </option>
          </select>
          <button onClick={this.handleClick}>{"Submit"}</button>
          <div>{this.state.result}</div>
        </div>
      </div>
    );
  }
}

export default Task8;
