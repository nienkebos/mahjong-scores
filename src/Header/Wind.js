
import React from "react";

class Wind extends React.Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.onWindChange(e.target.value)
    }

    render() {
        return (
            <div className="wind-component">
                <label>Choose your wind:
                    <select onChange={this.handleChange}>
                        <option value="East">East</option>
                        <option value="South">South</option>
                        <option value="West">West</option>
                        <option value="North">North</option>
                    </select>
                </label>
            </div>
        );
    }
}

export default Wind;