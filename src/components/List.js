import React, { Component } from 'react';
import Items from './Items';

class List extends Component {

    render() {

        const adata = this.props.data;
        const todoList = adata.map((v, i) => (
            <Items
                init={v.init}
                out={v.out}
                rest={v.rest}
                key={i}
            />
        ));

        return (
            <table>
            <thead>
                <tr>
                    <th>입금</th>
                    <th>출금</th>
                    <th>잔액</th>
                </tr>
            </thead>
            <tbody>
                {todoList}
            </tbody>
            </table>
        )
    }

}

export default List;
