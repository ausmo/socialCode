import { gql } from '@apollo/client';

export const QUERY_USER = gql`
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

export const QUERY_THOUGHTS = gql`
  query getPosts {
    posts {
      _id
      postText
      postAuthor
      createdAt
    }
  }
`;

export const QUERY_SINGLE_THOUGHT = gql`
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
