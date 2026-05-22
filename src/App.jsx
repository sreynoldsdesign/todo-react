import { useState } from "react";

function App() {
  const [filter, setFilter] = useState("all");
  const [input,setInput] = useState("");
  const [tasks, setTasks] = useState([]);
  
  function addTask(){
    if (input.trim() === "") return;

    const newTask = {
      id: Date.now(),
      text: input,
      completed: false
    };

    setTasks([...tasks,newTask]);
    setInput("");
  }

  function deleteTask(id){
    const filteredTasks = tasks.filter(task => task.id !== id);
    setTasks(filteredTasks);
  }

  function toggleTask(id) {
    const updatedTasks = tasks.map(
      task => task.id === id
      ? {...task, completed: !task.completed}
      : task
    );

    setTasks(updatedTasks);
  }

  const filteredTasks = tasks.filter(task => {
    if (filter === "active") {
      return !task.completed;
    }
    if (filter === "completed") {
      return task.completed;
    }
    return true;
  });

  return (
    <div>
      <h1>Todo App</h1>

      <input type="text" name="" id="" value={input} onChange={(e) => setInput(e.target.value)}/>

      <button onClick={addTask}>Add Task</button>

      <div>
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("active")}>Active</button>
        <button onClick={() => setFilter("completed")}>Completed</button>
      </div>

      <ul>
        {filteredTasks.map((task) => (
          <li key={task.id}>
            <span onClick={() => toggleTask(task.id)} style={{textDecoration: task.completed ? "line-through" : "none", cursor: "pointer"}}>
              {task.text}
            </span>

            <button onClick={() => deleteTask(task.id)}>Delete</button>
            </li>))}
      </ul>
    </div>
  );
}

export default App;