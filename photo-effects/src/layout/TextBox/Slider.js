import React, { Component } from 'react';

import InputRange from 'react-input-range';

import 'react-input-range/lib/css/index.css';

import './SliderStyle.css'

export class Slider extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: 30
        };
    }

    getValue=value=>{
        this.setState({value})
        this.props.sliderValue(value)
    }
    
    render() {
        return (
            <div style={{marginTop: '30px', height: '50px', width: '200px',display: 'flex', flexDirection: 'column', }}>
                <InputRange
                    style= {{backgroundColor: 'red'}}
                    maxValue={180}
                    minValue={0}
                    value={this.state.value}
                    onChange={value => this.getValue( value )}
                    onChangeComplete={value => this.getValue(value) }

            
                />
           </div>
        )
    }
}

export default Slider


