import React, { Component } from 'react';
import { Button } from  'reactstrap';
import './Home.css';
import TodoPanel from "./todo-panel";

class Home extends Component {
    constructor (props){
        super(props);
        this.state = {
            currentTask: '',
            tasks: []
        };
    }
    processTaskEntered = (task_) => {
        this.setState({currentTask: task_.target.value});
    };
    processTaskSubmit = (event) => {
        event.preventDefault();
        const { currentTask, tasks } = this.state;
        this.setState({tasks: [...tasks, currentTask ]});

    };
    render () {
        const { currentTask } = this.state;
        return (
            <div className="container">
                <section className="section">
                    <div className="container">
                        <TodoPanel taskEntered={currentTask} onTaskEntered={this.processTaskEntered} onTaskSubmit={this.processTaskSubmit}/>
                    </div>
                </section>
            </div>
        )
    }
}

export default Home;
