import { useSelector } from "react-redux";
import { Navigate, redirect, useNavigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const { user } = useSelector((state) => state.auth);

  if (!user?._id) {
    return <Navigate to="/login" replace />;
  }
  return children;
}
