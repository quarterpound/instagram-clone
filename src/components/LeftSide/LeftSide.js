import React from 'react';
import ProfileArea from './ProfileArea';
import Stories from './Stories';
import Story from './Story';
import Suggestion from './Suggestion';
import Footer from './Footer';
import stories from '../../data/stories';
import suggestions from '../../data/suggestions';

import "./LeftSize.css";

class LeftSide extends React.Component {
    render() {
        return (
            <div className="storiesDivOuter">
                <ProfileArea />
                <Stories title="Stories">
                    {
                        (() => {
                            return stories.map((story, key) => {
                                return <Story key={key} index={key} username={story.username} hrs={story.hrs} />
                            });
                        })()
                    }
                </Stories>
                <Stories title="Suggestions For You" style={{overflowY: 'hidden'}}>
                    {
                        (() => {
                            return suggestions.map((sugg, key) => {
                                return <Suggestion key={key} index={key} username={sugg.username} mutuals={sugg.mutuals} />
                            });
                        })()
                    }
                </Stories>
                <Footer />
            </div>
        )
    }
}

export default LeftSide