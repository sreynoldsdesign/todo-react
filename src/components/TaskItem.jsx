import { useState} from "react";

function TaskItem({ task, handleDeleteTask, toggleTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(task.text);  

  function handleEditTask(id){
    setIsEditing(!isEditing);
  }
  
  return (
      <li>
        {isEditing ? (
          <input value={editText} onChange={(e) => setEditText(e.target.value)} />
        ):(
        <span
          onClick={() => toggleTask(task.id)}
          style={{
            textDecoration: task.completed ? "line-through" : "none",
            cursor: "pointer"
          }}
        >
          {task.text}
        </span>
        )}
  
        <button onClick={() => handleEditTask(task.id)}>
          Edit
        </button>
        <button onClick={() => handleDeleteTask(task.id)}>
          Delete
        </button>
      </li>
    );
  }
  
  export default TaskItem;