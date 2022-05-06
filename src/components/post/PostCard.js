  import React from 'react';
 
  
  export const PostCard = ({ post}) => {
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
    return (
      <div>
        <div className="card" style={{ width: '18rem', margin: '3px' }}>
          <div className="card-body">
            <h1 className="card-title">{post.title}</h1>
            <h5 className="card-title">{post.content}</h5>
            <h5 className="card-title">{renderCategory(post.category_id)}</h5> 
            <button type="button"> Detail </button>    
            { userid === post.user_id ?  (
                <button type="button"> Edit </button>
                
            ) : (
            ''    
            )
            } 
            { userid === post.user_id ?  (
                <button type="button"> Delete </button>
                
            ) : (
            ''    
            )
            }   
          </div>
        </div>
      </div>
    );
  }