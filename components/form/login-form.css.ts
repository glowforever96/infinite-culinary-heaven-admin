import { vars } from "@/styles/globals.css";
import { style } from "@vanilla-extract/css";

export const form = style({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  gap: 24,
});

export const inputContainer = style({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: 6,
  position: "relative",
});

export const label = style({
  fontSize: "1rem",
  fontWeight: 600,
  color: vars.colors.textColor[500],
});

export const input = style({
  width: "100%",
  padding: "10px 14px",
  fontSize: "1.15rem",
  border: `1px solid ${vars.colors.grey[300]}`,
  borderRadius: 6,
  outline: "none",
  transition: "border-color 0.2s ease-in-out",
  ":focus": {
    borderColor: vars.colors.green[600],
  },
});

export const loginButton = style({
  width: "100%",
  padding: "12px",
  fontSize: "1.25rem",
  color: "#fff",
  backgroundColor: vars.colors.green[600],
  border: "none",
  borderRadius: 6,
  cursor: "pointer",
  transition: "background-color 0.2s ease-in-out",
  marginTop: 12,
});

export const errorText = style({
  position: "absolute",
  fontSize: "0.925rem",
  bottom: -23,
  fontWeight: 600,
  color: vars.colors.red[500],
});
