import { vars } from "@/styles/globals.css";
import { style } from "@vanilla-extract/css";

export const pageWrapper = style({
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
  margin: "auto",
  width: "80%",
  borderRadius: 6,
  background: vars.colors.background.white,
  padding: 32,
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
});

export const headerContainer = style({
  textAlign: "center",
  marginBottom: "20px",
});

export const title = style({
  fontSize: "1.725rem",
  fontWeight: "bold",
  color: vars.colors.textColor[900],
  marginBottom: 4,
});

export const subtitle = style({
  fontSize: "1.2rem",
  color: vars.colors.textColor[600],
  marginTop: "4px",
});
