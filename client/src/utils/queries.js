import { gql } from '@apollo/client';

// user -> profile, thoughts -> post needs to be changed

export const QUERY_PROFILE = gql`
  query profile($profilename: String!) {
    profile(profilename: $profilename) {
      _id
      profilename
      email
      posts {
        _id
        postText
        createdAt
      }
    }
  }
`;

export const QUERY_POST = gql`
  query getPost {
    posts {
      _id
      postText
      postAuthor
      createdAt
    }
  }
`;

export const QUERY_SINGLE_POST = gql`
  query getSinglePost($postId: ID!) {
    post(postId: $postId) {
      _id
      postText
      postAuthor
      createdAt
      comments {
        _id
        commentText
        commentAuthor
        createdAt
      }
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      profilename
      email
      posts {
        _id
        postText
        postAuthor
        createdAt
      }
    }
  }
`;
