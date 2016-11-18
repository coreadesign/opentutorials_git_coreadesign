import React, { Component } from 'react';

class Items extends Component {

    render() {
        const {
            init,
            out,
            rest
        } = this.props;

        return (
            <tr>
                <td>{init}</td>
                <td>{out}</td>
                <td>{rest}</td>
            </tr>
        )
    }
}

export default Items;
