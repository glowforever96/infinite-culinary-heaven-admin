import { vars } from "@/styles/globals.css";
import { style } from "@vanilla-extract/css";

export const datePickerWrapper = style({
  display: "flex",
  width: "100%",
  height: 44,
  justifyContent: "space-between",
  alignItems: "center",
});

export const datepicker = style({
  display: "flex",
  alignItems: "center",
  border: `1px solid ${vars.colors.grey[300]}`,
  padding: "8px",
  borderRadius: "4px",
  cursor: "pointer",
  width: "60%",
  height: "inherit",
});

export const customInput = style({
  border: "none",
  outline: "none",
  background: "transparent",
  fontSize: "1rem",
  cursor: "pointer",
  width: "100%",
});

export const timeInput = style({
  border: `1px solid ${vars.colors.grey[300]}`,
  padding: "8px",
  borderRadius: "4px",
  fontSize: "1rem",
  cursor: "pointer",
  width: "35%",
  height: "inherit",
});
