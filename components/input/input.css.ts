import { vars } from "@/styles/globals.css";
import { style } from "@vanilla-extract/css";

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
