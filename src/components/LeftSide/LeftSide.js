import React from 'react';
import ProfileArea from './ProfileArea';
import Stories from './Stories';
import Story from './Story';
import Footer from './Footer';

import "./LeftSize.css";

class LeftSide extends React.Component {
    render() {
        return (
            <div className="storiesDivOuter">
                <ProfileArea />
                <Stories title="Stories">
                    <Story />
                    <Story />
                    <Story />
                    <Story />
                    <Story />
                    <Story />
                    <Story />
                    <Story />
                </Stories>
                <Stories title="Suggestions For You" style={{overflowY: 'hidden'}}>
                    <Story />
                    <Story />
                    <Story />
                </Stories>
                <Footer />
            </div>
        )
    }
}

export default LeftSide