import "./App.css";
import { useEffect, useState } from "react";
import ButtonView from "./views/ButtonView";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import NotificationView from "./views/NotificationView";

function App() {

  //-------gestion theme
  
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  useEffect(() => {
    console.log("new theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);


//--------notification

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
    <div
      className="App"
      style={{
        backgroundColor: theme === "light" ? "whitesmoke" : "grey",
        color: theme === "light" ? "black" : "white",
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout theme={theme} notifCount={notifs.length} />}>
            <Route path="/" element={<h1>Coucou Home</h1>} />
            <Route
              path="/buttons"
              element={<ButtonView theme={theme} toggleTheme={toggleTheme} />}
            />
            <Route
              path="/notifications"
              element={<NotificationView theme={theme} notifs={notifs} addNotif={addNotif} deleteNotif={deleteNotif} />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
//<Button key={button.title} {...button}/>    <=>   React.createElement(Button, {key: button.title, ...button})

export default App;
