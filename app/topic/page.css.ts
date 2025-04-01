import { vars } from "@/styles/globals.css";
import { style } from "@vanilla-extract/css";

export const topicPageWrapper = style({
  display: "flex",
  flexDirection: "column",
  gap: 4,
  padding: 24,
  position: "relative",
});

export const topicLength = style({
  fontSize: "1.525rem",
  fontWeight: "bold",
  color: vars.colors.textColor[900],
  width: "100%",
  marginBottom: 8,
});

export const span = style({
  color: vars.colors.green[600],
  margin: "0 4px",
});

export const divider = style({
  width: "100%",
  border: `1px solid ${vars.colors.grey[200]}`,
  margin: "6px 0",
});
