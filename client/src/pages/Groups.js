import savannahPic from "../../img/savannahjpg"
import Navbar from "../components/Navbar";
import PostForm from "../components/PostForm";
import CommentForm from "../components/CommentForm";
import CommentBody from "../components/CommentBody";
import React from "react";
import { Navigate, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_PROFILE, QUERY_ME } from "../utils/queries";
import Auth from "../utils/auth";
import PostBody from "../components/PostBody";
import PostList from '../components/PostList';
import CommentList from "../components/CommentList";

export default function Groups(params) {
    return(<>
  <h1 className="banner">Project 3 Gang</h1>

  <br />
  <br />
  <br />
  <br />

  <div className="columns">
    <div className="column is-one-fifth">
      <h5 className="groupMembersTitle">Group Members</h5>
      <hr />
      <ul className="groupMembers">
        <li className="groupMember">
          <p className="image is-48x48">
            <img
              src="/mocks/img/savannah.jpg"
              alt="savannah"
              className="is-rounded"
            />
            Savannah
          </p>
        </li>

        <li className="groupMember">
          <p className="image is-48x48">
            <img src="/mocks/img/alex.png" alt="alex" className="is-rounded" />
            Alex
          </p>
        </li>

        <li className="groupMember">
          <p className="image is-48x48">
            <img src="/mocks/img/me2.jpg" alt="me" className="is-rounded" />

            Austin
          </p>
        </li>
      </ul>
    </div>

    <div className="column">
      <br />
      <br />
      <br />

      <article className="media">
        <figure className="media-left">
          <p className="image is-64x64">
            <img
              src={savannahPic}
              alt="savannah"
              className="is-rounded"
            />
          </p>
        </figure>
        <div className="media-content">
          <div className="content">
            <p>
              <strong className="name">Savannah</strong>
              <br />
            </p>

            <p className="postBody">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              porta eros lacus, nec ultricies elit blandit non. Suspendisse
              pellentesque mauris sit amet dolor blandit rutrum. Nunc in
              tempus turpis.
              <br />
            </p>
            <small
              ><a className="likeReply">likeValue++</a> ·
              <a className="likeReply">response.json</a></small
            >
          </div>
          <br />

          <article className="media">
            <figure className="media-left">
              <p className="image is-48x48">
                <img
                  src="/mocks/img/alex.png"
                  alt="alex"
                  className="is-rounded"
                />
              </p>
            </figure>
            <div className="media-content">
              <div className="content">
                <p>
                  <strong className="name">Alex</strong>
                  <br />
                </p>

                <p className="postBody">
                  Donec sollicitudin urna eget eros malesuada sagittis.
                  Pellentesque habitant morbi tristique senectus et netus et
                  malesuada fames ac turpis egestas. Aliquam blandit nisl a
                  nulla sagittis, a lobortis leo feugiat.
                </p>
                <br />
                <small
                  ><a className="likeReply">likeValue++</a> ·
                  <a className="likeReply">response.json</a></small
                >
              </div>
            </div>
          </article>
        </div>
      </article>

      <br />
      <br />
      <article className="media">
        <figure className="media-left">
          <p className="image is-64x64">
            <img src="/mocks/img/me2.jpg" alt="me" className="is-rounded" />
          </p>
        </figure>
        
      </article>
    </div>
  </div></>)}