import React from 'react';

  
  export const TagCard = ({ tag, setTag }) => {
    const tagList= (tagid) => {
        switch (tagid) {
          case 1:
            return 'Tag1';
          case 2:
            return 'Tag2';
          case 3:
            return 'Tag3';
          case 4:
            return 'Tag4';
          default:
            return tagid;
        }
      };


    const sessionUserId = localStorage.getItem("rare_userid")
    const userid =  parseInt(sessionUserId)
    const id = tag.id

    
    return (
      <div>
        <div className="card" style={{ width: '18rem', margin: '3px' }}>
          <div className="card-body">
            <h1 className="card-title">{tag.label}</h1>
           
          </div>
        </div>
      </div>
    );
  }