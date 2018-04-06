import React from 'react';
import {
    Form, Row, Col, Container, Button, FormGroup, Label, Input
} from 'reactstrap';

const TodoPanel = ({taskEntered, onTaskEntered, onTaskSubmit, onSaveTask}) => {
    return (
        <div>
            <Form onSubmit={onTaskSubmit}>
                <Container>
                    <Row>
                        <Col sm={10}>
                            <FormGroup>
                                <Input className="mb-1" value={taskEntered} type="text" placeholder="What's your task?" onChange={onTaskEntered}/>
                            </FormGroup>
                        </Col>
                        <Col sm={2}>
                            <Button color="primary" onClick={onSaveTask}>Save</Button>
                        </Col>
                    </Row>
                </Container>
            </Form>
        </div>
    )
};

export default TodoPanel;