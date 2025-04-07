import { vars } from "@/styles/globals.css";
import { style } from "@vanilla-extract/css";

export const step1Container = style({
  display: "flex",
  flexDirection: "column",
  height: "100%",
});

export const titleInputContainer = style({
  display: "flex",
  flexDirection: "column",
  gap: 6,
});

export const paragraph = style({
  color: vars.colors.textColor[700],
  fontSize: "1.25rem",
  fontWeight: 500,
});

export const contentWrapper = style({
  maxHeight: "60dvh",
  overflowY: "scroll",
  marginTop: 10,
});

export const displayedTopic = style({
  height: "inherit",
  display: "grid",
  width: "100%",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: 12,
});

export const topicItem = style({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: 12,
  border: `1px solid ${vars.colors.grey[200]}`,
  borderRadius: "8px",
  backgroundColor: "white",
  gap: 6,
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  cursor: "pointer",
});

export const topicName = style({
  fontSize: "1.2rem",
  fontWeight: "bold",
  color: vars.colors.textColor[600],
});

export const resetButton = style({
  width: "50%",
  padding: "12px",
  fontSize: "1.25rem",
  fontWeight: 500,
  color: "#fff",
  backgroundColor: vars.colors.green[600],
  border: "none",
  borderRadius: 6,
  cursor: "pointer",
  transition: "background-color 0.2s ease-in-out",
  marginTop: 16,
});

export const notFoundSearch = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "1.525rem",
  fontWeight: 500,
  marginTop: 24,
  color: vars.colors.grey[600],
});
