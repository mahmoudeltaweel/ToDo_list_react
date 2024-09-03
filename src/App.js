import {  useContext, useState } from "react";
import "./App.css";
import AddToDo from "./components/AddToDo";
import ToDoDone from "./components/ToDoDone";
import ToDoDeleted from "./components/ToDoDeleted";
import { addtodolocal } from "./DataLocalContext";

export default function App() {
  
  const startdata = useContext(addtodolocal);

  // console.log(startdata);
  

  const[addtodo,setAddToDo]=useState(true);
  const[donetodo,setDoneToDo]=useState(false);
  const[deletetodo,setdeleteToDo]=useState(false);




  function showToDO(e){
    console.log(e.target.innerText);
    if(e.target.innerText==="ADD ToDo"){
      setAddToDo(true)
      setDoneToDo(false)
      setdeleteToDo(false)
    }else if(e.target.innerText==="ToDo Done"){
      setAddToDo(false)
      setDoneToDo(true)
      setdeleteToDo(false)
    }else if(e.target.innerText==="ToDo Deleted"){
      setAddToDo(false)
      setDoneToDo(false)
      setdeleteToDo(true)
    }
  }
 

  return (
    <div className="App">
      <h2>ToDo List</h2>
      <div className="btnTodo">
        <button onClick={(e)=>showToDO(e)}>ADD ToDo</button>
        <button onClick={(e)=>showToDO(e)} >ToDo Done</button>
        <button onClick={(e)=>showToDO(e)}>ToDo Deleted</button>
      </div>
      <div>
      { addtodo && <AddToDo  startdata={startdata}  />}
      { donetodo && <ToDoDone  />}
      { deletetodo && <ToDoDeleted  />}
    </div>
    </div>
  );
}

// &#9940;
