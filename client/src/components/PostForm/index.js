import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { ADD_POST } from '../../utils/mutations';
import { QUERY_POSTS, QUERY_ME } from '../../utils/queries';
import me2 from "../../img/me2.jpg"
import Auth from '../../utils/auth';

const PostForm = () => {
  const [postText, setPostText] = useState('');

  const [characterCount, setCharacterCount] = useState(0);

  const [addPost, { error }] = useMutation(ADD_POST, {
    update(cache, { data: { addPost } }) {
      try {
        const { posts } = cache.readQuery({ query: QUERY_POSTS });

        cache.writeQuery({
          query: QUERY_POSTS,
          data: { posts: [addPost, ...posts] },
        });
      } catch (e) {
        console.error(e);
      }

      // update me object's cache
      const { me } = cache.readQuery({ query: QUERY_ME });
      cache.writeQuery({
        query: QUERY_ME,
        data: { me: { ...me, posts: [...me.posts, addPost] } },
      });
    },
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addPost({
        variables: {
          postText,
          postAuthor: Auth.getProfile().data.profilename,
        },
      });

      setPostText('');
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'postText' && value.length <= 280) {
      setPostText(value);
      setCharacterCount(value.length);
    }
  };

  return (
    <article className="media">
      <figure className="media-left">
        {/* <p className="image is-64x64">
          <img src={me2} alt = "Austin" className="is-rounded"/>
        </p> */}
      </figure>
      <div className="media-content">
        <div className="field">
          <p className="control">
            <textarea className="textarea" placeholder='console.log("Hello World!")'></textarea>
          </p>
        </div>
        <div className="field">
          <p className="control">
            <button className="postButton">Post</button>
          </p>
        </div>
      </div>
    </article>
  );
};

export default PostForm;
