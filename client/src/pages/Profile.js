import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import PostForm from '../components/PostForm';
import PostList from '../components/PostList';

import { QUERY_PROFILE, QUERY_ME } from '../utils/queries';

import Auth from '../utils/auth';

const Profile = () => {
  const { profilename: profileParam } = useParams();

  const { loading, data } = useQuery(profileParam ? QUERY_PROFILE : QUERY_ME, {
    variables: { profilename: profileParam },
  });

  const profile = data?.me || data?.profile || {};
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
    <div>
      <div className="flex-row justify-center mb-3">
        <h2 className="col-12 col-md-10 bg-dark text-light p-3 mb-5">
          Viewing {profileParam ? `${profile.profilename}'s` : 'your'} profile.
        </h2>

        <div className="col-12 col-md-10 mb-5">
          <PostList
            posts={profile.posts}
            title={`${profile.profilename}'s posts...`}
            showTitle={false}
            showProfilename={false}
          />
        </div>
        {!profileParam && (
          <div
            className="col-12 col-md-10 mb-3 p-3"
            style={{ border: '1px dotted #1a1a1a' }}
          >
            <PostForm />
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
