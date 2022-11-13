import Navbar from "../components/Navbar";
import PostForm from "../components/PostForm";
import CommentForm from "../components/CommentForm"
import CommentBody from "../components/CommentBody";

export default function Groups(params) {
  return (
    <>
      <Navbar />
      <h1 class="homepageBanner">socialCode</h1>
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
