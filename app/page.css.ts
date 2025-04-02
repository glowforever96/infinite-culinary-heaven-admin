import { style } from "@vanilla-extract/css";

export const pageWrapper = style({
  padding: 32,
  display: "flex",
  flexDirection: "column",
  gap: 12,
  alignItems: "center",
  justifyContent: "center",
  height: "100dvh",
});

export const topicContestContainer = style({
  display: "flex",
  width: "100%",
  gap: 24,
});
