import React from 'react';

class GameRack extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className="Game-rack" onClick={(e) => this.props.onClick()} >GameRack</div>
        )
    }
}

export default GameRack;