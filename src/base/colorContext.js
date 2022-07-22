import React, { useContext } from "react";

const ColorContext = React.createContext({
  mainColor: "#2193b0",
  secondaryColor: "#6dd5ed",
  buttonColor: "#187c96",
  white: "#ffffff",
  background: "#eff4f8",
});

export function ColorProvider({ children }) {
  const value = useContext(ColorContext);
  return (
    <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
  );
}

export default ColorContext;
