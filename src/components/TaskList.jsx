import TaskItem from "./TaskItem";

function TaskList({ tasks, handleDeleteTask, toggleTask}) {
    return (
        <ul>
            {tasks.map((task) => (
                <TaskItem key={task.id} task={task} handleDeleteTask={handleDeleteTask} toggleTask={toggleTask} />
            ))}
        </ul>
    );
}

export default TaskList;