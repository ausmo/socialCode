import React from "react";
import Auth from "../../utils/auth";
import alexPic from "../img/alex.png";

const PostBody = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <>
      <article class="homepageMedia">
        <figure class="media-left">
          <p class="image is-64x64">
            <img
              src="/mocks/img/savannah.jpg"
              alt="savannah"
              class="is-rounded"
            />
          </p>
        </figure>
        <div className="image is-48x48">
          <img src={alexPic} alt="alex" class="is-rounded" />
        </div>
        <div class="media-content"></div>
        <div class="content"></div>
        <p>
          <strong className="name">Savannah</strong>
        </p>
        <p className="postBody">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porta
          eros lacus, nec ultricies elit blandit non. Suspendisse pellentesque
          mauris sit amet dolor blandit rutrum. Nunc in tempus turpis.
        </p>
        <small>
          <a class="likeReply">Like</a> · <a class="likeReply">Reply</a>
        </small>
      </article>
    </>
  );
};

export default PostBody;
