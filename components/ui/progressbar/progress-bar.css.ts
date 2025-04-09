import { vars } from "@/styles/globals.css";
import { style } from "@vanilla-extract/css";

export const progressBarContainer = style({
  width: "100%",
  height: "4px",
  backgroundColor: vars.colors.grey[200],
  borderRadius: 2,
  overflow: "hidden",
  margin: "12px 0",
});

export const progressBarFill = style({
  height: "100%",
  backgroundColor: vars.colors.green[400],
  transition: "width 0.5s ease-in-out",
});
