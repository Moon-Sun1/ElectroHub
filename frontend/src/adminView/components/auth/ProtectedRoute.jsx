import { Navigate } from "react-router-dom";

function isTokenValid(token) {
  if (!token) return false;
  try {
    const payload = JSON.parse(atob(token.split(".")[1]));
    // Check if token is expired
    if (payload.exp && Date.now() >= payload.exp * 1000) return false;
    return true;
  } catch {
    return false;
  }
}

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("jwtToken");
  if (!isTokenValid(token)) {
    return <Navigate to="/admin/authentication" replace />;
  }
  return children;
};

export default ProtectedRoute;
