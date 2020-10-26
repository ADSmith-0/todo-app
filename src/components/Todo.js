import React, {useState} from 'react';
import TodoList from './TodoList';

function Todo(props) {

    const [todos, setTodos] = useState([]);

    const handleClick = (event) => {
        if(document.getElementById('new_todo').value !== ""){
            setTodos(todos => [...todos, document.getElementById('new_todo').value]);
            document.getElementById('new_todo').value = "";
        }
    }

    const deleteItem = (name) => {
        setTodos(todos.filter(todo => todo !== name));
    }

    return (
        <div id="page">
            <div id="todo_input">   
                <input id="new_todo" type="text" placeholder="New Todo"></input>
                <button id="add_button" className="animate_click" onClick={handleClick}>Add</button>
            </div>
            <TodoList todos={todos} deleteItem={deleteItem}/>
        </div>
        
    )
}

export default Todo;
