
import React, { useContext } from "react";
import { NotificationContext } from "../../contexts/NotificationContext";

export default function Form() {
  const { addNotif } = useContext(NotificationContext);
  return (
    <form onSubmit={addNotif}>
      <input name="title" />
      <input name="date" type="date" />
      <input type="submit" value="Add" />
    </form>
  );
}
