import React from 'react';
import ProfileIcon from '../ProfileIcon';
import "./Story.css";

class Story extends React.Component {
    render() {
        return (
            <div className="storyOuter">
                <div className="storyGradient">
                    <div className="storyGradientInner">
                        <ProfileIcon width="35px" src={`https://randomuser.me/api/portraits/men/${this.props.index + 10}.jpg`} />
                    </div>
                </div>
                <div>
                    <span style={{fontWeight: 'bolder', fontSize: '10pt'}}>{this.props.username}</span><br/>
                    <span style={{color: 'gray', fontSize: '10pt'}}>{this.props.hrs} hours ago</span>
                </div>
            </div>
        )
    }
}

export default Story;