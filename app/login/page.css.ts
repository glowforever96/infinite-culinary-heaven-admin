import { vars } from "@/styles/globals.css";
import { style } from "@vanilla-extract/css";

export const pageWrapper = style({
  display: "flex",
  flexDirection: "column",
  gap: "5rem",
  margin: "auto",
  width: "80%",
  borderRadius: 4,
  background: vars.colors.background.white,
  padding: 32,
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
});
