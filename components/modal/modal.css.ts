import { style } from "@vanilla-extract/css";

export const modalOverlay = style({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100dvh",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1000,
});

export const modalContent = style({
  backgroundColor: "#fff",
  padding: 20,
  borderRadius: "8px",
  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
  maxWidth: 700,
  width: "90%",
});

export const closeBtn = style({
  border: "none",
  backgroundColor: "transparent",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: 42,
  height: 42,
  padding: 0,
  marginLeft: "auto",
});
