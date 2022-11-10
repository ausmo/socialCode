import "./App.css";
import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import logo from "./img/socialCodeLogo.jpg";
import me from "./img/me2.jpg";
import alex from "./img/alex.png";
import savannah from "./img/savannah.jpg";
import Navbar from "./Components/Navbar";
import Post from "./Components/Post";
import Comment from "./Components/Comment";
import PostForm from "./Components/PostForm"

function App() {
  return (
    <div>
      <Navbar/>
      <h1 className="banner">socialCode</h1>
      <br />
      <br />
      <br />
      <br />
      <Post/>
      
      <Comment/>

      <PostForm/>
     
      
    </div>
  );
}

export default App;
