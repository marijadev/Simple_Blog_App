import React from 'react';
import { Link } from 'react-router-dom';

const RelatedPost = ({post, currentPostId}) => {
    if (post.id !== currentPostId) {
        return (
            <li>
                <Link to={`/post/${post.id}`}>{post.title}</Link>
            </li>
        )
    }
    return false;
}

export { RelatedPost };