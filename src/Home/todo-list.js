import React from 'react';
import {
    Form, FormGroup, Label, Row, Input, Button
} from 'reactstrap';

const TodoPanel = ({taskEntered, onTaskEntered, onTaskSubmit}) => {
    return (
        <Form onSubmit={onTaskSubmit}>
            <Input className="mb-2" value={taskEntered} type="text" placeholder="What's your task?" onChange={onTaskEntered}/>
        </Form>
    )
};

export default TodoPanel;