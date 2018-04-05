import React, { Component } from 'react';
import { Button } from  'reactstrap';
import './Home.css';

class Home extends Component {
    render () {
        return (
            <div className="container">
                <section className="section">
                    <div className="container">
                        <h1 className="title">ToDos</h1>
                        <h2 className="subtitle">A simple App to demonstrate React with Online DB</h2>
                    </div>
                </section>
            </div>
        )
    }
}

export default Home;
