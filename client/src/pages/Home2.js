import Navbar from "../components/Navbar";
import PostForm from "../components/PostForm";


export default function Groups(params) {
    return(
    <>
    <Navbar/>
    <h1 class="homepageBanner">socialCode</h1>
    <br />
    <br />
    <br />
    <br />
   
 
           <PostBody/>
           <CommentBody/>
           <CommentForm/>
           
       
        <br />
        <br />
       <PostForm/>
    
    <br />
    <br />
    <article class="homepageMedia">
      <figure class="media-left">
        <p class="image is-64x64">
          <img src="/mocks/img/me2.jpg" alt = "Austin" class="is-rounded"/>
        </p>
      </figure>
      <div class="media-content">
        <div class="field">
          <p class="control">
            <textarea class="textarea" placeholder='console.log("Hello World!")'></textarea>
          </p>
        </div>
        <div class="field">
          <p class="control">
            <button class="postButton">Post comment</button>
          </p>
        </div>
      </div>
    </article>
    </>
    )}
    