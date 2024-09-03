import { useRef, useState } from "react";
export default function AddToDo(props){
  
  
  const [todos, settodos] = useState([]);
  const inputRef = useRef();
  function handelAddtodo() {
    const text = inputRef.current.value;
    settodos([...todos, text]);
    inputRef.current.value = "";
  }

  function handeldelteitem(index) {
    const delteitem = [...todos];
    delteitem.splice(index, 1);
    settodos(delteitem);
  }
  function handeldoneitem(index) {
    const delteitem = [...todos];
    delteitem.splice(index, 1);
    settodos(delteitem);
  }
  

    return(
      <div className="content">
        <ul>
          {todos.map((text, index) => (
            <div key={index} className="item">
              <li>
                {text}
              </li>
              <span className="icondelete" onClick={() => handeldelteitem(index)}>&#10060;</span>
              <span className="icondelete" onClick={() => handeldoneitem(index)}>&#10003;</span>
            </div>
          ))}
        </ul>

        <input required ref={inputRef} placeholder="Enter your todo...." />
        {/* {Err && <p style={{color:"red"}}> please Enter your ToDo </p> } */}
        <button onClick={handelAddtodo}>Add</button>
      </div>
    
  )}
