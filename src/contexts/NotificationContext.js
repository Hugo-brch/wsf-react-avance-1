import { createContext, useEffect, useState } from "react";

export const NotificationContext = createContext();

export default function NotificationProvider({ children }) {
  /**
   * Gestion des notifs
   */
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
    /*.then((data) => setNotifs(data));*/
  }, []);
  //useEffect(() => {
  //  async () => {
  //    const response = await fetch("http://localhost:5000/notifications");
  //    const data = await response.json();
  //    setNotifs(data);
  //  };
  //}, []);

  function addNotif(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    //const data = Array.from(formData.keys()).reduce((acc, key) => {
    //  acc[key] = formData.get(key);
    //  return acc;
    //}, {});
    // convert formData to object
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
    <NotificationContext.Provider
      value={{ notifs, addNotif, deleteNotif, notifCount: notifs.length }}
    >
      {children}
    </NotificationContext.Provider>
  );
}
