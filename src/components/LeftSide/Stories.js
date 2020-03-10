import React from 'react';
import Story from './Story';
import './Stories.css';

class Stories extends React.Component {
    render() {
        return (
            <div className="storiesOuter">
                <div className="storiesBar">
                    Stories
                </div>
                <div className="stories">
                    <Story />
                    <Story />
                    <Story />
                    <Story />
                    <Story />
                    <Story />
                    <Story />
                    <Story />
                    <Story />
                    <Story />
                </div>
            </div>
        )
    }
}

export default Stories;