import { vars } from "@/styles/globals.css";
import { style } from "@vanilla-extract/css";

export const topicLength = style({
  fontSize: "1.5rem",
  fontWeight: 600,
  color: vars.colors.textColor[900],
  marginBottom: 8,
  lineHeight: 1.4,
});

export const span = style({
  color: vars.colors.green[600],
  fontSize: "1.8rem",
  fontWeight: 700,
  margin: "0 6px",
});

export const banner = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  width: "50%",
  minHeight: 200,
  height: "fit-content",
  borderRadius: 12,
  border: `2px solid ${vars.colors.grey[300]}`,
  padding: 8,
  backgroundColor: vars.colors.grey[100],
  transition: "all 0.2s ease-in-out",

  ":hover": {
    backgroundColor: vars.colors.grey[200],
  },
  ":active": {
    backgroundColor: vars.colors.grey[300],
    transform: "translateY(0)",
  },
});
