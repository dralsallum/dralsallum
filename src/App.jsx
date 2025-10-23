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
import { Invest, OrderComplete } from "./components";
import Lesson from "./pages/Lesson";
import Teach from "./pages/Teach";
import Login from "./pages/Login";
import Transfer from "./pages/Transfer";
import ProtectedRoute from "./utils/ProtectedRoute";
import SubscriptionPage from "./pages/SubscriptionPage";
import PaymentResult from "./pages/PaymentResult";
import PaymentSuccess from "./pages/PaymentSuccess"; // Keep your existing success page
import Refund from "./pages/Refund";
import Reach from "./pages/Reach";
import Sales from "./pages/Sales";
import Upload from "./pages/Upload";
import Task from "./pages/Task";
import Share from "./pages/Share";

const App = () => {
  const user = useSelector((state) => state.user.currentUser);

  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/personality" element={<Personal />} />
        <Route path="/job" element={<Job />} />
        <Route path="/sales" element={<Sales />} />
        <Route path="/invest/:id" element={<Invest />} />

        {/* Payment Routes - Updated */}
        <Route path="/payment-result" element={<PaymentResult />} />
        <Route path="/payment-success" element={<PaymentSuccess />} />
        <Route path="/reach" element={<Reach />} />

        <Route path="/outcome" element={<Outcome />} />
        <Route path="/refund" element={<Refund />} />
        <Route path="/transfer" element={<Transfer />} />
        <Route path="/task" element={<Task />} />
        <Route path="/shares" element={<Share />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/audio" element={<Audio />} />
        <Route path="/product/:category" element={<Product />} />
        <Route path="/main/:articleTitle" element={<Something />} />

        {/* Protected Routes that require login and paid subscription */}
        <Route
          path="/lesson"
          element={
            <ProtectedRoute requirePaid={true}>
              <Lesson />
            </ProtectedRoute>
          }
        />
        <Route
          path="/learning/:slug"
          element={
            <ProtectedRoute requirePaid={true}>
              <Teach />
            </ProtectedRoute>
          }
        />

        <Route path="/order-complete" element={<OrderComplete />} />

        <Route
          path="/signup"
          element={user ? <Navigate to="/" /> : <SignUp />}
        />
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />

        {/* Add a subscription route for users who need to upgrade */}
        <Route path="/upgrade" element={<SubscriptionPage />} />
        <Route path="/upload" element={<Upload />} />
      </Routes>
    </Router>
  );
};

export default App;
