import React from 'react';
import { Row, Col, Container,
} from 'reactstrap';
import TodoListItem from "./todo-list-item";

const TodoList = ({tasks}) => {
    return (
        <Container>
            <Row>
                {tasks.map((task, key) =>
                    <Col sm={4}>
                        <div className="card card-block">
                            <TodoListItem task={task} key={key}/>
                        </div>
                    </Col>
                )}
            </Row>
        </Container>
    )
};

export default TodoList;