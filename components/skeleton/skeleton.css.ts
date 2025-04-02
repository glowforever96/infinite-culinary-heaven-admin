import { vars } from "@/styles/globals.css";
import { keyframes, style } from "@vanilla-extract/css";

export const wrapper = style({
  marginTop: 52,
  height: "75dvh",
  display: "grid",
  width: "100%",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: 12,
  paddingBottom: 84,
});

const skeletonKeyframes = keyframes({
  "0%": { backgroundPosition: "-100%" },
  "50%": { backgroundPosition: "100%" },
  "100%": { backgroundPosition: "-100%" },
});

export const skeletonAnimation = style({
  animation: `${skeletonKeyframes} 1.5s infinite linear`,
  background: `linear-gradient(90deg, ${vars.colors.grey[200]} 25%, #f0f0f0 50%, ${vars.colors.grey[200]} 75%)`,
  backgroundSize: "200% 100%",
});

export const skeletonBox = style({
  height: 160,
  borderRadius: "8px",
});
