const { AuthenticationError } = require('apollo-server-express');
const { Profile, Post, Group } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    profiles: async () => {
      return Profile.find().populate('posts').populate("friends");
    },
    profile: async (parent, { profilename }) => {
      return Profile.findOne({ profilename }).populate('posts');
    },
    posts: async (parent, { profilename }) => {
      const params = profilename ? { profilename } : {};
      return Post.find(params).sort({ createdAt: -1 });
    },
    post: async (parent, { postId }) => {
      return Post.findOne({ _id: postId });
    },
    me: async (parent, args, context) => {
      if (context.profile) {
        return Profile.findOne({ _id: context.profile._id }).populate('posts');
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },

  Mutation: {
    addProfile: async (parent, { profilename, email, password }) => {
      const profile = await Profile.create({ profilename, email, password });
      const token = signToken(profile);
      return { token, profile };
    },
    login: async (parent, { email, password }) => {
      const profile = await Profile.findOne({ email });

      if (!profile) {
        throw new AuthenticationError('Invalid Signin');
      }

      const correctPw = await profile.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Invalid Signin');
      }

      const token = signToken(profile);

      return { token, profile };
    },
    addPost: async (parent, { postText }, context) => {
      if (context.profile) {
        const post = await Post.create({
          postText,
          postAuthor: context.profile.profilename,
        });

        await Profile.findOneAndUpdate(
          { _id: context.profile._id },
          { $addToSet: { posts: post._id } }
        );

        return post;
      }
      throw new AuthenticationError('You need to be logged in to create a post!');
    },
    addComment: async (parent, { postId, commentText }, context) => {
      if (context.profile) {
        return Post.findOneAndUpdate(
          { _id: postId },
          {
            $addToSet: {
              comments: { commentText, commentAuthor: context.profile.profilename },
            },
          },
          {
            new: true,
            runValidators: true,
          }
        );
      }
      throw new AuthenticationError('You need to be logged in to comment!');
    },
    addGroup: async (parent, {groupId, groupTitle}, context) => {
      if (context.profile) {
      const group = await Group.create({ groupId, groupTitle });
      const token = signToken(group);
      return { token, group };
      };
      // if (context.profile) {
      //   return Post.findOneAndUpdate(
      //     { _id: groupId },
      //     {
      //       $addToSet: {
      //         groups: { groupTitle, groupAuthor: context.profile.profilename },
      //       },
      //     },
      //     {
      //       new: true,
      //       runValidators: true,
      //     }
      //   );
      // }
      throw new AuthenticationError('You must be logged in to create a group!');
    },
    addFriend: async (parent, {profileId}, context) => {
      if (context.profile) {
        return Profile.findOneAndUpdate(
          { _id: context.profile._id},
          {
            $addToSet: {
              friends: ( profileId ),
            
            },
          },
          {
            new: true,
            runValidators: true,
          }
        );
      }
      throw new AuthenticationError('You need to be logged in!');     
    },
    removePost: async (parent, { postId }, context) => {
      if (context.profile) {
        const post = await Post.findOneAndDelete({
          _id: postId,
          postAuthor: context.profile.profilename,
        });

        await Profile.findOneAndUpdate(
          { _id: context.profile._id },
          { $pull: { posts: post._id } }
        );

        return post;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    removeComment: async (parent, { postId, commentId }, context) => {
      if (context.profile) {
        return Post.findOneAndUpdate(
          { _id: postId },
          {
            $pull: {
              comments: {
                _id: commentId,
                commentAuthor: context.profile.profilename,
              },
            },
          },
          { new: true }
        );
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },
};

module.exports = resolvers;
