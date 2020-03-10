import React from 'react';
import ProfileIcon from '../ProfileIcon';
import "./ProfileArea.css";

class ProfileArea extends React.Component {
    render() {
        return (
            <div className="profileArea">
                <div><ProfileIcon width="50px" /></div>
                <div><span style={{fontWeight: "bolder", fontSize: '10pt'}}>gasimzadeali</span><br /><span style={{fontSize: '10pt', color: 'gray'}}>Ali Gasimzade</span></div>
            </div>
        )
    }
}

export default ProfileArea;