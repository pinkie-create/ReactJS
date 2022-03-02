import { Navigate, Outlet } from "react-router";

export const PublicRoute = ({ auth }) => {
  return !auth ? <Outlet /> : <Navigate to="/profile" replace />;
};
