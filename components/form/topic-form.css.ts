import { vars } from "@/styles/globals.css";
import { style } from "@vanilla-extract/css";

export const form = style({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "fit-content",
  gap: 24,
  justifyContent: "space-between",
});

export const title = style({
  fontSize: "1.625rem",
  color: vars.colors.textColor[700],
});

export const inputContainer = style({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: 6,
});

export const label = style({
  fontSize: "1rem",
  fontWeight: 600,
  color: vars.colors.textColor[500],
});

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

export const uploadBox = style({
  width: 200,
  height: 200,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#f4f4f4",
  borderRadius: 8,
  cursor: "pointer",
  border: `1px dashed ${vars.colors.grey[400]}`,
  fontSize: "1rem",
  color: "#666",
  ":hover": {
    backgroundColor: `${vars.colors.grey[200]}`,
  },
});

export const previewImage = style({
  borderRadius: 8,
  border: `1px solid ${vars.colors.grey[300]}`,
});

export const hiddenInput = style({
  display: "none",
});

export const submitButton = style({
  width: "100%",
  padding: "12px",
  fontSize: "1.25rem",
  fontWeight: 500,
  color: "#fff",
  backgroundColor: vars.colors.green[600],
  border: "none",
  borderRadius: 6,
  cursor: "pointer",
  transition: "background-color 0.2s ease-in-out",
  marginTop: 12,
});

export const resetButton = style({
  width: "fit-content",
  padding: "8px 12px",
  borderRadius: 5,
  color: vars.colors.textColor[800],
  backgroundColor: vars.colors.grey[300],
  border: "none",
  fontSize: "1.1rem",
  fontWeight: 500,
});
