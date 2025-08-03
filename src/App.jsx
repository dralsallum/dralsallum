import React, { useEffect, useState } from "react";
import Home from "./pages/Home";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useLocation,
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
import { OrderComplete } from "./components";
import Lesson from "./pages/Lesson";
import Teach from "./pages/Teach";
import Login from "./pages/Login";
import Transfer from "./pages/Transfer";
import ProtectedRoute from "./utils/ProtectedRoute";
import SubscriptionPage from "./pages/SubscriptionPage";
import PaymentResult from "./pages/PaymentResult";
import PaymentSuccess from "./pages/PaymentSuccess";
import Refund from "./pages/Refund";
import Reach from "./pages/Reach";
import CookieConsent from "./CookieConsent";
import { initTikTokPixel, tiktokEvents } from "./tiktokPixel";

// Component to track page views
const PageTracker = () => {
  const location = useLocation();

  useEffect(() => {
    // Only track page view if TikTok pixel is initialized and consent given
    if (window.ttq && typeof window.ttq === "function") {
      tiktokEvents.pageView();
    }
  }, [location]);

  return null;
};

const App = () => {
  const user = useSelector((state) => state.user.currentUser);
  const [trackingEnabled, setTrackingEnabled] = useState(false);
  const [pixelInitialized, setPixelInitialized] = useState(false);
  const [showCookieBanner, setShowCookieBanner] = useState(true);

  useEffect(() => {
    // Check if user has already consented to cookies
    const savedConsent = localStorage.getItem("cookieConsent");
    if (savedConsent) {
      try {
        const consent = JSON.parse(savedConsent);
        handleConsentChange(consent, false); // false = don't save again
        setShowCookieBanner(false);
      } catch (error) {
        console.error("Error parsing saved consent:", error);
        // If there's an error, clear the invalid data and show banner
        localStorage.removeItem("cookieConsent");
        setShowCookieBanner(true);
      }
    }
  }, []);

  const handleConsentChange = (consent, shouldSave = true) => {
    // Save consent to localStorage if needed
    if (shouldSave) {
      try {
        localStorage.setItem("cookieConsent", JSON.stringify(consent));
      } catch (error) {
        console.error("Error saving consent to localStorage:", error);
      }
    }

    if (consent.marketing && !pixelInitialized) {
      // Initialize TikTok Pixel only if marketing cookies are accepted and not already initialized
      try {
        initTikTokPixel(process.env.REACT_APP_TIKTOK_PIXEL_ID);
        setPixelInitialized(true);
        setTrackingEnabled(true);
      } catch (error) {
        console.error("Error initializing TikTok Pixel:", error);
      }
    } else if (!consent.marketing && pixelInitialized) {
      // Disable TikTok tracking if marketing cookies are rejected
      try {
        if (window.ttq && typeof window.ttq.disableCookie === "function") {
          window.ttq.disableCookie();
        }
        setTrackingEnabled(false);
      } catch (error) {
        console.error("Error disabling TikTok tracking:", error);
      }
    } else if (consent.marketing && pixelInitialized) {
      // Marketing is enabled and pixel is already initialized
      setTrackingEnabled(true);
    }

    // Hide the cookie banner after consent is processed
    setShowCookieBanner(false);
  };

  // Track user signup
  const handleUserSignup = (method = "email") => {
    if (trackingEnabled && window.ttq) {
      try {
        tiktokEvents.signUp(method);
      } catch (error) {
        console.error("Error tracking signup:", error);
      }
    }
  };

  // Track subscription purchase
  const handleSubscriptionPurchase = (subscriptionType, value) => {
    if (trackingEnabled && window.ttq) {
      try {
        tiktokEvents.subscribe(subscriptionType, value, "USD");
      } catch (error) {
        console.error("Error tracking subscription:", error);
      }
    }
  };

  return (
    <Router>
      <GlobalStyle />
      <PageTracker />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/personality" element={<Personal />} />
        <Route path="/job" element={<Job />} />

        {/* Payment Routes - Updated */}
        <Route path="/payment-result" element={<PaymentResult />} />
        <Route
          path="/payment-success"
          element={<PaymentSuccess onPurchase={handleSubscriptionPurchase} />}
        />
        <Route path="/reach" element={<Reach />} />

        <Route path="/outcome" element={<Outcome />} />
        <Route path="/refund" element={<Refund />} />
        <Route path="/transfer" element={<Transfer />} />
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
          element={
            user ? <Navigate to="/" /> : <SignUp onSignup={handleUserSignup} />
          }
        />
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />

        {/* Add a subscription route for users who need to upgrade */}
        <Route path="/upgrade" element={<SubscriptionPage />} />
      </Routes>

      {/* Cookie Consent Banner - Only show if needed */}
      {showCookieBanner && (
        <CookieConsent onConsentChange={handleConsentChange} />
      )}
    </Router>
  );
};

export default App;
