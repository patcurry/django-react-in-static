import React from 'react';
import ReactDOM from 'react-dom';

const PostBoard = ({users}) => users.map(user => <li key={user.username}>{user.username}</li>);

// this is difficult. I can't seem to get the window.props in to the element with the nice
// jsx style of writing. maybe i have to save the window.props as wProps or something
// I can always do all the crazy react stuff in different components and files, I will just
// have to deal with this not as much fun version of writing things until I am better with
// useing react
ReactDOM.render(
    React.createElement(PostBoard, window.props),
    window.react_mount
);
