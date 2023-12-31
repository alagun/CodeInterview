import { Component } from "react";
import "./../style.css";
import likes from "./likes";

// Вы, наверное, знаете систему «лайков» по Facebook и другим страницам.
// Люди могут "лайкать" сообщения в блогах,изображения или другие предметы.
// Мы хотим создать текст, который должен отображаться рядом с таким элементом.
// Реализуйте функцию likes :: [String] -> String, которая
// должна принимать входной массив, содержащий имена людей,которым нравится элемент.
// Он должен возвращать отображаемый текст, как показано в примерах:

// Например:
// likes([]) --> 'no one likes this'
// likes(['Peter']) --> 'Peter likes this'
// likes(['Jacob', 'Alex']) --> 'Jacob and Alex like this'
// likes(['Max', 'John', 'Mark']) --> 'Max, John and Mark like this')
// likes(['Alex', 'Jacob', 'Mark', 'Max']) --> 'Alex, Jacob and 2 others like this'

class Task3 extends Component {
  state = {
    inputValue: [],
    result: "",
  };

  handleInputChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({ inputValue: JSON.parse(event.target.value) });
  };

  handleClick = () => {
    this.setState({ result: likes(this.state.inputValue) });
  };

  render() {
    return (
      <div className="task-block">
        <div className="task-title">{"likes"}</div>
        <div className="task-description">
          <span>
            {
              "You probably know the “like” system from Facebook and other pages. People can 'like' blog posts, images, or other items. We want to create the text that should appear next to such an element. Implement a function likes::[String] -> String which should take an input array containing the names of people who like the item. It should return display text as shown in the examples:"
            }
          </span>
          <span className="task-description-bold">
            {"For example: likes([]) --> 'no one likes this'"}
          </span>
          <span className="task-description-bold">
            {"For example: likes(['Peter']) --> 'Peter likes this'"}
          </span>
          <span className="task-description-bold">
            {
              "For example: likes(['Jacob', 'Alex']) --> 'Jacob and Alex like this'"
            }
          </span>
          <span className="task-description-bold">
            {
              "For example: likes(['Max', 'John', 'Mark']) --> 'Max, John and Mark like this'"
            }
          </span>
          <span className="task-description-bold">
            {
              "For example: likes(['Alex', 'Jacob', 'Mark', 'Max']) --> 'Alex, Jacob and 2 others like this'"
            }
          </span>
        </div>
        <div className="task-solution">
          <select name="country" onChange={this.handleInputChange}>
            <option value={"[]"}>{"[]"}</option>
            <option value={'["Peter"]'}>{"['Peter']"}</option>
            <option value={'["Jacob", "Alex"]'}>{"['Jacob', 'Alex']"}</option>
            <option value={'["Max", "John", "Mark"]'}>
              {"['Max', 'John', 'Mark']"}
            </option>
            <option value={'["Alex", "Jacob", "Mark", "Max"]'}>
              {'["Alex", "Jacob", "Mark", "Max"]'}
            </option>
          </select>
          <button onClick={this.handleClick}>{"Submit"}</button>
          <div>{this.state.result}</div>
        </div>
      </div>
    );
  }
}

export default Task3;
