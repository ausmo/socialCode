import alex from "../img/alex.png";
export default function Comment() {
    return (<article className="media">
    <figure className="media-left">
      <p className="image is-48x48">
        <img src={alex} className="is-rounded" />
      </p>
    </figure>
    <div className="media-content">
      <div className="content">
        <p>
          <strong className= "name">Alex Luce</strong>
          <br />
          <p className="postBody">
            Donec sollicitudin urna eget eros malesuada sagittis.
            Pellentesque habitant morbi tristique senectus et netus et
            malesuada fames ac turpis egestas. Aliquam blandit nisl a
            nulla sagittis, a lobortis leo feugiat.
          </p>
          <br />
          <small>
            <a className="likeReply">Like</a> ·{" "}
            <a className="likeReply">Reply</a>
          </small>
        </p>
      </div>
    </div>
  </article>)}