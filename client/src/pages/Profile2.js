import Navbar from "../components/Navbar";
import PostForm from "../components/PostForm";
import CommentForm from "../components/CommentForm";
import CommentBody from "../components/CommentBody";
import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_USER, QUERY_ME } from '../utils/queries';
import Auth from '../utils/auth';