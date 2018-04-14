import React from 'react';

import './Header.css';

import Wind from './Wind';
import Player from './Player';
import RegisterPlayer from './RegisterPlayer';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            wind: '',
            player: '',
        }

        this.selectWind = this.selectWind.bind(this);
        this.registerPlayer = this.registerPlayer.bind(this);
    }

    selectWind(wind) {
        this.setState({wind: wind})
    }

    registerPlayer(player) {
        this.setState({player: player})
    }
    
    render() {
        return (
            <div className="header">
                <div className="player-component">
                { this.state.player ? 
                    <Player name={this.state.player}/> : 
                    <RegisterPlayer onSubmit={this.registerPlayer} /> 
                }
                </div>
                <Wind onWindChange={this.selectWind}/>
            </div>
        );
    }
}

export default Header;