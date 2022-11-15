import React , {useState} from "react"
import Navbar from "../components/Navbar";
import PostForm from "../components/PostForm";
import CommentForm from "../components/CommentForm"
import CommentBody from "../components/CommentBody";
import { QUERY_POSTS } from '../utils/queries';
import { useQuery } from '@apollo/client';
import PostBody from '../components/PostBody';

export default function Home2(params) {
  const { loading, data } = useQuery(QUERY_POSTS);
  const [showCommentForm, toggleCommentForm] = useState(false);
  const posts = data?.posts || [];
  return (
    <>
      <Navbar />
      <h1 className="banner">socialCode</h1>
      <br />
      <br />
      <br />
      <br />

      <PostBody posts={posts}/>
      {showCommentForm ? <CommentForm /> :(<a  className="likeReply" onClick = {()=>toggleCommentForm(!showCommentForm)}>Reply</a>)}
      <CommentBody />
      

      <br />
      <br />
      <PostForm />

      <br />
      <br />
    </>
  );
}
