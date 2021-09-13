import { useContext, useEffect } from "react";
import { DataContext } from "../contexts/DataProvider";
import Comment from '../components/Comment'
import IconLike from '../images/thumbs-up.svg'
import IconDislike from '../images/thumbs-down.svg'

// POST DETAILS view - Full text + comments

const PostPage = ({ location }) => {

  const { comments, setComments } = useContext(DataContext)

  // receive BLOG post details from router link
  const { state: post } = location; // extract POST data from link

  // TODO: load comments from API on load (=> if Post ID is given / has changed!)

  // RENDER COMMENTS
  const jsxComments = comments.map( (comment, i) => (
    <Comment key={comment._id} comment={ comment } index={i} />
  ))

  // RENDER POST VIEW
  return ( <div className="post-view">
    <div className="post-details">
      <h2>{ post.title }</h2>
      <div className="post-author">
        By: {post.author}
      </div>
      <div className="post-date">
        {post.createdAt}
      </div>
      <div className="post-text">
        {post.text}
      </div>
    </div>
    { post.stats && (
      <div className="stats">      
        <span><img src={ IconLike } alt="like" />{ post.stats.likes }</span>  
        <span><img src={ IconDislike } alt="diss" />{ post.stats.dislikes } </span> 
      </div>
    ) }
    <div className="comments-count">
      { comments.length } Comments
    </div>
    <div className="comments">{ jsxComments }</div>
  </div> );
}
 
export default PostPage;