import React from 'react';
import PostComents from '../Context/PostComents';

const PostC = () => {
    return (
        <>
        <PostComents.Consumer>
            {(post) => 
                post && (
                <>
                <h2>Cometarios</h2>
                <div>
                    {post.map((post, index) => (
                    <div key={post.postId}>
                        <h2>{post.id}</h2>
                        <p>{post.name}</p>
                        <p>{post.email}</p>
                        <p>{post.body}</p>
                    </div>
                    ))}
                </div>
                </>
            )}
        </PostComents.Consumer>
        </>
    )
}

export default PostC;