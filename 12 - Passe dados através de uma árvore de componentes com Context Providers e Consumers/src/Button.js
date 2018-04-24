import React from "react";
import ThemeContext from "./ThemeContext";

function Button(props) {
  return (
    <ThemeContext.Consumer>
      {({ theme }) => {
        const style = {
          background: theme.background,
          color: theme.foreground
        };
        return (
          <button style={style} onClick={props.onClick}>
            {props.children}
          </button>
        );
      }}
    </ThemeContext.Consumer>
  );
}

export default Button;
