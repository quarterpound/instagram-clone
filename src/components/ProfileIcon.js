import React from "react";
import sample from '../assets/profile.jpg';
import "./ProfileIcon.css";

class ProfileIcon extends React.Component {
    render() {
        return (
            <div className="profileIcon" style={{backgroundImage: `url(${sample})`, width: (this.props.width) ? this.props.width : "25px", height: (this.props.width) ? this.props.width : "25px"}}>
            </div>
        )
    }
}

export default ProfileIcon;