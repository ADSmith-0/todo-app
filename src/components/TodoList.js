import React, {useEffect, useState} from 'react';
import TodoItem from './TodoItem';

function TodoList(props) {

    const [todos, setTodos] = useState([]);

    useEffect(() => {
        let counter = 0;
        setTodos(props.todos.map(todo => <TodoItem key={counter++} name={todo} deleteItem={props.deleteItem} />));
    }, [props.todos]);

    return (
        <ul id="todo_list">
            {todos}
        </ul>
    )
}

export default TodoList;
