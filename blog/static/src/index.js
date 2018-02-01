// This can all be browserified and babelled into a file, so
// using import react stuff is totally ok

import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
    <div>
        <h1>This is react.</h1>
        <h2>So, how do I compile all the react stuff into a single index.js file?</h2>
    </div>,
    document.getElementById('react')
);
