import React, { Component } from "react";
import './Header.scss';

class Header extends Component {

    componentDidMount(){
    }

    render(){
        return (
            <div className='header'>
                <div className='header-container'>
                    <div style={{display: 'flex'}}>
                        <div className='header-logo'>I am Logo</div>
                        <div className='header-section'>Section</div>
                    </div>
                    <div style={{display: 'flex'}}>
                        <div className='header-action'>Button</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;