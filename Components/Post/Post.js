import React from 'react';
import PostOfTheMonth from '../Context/PostOfTheMonth';

const Post = () => {
    return (
        <>
        <PostOfTheMonth.Consumer>
            {(post) => post && (
                <>
                <h2>Publicación del mes</h2>
                <div>
                    <h2>{post.id}</h2>
                    <p>{post.title}</p>
                    <p>{post.body}</p>
                </div>
                </>
            )}
        </PostOfTheMonth.Consumer>
        </>
    )
}

export default Post;