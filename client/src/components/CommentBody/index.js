import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';

const CommentBody = ()=>{
    const logout = (event) => {
        event.preventDefault();
        Auth.logout();
      };
      return (<article class="homepageMedia">
          <figure class="media-left">
            <p class="image is-48x48">
              <img src="/mocks/img/alex.png" alt = "alex" class="is-rounded"/>
            </p>
          </figure>
          <div class="media-content">
            <div class="content">
              <div>
                <strong class="name">Alex</strong>
                <p class="commentBody">
                Lorem ipsum
                </p>
                <br/>
                <small><a class="likeReply">Like</a> · <a class="likeReply">Reply</a> </small>
            </div>
          </div>
          </div>
        </article>
        )}

export default CommentBody;