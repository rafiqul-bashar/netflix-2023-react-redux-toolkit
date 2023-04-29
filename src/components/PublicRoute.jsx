import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function PublicRoute({ children }) {
  const { user } = useSelector((state) => state.auth);
  if (!user?._id) {
    return children;
  }
  return <Navigate to="/" replace />;
}
