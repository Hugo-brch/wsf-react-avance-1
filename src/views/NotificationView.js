import React, { useEffect, useState } from "react";
import Button from "../components/Button";

export default function NotificationView({ theme, notifs, addNotif, deleteNotif }) {



  return (
    <>
      <form onSubmit={addNotif}>
        <input name="title" />
        <input name="date" type="date" />
        <input type="submit" value="Add" />
      </form>
      <ul>
        {notifs.length > 0 &&
          notifs.map((notif) => (
            <li key={notif.id}>
              <span>{notif.title}</span>
              <span>{notif.date}</span>
              <span>
                {/*<Button theme={theme} title="Delete" onClick={() => handleDelete(notif)} />*/}
                <Button
                  theme={theme}
                  title="Delete"
                  onClick={deleteNotif.bind(notif)}
                />
              </span>
            </li>
          ))}
        {notifs.length === 0 && <p>No notifications</p>}
      </ul>
    </>
  );
}
