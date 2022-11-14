import { gql } from '@apollo/client';

export const LOGIN_PROFILE = gql`
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

export const ADD_PROFILE = gql`
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

export const ADD_POST = gql`
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

export const ADD_GROUP = gql`
  mutation addGroup($groupId: ID!) {
    addGroup(groupId: $groupId){
        _id
        groupTitle
        createdAt
        groupAuthor
        groupMembers
    }
  }
`;

export const ADD_FRIEND = gql`
  mutation addFriend($profileId: ID!) {
    addFriend(profileId: $profileId){
      profile {
        _id
        profilename
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
