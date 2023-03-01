import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Button from "../components/Button";

export default function AppLayout({ theme, notifCount }) {

  return (
    <div>
      AppLayout
      <Button theme={theme} title={"Home"} component={Link} to="/" />
      <Button theme={theme} title={"Buttons"} component={Link} to="/buttons" />
      <Button
        theme={theme}
        title={`Notifications${notifCount !== null ? `(${notifCount})` : ""} `}
        component={Link}
        to="/notifications"
      />
      <br />
      <Outlet />
    </div>
  );
}
