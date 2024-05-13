import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import React, { Component } from 'react';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      inputValue: '',
    };
  }

  handleAddTodo = () => {
    const { inputValue, todos } = this.state;
    if (inputValue.trim() !== '') {
      this.setState({
        todos: [...todos, inputValue],
        inputValue: '',
      });
    }
  };

  handleDeleteTodo = (index) => {
    const newTodos = [...this.state.todos];
    newTodos.splice(index, 1);
    this.setState({ todos: newTodos });
  };

  handleUpdateTodo = (index, newValue) => {
    const newTodos = [...this.state.todos];
    newTodos[index] = newValue;
    this.setState({ todos: newTodos });
  };

  render() {
    const { todos, inputValue } = this.state;
    return (
      <div>
        <h1>To-Do List</h1>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => this.setState({ inputValue: e.target.value })}
        />
        <button onClick={this.handleAddTodo}>Add</button>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>
              {todo}
              <button onClick={() => this.handleUpdateTodo(index, prompt('Enter new value:', todo))}>
                Update
              </button>
              <button onClick={() => this.handleDeleteTodo(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoList;
