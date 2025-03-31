import { vars } from "@/styles/globals.css";
import { style } from "@vanilla-extract/css";

export const topicWrapper = style({
  overflowY: "scroll",
  maxHeight: "50dvh",
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
});

export const topicName = style({
  fontSize: "1.2rem",
  fontWeight: "bold",
  color: vars.colors.textColor[600],
});
