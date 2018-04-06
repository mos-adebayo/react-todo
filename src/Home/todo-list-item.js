import React from 'react';
import {
} from 'reactstrap';

const TodoListItem = ({task}) => {
    return (
        <ul>
            {task.map((item, key) =>
                <li key={key}> { item } </li>
            )}
        </ul>
    )
};

export default TodoListItem;