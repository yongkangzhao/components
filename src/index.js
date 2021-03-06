import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard'


const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail author="Sam" timeAgo="Today at 4:45 PM" comment="nice blog post!" avatar={faker.image.avatar()}/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Alex" timeAgo="Today at 2:45 AM" comment="very nice blog post!" avatar={faker.image.avatar()}/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Jane" timeAgo="Yesterday at 8:00 AM" comment="nice post!" avatar={faker.image.avatar()}/>
            </ApprovalCard>
        </div>
        
    );
};


ReactDOM.render(<App />, document.querySelector('#root'));