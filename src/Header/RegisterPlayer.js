import React from 'react';

class RegisterPlayer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            player: '',
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit= (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.player);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" 
                    placeholder="Insert name"
                    value={this.state.player}
                    onChange={(event) => this.setState({player: event.target.value})} />
                <input type="submit" value="Submit"/>
            </form>
        )
    }
}

export default RegisterPlayer;