import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';

const CommentBody = ()=>{
    const logout = (event) => {
        event.preventDefault();
        Auth.logout();
      };
      return (<article className="homepageMedia">
          <figure className="media-left">
            <p className="image is-48x48">
              <img src="/mocks/img/alex.png" alt = "alex" className="is-rounded"/>
            </p>
          </figure>
          <div className="media-content">
            <div className="content">
              <div>
                <strong className="name">Alex</strong>
                <p className="commentBody">
                Lorem ipsum
                </p>
                <br/>
                <small><a className="likeReply">Like</a> · <a className="likeReply">Reply</a> </small>
            </div>
          </div>
          </div>
        </article>
        )}

export default CommentBody;