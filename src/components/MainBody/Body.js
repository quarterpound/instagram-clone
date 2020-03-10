import React from 'react';
import Post from '../Post';
import LeftSide from '../LeftSide/LeftSide';
import './Body.css';

import posts from '../../data/posts';



class Body extends React.Component {
    constructor(props) {
        super(props);
        this.posts = posts;
    }


    render() {
        return (
            <div className="mainBodyOuter">
                <div className="mainBodyInner">
                    <div className="leftSide">
                        {
                            (() => {
                                return this.posts.map((post, key) => {
                                    return <Post key={key} post={post} />
                                });
                            })()
                        }
                    </div>
                    <div className="rightSide">
                        <LeftSide />
                    </div>
                </div>
            </div>
        )
    }
}

export default Body;