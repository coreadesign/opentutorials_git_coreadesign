import React, { Component } from 'react';

class Todo extends Component {
    componentDidUpdate() {
        if(this.props.editing) { this._textInput.focus(); }
    }
    onFocus(e) {
        this._textInput.value = this.props.text;
    }
    onKeyDown(e) {
        const text = this._textInput.value;
        if( !text || e.keyCode !== 13) return;
        this.props.onSaveTodo(text);
    }

    render() {
        const {
            text,
            done,
            handleDeleteTodo,
            onEditTodo,
            onSaveTodo,
            onCancelEditTodo,
            editing
        } = this.props;

        return (
            <li className={`todo-item${editing ? ' editing' : ''}${done ? ' completed' : ''}`}>
                <div className="toggle" />
                <div className="todo-item__view">
                    <div
                        className="todo-item__view__text"
                        onDoubleClick={onEditTodo}
                    >
                        {text}
                    </div>
                    <button
                        className="todo-item__destroy"
                        onClick={handleDeleteTodo}
                    />
                </div>
                <input
                    className="todo-item__edit"
                    type="text"
                    ref={ref => { this._textInput = ref; }}
                    onFocus={e=> this.onFocus(e)}
                    onKeyDown={e=> this.onKeyDown(e)}
                    onBlur={onCancelEditTodo}
                />
            </li>
        );
    }
}

export default Todo;
