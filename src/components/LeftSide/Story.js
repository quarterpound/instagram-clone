import React from 'react';
import ProfileIcon from '../ProfileIcon';
import "./Story.css";

class Story extends React.Component {
    render() {
        return (
            <div className="storyOuter">
                <div className="storyGradient">
                    <div className="storyGradientInner">
                        <ProfileIcon width="35px" />
                    </div>
                </div>
                <div>
                    <span style={{fontWeight: 'bolder', fontSize: '10pt'}}>gasimzadeali</span><br/>
                    <span style={{color: 'gray', fontSize: '10pt'}}>11 hours ago</span>
                </div>
            </div>
        )
    }
}

export default Story;