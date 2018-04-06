import React, { Component } from 'react';
import { BrowserRouter as Router ,
            Route, Switch, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

//Import App Components
import Home from './Home/Home';
// import User from './User';
// import NotFound from './NotFound';


//
import createBrowserHistory from 'history/createBrowserHistory';
const history = createBrowserHistory();

class App extends Component {
  render() {
    return (
        <Router history={history}>
            <div>
                <header className={'header'}>
                    <nav className={'navbar container'}>
                        <div className={'navbar-brand'}>
                            <Link to={'/'}>
                                <span>2D</span>
                            </Link>
                        </div>

                        <div className={'navbar-end'}>
                            <Link to={'/'}>
                                <span className={'navbar-item'}>Home</span>
                            </Link>
                        </div>
                        {/*<div className={'navbar-end'}>*/}
                            {/*<Link to={'user'}>*/}
                                {/*<span className={'navbar-item'}>User</span>*/}
                            {/*</Link>*/}
                        {/*</div>*/}
                    </nav>
                </header>

                <section className={'content'}>
                    <switch>
                        <Route exact path="/" component={Home}/>
                    </switch>
                </section>
            </div>
        </Router>

    );
  }
}

export default App;
