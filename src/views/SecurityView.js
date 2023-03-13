import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

export default function SecurityView() {
  const { user, login } = useContext(AuthContext);
  const navigate = useNavigate();

  if (user) {
    return navigate("/");
  }

  function handleLogin(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    login(data.get("email"), data.get("password"))
      .then(() => {
        navigate("/");
      })
      .catch((e) => console.error("login failed", e.message));
  }

  return (
    <div>
      SecurityView
      <form onSubmit={handleLogin}>
        <input name="email" type="email" />
        <input name="password" type="password" />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
}
