import { Component } from "react";
import "./../style.css";

// Напишите функцию, которая принимает массив и переносит все 0 в конец,
// не изменяя порядок остальных элементов массива.

// Например:
// moveZeros([false,1,0,1,2,0,1,3,"a"]) --> [false,1,1,2,1,3,"a",0,0]

class Task1 extends Component {
  render() {
    return (
      <div className="task-block">
        <div className="task-title">{"moveZeros"}</div>
        <div className="task-description">
          <span>
            {
              "Write a function that takes an array and moves all 0's to the end, without changing the order of the remaining elements of the array."
            }
          </span>
          <span className="task-description-bold">
            {
              'For example: moveZeros([false,1,0,1,2,0,1,3,"a"]) --> [false,1,1,2,1,3,"a",0,0]'
            }
          </span>
        </div>
        <div className="task-solution">{"Solution"}</div>
      </div>
    );
  }
}

export default Task1;
