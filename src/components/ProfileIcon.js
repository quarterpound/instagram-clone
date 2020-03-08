import React from "react";
import sample from '../assets/profile.jpg';
import "./ProfileIcon.css";

class ProfileIcon extends React.Component {
    render() {
        return (
            <div className="profileIcon" style={{backgroundImage: `url(${sample})`}}>
            </div>
        )
    }
}

export default ProfileIcon;