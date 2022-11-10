import savannah from "../img/savannah.jpg";
export default function Post() {
    return (
<>
<figure className="media-left">
          <p className="image is-64x64">
            <img src={savannah} className="is-rounded" />
          </p>
        </figure>
        <div className="media-content">
          <div className="content">
            <p>
              <strong className= "name">Savannah</strong>
              <br />
              <p className="postBody">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                porta blandit non. Suspendisse
                pellentesque mauris sit amet dolor blandit rutrum. Nunc in
                tempus turpis.
              </p>
              <br />
              <small>
                <a className="likeReply">like+1</a>
                <a className="likeReply">response.json</a>
              </small>
            </p>
          </div>
</div></>
)}