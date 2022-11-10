import me from "../img/me2.jpg";

export default function PostForm() {
    return (<article className="media">
        <figure className="media-left">
          <p className="image is-64x64">
            <img src={me} className="is-rounded" />
          </p>
        </figure>
        <div className="media-content">
          <div className="field">
            <p className="control">
              <textarea
                className="textarea"
                placeholder='console.log("Hello World!")'
              ></textarea>
            </p>
          </div>
          <div className="field">
            <p className="control">
              <button className="postButton">console.log</button>
            </p>
          </div>
        </div>
      </article>
      )}