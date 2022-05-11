import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { addPost, updatePost, getPostById, getCategories } from './PostManager';

const sessionUserId = localStorage.getItem("rare_userid")
const userid =  parseInt(sessionUserId)
//datetext=d.getFullYear()+'/'+(d.getMonth()+1)+'/'+d.getDate()
const d = new Date(); 
const initialState = {
  user_id: userid ,
  category_id: "",
  title: "",
  publication_date: d.getFullYear()+'/'+(d.getMonth()+1)+'/'+d.getDate(),
  image_url: "",
  content: "",
  approved: ""
};


export  function PostForm() {
  const [formPost, setFormPost] = useState(initialState);
  const [categories, setCategories ] = useState([]);

  const history = useHistory();
  const { id } = useParams()

  //https://stackoverflow.com/questions/31413053/how-to-use-an-array-as-option-for-react-select-component

  const editMode = id ? true : false  // true or false



  useEffect(() => {
    if (editMode) {
      let isMounted = true;
        getPostById(id).then((res) => {
          if (isMounted)  setFormPost(res)
        })
    }
    getCategories().then((categoryData) => setCategories(categoryData));
    // getCategories().then(setCategories)  
    // console.log(categories)
}, [])

// useEffect(() => {
//   getCategories().then((categoryData) => setCategories(categoryData));
// }, [])

  const handleChange = (e) => {
    const newPost = Object.assign({}, formPost,) 
    let selectedVal = e.target.value
    newPost[e.target.id] = selectedVal
    setFormPost(newPost);
  }

  const resetForm = () => {
    setFormPost(initialState);
  };

  const handleToggle = (e) => {
    const { name, checked } = e.target;
    setFormPost((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    resetForm();
    if (editMode) {
      // update the item
      updatePost(formPost).then(() => {
        history.push('/');

      });
    } else {
      addPost(formPost).then(() => {
        history.push('/');

      });
    }   
    
  }


  return (
    <form className="postForm">
    <h2 className="postForm__title">Add a new post</h2>
    <fieldset>
        <div className="form-group">
            <label htmlFor="title">Title:</label>
            <input type="text" id="title" name="title" required autoFocus className="form-control" placeholder="Title" onChange={handleChange} value={formPost.title} />
        </div>
    </fieldset>
    <fieldset>
        <div className="form-group">
            <label htmlFor="image_url">image_url:</label>
            <input type="url" id="image_url" name="image_url" required autoFocus className="form-control" onChange={handleChange} placeholder="image_url" value={formPost.image_url} />
        </div>
    </fieldset>
    <fieldset>
        <div className="form-group">
            <label htmlFor="content">Content:</label>
            <input type="textarea" rows="6" id="content" name="content" required autoFocus className="form-control" onChange={handleChange} placeholder="contents" value={formPost.content} />
        </div>
    </fieldset>
    <fieldset>
        <div className="form-group">
            <label htmlFor="content">Approved:</label>
            <input type="checkbox" id="approved" name="approved"  required autoFocus className="form-control"   checked={formPost.approved ? 'checked' : ''} onChange={handleToggle} />
        </div>
    </fieldset> 
    <fieldset>
        <div className="form-group">
        <label htmlFor="category_id">Assign to location: </label>
					<select value={formPost.category_id} name="category_id" id="category_id" onChange={handleChange} className="form-control" >
						<option value="0">Select a category</option>
						{categories.map(l => (
							<option key={l.id} value={l.id}>
								{l.label}
							</option>
						))}
					</select>
        </div>
    </fieldset> 

    {/* <fieldset>
        <div className="form-group">
            <label htmlFor="id">Category: </label>
            <select value={formPost.category_id} name="category_id" id="category_id"  className="form-control" onChange={handleChange} >
                <option value="">Select a category</option>
                <option value="1">News</option>
                <option value="2">Entertainment</option>
                <option value="3">World</option>
                <option value="6">Local</option>

            </select>
        </div>
    </fieldset>  */}

    <button className="btn btn-primary"
        onClick={handleSubmit}>
        {editMode ? "Save Updates" : "Add a new post"}
  </button>
</form>
)
};
