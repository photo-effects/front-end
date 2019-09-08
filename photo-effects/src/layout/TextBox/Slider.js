import React, { Component } from 'react';

import InputRange from 'react-input-range';

import 'react-input-range/lib/css/index.css'

export class Slider extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: 5
        };
    }

    
    render() {
        return (
            <div style={{marginTop: '30px', height: '50px', width: '200px',display: 'flex', flexDirection: 'column', }}>
                <InputRange
                    maxValue={100}
                    minValue={0}
                    value={this.state.value}
                    onChange={value => this.setState({ value })}
                    onChangeComplete={value => console.log(value)}

            
                />
           </div>
        )
    }
}

export default Slider


