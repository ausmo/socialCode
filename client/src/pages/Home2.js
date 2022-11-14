import Navbar from "../components/Navbar";
import PostForm from "../components/PostForm";
import CommentForm from "../components/CommentForm"
import CommentBody from "../components/CommentBody";
import { QUERY_POSTS } from '../utils/queries';
import { useQuery } from '@apollo/client';
import PostBody from '../components/PostBody';

export default function Home2(params) {
  const { loading, data } = useQuery(QUERY_POSTS);
  const posts = data?.posts || [];
  return (
    <>
      <Navbar />
      <h1 className="homepageBanner">socialCode</h1>
      <br />
      <br />
      <br />
      <br />

      <PostBody />
      <CommentBody />
      <CommentForm />

      <br />
      <br />
      <PostForm />

      <br />
      <br />
    </>
  );
}
