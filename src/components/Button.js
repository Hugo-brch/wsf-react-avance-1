import React, { useContext } from "react";
import PropTypes from "prop-types";
import { ThemeContext } from "../contexts/ThemeContext";

function Button({
  color,
  variant = "default",
  title,
  onClick,
  component: Component = "button",
  ...rest
}) {
  const{ theme } = useContext(ThemeContext);
  const style = {
    backgroundColor: color ?? (theme === "light" ? "grey" : "white"),
    color: theme === "light" ? "white" : "black",
    textDecoration: "none",
    border: "2px solid " + (theme === "light" ? "whitesmoke" : "grey"),
  };

  switch (variant) {
    case "squared":
      style.borderRadius = "5px";
      break;
    case "rounded":
      style.borderRadius = "50%";
      style.height = "50px";
      style.width = "50px";
      title = title[0];
      break;
    default:
      break;
  }

  return (
    <Component style={style} onClick={onClick} {...rest}>
      {title}
    </Component>
  );
}

Button.propTypes = {
  color: PropTypes.string,
  variant: PropTypes.oneOf(["squared", "rounded", "default"]),
  title: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
