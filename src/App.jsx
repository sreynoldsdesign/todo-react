import { useState, useEffect } from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";

function App() {
  const [filter, setFilter] = useState("all");
  const [input,setInput] = useState("");
  const [tasks, setTasks] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  
  const handleAddTask = () => {
    if (input.trim() === "") return;

    setTasks([...tasks, {
      id: Date.now(),
      text: input,
      completed: false
    }]);

    setInput("");
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

  const filteredTasks = tasks.filter(task => {
    if (filter === "active") {
      return !task.completed;
    }
    if (filter === "completed") {
      return task.completed;
    }
    return true;
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
    <div>
      <TaskInput
        input={input}
        setInput={setInput}
        handleAddTask={handleAddTask}
      />

    <div>
      <button onClick={() => setFilter("all")}>All</button>
      <button onClick={() => setFilter("active")}>Active</button>
      <button onClick={() => setFilter("completed")}>Completed</button>
    </div>

      <TaskList
        tasks={filteredTasks}
        handleDeleteTask={handleDeleteTask}
        toggleTask={toggleTask}
      />
    </div>
  );
}

export default App;