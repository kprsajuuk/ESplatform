import React, { Component } from "react";
import TypeCard from "./elements/TypeCard";
import './MatchLobby.scss';

class MatchLobby extends Component {

    componentDidMount(){
    }

    render(){
        return (
            <div className='ml-main'>
                <div className='ml-sider'>
                    <TypeCard/>
                </div>
                <div className='ml-list'>

                </div>
            </div>
        )
    }
}

export default MatchLobby;