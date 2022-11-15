import React from "react";
import Auth from "../../utils/auth";
import alexPic from "../../img/alex.png";
import savannahPic from "../../img/savannah.jpg";

const PostBody = (props) => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  if(props.posts.length == 0)
  return null;
  console.log(props.posts)
  return (
    <>
      {props.posts.map((post) => (
        <article>
          {/* <figure className="media-left">
          <p className="image is-64x64">
            <img
              src={savannahPic}
              alt="savannah"
              className="is-rounded"
            />
          </p>
        </figure>
        <div className="image is-48x48">
          <img src={alexPic} alt="alex" className="is-rounded" />
        </div> */}
          <div className="media-content"></div>
          <div className="content"></div>
          <p>
            <strong className="name"> {post.postAuthor}</strong>
          </p>
          <p className="postBody">{post.postText}</p>
        </article>
      ))}
    </>
  );
};

export default PostBody;
