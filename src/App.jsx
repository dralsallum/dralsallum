import React from "react";
import Home from "./pages/Home";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import GlobalStyle from "./globalStyles";
import { useSelector } from "react-redux";
import Product from "./pages/Product";
import SignUp from "./pages/SignUp";
import Something from "./pages/Something";
import Policy from "./pages/Policy";
import Personal from "./pages/personal";
import Audio from "./pages/Audio";
import Outcome from "./pages/Outcome";
import Job from "./pages/Job";
import { Breath, OrderComplete } from "./components";
import Lesson from "./pages/Lesson";
import Teach from "./pages/Teach";

const App = () => {
  const user = useSelector((state) => state.user.currentUser);

  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/personality" element={<Personal />} />
        <Route path="/job" element={<Job />} />
        <Route path="/outcome" element={<Outcome />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/audio" element={<Audio />} />
        <Route path="/product/:category" element={<Product />} />

        {/* UPDATED ROUTE: capture article title as a URL parameter */}
        <Route path="/main/:articleTitle" element={<Something />} />
        <Route path="/lesson" element={<Lesson />} />
        <Route path="/learning/:slug" element={<Teach />} />
        <Route path="/order-complete" element={<OrderComplete />} />

        {/* If user is logged in, redirect from signup to home */}
        <Route
          path="/signup"
          element={user ? <Navigate to="/" /> : <SignUp />}
        />
      </Routes>
    </Router>
  );
};

export default App;
