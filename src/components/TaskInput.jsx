function TaskInput({ input, setInput, handleAddTask}) {
    return(
        <div>
            <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Add a task" />
            <button onClick={handleAddTask}>Add</button>
        </div>
    );
}

export default TaskInput;