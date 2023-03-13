import React, { useContext } from "react";
import NotificationForm from "../components/Notification/Form";
import NotificationItem from "../components/Notification/Item";
import { NotificationContext } from "../contexts/NotificationContext";

export default function NotificationView() {
  const { notifs } = useContext(NotificationContext);
  return (
    <>
      <NotificationForm />
      <ul>
        {notifs.length > 0 &&
          notifs.map((notif) => (
            <NotificationItem key={notif.id} notif={notif} />
          ))}
        {notifs.length === 0 && <p>No notifications</p>}
      </ul>
    </>
  );
}
