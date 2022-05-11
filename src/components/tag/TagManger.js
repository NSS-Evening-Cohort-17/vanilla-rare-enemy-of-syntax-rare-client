import React, { useState, useEffect } from 'react';
import { TagCard } from './TagCard';
import { getTags, addTags } from './tags';
import { useHistory } from 'react-router-dom';


export const TagManager = () => {
  const [ tags, setTags ] = useState([])
  const history = useHistory();
  useEffect(()=> {
      let isMounted = true;
      getTags().then((tagsData) => {
        if (isMounted) setTags(tagsData)
      })
  }, [])
  return (
      <>
          <div className="title"> Tags </div>
          <div className="tags">
              {
                  tags.map(tag => <TagCard key={tag.id} tag={tag} setTags= {setTags} />)
              }
          </div>
      </>
  )
}