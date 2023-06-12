import React from "react";

const ThemeContext = React.createContext({
    theme: '',
    handleClick: () => {}
});

export default ThemeContext;