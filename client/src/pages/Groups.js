export default function Groups(params) {
    return(<>
  <h1 class="banner">Project 3 Gang</h1>

  <br />
  <br />
  <br />
  <br />

  <div class="columns">
    <div class="column is-one-fifth">
      <h5 class="groupMembersTitle">Group Members</h5>
      <hr />
      <ul class="groupMembers">
        <li class="groupMember">
          <p class="image is-48x48">
            <img
              src="/mocks/img/savannah.jpg"
              alt="savannah"
              class="is-rounded"
            />
            Savannah
          </p>
        </li>

        <li class="groupMember">
          <p class="image is-48x48">
            <img src="/mocks/img/alex.png" alt="alex" class="is-rounded" />
            Alex
          </p>
        </li>

        <li class="groupMember">
          <p class="image is-48x48">
            <img src="/mocks/img/me2.jpg" alt="me" class="is-rounded" />

            Austin
          </p>
        </li>
      </ul>
    </div>

    <div class="column">
      <br />
      <br />
      <br />

      <article class="media">
        <figure class="media-left">
          <p class="image is-64x64">
            <img
              src="/mocks/img/savannah.jpg"
              alt="savannah"
              class="is-rounded"
            />
          </p>
        </figure>
        <div class="media-content">
          <div class="content">
            <p>
              <strong class="name">Savannah</strong>
              <br />
            </p>

            <p class="postBody">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              porta eros lacus, nec ultricies elit blandit non. Suspendisse
              pellentesque mauris sit amet dolor blandit rutrum. Nunc in
              tempus turpis.
              <br />
            </p>
            <small
              ><a class="likeReply">likeValue++</a> ·
              <a class="likeReply">response.json</a></small
            >
          </div>
          <br />

          <article class="media">
            <figure class="media-left">
              <p class="image is-48x48">
                <img
                  src="/mocks/img/alex.png"
                  alt="alex"
                  class="is-rounded"
                />
              </p>
            </figure>
            <div class="media-content">
              <div class="content">
                <p>
                  <strong class="name">Alex</strong>
                  <br />
                </p>

                <p class="postBody">
                  Donec sollicitudin urna eget eros malesuada sagittis.
                  Pellentesque habitant morbi tristique senectus et netus et
                  malesuada fames ac turpis egestas. Aliquam blandit nisl a
                  nulla sagittis, a lobortis leo feugiat.
                </p>
                <br />
                <small
                  ><a class="likeReply">likeValue++</a> ·
                  <a class="likeReply">response.json</a></small
                >
              </div>
            </div>
          </article>
        </div>
      </article>

      <br />
      <br />
      <article class="media">
        <figure class="media-left">
          <p class="image is-64x64">
            <img src="/mocks/img/me2.jpg" alt="me" class="is-rounded" />
          </p>
        </figure>
        
      </article>
    </div>
  </div></>)}