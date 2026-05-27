import TaskItem from "./TaskItem";


function TaskList({ tasks, handleDeleteTask, toggleTask}) {
    if (tasks.length === 0) {
        return <p style={{ textAlign: "center" }}>No tasks yet</p>;
    }
    return (
        <ul>
            {tasks.map((task) => (
                <TaskItem key={task.id} task={task} handleDeleteTask={handleDeleteTask} toggleTask={toggleTask} />
            ))}
        </ul>
    );

    
}

export default TaskList;