import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAppContext } from "../contexts/AppContextProvider";

const DefaultLayout = () => {
  const { token } = useAppContext();
  if (!token) {
    return <Navigate to="/login" />;
  }
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default DefaultLayout;
