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

globalStyle("input", {
  fontFamily: "inherit",
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
      50: "#f9fafb",
      100: "#f3f4f6",
      200: "#e5e7eb",
      300: "#d1d5db",
      400: "#9ca3af",
      500: "#6b7280",
      600: "#4b5563",
      700: "#374151",
      800: "#1f2937",
      900: "#111827",
      950: "#030712",
    },
    green: {
      200: "#bbf7d0",
      400: "#4ade80",
      600: "#22c55e",
    },
    red: {
      500: "#ef4444",
    },
  },
});

globalStyle(".react-datepicker__day--selected", {
  backgroundColor: "red !important",
  color: "#ffffff",
  borderRadius: "50%",
});

globalStyle(".react-datepicker__day--keyboard-selected", {
  backgroundColor: "#4f46e5",
  color: "#ffffff",
  borderRadius: "50%",
});

globalStyle(".react-datepicker__day--outside-month", {
  color: "#ccc !important",
  cursor: "default !important",
});

globalStyle(".react-datepicker-wrapper", {
  width: "100% !important",
});
