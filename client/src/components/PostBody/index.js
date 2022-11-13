import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';

const PostBody = ()=>{
    const logout = (event) => {
        event.preventDefault();
        Auth.logout();
      };
      return (
        <p class="postBody">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porta eros lacus, nec ultricies elit blandit non. Suspendisse pellentesque mauris sit amet dolor blandit rutrum. Nunc in tempus turpis.
          </p>
      )}