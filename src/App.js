import "./App.css";
import { useContext } from "react";
import ButtonView from "./views/ButtonView";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import NotificationView from "./views/NotificationView";
import { ThemeContext } from "./contexts/ThemeContext";
import NotificationProvider from "./contexts/NotificationContext.";

function App() {


  //Contexttheme

  const {theme} = useContext(ThemeContext);






  return (
    <div
      className="App"
      style={{
        backgroundColor: theme === "light" ? "whitesmoke" : "grey",
        color: theme === "light" ? "black" : "white",
      }}
    >
        <BrowserRouter>
        <NotificationProvider>
            <Routes>
              <Route path="/" element={<AppLayout/>}>
                <Route path="/" element={<h1>Coucou Home</h1>} />
                <Route path="/buttons" element={<ButtonView/>}/>
                <Route path="/notifications"element={<NotificationView />}/>
              </Route>
            </Routes>
          </NotificationProvider>
        </BrowserRouter>
    </div>
  );
}
//<Button key={button.title} {...button}/>    <=>   React.createElement(Button, {key: button.title, ...button})

export default App;
