import { gql } from '@apollo/client';

<<<<<<< HEAD
// user -> profile, thoughts -> post needs to be changed

=======
>>>>>>> 857fda8ab699c782d5f063081891dbdbed2bf746
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

<<<<<<< HEAD
export const QUERY_POST = gql`
  query getPost {
=======
export const QUERY_POSTS = gql`
  query getPosts {
>>>>>>> 857fda8ab699c782d5f063081891dbdbed2bf746
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
