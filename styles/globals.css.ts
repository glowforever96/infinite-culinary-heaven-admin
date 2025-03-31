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
      900: "#111827",
      800: "#1f2937",
      700: "#374151",
      600: "#4b5563",
      500: "#6b7280",
    },
    grey: {
      200: "#E5E7EB",
    },
    green: {
      200: "#bbf7d0",
      400: "#4ade80",
      600: "#22c55e",
    },
  },
});
