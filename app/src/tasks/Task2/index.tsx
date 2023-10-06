import { Component } from "react";
import "./../style.css";

// Найдите недостающую букву.
// Напишите функцию,  которая принимает в качестве параметра массив букв,
// расположенных по алфавиту и возвращает массив с недостающей буквой.
// Длина входного массива не меньше 2 и он содержит буквы только одного регистра.

// Например:
// findMissingLetter(['a','b','c','d','f']) --> 'e'

class Task2 extends Component {
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
          <input type="text" value="['a','b','c','d','f']" />
          <button>{"Submit"}</button>
          <div>{"....."}</div>
        </div>
      </div>
    );
  }
}

export default Task2;
