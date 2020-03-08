import React from 'react';
import SampleImage from '../assets/sample.jpg';
import SVGIcon from './SVGIcon';
import settings from '../assets/icons/settings.svg';
import heart from '../assets/icons/heart.svg';
import share from '../assets/icons/paper-plane.svg';
import comment from '../assets/icons/chat-2.svg';
import bookmark from '../assets/icons/book.svg';


import ProfileIcon from './ProfileIcon';

import './Post.css';

class Post extends React.Component {
    render() {
        return (
            <div className="postOuter">
                <div className="postUserInfo">
                    <span><ProfileIcon /></span>
                    <span style={{justifySelf: 'start', fontWeight: 'bold'}}>gasimzadeali</span>
                    <span style={{justifySelf: 'end'}}> <SVGIcon icon={settings} /> </span>
                </div>
                <div className="postImage">
                    <img src={SampleImage} style={{width: "100%"}} /> 
                </div>
                <div className="postBar">
                    <div className="postBarInner">
                        <div style={{justifySelf: 'start'}}>
                            <ul className="postCommands">
                                <li> <SVGIcon icon={heart} /> </li>
                                <li> <SVGIcon icon={comment} /> </li>
                                <li> <SVGIcon icon={share} /> </li>
                            </ul>
                        </div>
                        <div style={{justifySelf: 'end'}}>
                            <SVGIcon icon={bookmark} />
                        </div>
                    </div>
                </div>
                <div className="postLikes">
                    <div className="postLikesInner">
                        <div> 
                            <span> <ProfileIcon /> </span>
                        </div>
                        <div>
                            <span>Liked by</span>
                            &nbsp;
                            <span className="postUsername">phalangeei</span>
                            &nbsp;
                            and 
                            &nbsp;
                            <span className="postUsername">666 others</span>
                        </div>
                    </div>
                </div>
                <div className="postLikes">
                    <span className="postUsername">gasimzadeali &nbsp;</span>
                    <span>The girl on the left is mine and she is the cutest lady in the world</span>
                </div>
            </div>
        )
    }
}

export default Post;