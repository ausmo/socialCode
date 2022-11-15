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
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem nulla officiis optio perspiciatis voluptate culpa dolore nam voluptatum, hic quam impedit molestiae! Laudantium, magnam deleniti? Vero modi culpa aliquid, quam, ipsam minima, ullam eum nemo itaque mollitia repellendus accusamus debitis. Voluptas, doloremque. Tempore odio atque voluptas culpa laudantium at adipisci sint quas! Cumque dicta distinctio omnis odit rerum debitis, excepturi sed explicabo consequuntur nesciunt exercitationem natus minima corporis. Quia perspiciatis nobis ipsa mollitia in suscipit. Voluptates vitae quia officia obcaecati, dolor, voluptatum reiciendis, exercitationem consectetur assumenda explicabo reprehenderit numquam ipsum? Nisi impedit sequi consequatur ipsa, vero natus omnis voluptatum quis.
                </p>
                <br/>
                <small><a className="likeReply">Like</a> · <a className="likeReply">Reply</a> </small>
            </div>
          </div>
          </div>
        </article>
        )}

export default CommentBody;