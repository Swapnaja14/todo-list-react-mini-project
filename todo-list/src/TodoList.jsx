import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function TodoList() {
<<<<<<< HEAD
    let [todos, setTodos] = useState([{ task: "sample task", id: uuidv4() }]);
    let [newTodo, setNewTodo] = useState("");

    let addNewTask = () => {
        setTodos((prevTodos) => {
            return [...prevTodos, { task: newTodo, id: uuidv4() }]
        });
=======
    let [todos, setTodos] = useState([{task: "sample task", id: uuidv4()}]);
    let [newTodo, setNewTodo] = useState("");

    let addNewTask = () => {
        setTodos([...todos, {task: newTodo, id: uuidv4()}]);
>>>>>>> ed63f3bebe2ef8fe48d97345ca5bd182bed237d9
        setNewTodo("");
    }

    let deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id != id));
        // filter method will output only those items whose ids are not equal to our passed id
    }

    let updateTodoValue = (event) => {
        setNewTodo(event.target.value);
    }

    return (
        <div>
            <input placeholder="add a task"
                value={newTodo}
                onChange={updateTodoValue}></input>
            <button onClick={addNewTask}>Add Task</button>

        <br></br><br></br>
        <h3>Add Todo</h3>
        <ul>
            {
                todos.map((todo) => (
                    <li key={todo.id}>{todo.task}</li>
                ))
            }
        </ul>
        </div>
    );
}