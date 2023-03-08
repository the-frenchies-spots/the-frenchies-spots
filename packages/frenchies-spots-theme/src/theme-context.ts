import React, { createContext } from 'react';
import { ThemeType } from './theme';

export const ThemeContext = createContext<ThemeType | null>(null);
