import { createContext, useEffect, useState } from "react";

export const DataContext = createContext()

const DataProvider = ({ children }) => {

  // DUMMY DATA APPROACH => mirror same structure as on backend routes in your context
  const [posts, setPosts] = useState([])

  useEffect(() => {
  
    // grab posts from posts API route and stuff it into our local state
    fetch("http://localhost:5000/posts")
    .then(res => res.json()) 
    .then( postsApi => {
      setPosts( postsApi )
    })

  }, []) // just load posts on FIRST RENDER



  const addPost = (postNew) => {
    setPosts( [...posts, postNew] )
  }
  const updatePost = (postUpdated) => {
    setPosts( posts.map(post => post._id === postUpdated._id ? { ...postUpdated } : post) )
  }
  const deletePost = (postToDelete) => {
    setPosts( posts.filter(post => post._id !== postToDelete._id) )
  }

  const sharedData = { 
    posts, setPosts, addPost, updatePost, deletePost
  }
  
  return (
    <DataContext.Provider value={ sharedData }>
      {children}
    </DataContext.Provider>
  )

}

export default DataProvider