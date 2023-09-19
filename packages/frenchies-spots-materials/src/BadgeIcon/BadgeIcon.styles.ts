import { createStyles } from "@mantine/core";

const circle = 20;
export const useStyles = createStyles((theme, color: string) => ({
  container: { position: "relative" },
  badge: {
    position: "absolute",
    zIndex: 10,
    color: "white",
    backgroundColor: color,
    top: -5,
    right: -10,
    borderRadius: circle,
    width: circle,
    height: circle,
  },
}));
