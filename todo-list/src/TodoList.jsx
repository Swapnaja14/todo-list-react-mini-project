import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function TodoList() {
    let [todos, setTodos] = useState([{ task: "sample task", id: uuidv4() }]);
    let [newTodo, setNewTodo] = useState("");

    let addNewTask = () => {
        setTodos((prevTodos) => {
            return [...prevTodos, { task: newTodo, id: uuidv4() }]
        });
        setNewTodo("");
    }

    let deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id != id));
        // filter method will output only those items whose ids are not equal to our passed id
    }

    let updateTodoValue = (event) => {
        setNewTodo(event.target.value);
    }

    let upperCaseAll = () => {
        setTodos((todos) => todos.map((todo) => {
            return {
                ...todo, task: todo.task.toUpperCase(),
            };
        })
        )};

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
                        <li key={todo.id}>
                            <span>{todo.task}</span>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        {/* because of the arrow function, our deleteTodo will not get executed on its own and will get executed only when the button is clicked */}
                        </li>
                    ))
                }
            </ul>
            <br></br>
            <button onClick={upperCaseAll}>Uppercase All</button>
        </div>
    );
}