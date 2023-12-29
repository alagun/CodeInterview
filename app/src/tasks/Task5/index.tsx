import { Component } from "react";
import "./../style.css";
import busStops from "./busStops";

// Представим автобус, забирающий и высаживающий людей на каждой остановке.
// Дан массив массивов, первый элемент которых равен числу пассажиров,
// вошедших в автобус на остановке, а второй - числу пассажиров,
// вышедших на остановке.

// Ваша Задача написать функцию, которая возвращает число людей,
// оставшихся в автобусе после последней остановки (массива).
// Хоть это и последняя остановка,
// в автобусе все еще находятся люди (они, наверное, уснули :D ).

// Помните, что число оставшихся людей в автобусе всегда >= 0
// Значение второго числа первого элемента массива = 0,
// потому что автобус пустой на первой остановке.

// Например:
// busStops([[3, 0], [9, 1], [4, 10], [12, 2], [6, 1], [7, 10]]) --> 17

class Task5 extends Component {
  state = {
    inputValue: [
      [3, 0],
      [9, 1],
      [4, 10],
      [12, 2],
      [6, 1],
      [7, 10],
    ],
    result: null,
  };
  handleInputChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({ inputValue: JSON.parse(event.target.value) });
  };

  handleClick = () => {
    this.setState({
      result: busStops(this.state.inputValue),
    });
  };
  render() {
    return (
      <div className="task-block">
        <div className="task-title">{"busStops"}</div>
        <div className="task-description">
          <span>
            {
              " Imagine a bus picking up and dropping off people at every stop. Given an array of arrays, the first element of which is equal to the number of passengers, who entered the bus at the stop, and the second - the number of passengers, getting off at the stop. Your task is to write a function that returns the number of people remaining on the bus after the last stop (array). Even though this is the last stop, There are still people on the bus (they probably fell asleep :D ). Remember that the number of people remaining on the bus is always >= 0 The value of the second number of the first element of the array = 0, because the bus is empty at the first stop."
            }
          </span>
          <span className="task-description-bold">
            {
              "For example: busStops([[3, 0], [9, 1], [4, 10], [12, 2], [6, 1], [7, 10]]) --> 17"
            }
          </span>
        </div>
        <div className="task-solution">
          <select name="country" onChange={this.handleInputChange}>
            <option
              value={"[[3, 0], [9, 1], [4, 10], [12, 2], [6, 1], [7, 10]]"}
            >
              {"[[3, 0], [9, 1], [4, 10], [12, 2], [6, 1], [7, 10]]"}
            </option>
            <option value={"[[3, 0], [9, 1]]"}>{"[[3, 0], [9, 1]"}</option>
          </select>
          <button onClick={this.handleClick}>{"Submit"}</button>
          <div>{this.state.result}</div>
        </div>
      </div>
    );
  }
}

export default Task5;
