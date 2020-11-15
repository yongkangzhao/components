import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';

const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail author="Sam" timeAgo="Today at 4:45 PM" comment="nice blog post!" avatar={faker.image.avatar()}/>
            <CommentDetail author="Alex" timeAgo="Today at 2:45 AM" comment="very nice blog post!" avatar={faker.image.avatar()}/>
            <CommentDetail author="Jane" timeAgo="Yesterday at 8:00 AM" comment="nice post!" avatar={faker.image.avatar()}/>
        </div>
    );
};


ReactDOM.render(<App />, document.querySelector('#root'));