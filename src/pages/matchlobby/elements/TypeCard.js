import React, { Component } from "react";
import './TypeCard.scss';

class TypeCard extends Component {

    componentDidMount(){
    }

    render(){
        return (
            <div className='tc-box'>
                <div className='tc-box-left'>
                    <div>icon</div>
                    <div>All Matches</div>
                </div>
                <div className='tc-box-right'>128</div>
            </div>
        )
    }
}

export default TypeCard;