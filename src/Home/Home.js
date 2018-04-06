import React, { Component } from 'react';
import { Button } from  'reactstrap';
import './Home.css';
import TodoPanel from "./todo-panel";
import TodoList from "./todo-list";

class Home extends Component {
    constructor (props){
        super(props);
        this.state = {
            currentTask: '',
            tasks: [],
            allTasks: [],
        };
    }
    processTaskEntered = (task_) => {
        this.setState({currentTask: task_.target.value});
    };
    processTaskSubmit = (event) => {
        event.preventDefault();
        const { currentTask, tasks } = this.state;
        this.setState({tasks: [currentTask, ...tasks ]});
        this.resetForm();
    };
    saveTaskEntered = (event) => {
        event.preventDefault();
        const {  tasks, allTasks } = this.state;
        this.setState({allTasks: [tasks, ...allTasks ], tasks: []});
        // this.resetForm();
    };
    resetForm = () => {
      this.setState({currentTask: ''});
    };
    render () {
        const { currentTask, tasks, allTasks } = this.state;
        return (
            <div className="container">
                <section className="section">
                    <div className="container">
                        <TodoPanel taskEntered={currentTask} onTaskEntered={this.processTaskEntered} onTaskSubmit={this.processTaskSubmit} onSaveTask={this.saveTaskEntered}/>

                        <p className="small ml-3">
                            { tasks.join(', ') }
                        </p>

                        <TodoList tasks={allTasks}/>
                    </div>
                </section>
            </div>
        )
    }
}

export default Home;
