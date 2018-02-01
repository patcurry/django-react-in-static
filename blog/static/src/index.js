// This can all be browserified and babelled into a file, so
// using import react stuff is totally ok

import React from 'react';
import ReactDOM from 'react-dom';


const PostBoard = ({users}) => users.map(user => <li key={user.username}>{user.username}</li>);



ReactDOM.render(
    React.createElement(PostBoard, window.props),
//        <PostBoard users={window.props} />,
    window.react_mount
);
