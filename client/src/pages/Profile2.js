import Navbar from "../components/Navbar";
import PostForm from "../components/PostForm";
import CommentForm from "../components/CommentForm";
import CommentBody from "../components/CommentBody";
import React from "react";
import { Navigate, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_PROFILE, QUERY_ME } from "../utils/queries";
import Auth from "../utils/auth";
import PostBody from "../components/PostBody";
import PostList from '../components/PostList';
import savannahPic from "../img/savannah.jpg";
import CommentList from "../components/CommentList";
import me2 from "../img/me2.jpg";
import alexPic from "../img/alex.png";
import groupPic from "../img/p3g.jpg";



const Profile2 = () => {
    const { profilename: profileParam } = useParams();

  const { loading, data } = useQuery(profileParam ? QUERY_PROFILE : QUERY_ME, {
    variables: { profilename: profileParam },
  });

  const profile = data?.me || data?.profile || {};

  console.log(profile)
  // navigate to personal profile page if profilename is yours
  if (Auth.loggedIn() && Auth.getProfile().data.profilename === profileParam) {
    return <Navigate to="/me" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!profile?.profilename) {
    return (
      <h4>
        You need to be logged in to see this. Use the navigation links above to
        sign up or log in!
      </h4>
    );
  }
  return (
    <>
      <Navbar />
      
      <h1 className="banner">Viewing {profile ? `${profile.profilename}'s` : 'your'} profile.</h1>

      <div className="columns">
        <div className="column is-one-third">
          <p className="bd-notification is-info"></p>
          <div className="columns is-mobile">
            <div className="column">
              <p className="bd-notification is-info"></p>
              {/* All of this needs to change by user, to line 44 */}
              <p className="image is-256x256">
                <img
                  src={me2}
                //   need database for profile pic and alt
                  className="is-rounded profilePic"
                  alt="Austin Moore Profile Pic"
                />
              </p>
            </div>
            <div className="column">
              <p className="bd-notification is-info"></p>
              <br />
              <br />
              <ul className="asl">
                {/* need to pull these from sign up database */}
                <li>Dallas, TX</li> 
                <li>Frontend Dev</li>
                <li>Udexx Tech LLC</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="column">
          <p className="bd-notification is-danger"></p>
          <div className="columns is-mobile">
            <div className="column is-half">
              <p className="bd-notification is-danger"></p>
            </div>
            <div className="column">
              <p className="bd-notification is-danger"></p>
            </div>
            <div className="column">
              <p className="bd-notification is-danger"></p>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />

      <PostForm />
      <br />
      <br />
      <PostBody />
      <CommentList />
      <CommentForm />
      <PostList  posts={profile.posts} title={"test"}/>
      <div className="columns">
        <div className="column is-one-fifth">
          <h2 className="friendsList">Friends</h2>
          <hr />
          {/* <!-- use css to get spacing we want here --> */}
          <ul className="friends">
            <li className="friend">
              <p className="image is-48x48">
                <img
                  src= {savannahPic}
                  className="is-rounded"
                  alt="Savannah McGinnis Profile Pic"
                />

                {/* This is where username will go */}
              </p>
            </li>
            <li className="friend">
              <p className="image is-48x48">
                <img
                  src={alexPic}
                  className="is-rounded"
                  alt="Alex Luce Profile Pic"
                />
              </p>
            </li>
          </ul>
          <br />
          <p className="friend">and 141 others</p>
          <hr />
          <h2 className="friendsList">Groups</h2>
          <hr />
          <p className="image is-48x48">
            <img
              src={groupPic}
              className="is-rounded p3g"
              alt="Project 3 Gang"
            />
          </p>
          <div className="p3gText">Project 3 Gang</div>
        </div>
        <div className="column">
          <div className="media">
            <figure className="media-left">
              <p className="image is-64x64">
                <img
                  src={me2}
                  className="is-rounded"
                  alt="Austin Moore Profile Pic"
                />
              </p>
              {/* might want to add comment body and form */}
            </figure>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile2;