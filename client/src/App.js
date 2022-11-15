import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home2 from "./pages/Home2";

import Login2 from "./pages/Login2";
import Profile2 from "./pages/Profile2";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PostForm from "./components/PostForm";
import PostBody from "./components/PostBody";
import CommentBody from "./components/CommentBody";

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: "/graphql",
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Routes>
          <Route path="/home" element={<Home2 />} />
          <Route path="/" element={<Login2 />} />

          <Route path="/me" element={<Profile2 />} />
          <Route path="/profiles/:username" element={<Profile2 />} />
          
        </Routes>
        <Footer />
      </Router>
    </ApolloProvider>
  );
}

export default App;
