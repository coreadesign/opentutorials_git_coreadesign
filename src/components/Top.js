import React, { Component } from 'react';

class Top extends Component {
    constructor() {
        super();
    }

    handleKeyDownPlus(Num) {
        if(isNaN(this._input.value)) {
            alert('숫자만 입력해주세요.');
            return false
        }
        if(Num === 1){
            this.props.handlePlusTodo(this._input.value, 1);
        }else {
            this.props.handlePlusTodo(-(this._input.value), 0);
        }
        this._input.value = '';
    }
    render() {
        const hangle = 0;
        const style = {
          border: '2px solid #000'
        };
        return (
            <div>
                <input
                    id="input1"
                    style={style}
                    ref={ref=>{ this._input=ref }}
                />
                <button onClick={(e)=>this.handleKeyDownPlus(1)}>입금</button>
                <button onClick={(e)=>this.handleKeyDownPlus(2)}>출금</button>
            </div>
        )
    }
}

export default Top;
