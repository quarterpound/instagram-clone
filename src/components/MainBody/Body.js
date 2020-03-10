import React from 'react';
import Post from '../Post';
import LeftSide from '../LeftSide/LeftSide';
import './Body.css';

class Body extends React.Component {
    render() {
        return (
            <div className="mainBodyOuter">
                <div className="mainBodyInner">
                    <div>
                        <Post />
                        <Post />
                        <Post />
                        <Post />
                        <Post />
                    </div>
                    <div className="leftSide">
                        <LeftSide />
                    </div>
                </div>
            </div>
        )
    }
}

export default Body;