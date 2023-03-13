import React, { useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

export default function SecurityView() {
  const { user, login, register } = useContext(AuthContext);
  const navigate = useNavigate();
  const { state } = useLocation();
  const pathname = state?.to ?? "/";

  useEffect(() => {
    if (user != false) return navigate("/");
  }, [user]);

  if (user !== false) return <></>;

  function handleLogin(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    login(data.get("email"), data.get("password"))
      .then(() => {
        navigate(pathname);
      })
      .catch((e) => console.error("login failed", e.message));
  }
  function handleRegister(event) {
    event.preventDefault();
    const data = Object.values(
      Object.fromEntries(new FormData(event.currentTarget))
    );
    register(...data)
      .then(() => {
        navigate(pathname);
      })
      .catch((e) => console.error("login failed", e.message));
  }

  return (
    <div>
      Login
      <form onSubmit={handleLogin}>
        <input name="email" type="email" autoComplete="username" />
        <input
          name="password"
          type="password"
          autoComplete="current-password"
        />
        <input type="submit" value="Login" />
      </form>
      Register
      <form onSubmit={handleRegister}>
        <input name="surname" />
        <input name="name" />
        <input name="email" type="email" autoComplete="username" />
        <input
          name="password"
          type="password"
          autoComplete="current-password"
        />
        <input type="submit" value="Register" />
      </form>
    </div>
  );
}
