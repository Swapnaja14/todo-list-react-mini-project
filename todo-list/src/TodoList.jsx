import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import './TodoList.css'

export default function TodoList() {
    let [todos, setTodos] = useState([{ task: "sample task", id: uuidv4(), isDone: false }]);
    let [newTodo, setNewTodo] = useState("");

    let addNewTask = () => {
        setTodos((prevTodos) => {
            return [...prevTodos, { task: newTodo, id: uuidv4(), isDone: false }]
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
        setTodos((prevTodos) => prevTodos.map((todo) => {
            return {
                ...todo, task: todo.task.toUpperCase(),
            };
        })
        )
    };

    let markAllAsDone = () => {
        setTodos((prevTodos) => prevTodos.map((todo) => {
            return {
                ...todo, isDone: true
            };
        })
        )
    };

    let upperCaseOne = (id) => {
        setTodos((prevTodos) => prevTodos.map((todo) => {
            if (todo.id == id) {
                return {
                    ...todo, task: todo.task.toUpperCase()
                };
            }
            else {
                return todo;
            }
        }))
    }

    let markAsDone = (id) => {
        setTodos((prevTodos) => prevTodos.map((todo) => {
            if (todo.id == id) {
                return {
                    ...todo, isDone: true,
                };
            }
            else {
                return todo;
            }
        }))
    }

    return (
        <div className="todo-container">
            <input placeholder="add a task"
                value={newTodo}
                onChange={updateTodoValue}></input>&nbsp;&nbsp;&nbsp;
            <button onClick={addNewTask}><i className="fi fi-br-plus"></i></button>

            <br></br><br></br>
            <h3>Add Todo</h3>
            <ul>
                {
                    todos.map((todo) => (
                        <li key={todo.id}>
                            <span style={todo.isDone ? { textDecorationLine: "line-through", textDecorationColor: "red" } : {}} > {todo.task}</span>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <button onClick={() => deleteTodo(todo.id)}><i className="fi fi-br-cross"></i></button>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <button onClick={() => upperCaseOne(todo.id)}><i class="fi fi-br-a"></i></button>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <button onClick={() => markAsDone(todo.id)}><i className="fi fi-br-check"></i></button>
                            {/* because of the arrow function, our deleteTodo will not get executed on its own and will get executed only when the button is clicked */}
                        </li>
                    ))
                }
            </ul>
            <br></br>
            <button onClick={upperCaseAll}><i class="fi fi-br-a"></i><i class="fi fi-br-a"></i><i class="fi fi-br-a"></i></button>
                &nbsp;&nbsp;&nbsp;&nbsp;
            <button onClick={markAllAsDone}><i class="fi fi-br-check"></i><i class="fi fi-br-check"></i><i class="fi fi-br-check"></i></button>
        </div>
    );
}