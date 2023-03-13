
import React, { useContext } from "react";
import { NotificationContext } from "../../contexts/NotificationContext";
import Button from "../Button";

export default function Item({ notif }) {
  const { deleteNotif, getNotif } = useContext(NotificationContext);
  return (
    <li>
      <span
        onClick={() =>
          getNotif(notif.id).then((data) => alert(JSON.stringify(data)))
        }
      >
        {notif.title}
      </span>
      <span>{notif.date}</span>
      <span>
        {/*<Button theme={theme} title="Delete" onClick={() => handleDelete(notif)} />*/}
        <Button title="Delete" onClick={deleteNotif.bind(notif)} />
      </span>
    </li>
  );

}
