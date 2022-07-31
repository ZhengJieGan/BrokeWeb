import React, { useState, useMemo } from "react";

const ColorContext = React.createContext({ total: 0, handler: () => {} });

export function ColorProvider({ children }) {
	const [total, setTotal] = useState(0);

  const handler = (feedback) => {
    setTotal(feedback);
  }

	const value = useMemo(
		() => ({
			mainColor: "#2193b0",
			secondaryColor: "#6dd5ed",
			buttonColor: "#187c96",
			white: "#ffffff",
			background: "#eff4f8",
			total: total,
			setTotal,
      handler
		}),
		[total]
	);

	return (
		<ColorContext.Provider value={value}>{children}</ColorContext.Provider>
	);
}

export default ColorContext;
