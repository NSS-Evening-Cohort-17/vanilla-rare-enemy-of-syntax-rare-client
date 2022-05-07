import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { getPostById } from './PostManager';

export const PostDetailCard = () => {
    const [card, setCard] = useState({});
    const { id } = useParams();
    useEffect(() => {
        getPostById(id).then((res) => {
            setCard(res)
        })
    })

return ( 

        <div>
            <div className="card" style={{ width: '18rem', margin: '3px' }}>
                <div className="card-body">
                    <h1 className="card-title">{card.title}</h1>
                    <h5 className="card-title">{card.content}</h5>
                    <h5 className="card-title">{card.publication_date}</h5>
                </div>
            </div>
         </div>
  );
}
