import React from 'react';
import './Stories.css';

class Stories extends React.Component {
    render() {
        return (
            <div className="storiesOuter">
                <div className="storiesBar">
                    {this.props.title}
                </div>
                <div className="stories" style={this.props.style}>
                    {
                        this.props.children
                    }
                </div>
            </div>
        )
    }
}

export default Stories;