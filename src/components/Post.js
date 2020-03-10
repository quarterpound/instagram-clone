import React from 'react';
import SVGIcon from './SVGIcon';
import settings from '../assets/icons/settings.svg';
import heart from '../assets/icons/heart.svg';
import heartLiked from '../assets/icons/heart_full.svg';
import share from '../assets/icons/paper-plane.svg';
import comment from '../assets/icons/chat-2.svg';
import bookmark from '../assets/icons/book.svg';
import users from '../data/users';


import ProfileIcon from './ProfileIcon';

import './Post.css';

class Post extends React.Component {
    constructor (props) {
        super(props);
        this.post = this.props.post;
        this.state = {
            postText: (() => {
                const words = this.post.postText.split(" ")
                if(words.length > 10) {
                    return words.slice(0, 9).join(" ") + words[10] + "..."
                }
            })(),
            isTextShort: true,
            isLiked: this.post.postLiked,
            likeCount: this.post.postLikes,
        }
    }


    render() {
        return (
            <div className="postOuter">
                <div className="postUserInfo">
                    <span><ProfileIcon src={`https://randomuser.me/api/portraits/men/${this.post.postAuthor - 1}.jpg`} /></span>
                    <span style={{justifySelf: 'start', fontWeight: 'bold'}}>{users[this.post.postAuthor - 1].username}</span>
                    <span style={{justifySelf: 'end'}}> <SVGIcon icon={settings} /> </span>
                </div>
                <div className="postImage">
                    <img src={this.post.postImage} style={{width: "100%"}} alt="2 ladies" /> 
                </div>
                <div className="postBar">
                    <div className="postBarInner">
                        <div style={{justifySelf: 'start'}}>
                            <ul className="postCommands">
                                <li> {(!this.state.isLiked) ? <SVGIcon onClick={() => {this.setState({isLiked: true, likeCount: this.state.likeCount+1})}} icon={heart} /> : <SVGIcon onClick={() => {this.setState({isLiked: false, likeCount: this.state.likeCount-1})}} icon={heartLiked} />} </li>
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
                            <span>Liked by</span>
                            &nbsp;
                            <span className="postUsername">{this.state.likeCount} people</span>
                        </div>
                    </div>
                </div>
                <div className="postLikes">
                    <span className="postUsername">{users[this.post.postAuthor - 1].username} &nbsp;</span>
                    <span>
                        {
                            this.state.postText
                        }
                        {
                            (() => {
                                if(this.state.isTextShort) {
                                    const words = this.post.postText.split(" ")
                                    if(words.length > 10) {
                                        return (<span style={{color: 'gray', cursor: 'pointer'}} onClick={(() => this.setState({isTextShort: false, postText: this.post.postText}))}>&nbsp;more</span>)
                                    }
                                }
                            })()
                        }
                    </span>
                </div>
            </div>
        )
    }
}

export default Post;