import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import Button from "../components/Button";
import { AuthContext } from "../contexts/AuthContext";
import { NotificationContext } from "../contexts/NotificationContext";

export default function AppLayout() {
  const { notifs } = useContext(NotificationContext);
  const { user, logout } = useContext(AuthContext);
  const notifCount = notifs.length;

  return (
    <div>
      AppLayout
      <Button component={Link} to="/">
        Home
      </Button>
      <Button title={"Buttons"} component={Link} to="/buttons" />
      <Button
        title={`Notifications${notifCount !== null ? `(${notifCount})` : ""} `}
        component={Link}
        to="/notifications"
      />
      {user && <Button onClick={logout}>Logout</Button>}
      <br />
      <Outlet />
    </div>
  );
}
