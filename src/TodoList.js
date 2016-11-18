import React, { Component } from 'react';
import Todo from './Todo';

class TodoList extends Component{

    render() {
        const {
            todos,
            handleDeleteTodo,
            handleEditTodo,
            handleSaveTodo,
            handleCancelEditTodo,
            editing
        } = this.props;

        const todoList = todos.map((todo, i) => (
            <Todo
                key={todo.id}
                text={todo.text}
                done={todo.done}
                editing={editing === todo.id}
                handleDeleteTodo={()=>handleDeleteTodo(todo)}
                onEditTodo={()=>handleEditTodo(todo.id)}
                onSaveTodo={text=>handleSaveTodo(todo.id, text)}
                onCancelEditTodo={()=>handleCancelEditTodo()}
            />
        ));
        return (
            <div className="todo-app__main">
                <div className="toggle-all" />
                <ul className="todo-list">
                    {todoList}
                </ul>
            </div>
        );
    }
}

export default TodoList;
