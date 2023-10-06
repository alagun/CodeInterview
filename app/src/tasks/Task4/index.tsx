import { Component } from "react";
import "./../style.css";

// Что такое анаграмма?

// Два слова являются анаграммами между собой,если
// они оба содержат одинаковые буквы.

// Например: 'abba' & 'baab' == true

// Напишите функцию, которая находит все анаграммы слова из списка.
// В качестве параметра даны слово и массив слов.
// Функция должна возвращать массив всех анаграмм или пустой массив,
// если анаграмм не обнаружено.

// Например:
// anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) --> ['aabb', 'bbaa']

class Task4 extends Component {
  render() {
    return (
      <div className="task-block">
        <div className="task-title">{"anagrams"}</div>
        <div className="task-description">
          <span>
            {
              "What is an anagram? Two words are anagrams of each other if they both contain the same letters.  For example: 'abba' & 'baab' == true  Write a function that finds all anagrams of a word from a list. A word and an array of words are given as a parameter. The function must return an array of all anagrams or an empty array, if no anagrams are found."
            }
          </span>
          <span className="task-description-bold">
            {
              "For example: anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) --> ['aabb', 'bbaa']"
            }
          </span>
        </div>
        <div className="task-solution">
          <input type="text" value="'abba', ['aabb', 'abcd', 'bbaa', 'dada']" />
          <button>{"Submit"}</button>
          <div>{"....."}</div>
        </div>
      </div>
    );
  }
}

export default Task4;
