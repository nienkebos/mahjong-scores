import React from 'react';

import './Header.css';

import Wind from './Wind';
import Player from './Player';
import RegisterPlayer from './RegisterPlayer';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            player: '',
        }

        // Bind 'this' to the current component
        this.registerPlayer = this.registerPlayer.bind(this);
    }

    registerPlayer(player) {
        this.setState({player})
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
                <Wind onWindChange={this.props.onWindChange}/>
            </div>
        );
    }
}

export default Header;