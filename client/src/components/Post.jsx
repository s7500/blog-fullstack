import { Link } from "react-router-dom";

const Post = ({ post, index = 0 }) => {

  // attach post data to router links
  const postLinkData = {
    pathname: `/post/${post._id}`,
    state: post
  } 

  return (
    <div key={post._id} className="post-card">
      <div className="post-image">
        <img alt="avatar" src={`https://source.unsplash.com/150x150/?nature,${index}`} />
      </div>
      <div className="post-title">
        <Link to={ postLinkData }>{ post.title }</Link>
      </div>
      <div className="post-author">
        {post.createdAt}, by {post.author}
      </div>
      <div className="post-text">{post.text.substring(0, 70)}</div>
      <div className="post-foloowup">
        <Link to={ postLinkData }>Read more...</Link>
        </div>
    </div>
  );
};

export default Post;
