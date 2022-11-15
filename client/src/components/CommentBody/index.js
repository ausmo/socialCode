import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';

const CommentBody = ()=>{
    const logout = (event) => {
        event.preventDefault();
        Auth.logout();
      };
      return (
      <article className="homepageMedia">
          <div className="media-content">
            <div className="content">
              <div>
                <strong className="commentName">Alex</strong>
                <p className="commentBody">
                Insightful post, here's my comment!
                </p>
                <br/>
            </div>
          </div>
          </div>
        </article>
        )}

export default CommentBody;