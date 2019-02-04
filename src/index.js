import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App= () => {
return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail 
                  author="keith1" 
                  timeago="Today at 4:45pm" 
                  commentbody="blah blah1" 
                  img={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author="keith22"
                    timeago="Today at 4:46pm" 
                    commentbody="blah blah2" 
                    img={faker.image.avatar()}
                />
            </ApprovalCard>
            <CommentDetail 
              author="keith3" 
              timeago="Today at 4:47pm" 
              commentbody="blah blah3" 
              img={faker.image.avatar()}
            />
            <CommentDetail author="keith4" timeago="Today at 4:48pm" commentbody="blah blah4" img={faker.image.avatar()}/>
            <CommentDetail author="keith5" timeago="Today at 4:49pm" commentbody="blah blah5" img={faker.image.avatar()}/>
            <CommentDetail author="keith6" timeago="Today at 4:50pm" commentbody="blah blah6" img={faker.image.avatar()}/>
        </div>
    );

};

ReactDOM.render(<App />, document.querySelector('#root'))

