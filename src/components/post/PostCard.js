import React from 'react';
import { Link } from 'react-router-dom';
import { deletePost, getPosts } from './PostManager';
 
  
  export const PostCard = ({ post, setPosts }) => {
    const renderCategory= (categoryid) => {
        switch (categoryid) {
          case 1:
            return 'News';
          case 2:
            return 'Entertainment';
          case 3:
            return 'World';
          case 4:
            return 'Local';
          default:
            return categoryid;
        }
      };
    const sessionUserId = localStorage.getItem("rare_userid")
    const userid =  parseInt(sessionUserId)
    const id = post.id
    const handleMethod= (method,id) => {
      if (method === 'delete') {
        deletePost(id)
        .then(() => getPosts().then(setPosts));
      } else if  (method === 'edit'){
        console.warn('test edit')
      } else if  (method === 'detail'){
        console.warn('test detail')
      }
    };
    return (
      <div>
        <div className="card" style={{ width: '18rem', margin: '3px' }}>
          <div className="card-body">
            <h1 className="card-title">{post.title}</h1>
            {/* <h5 className="card-title">{post.content}</h5> */}
            {/* <h5 className="card-title">{post.publication_date}</h5> */}
            <h5 className="card-title">{renderCategory(post.category_id)}</h5> 
            <Link to={`/detail/${id}`} >Detail</Link>   
            {/* <button type="button"  onClick={() => handleMethod('detail',post.id)}> Detail </button>     */}
            { userid === post.user_id ?  (                
                <Link to={`/edit/${id}`} >
                Edit
              </Link>
                
            ) : (
            ''    
            )
            } 
            { userid === post.user_id ?  (
                <button type="button"  onClick={() => handleMethod('delete',post.id)} > Delete</button>                
            ) : (
            ''    
            )
            }   
          </div>
        </div>
      </div>
    );
  }