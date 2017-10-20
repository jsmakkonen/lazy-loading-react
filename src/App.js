import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';

import NotFound from './NotFound/NotFound';
import './App.css';
import createBrowserHistory from 'history/createBrowserHistory';
import asyncComponent from './AsyncComponent';

const Home = asyncComponent(() =>
  import('./Home/Home').then(module => module.default)
)

const Blog = asyncComponent(() =>
import('./Blog/Blog').then(module => module.default)
)

const About = asyncComponent(() =>
import('./About/About').then(module => module.default)
)

const history = createBrowserHistory();

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div>
          <header className="header">
            <nav className="navbar container">
              <div className="navbar-left">
                <Link to="/">
                <span className="navbar-item"> React Lazy Loading </span>
                </Link>
              </div>
              <div className="navbar-right">
                <Link to="/blog">
                <span className="navbar-item"> Blog </span>
                </Link>
                <Link to="/about">
                <span className="navbar-item"> About </span>
                </Link>
              </div>
            </nav>
          </header>
          <section className="content">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/blog" component={Blog} />
              <Route path="/about" component={About} />
              <Route path="*" component={NotFound} />
            </Switch>
          </section>
        </div>
      </Router>
    );
  }
}

export default App;
