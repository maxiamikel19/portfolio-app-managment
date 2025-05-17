import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAppContext } from "../contexts/AppContextProvider";

const AuthLayout = () => {
  const { token } = useAppContext();
  if (token) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default AuthLayout;
