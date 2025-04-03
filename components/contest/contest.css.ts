import { style } from "@vanilla-extract/css";

export const contestWrapper = style({
  overflowY: "scroll",
  maxHeight: "80dvh",
  display: "grid",
  width: "100%",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: 12,
  paddingBottom: 84,
  "@media": {
    "screen and (max-width: 768px)": {
      display: "flex",
      flexDirection: "column",
      gap: 8,
    },
  },
});
