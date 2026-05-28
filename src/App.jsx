import { useState, useEffect } from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";

function App() {
  const [filter, setFilter] = useState("all");
  const [input,setInput] = useState("");
  const [tasks, setTasks] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  
  const handleAddTask = () => {
    if (input.trim() === "") return;

    setTasks([...tasks, {
      id: Date.now(),
      text: input,
      completed: false
    }]);

    setInput("");
  }

  function handleUpdateTask(id,editText){
    const updatedTasks = tasks.map(
      task => task.id === id
      ? task.text=editText
      : task
    );
  } 

  function handleDeleteTask(id){
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

  const filteredTasks = tasks
    .filter(task => {
      if (filter === "completed") return task.completed
      if (filter === "active") return !task.completed
      return true
    })
    .filter(task => {
      return task.text.toLowerCase().includes(searchTerm.toLowerCase())
    });

  useEffect(()=> {
    const savedTasks = localStorage.getItem("tasks");

    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }

    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (!isLoaded) return;
    localStorage.setItem("tasks",JSON.stringify(tasks));
  },[tasks, isLoaded]);

  return (
    <div className="app-container">
      <TaskInput
        input={input}
        setInput={setInput}
        handleAddTask={handleAddTask}
      />

    <div className="filter-buttons">
      <button style= {{background: filter === "all" ? "#cbd5e1": ""}} onClick={() => setFilter("all")}>All</button>
      <button style= {{background: filter === "active" ? "#cbd5e1": ""}} onClick={() => setFilter("active")}>Active</button>
      <button style= {{background: filter === "completed" ? "#cbd5e1": ""}} onClick={() => setFilter("completed")}>Completed</button>
    </div>

    <input
      type="text"
      placeholder="Search tasks..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />


      <TaskList
        tasks={filteredTasks}
        handleDeleteTask={handleDeleteTask}
        toggleTask={toggleTask}
        handleUpdateTask={handleUpdateTask}
      />
    </div>
  );
}

export default App;