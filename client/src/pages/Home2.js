import Navbar from "../components/Navbar";

export default function Groups(params) {
    return(<>
    <Navbar/>
    <h1 class="homepageBanner">socialCode</h1>
    <br />
    <br />
    <br />
    <br />
    <article class="homepageMedia">
      <figure class="media-left">
        <p class="image is-64x64">
          <img src="/mocks/img/savannah.jpg" alt ="savannah" class="is-rounded"/>
        </p>
      </figure>
      <div class="media-content">
        <div class="content">
          <p>
            <strong class="name">Savannah</strong>
            </p>
           <PostBody/>
            <small><a class="likeReply">Like</a> · <a class="likeReply">Reply</a>
          </small>
        </div>
        </div>
        <br />
        <br />
        <article class="homepageMedia">
          <figure class="media-left">
            <p class="image is-48x48">
              <img src="/mocks/img/alex.png" alt = "alex" class="is-rounded"/>
            </p>
          </figure>
          <div class="media-content">
            <div class="content">
              <div>
                <strong class="name">Alex</strong>
                <p class="commentBody">
                Donec sollicitudin urna eget eros malesuada sagittis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam blandit nisl a nulla sagittis, a lobortis leo feugiat.
                </p>
                <br/>
                <small><a class="likeReply">Like</a> · <a class="likeReply">Reply</a> </small>
            </div>
          </div>
          </div>
        </article>
    </article>
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
    </article></>
    )}