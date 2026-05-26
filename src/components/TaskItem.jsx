function TaskItem({ task, handleDeleteTask, toggleTask }) {
    return (
      <li>
        <span
          onClick={() => toggleTask(task.id)}
          style={{
            textDecoration: task.completed ? "line-through" : "none",
            cursor: "pointer"
          }}
        >
          {task.text}
        </span>
  
        <button onClick={() => handleDeleteTask(task.id)}>
          Delete
        </button>
      </li>
    );
  }
  
  export default TaskItem;