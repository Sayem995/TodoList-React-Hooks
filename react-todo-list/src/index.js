import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import App from './App';
import TaskDetail from './components/TaskDetail';
import TaskList from './components/TaskList';

import * as serviceWorker from './serviceWorker';

const routing = (
  <router>
    <div>
      <Route path="/" component={App} />
      <Route path="/todo-list" component={TodoList} />
      <Route path="/about-us" component={AboutUs} />

    </div>
  </router>
)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
