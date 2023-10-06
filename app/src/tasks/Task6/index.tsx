import { Component } from "react";
import "./../style.css";

// Даны две строки, которые содержат только буквы от a - z.
// Ваша задача написать функцию, которая возвращает
// новую отсортированную (по порядку) строку,
// которая содержит буквы двух строк, повторяющихся только один раз.

// Например:
// longest("xyaabbbccccdefww", "xxxxyyyyabklmopq") --> "abcdefklmopqxy"

class Task2 extends Component {
  render() {
    return (
      <div className="task-block">
        <div className="task-title">{"busStops"}</div>
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
          <input type="text" value="xyaabbbccccdefww, xxxxyyyyabklmopq" />
          <button>{"Submit"}</button>
          <div>{"....."}</div>
        </div>
      </div>
    );
  }
}

export default Task2;
