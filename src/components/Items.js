import React, { Component } from 'react';

class Items extends Component {

    render() {
        const {
            cin,
            out,
            last
        } = this.props;

        return (
            <tr>
                <td>{cin}</td>
                <td>{out}</td>
                <td>{last}</td>
            </tr>
        )
    }
}

export default Items;
