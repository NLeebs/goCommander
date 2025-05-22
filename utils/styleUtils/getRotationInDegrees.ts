import { Orientation } from "@/types";

export const getRotationInDegrees = (orientation: Orientation): number => {
  switch (orientation) {
    case "up":
      return 0;
    case "right":
      return 90;
    case "down":
      return 180;
    case "left":
      return -90;
    default:
      return 0;
  }
};
