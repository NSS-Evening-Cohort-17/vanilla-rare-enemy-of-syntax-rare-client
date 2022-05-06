import React, { useState, useEffect } from 'react';
import { PostCard } from './PostCard';
import { getPosts } from './PostManager';

export const PostCardList = () => {
    const [ posts, setPosts ] = useState([])
    useEffect(()=> {
        getPosts().then((postsData) => setPosts(postsData))
    }, [])
    return (
        <>
            <div className="posts">
                {
                    posts.map(post => <PostCard key={post.id} post={post} />)
                }
            </div>
        </>
    )
}

// getPosts