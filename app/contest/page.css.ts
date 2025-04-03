import { vars } from "@/styles/globals.css";
import { style } from "@vanilla-extract/css";

export const contestPageWrapper = style({
  display: "flex",
  flexDirection: "column",
  gap: 4,
  padding: "24px 12px",
  position: "relative",
});

export const divText = style({
  fontSize: "1.525rem",
  fontWeight: "bold",
  color: vars.colors.textColor[900],
  width: "100%",
  marginBottom: 8,
});

export const divider = style({
  width: "100%",
  margin: "12px 0",
  border: `1px solid ${vars.colors.grey[200]}`,
});
