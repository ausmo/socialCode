import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';

const Navbar = ()=>{
    const logout = (event) => {
        event.preventDefault();
        Auth.logout();
      };
      return (
<nav class="navbar top" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="">
        <img src="/mocks/img/socialCodeLogo.jpg" alt="logo" class="groupsLogo" />
      </a>
      <a
        role="button"
        class="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
      <a
        role="button"
        class="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarItems" class="navbar-menu">
      <div class="navbar-end">
        <a class="navbar-items">Home</a>
        <a class="navbar-items">Profile</a>
        <a class="navbar-items">Groups</a>
        <a class="navbar-items">Login/Signup</a>
      </div>
    </div>
  </nav>
  )}
  export default Navbar