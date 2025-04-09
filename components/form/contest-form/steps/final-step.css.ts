import { vars } from "@/styles/globals.css";
import { style } from "@vanilla-extract/css";

export const finalStepContainer = style({
  display: "flex",
  flexDirection: "column",
});

export const paragraph = style({
  color: vars.colors.textColor[700],
  fontSize: "1.25rem",
  fontWeight: 500,
});

export const span = style({
  color: vars.colors.textColor[500],
  fontSize: "0.9rem",
});

export const titleContainer = style({
  display: "flex",
  flexDirection: "column",
  gap: 4,
});

export const contentsContainer = style({
  display: "flex",
  flexDirection: "column",
  gap: 24,
  marginTop: 12,
});

export const selectedTopic = style({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  cursor: "pointer",
  borderRadius: 6,
  border: `1px solid ${vars.colors.grey[300]}`,
  padding: 10,
});

export const selectValue = style({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  cursor: "pointer",
  borderRadius: 6,
  border: `1px solid ${vars.colors.grey[300]}`,
  gap: 8,
  padding: 10,
  fontWeight: 500,
  color: vars.colors.textColor[800],
});

export const grayParagarph = style({
  color: vars.colors.textColor[500],
  fontSize: "0.975rem",
});

export const name = style({
  color: vars.colors.grey[800],
  fontSize: "0.8rem",
});
