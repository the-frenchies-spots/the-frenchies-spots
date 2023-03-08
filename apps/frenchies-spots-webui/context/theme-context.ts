import React, { createContext } from "react";
import { ThemeType } from "../theme";

const ThemeContext = createContext<ThemeType | null>(null);

export default ThemeContext;
