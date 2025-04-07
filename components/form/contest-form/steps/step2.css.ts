import { vars } from "@/styles/globals.css";
import { style } from "@vanilla-extract/css";

export const step2Container = style({
  display: "flex",
  flexDirection: "column",
});

export const paragraph = style({
  color: vars.colors.textColor[700],
  fontSize: "1.25rem",
  fontWeight: 500,
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

export const contenstWrapper = style({
  display: "flex",
  flexDirection: "column",
  gap: 32,
  marginTop: 48,
});
