import { Navigate, Outlet } from "react-router";

export const PrivateRoute = ({ auth }) => {
  return auth ? <Outlet /> : <Navigate to="/" replace />;
};
