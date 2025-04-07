import { style } from "@vanilla-extract/css";

export const contentsWrapper = style({
  display: "flex",
  flexDirection: "column",
  minHeight: "60dvh",
});

export const buttonWrapper = style({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginTop: "auto",
  paddingTop: "12px",
});

export const button = style({
  border: "none",
  backgroundColor: "transparent",
  width: 28,
  height: 28,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
});
