import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import Button from "../components/Button";
import { NotificationContext } from "../contexts/NotificationContext.";

export default function AppLayout() {

  const { notifs } = useContext(NotificationContext);
  const notifCount = notifs.length;

  return (
    <div>
      AppLayout
      <Button  title={"Home"} component={Link} to="/" />
      <Button  title={"Buttons"} component={Link} to="/buttons" />
      <Button
        title={`Notifications${notifCount !== null ? `(${notifCount})` : ""} `}
        component={Link}
        to="/notifications"
      />
      <br />
      <Outlet />
    </div>
  );
}
