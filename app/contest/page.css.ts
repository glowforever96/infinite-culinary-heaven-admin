import { vars } from "@/styles/globals.css";
import { style } from "@vanilla-extract/css";

export const contestPageWrapper = style({
  display: "flex",
  flexDirection: "column",
  gap: 4,
  padding: 24,
  position: "relative",
});

export const divText = style({
  fontSize: "1.525rem",
  fontWeight: "bold",
  color: vars.colors.textColor[900],
  width: "100%",
  marginBottom: 8,
});
