// ProtectedRoute.js
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ children, requirePaid = false }) => {
  const user = useSelector((state) => state.user.currentUser);

  // Check if user is logged in
  if (!user) {
    return <Navigate to="/subscription" />;
  }

  // If route requires paid access, check isPaid status
  if (requirePaid && !user.isPaid) {
    // Redirect to a subscription page or show payment information
    return <Navigate to="/subscription" />;
  }

  return children;
};

export default ProtectedRoute;
