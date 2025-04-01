import { vars } from "@/styles/globals.css";
import { style } from "@vanilla-extract/css";

export const button = style({
  maxWidth: 700,
  width: "90%",
  padding: "12px",
  fontSize: "1.25rem",
  fontWeight: 500,
  color: "#fff",
  backgroundColor: vars.colors.green[600],
  border: "none",
  borderRadius: 6,
  cursor: "pointer",
  transition: "background-color 0.2s ease-in-out",
  position: "fixed",
  bottom: 64,
  left: "50%",
  transform: "translate(-50%, -50%)",
});
