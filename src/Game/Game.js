import React from 'react';

import './Game.css';

import GameRack from './GameRack';
import Modal from './Modal'


class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
        }
        this.showModal = this.showModal.bind(this);
    }

    showModal() {
        this.setState({
            showModal: !this.state.showModal
        })
    }

    render() {
        return(
            <div className="Game">
                <GameRack onClick={this.showModal} />
                <GameRack onClick={this.showModal} />
                <GameRack onClick={this.showModal} />

                { this.state.showModal && <Modal onClick={this.showModal}/>  }
            </div>
        )
    }
}

export default Game;