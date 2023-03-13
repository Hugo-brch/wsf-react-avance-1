import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { NotificationContext } from "../../contexts/NotificationContext";

export default function Form() {
  const { addNotif } = useContext(NotificationContext);
  const { user } = useContext(AuthContext);
  return (
    <form onSubmit={addNotif}>
      <input name="title" />
      <input name="date" type="date" />
      <input name="userId" type="hidden" value={user?.sub} />
      <input type="submit" value="Add" />
    </form>
  );
}
