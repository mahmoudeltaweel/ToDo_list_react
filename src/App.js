import { useRef, useState } from "react";
import "./App.css";

export default function App() {
  const [todos, settodos] = useState([]);
  const inputRef = useRef();

  function handelAddtodo() {
    const text = inputRef.current.value;
    const newitem = { completed: false, text };
    settodos([...todos, newitem]);
    inputRef.current.value = "";
  }
  function handelTODO(index) {
    const newtodo = [...todos];
    newtodo[index].completed = !newtodo[index].completed;
    settodos(newtodo);
  }

  function handeldelteitem(index) {
    const delteitem = [...todos];
    delteitem.splice(index, 1);
    settodos(delteitem);
  }

  return (
    <div className="App">
      <h2>ToDo List</h2>
      <div className="btnTodo">
        <button>ADD ToDo</button>
        <button>ToDo Done</button>
        <button> Deleted </button>
      </div>
      <div>
      <div className="content">
        <ul>
          {todos.map(({ text, completed }, index) => (
            <div key={index} className="item">
              <li
                className={completed ? "done" : ""}
                onClick={() => handelTODO(index)}
              >
                {text}
              </li>
              <span className="icondelete" onClick={() => handeldelteitem(index)}>&#10060;</span>
            </div>
          ))}
        </ul>

        <input required ref={inputRef} placeholder="Enter your todo...." />
        {/* {Err && <p style={{color:"red"}}> please Enter your ToDo </p> } */}
        <button onClick={handelAddtodo}>Add</button>
      </div>
    </div>
    </div>
  );
}