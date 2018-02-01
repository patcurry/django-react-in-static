import React from 'react';
import ReactDOM from 'react-dom';

//#const PostBoard = ({users}) => users.map(user => <li key={user.username}>{user.username}</li>);

const Post = post => (
        <div>
          <h2>{post.fields.title}</h2>
          <p>{post.fields.text}</p>
        </div>
);

const PostBoard = posts => {
//    const postList = Object.values(posts)
//          .map(val => </Post post=val>);
    /*
    return Object.keys(posts)
        .map(key => <li key={posts[key].pk}>
               <a>
                 {posts[key].fields.title}
               </a>
             </li>);
             */
    console.log(Object.values(posts)[0].fields.title);
    return (
            <div>
            <Post post={Object.values(posts)[0]}></Post>
            </div>
    );
}

// this is difficult. I can't seem to get the window.props in to the element with the nice
// jsx style of writing. maybe i have to save the window.props as wProps or something
// I can always do all the crazy react stuff in different components and files, I will just
// have to deal with this not as much fun version of writing things until I am better with
// useing react
ReactDOM.render(
    React.createElement(PostBoard, window.props),
    window.react_mount
);
