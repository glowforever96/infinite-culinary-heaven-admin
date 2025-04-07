import { vars } from "@/styles/globals.css";
import { style } from "@vanilla-extract/css";

export const errorText = style({
  fontSize: "0.975rem",
  color: vars.colors.red[500],
  fontWeight: "500",
  lineHeight: "24px",
  margin: "4px 0",
  display: "flex",
});
