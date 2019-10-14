import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from '@/pages/header/Header';
import Landpage from '@/pages/landpage/Landpage';
import MatchLobby from '@/pages/matchlobby/MatchLobby';

import './initiate.scss';
import './index.scss';

class ESplatform extends Component {

    render() {
        return (
            <div className="main">
                <Header/>
                <div style={{paddingTop: 60, height: '100%', width: '100%', background: '#000'}}>
                    <Router basename={'/'}>
                        <Switch>
                            <Route exact path='/' component={Landpage}/>
                            <Route path='/eslobby' component={MatchLobby}/>
                        </Switch>
                    </Router>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<ESplatform />, document.getElementById('root'));