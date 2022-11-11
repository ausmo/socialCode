const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Profile {
    _id: ID
    profilename: String!
    email: String!
    password: String!
    posts: [Post]
    affiliation: String
    location: String
    experience: String
    friends: [Friends]
    groups: [Group]
    github: String
    linkedin: String
  }

  type Post {
    _id: ID
    postText: String
    postAuthor: String
    createdAt: String
    comments: [Comment]!
  }

  type Comment {
    _id: ID
    commentText: String
    commentAuthor: String
    createdAt: String
  }

  type Group {
    _id: ID
    groupTitle: String
    createdAt: String
    groupAuthor: String
    groupMembers: [Profile]
  }

  type Friends {
    _id: ID
    profile: Profile
  }

  type Auth {
    token: ID!
    profile: Profile
  }

  type Query {
    profiles: [Profile]
    profile(profilename: String!): Profile
    posts(profilename: String): [Post]
    post(postId: ID!): Post
    me: Profile
    group: Group
  }

  type Mutation {
    addProfile(profilename: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addPost(postText: String!): Post
    addComment(postId: ID!, commentText: String!): Post
    removePost(postId: ID!): Post
    removeComment(postId: ID!, commentId: ID!): Post
    addGroup(groupName: String!): Post
    addFriend(profileId: ID!): Post
  }
`;

module.exports = typeDefs;
