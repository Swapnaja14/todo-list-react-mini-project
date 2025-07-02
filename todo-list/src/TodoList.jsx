import { useState } from "react";

export default function TodoList() {
    let [todos, setTodos] = useState(["sample task"]);
    let [newTodo, setNewTodo] = useState("");

    let addNewTask = () => {
        setTodos([...todos, newTodo]);
        setNewTodo("");
    }

    let updateTodoValue = (event) => {
        setNewTodo(event.target.value);
    }

    return(
        <div>
        <input placeholder="add a task"
        value={newTodo}
        onChange={updateTodoValue}></input>
        <button onClick={addNewTask}>Add Task</button>

        <br></br><br></br>
        <h3 >Add Todo</h3>
        <ul>
            {
                todos.map((todo) => (
                    <li>{todo}</li>
                ))
            }
        </ul>
        </div>
    );
}