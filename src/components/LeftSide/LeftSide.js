import React from 'react';
import ProfileArea from './ProfileArea';
import Stories from './Stories';

import "./LeftSize.css";

class LeftSide extends React.Component {
    render() {
        return (
            <div className="storiesDivOuter">
                <ProfileArea />
                <Stories />
            </div>
        )
    }
}

export default LeftSide