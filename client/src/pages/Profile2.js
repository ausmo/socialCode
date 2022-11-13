import Navbar from "../components/Navbar";
import PostForm from "../components/PostForm";
import CommentForm from "../components/CommentForm";
import CommentBody from "../components/CommentBody";
import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_USER, QUERY_ME } from '../utils/queries';
import Auth from '../utils/auth';
import PostBody from "../components/PostBody";

export default function Home2(params) {
    return (
      <>
      <Navbar />
      {/* switch home page banner to username */}
      <h1 class="homepageBanner">socialCode</h1>  
     
    <div class="columns">
      <div class="column is-one-third">
        <p class="bd-notification is-info"></p>
        <div class="columns is-mobile">
          <div class="column">
            <p class="bd-notification is-info"></p>
            {/* All of this needs to change by user, to line 44 */}
            <p class="image is-256x256">
              <img
                src="/mocks/img/me2.jpg"
                class="is-rounded profilePic"
                alt="Austin Moore Profile Pic"
              />
            </p>
          </div>
          <div class="column">
            <p class="bd-notification is-info"></p>
            <br/>
            <br/>
            <ul class="asl">
              <li>Dallas, TX</li> 
              <li>Frontend Dev</li>
              <li>Udexx Tech LLC</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="column">
        <p class="bd-notification is-danger"></p>
        <div class="columns is-mobile">
          <div class="column is-half">
            <p class="bd-notification is-danger"></p>
          </div>
          <div class="column">
            <p class="bd-notification is-danger"></p>
          </div>
          <div class="column">
            <p class="bd-notification is-danger"></p>
          </div>
        </div>
      </div>
    </div>
    <br/>
    <br/>
    
    <PostForm/>
    <br/>
    <br/>
    <PostBody/>
    <div class="columns">
      <div class="column is-one-fifth">
        <h2 class="friendsList">Friends</h2>
        <hr/>
        {/* <!-- use css to get spacing we want here --> */}
        <ul class="friends">
          <li class="friend">
            <p class="image is-48x48">
              <img
                src="/mocks/img/savannah.jpg"
                class="is-rounded"
                alt="Savannah McGinnis Profile Pic" />
              
              {/* This is where username will go */}
            </p>
          </li>
          <li class="friend">
            <p class="image is-48x48">
              <img
                src="/mocks/img/alex.png"
                class="is-rounded"
                alt="Alex Luce Profile Pic"/>
             
            </p>
          </li>
        </ul>
        <br/>
        <p class="friend">and 141 others</p>
        <hr/>
        <h2 class="friendsList">Groups</h2>
        <hr/>
        <p class="image is-48x48">
          <img
            src="/mocks/img/p3g.jpg"
            class="is-rounded p3g"
            alt="Project 3 Gang" />
          
        </p>
        <div class="p3gText">Project 3 Gang</div>
      </div>
      <div class="column">
        <div class="media">
          <figure class="media-left">
            <p class="image is-64x64">
              <img
                src="/mocks/img/me2.jpg"
                class="is-rounded"
                alt="Austin Moore Profile Pic" />
              
            </p>

          </figure>
</div></div>
         <PostBody/>
        {/* might want to add comment body and form */}
      
      </>
      )}