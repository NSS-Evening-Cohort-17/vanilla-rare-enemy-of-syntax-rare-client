import React from 'react';
import { useHistory } from 'react-router-dom';

export const Home = () => {
  const history = useHistory();
  return (
    <div>
      <h1>List all posts here</h1>
      <button
          className="app-btn"
          type="submit"
          onClick={() => history.push('/postform')}
        >
          Add a post
        </button>
    </div>
  );
}

