import React, { Component } from 'react';
import List from './List';
import Top from './Top';

class Contactinfo extends Component {
    constructor() {
        super();
        this.state = {
            todos: [
                {cin: 5000, out: 0, last: 5000},
                {cin: 5000, out: 0, last: 5000}
            ]
        }
    }
    handlePlusTodo(cost, Type) {
        if(!cost) return;
        var newInt, newOut;
        var newTodos =  [...this.state.todos];
        (Type == 1) ? newInt = cost : newOut = Math.abs(cost);
        var newTodos2 = [...this.state.todos, {
            cin:newInt ,out:newOut, last:newTodos[newTodos.length-1].last+cost*1
        }];
        this.setState({ todos: newTodos2 });
    }
    render() {
        return(
            <div>
                <Top handlePlusTodo={(text, type)=>this.handlePlusTodo(text, type)} />
                <List data={this.state.todos} />
            </div>
        )
    }
}

export default Contactinfo;
