import { style } from "@vanilla-extract/css";

export const container = style({
  border: "solid 2px blue",
  padding: "8px",
  margin: "8px",
  display: "flex",
  justifyContent: "space-around"
});

export const title = style({
  margin: 0,
  color: "#3d84a8"
});

export const button = style({
  backgroundColor: "lightgray",
  border: "none",
  borderRadius: "8px"
});
