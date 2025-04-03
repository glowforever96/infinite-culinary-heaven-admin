import { vars } from "@/styles/globals.css";
import { style } from "@vanilla-extract/css";

export const cardContainer = style({
  width: "100%",
  height: "auto",
  display: "flex",
  padding: 12,
  border: `1px solid ${vars.colors.grey[200]}`,
  borderRadius: 8,
  backgroundColor: "white",
  justifyContent: "space-between",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
});

export const subContainer = style({
  display: "flex",
  justifyContent: "space-between",
  flexDirection: "column",
});

export const title = style({
  fontSize: "1.425rem",
  color: vars.colors.textColor[700],
  fontWeight: "bold",
  marginBottom: "4px",
});

export const description = style({
  fontSize: "1rem",
  color: vars.colors.textColor[500],
});

export const dateWrapper = style({
  display: "flex",
  flexDirection: "column",
  gap: 4,
});

export const date = style({
  fontSize: "0.675rem",
  color: vars.colors.grey[600],
});

export const imgWrapper = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
});

export const img = style({
  borderRadius: 6,
  marginBottom: 8,
});

export const topicName = style({
  color: vars.colors.textColor[600],
  fontSize: "0.9rem",
});
