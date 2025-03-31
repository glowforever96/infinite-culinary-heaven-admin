import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/globals.css";

export const layoutWrapper = style({
  width: "100%",
  maxWidth: 900,
  minHeight: "100dvh",
  backgroundColor: vars.colors.background.grey,
  display: "flex",
  flexDirection: "column",
  margin: "auto",
  position: "relative",
});

export const bottomNavWrapper = style({
  width: "100%",
  maxWidth: 900,
  position: "fixed",
  display: "flex",
  justifyContent: "space-around",
  padding: "12px 24px",
  zIndex: 999,
  bottom: 0,
  backgroundColor: vars.colors.background.white,
  borderTop: `1px solid ${vars.colors.grey[200]}`,
});

export const buttonWrapper = style({
  display: "flex",
  flexDirection: "column",
  gap: 6,
  alignItems: "center",
  fontSize: "0.75rem",
  color: vars.colors.textColor.secondary,
});
