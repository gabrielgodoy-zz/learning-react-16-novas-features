import React from "react";
import Button from "./Button";
import ThemeContext from "./ThemeContext";
import UserContext from "./UserContext";

function Toolbar() {
  return (
    <div>
      <Button>Edit</Button>
      <Button>Save</Button>
      <ThemeContext.Consumer>
        {({ toggleTheme }) => <Button onClick={toggleTheme}>Toggle</Button>}
      </ThemeContext.Consumer>
      <ThemeContext.Consumer>
        {({ theme }) => (
          <UserContext.Consumer>
            {user => (
              <div style={{ background: theme.background }}>{user.name}</div>
            )}
          </UserContext.Consumer>
        )}
      </ThemeContext.Consumer>
    </div>
  );
}
export default Toolbar;
