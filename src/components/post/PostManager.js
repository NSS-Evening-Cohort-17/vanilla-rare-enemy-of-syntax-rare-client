const remoteURL = "http://localhost:8088"
export const getPosts = () => {
    return fetch("http://localhost:8088/posts")
        .then(res => res.json())
}

export const getPostById = (id) => {
    return fetch(`http://localhost:8088/posts/${id}`)
        .then(res => res.json())
}

export const addPost = (newpost) => {
    return fetch("http://localhost:8088/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newpost)
    })
    .then(getPosts)
}

export const deletePost = (id) => {
    return fetch(`${remoteURL}/posts/${id}`, {
      method: "DELETE"
    })
    .then(getPosts)
  }

export const updatePost = post => {
    return fetch(`${remoteURL}/posts/${post.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(post)
    })
        .then(getPosts)
}
// export const getPosts = () => {
//     return fetch("http://localhost:8088/posts")
//         .then(res => res.json())
// }