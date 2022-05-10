import React, { useState, useEffect } from 'react';
import { PostCard } from './PostCard';
import { getPosts } from './PostManager';
import { useHistory } from 'react-router-dom';
// import { Home } from './Home'

export const PostCardList = () => {
    const [ posts, setPosts ] = useState([])
    const history = useHistory();
    useEffect(()=> {
        getPosts().then((postsData) => setPosts(postsData))
    }, [])
    return (
        <>
            {/* <div ><Home/></div> */}
            <button
                className="app-btn"
                type="submit"
                onClick={() => history.push('/postform')}
             >
          Add a post
        </button>
           
            <div className="posts">
                {
                    posts.map(post => <PostCard key={post.id} post={post} setPosts= {setPosts} />)
                }
            </div>
        </>
    )
}

// getPosts

