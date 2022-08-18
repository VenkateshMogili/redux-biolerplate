import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import { Provider } from 'react-redux';

import Posts from './components/Posts';
import Postform from './components/Postform';
import store from './store';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
//import {v4 as uuidv4} from 'uuid';
import About from './components/pages/About';
import axios from 'axios';

class App extends React.Component {
  state = {
    todos: []
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(res => this.setState({ todos: res.data }))
  }

  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo;
      })
    });
  }

  //delete todo
  delTodo = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res => this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] }));
    // this.setState({todos: [...this.state.todos.filter(todo=>todo.id!==id)]});
  }

  //add Todo
  addTodo = (title) => {
    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title,
      completed: false
    })
      .then(res => this.setState({ todos: [...this.state.todos, res.data] }))
    // const newTodo ={
    //   id: uuidv4(),
    //   title,
    //   completed: false
    // }
    // this.setState({todos: [...this.state.todos,newTodo]})
  }
  render() {
    return (
      <Router>
        <Provider store={store}>
          <div className="App">
            <div className="container">
              <Header />
              <Route exact path="/" render={props => (
                <React.Fragment>
                  <AddTodo addTodo={this.addTodo} />
                  <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
                </React.Fragment>
              )} />
              <Route exact path="/redux" render={props => (
                <React.Fragment>
                  <Postform />
                  <hr />
                  <Posts />
                </React.Fragment>
              )} />
              <Route path="/about" component={About} />
            </div>
          </div>
        </Provider>
      </Router>
    );
  }
}

export default App;
