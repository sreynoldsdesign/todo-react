import { useState } from "react";

function App() {
  const [input,setInput] = useState("");
  const [tasks, setTasks] = useState([]);
  
  function addTask(){
    if (input.trim() === "") return;

    const newTask = {
      text: input
    };

    setTasks([...tasks,newTask]);
    setInput("");
  }

  return (
    <div>
      <h1>Todo App</h1>

      <input type="text" name="" id="" value={input} onChange={(e) => setInput(e.target.value)}/>

      <button onClick={addTask}>Add Task</button>

      <ul>
        {tasks.map((task,index) => (<li key={index}>{task.text}</li>))}
      </ul>
    </div>
  );
}

export default App;