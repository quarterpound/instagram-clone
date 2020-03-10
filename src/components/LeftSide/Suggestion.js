import React from 'react';
import ProfileIcon from '../ProfileIcon';
import "./Story.css";

class Suggestion extends React.Component {
    render() {
        return (
            <div className="storyOuter">
                <ProfileIcon width="35px" src={`https://randomuser.me/api/portraits/men/${this.props.index + 15}.jpg`} />
                <div>
                    <span style={{fontWeight: 'bolder', fontSize: '10pt'}}>{this.props.username}</span><br/>
                    <span style={{color: 'gray', fontSize: '10pt'}}>Suggested for you</span>
                </div>
            </div>
        )
    }
}

export default Suggestion;