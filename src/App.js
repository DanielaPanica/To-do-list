import React, { useState } from "react";
import "./index.css";
import classnames from "classnames";

function App() {
  const [list, setList] = useState([]); //lista de elemente
  const [input, setInput] = useState(""); //inputs

  const addTodo = (todo) => {
    const newTodo = {
      id: Math.random(),
      todo: todo,
    };

    //add the todo to the list
    setList([...list, newTodo]);

    //clear input box
    setInput("");
  };

  const deleteTodo = (id) => {
    //Filter out todos with the id
    const newList = list.filter((todo) => todo.id !== id);

    setList(newList);
  };

  return (
    <div>
      <h1>To do List</h1>
      <input
        className="blankSpace"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></input>
      <span
        className="addBtn"
        onClick={() => {
          if (input.length) {
            addTodo(input);
          }
        }}
      >
        Add
      </span>
      <ul>
        {list.map((todo) => (
          <li className="listItem" key={todo.id}>
            {todo.todo}
            <span className="closeBtn" onClick={() => deleteTodo(todo.id)}>
              &times;
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
