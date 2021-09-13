import { createContext, useEffect, useState } from "react";

export const DataContext = createContext()

const DataProvider = ({ children }) => {

  const [posts, setPosts] = useState([
    { 
      _id: "p1", 
      createdAt: '2021-08-010', author: "Alice", title: "Relations are coool", 
      text: 
        "Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum." +
        "Lorem ipsum. Lorem ipsum. Lorem ipsuuuuuuuuum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum." +
        "Loreeeeeeeeem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum.",
      stats: { likes: 5, dislikes: 1 }
    },
    { _id: "p2", 
      createdAt: '2021-08-15', author: "Bob", title: "Nesting makes sense", 
      text: "Nest me if you can. Nest me if you can. Nest me if you can. Nest me if you can. Nest me if you can.",
      stats: { likes: 1, dislikes: 0 }
    },
    { _id: "p3", 
      createdAt: '2021-09-13', author: "Peter", title: "I don't mind backend...", 
      text: "Fuck all that shit. I go back to the frontend",
      stats: { likes: 2, dislikes: 1 }
    },
  ])

  // some dummy comments
  const [comments, setComments] = useState([
    { _id: "c1", postId: "p1", createdAt: '2021-09-01 15:30', author: "Shitstormer", 
      text: "Everyone could do a blog like that, you shifty f***. Go home bro. Train more CSS. Ahahaha",
      stats: { likes: 0, dislikes: 5 }      
    },
    { _id: "c2", postId: "p1", createdAt: '2021-09-01 16:10', author: "Johnny", 
      text: "Jo Jo, keep it up",
      stats: { likes: 0, dislikes: 0 } 
    },
    { _id: "c3", postId: "p2", createdAt: '2021-09-02 01:00',  author: "Fanboy", 
      text: "So great stuff",
      stats: { likes: 17, dislikes: 1 }
    },
  ])  

  // TODO
  // *** Load Data on startup in useEffect *** 


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
    posts, setPosts, addPost, updatePost, deletePost, 
    comments, setComments
  }
  
  return (
    <DataContext.Provider value={ sharedData }>
      {children}
    </DataContext.Provider>
  )

}

export default DataProvider