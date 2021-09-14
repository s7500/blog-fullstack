import { useContext } from "react";
import { useLocation } from "react-router";
import Post from "../components/Post";
import { DataContext } from '../contexts/DataProvider'

const PostList = () => {

  const { posts } = useContext(DataContext)

  //  render list of Posts
  const jsxPosts = posts.map((post, i) => (
    <Post key={post._id} post={post} index={i} />
  ))
  
  return ( <div className="posts">{ jsxPosts }</div> );
}
 
export default PostList;