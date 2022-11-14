import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';
import socialCodeLogo from "../../img/socialCodeLogo.jpg"

const Navbar = ()=>{
    const logout = (event) => {
        event.preventDefault();
        Auth.logout();
      };
      return (
<nav className="navbar top" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <a className="navbar-item" href="">
        <img src={socialCodeLogo} alt="logo" className="groupsLogo" />
      </a>
      <a
        role="button"
        className="navbar-burger"
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
        className="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarItems" className="navbar-menu">
      <div className="navbar-end">
        <Link className="navbar-items" to="/home">Home</Link>
        <Link className="navbar-items" to="/me">Profile</Link>
        <Link className="navbar-items" to="/groups">Groups</Link>
        <Link className="navbar-items"to="/">Login/Signup</Link>
      </div>
    </div>
  </nav>
  )}
  export default Navbar