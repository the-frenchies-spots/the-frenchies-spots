import { createStyles } from "@frenchies-spots/material";

export interface StyleParams {
  position: "left" | "right";
}

export const useStyles = createStyles((theme, { position }: StyleParams) => ({
  bubble: {
    overflowWrap: "break-word",
    borderRadius:
      position === "left" ? "0px 16px 16px 16px" : "16px 0px 16px 16px",
    background: "#FFF",
    boxShadow: "0px 2px 8px 0px #BBB",
  },
}));
