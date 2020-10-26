import React, {useState} from 'react';

function TodoItem(props) {

    const [checked, setChecked] = useState(false);

    const handleChecked = () => {
        setChecked(!checked);
    }

    const handleDelete = () => {
        props.deleteItem(props.name);
    }

    return (
        <div className="todo_item">
            <input id="check" type="checkbox" onClick={handleChecked}></input>
            <label id="check_label" htmlFor="check" style={{textDecoration: checked && "line-through", color: checked && "#444"}}>{props.name}</label>
            <button id="todoitem_close_button" onClick={handleDelete}>X</button>
        </div>
    )
}

export default TodoItem;
