import React from 'react';

class Modal extends React.Component {

    render() {
        return(
            <div className="Modal-container">
                <div className="Modal">Modal</div>
                <div className="Modal-overlay" onClick={(e) => this.props.onClick()}></div>
            </div>
        )
    }
}

export default Modal;