import React from 'react';

const PostComents = React.createContext({
    postId: '',
	name: '',
	email: '',
    body: '',
});

export default PostComents;