import React from "react"
import { Route, Switch  } from "react-router-dom"
import { CategoryManager } from "./category/Category"
import { Home } from "./post/Home"
import { MyPosts } from "./post/MyPosts"
import { PostCardList } from "./post/PostCardList"
import { PostDetailCard } from "./post/PostDetailCard"
import { PostForm } from "./post/postForm"
import { TagManager } from "./tag/TagManger"
import { UserManager } from "./user/UserManager"


export const ApplicationViews = () => {
  return ( 
    <>
      <Switch>
        <Route exact path="/" > <PostCardList/></Route> 
        <Route exact path="/myposts" > <MyPosts/></Route>
        <Route exact path="/tagmanager" > <TagManager/></Route> 
        <Route exact path="/categorymanager" > <CategoryManager/></Route> 
        <Route exact path="/usermanager" > <UserManager/></Route>
        <Route exact path="/postform" > <PostForm /></Route>
        <Route exact path="/edit/:id" > <PostForm /></Route>
        <Route exact path="/detail/:id" > <PostDetailCard /></Route>
      </Switch>
    </>
  )
}
