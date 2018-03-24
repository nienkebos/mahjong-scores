import React from 'react';

class Header extends React.Component {
    divStyle = {
        border: 'solid 1px red',
    };
    render() {
        return (
            <div style={this.divStyle}>
                <label>Choose your wind:
                    <select>
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

export default Header;