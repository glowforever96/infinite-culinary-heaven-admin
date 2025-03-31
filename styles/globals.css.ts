import { globalStyle, createGlobalTheme } from "@vanilla-extract/css";

globalStyle("*", {
  boxSizing: "border-box",
  margin: 0,
  padding: 0,
});

globalStyle("a", {
  textDecoration: "none",
});

globalStyle("li", {
  listStyle: "none",
});

globalStyle("button", {
  fontFamily: "inherit",
  cursor: "pointer",
});

export const vars = createGlobalTheme(":root", {
  colors: {
    background: {
      grey: "#f1f4f6",
      white: "#fff",
    },
    textColor: {
      secondary: "#333",
    },
    grey: {
      200: "#E5E7EB",
    },
  },
});
