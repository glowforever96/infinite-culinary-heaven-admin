import { vars } from "@/styles/globals.css";
import { style } from "@vanilla-extract/css";

export const contestWrapper = style({
  overflowY: "scroll",
  maxHeight: "60dvh",
  display: "grid",
  width: "100%",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: 12,
  paddingBottom: 124,
  "@media": {
    "screen and (max-width: 768px)": {
      display: "flex",
      flexDirection: "column",
      maxHeight: "45dvh",
      gap: 8,
    },
  },
});

export const constestNotFound = style({
  width: "100%",
  height: "auto",
  display: "flex",
  padding: 24,
  border: `1px solid ${vars.colors.grey[200]}`,
  borderRadius: 8,
  backgroundColor: "white",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  justifyContent: "center",
  fontWeight: "bold",
  fontSize: "1.15rem",
  color: vars.colors.textColor[600],
});
