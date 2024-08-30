import "./App.css";
import AddToDo from "./components/AddToDo";

export default function App() {


  function shoowadd(){

  }

  return (
    <div className="App">
      <h2>ToDo List</h2>
      <div className="btnTodo">
        <button onClick={shoowadd}>ADD ToDo</button>
        <button>ToDo Done</button>
        <button> Deleted </button>
      </div>
      <div>
      { <AddToDo  />}
    </div>
    </div>
  );
}

// &#9940;
