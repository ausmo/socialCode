import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      profile {
        _id
        profilename
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addProfile($profilename: String!, $email: String!, $password: String!) {
    addProfile(profilename: $profilename, email: $email, password: $password) {
      token
      profile {
        _id
        profilename
      }
    }
  }
`;

export const ADD_THOUGHT = gql`
  mutation addPost($postText: String!) {
    addPost(postText: $postText) {
      _id
      postText
      postAuthor
      createdAt
      comments {
        _id
        commentText
      }
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation addComment($postId: ID!, $commentText: String!) {
    addComment(postId: $postId, commentText: $commentText) {
      _id
      postText
      postAuthor
      createdAt
      comments {
        _id
        commentText
        createdAt
      }
    }
  }
`;
