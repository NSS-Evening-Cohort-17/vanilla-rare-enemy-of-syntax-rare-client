import React, { useEffect, useState } from 'react';

const d = new Date(); 
const initialState = {
  user_id: '',
  category_id: '',
  title: '',
  publication_date: d.getFullYear()+'/'+(d.getMonth()+1)+'/'+d.getDate(),
  image_url: '',
  content: '',
  approved: ''
};


export  function PostForm() {
  const [formPost, setFormPost] = useState(initialState);

  const handleChange = (e) => {
    setFormPost((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleToggle = (e) => {
    const { name, checked } = e.target;
    setFormPost((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };

  const resetForm = () => {
    setFormPost(initialState);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    resetForm();
    // createNote({ ...formNote, appId: firebaseKey }).then((notes) => {
    //   setNoteCards(notes);
    //   resetForm();
    // });
    }

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     setFormNote((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

  return (
    <form className="postForm">
    <h2 className="postForm__title">Add a new post</h2>
    <fieldset>
        <div className="form-group">
            <label htmlFor="title">Title:</label>
            <input type="text" id="title" required autoFocus className="form-control" placeholder="Title" onChange={handleChange} value={formPost.title} />
        </div>
    </fieldset>
    <fieldset>
        <div className="form-group">
            <label htmlFor="image_url">image_url:</label>
            <input type="url" id="image_url" required autoFocus className="form-control" onChange={handleChange} placeholder="image_url" value={formPost.image_url} />
        </div>
    </fieldset>
    <fieldset>
        <div className="form-group">
            <label htmlFor="content">Content:</label>
            <input type="textarea" rows="6" id="content" required autoFocus className="form-control" onChange={handleChange} placeholder="contents" value={formPost.content} />
        </div>
    </fieldset>
    <fieldset>
        <div className="form-group">
            <label htmlFor="content">Approved:</label>
            <input type="checkbox" id="approved" required autoFocus className="form-control"  onChange={handleToggle} value={formPost.approved} />
        </div>
    </fieldset>     
    <fieldset>
        <div className="form-group">
            <label htmlFor="category_id">Category: </label>
            <select value={formPost.category_id} name="category_id" id="category_id"  className="form-control" onChange={handleChange} >
                <option value="">Select a category</option>
                <option value="1">News</option>
                <option value="2">Entertainment</option>
                <option value="3">World</option>
                <option value="4">Local</option>

            </select>
        </div>
    </fieldset> 
    {/* <fieldset>
        <div className="form-group">
            <label htmlFor="customerId">Customer: </label>
            <select value={animal.customerId} name="customer" id="customerId" onChange={handleControlledInputChange} className="form-control" >
                <option value="0">Select a customer</option>
                {customers.map(c => (
                    <option key={c.id} value={c.id}>
                        {c.name}
                    </option>
                ))}
            </select>
        </div>
    </fieldset> */}
    <button className="btn btn-primary"
        onClick={handleSubmit}>
        Save
  </button>
</form>
)
};
