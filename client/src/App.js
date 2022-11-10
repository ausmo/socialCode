import "./App.css";
import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import logo from "./img/socialCodeLogo.jpg";
import me from "./img/me2.jpg";
import alex from "./img/alex.png";
// import savannah from "./img/savannah.jpg";
import Navbar from "./Components/Navbar";
import Post from "./Components/Post";

function App() {
  return (
    <div>
      <Navbar/>
      <h1 className="banner">socialCode</h1>
      <br />
      <br />
      <br />
      <br />
      <article className="media">
        
      <Post/>

          <article className="media">
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
          </article>

          <article className="media">
            <figure className="media-left">
              <p className="image is-48x48">
                <img src={me} className="is-rounded" />
              </p>
            </figure>
            <div className="media-content">
              <div className="content">
                <p>
                  <strong className= "name">Austin Moore </strong>
                  <br />
                  <p className="postBody">
                    Sed convallis scelerisque mauris, non pulvinar nunc mattis
                    vel. Maecenas varius felis sit amet magna vestibulum euismod
                    malesuada cursus libero. Vestibulum ante ipsum primis in
                    faucibus orci luctus et ultrices posuere cubilia Curae;
                    Phasellus lacinia non nisl id feugiat.
                  </p>
                  <br />
                  <small>
                    <a className="likeReply">Like</a> ·{" "}
                    <a className="likeReply">Reply</a>
                  </small>
                </p>
              </div>
            </div>
          </article>
      
        </article>
     
      <article className="media">
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
    </div>
  );
}

export default App;
