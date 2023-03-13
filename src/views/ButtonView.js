import React, { useContext } from "react";
import Button from "../components/Button";
import { ThemeContext } from "../contexts/ThemeContext";

export default function ButtonView() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const buttons = [
    {
      color: "red",
      component: "a",
      variant: "squared",
      title: "Click Me",
      onClick: () => console.log("Click Me"),
    },
    {
      color: "blue",
      variant: "rounded",
      title: "Click Round",
      onClick: () => console.log("Click Round"),
    },
    {
      color: "magenta",
      title: "Click Magenta",
      disabled: true,
      className: "foo",
      "data-rel": "issue",
      onClick: () => console.log("Click Magenta"),
    },
    {
      variant: "rounded",
      title: "",
      onClick: toggleTheme,
    },
  ];

  return (
    <div>
      {theme}
      <br />
      {buttons.map((button) => (
        <Button key={button.title} {...button} />
      ))}
    </div>
  );
}
