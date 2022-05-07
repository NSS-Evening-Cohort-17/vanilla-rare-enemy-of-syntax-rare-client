import React, { useState, useEffect } from 'react';
import { PostCard } from './PostCard';
import { getPosts } from './PostManager';
import { Home } from './Home'

export const PostCardList = () => {
    const [ posts, setPosts ] = useState([])
    useEffect(()=> {
        getPosts().then((postsData) => setPosts(postsData))
    }, [])
    return (
        <>
            <div ><Home setPosts= {setPosts}/></div>
           
            <div className="posts">
                {
                    posts.map(post => <PostCard key={post.id} post={post} setPosts= {setPosts} />)
                }
            </div>
        </>
    )
}

// getPosts