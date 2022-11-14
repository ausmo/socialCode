import React from "react";
import Auth from "../../utils/auth";
import alexPic from "../../img/alex.png";
import savannahPic from "../../img/savannah.jpg";

const PostBody = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <>
      <article className="homepageMedia">
        <figure className="media-left">
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
        </div>
        <div className="media-content"></div>
        <div className="content"></div>
        <p>
          <strong className="name">Savannah Mcginnis</strong>
        </p>
        <p className="postBody">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porta
          eros lacus, nec ultricies elit blandit non. Suspendisse pellentesque
          mauris sit amet dolor blandit rutrum. Nunc in tempus turpis.
        </p>
        <small>
          <a className="likeReply">Like</a> · <a className="likeReply">Reply</a>
        </small>
      </article>
    </>
  );
};

export default PostBody;
