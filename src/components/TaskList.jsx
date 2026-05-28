import TaskItem from "./TaskItem";


function TaskList({ tasks, handleDeleteTask, toggleTask, handleUpdateTask}) {
    if (tasks.length === 0) {
        return <p style={{ textAlign: "center" }}>No tasks</p>;
    }
    return (
        <ul>
            {tasks.map((task) => (
                <TaskItem key={task.id} task={task} handleDeleteTask={handleDeleteTask} toggleTask={toggleTask} handleUpdateTask={handleUpdateTask}/>
            ))}
        </ul>
    );

    
}

export default TaskList;