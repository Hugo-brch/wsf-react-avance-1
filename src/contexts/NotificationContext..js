import { createContext, useEffect, useState } from "react";

export const NotificationContext = createContext(
    localStorage.getItem("notification") || "light"
);

export default function NotificationProvider({ children }) {

  const [notifs, setNotifs] = useState([]);

  function deleteNotif() {
    fetch("http://localhost:5000/notifications/" + this.id, {
      method: "DELETE",
    }).then(
      (response) =>
        response.status === 200 &&
        setNotifs(notifs.filter((notif) => notif.id !== this.id))
    );
  }

  useEffect(() => {
    fetch("http://localhost:5000/notifications")
      .then((response) => response.json())
      .then(setNotifs);
  }, []);


  function addNotif(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData);

    fetch("http://localhost:5000/notifications", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((newNotif) => setNotifs([...notifs, newNotif]));
  }


  return (
    <NotificationContext.Provider value={{ notifs, addNotif, deleteNotif}}>
        {children}
    </NotificationContext.Provider>
  )
}
