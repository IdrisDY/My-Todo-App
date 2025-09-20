"use client";

import {
  ChakraProvider,
  defineConfig,
  defaultSystem,
  createSystem,
  defaultConfig,
} from "@chakra-ui/react";
import { ColorModeProvider, type ColorModeProviderProps } from "./color-mode";

export function Provider({ children }: { children: React.ReactNode }) {
  const colors = {
    brand: {
      50: "#e3f2ff",
      100: "#b3daff",
      200: "#81c2ff",
      300: "#4eaaff",
      400: "#1a92ff", // lighter primary
      500: "#0077e6", // primary
      600: "#005bb4",
      700: "#004182",
      800: "#002651",
      900: "#000c21",
    },
    secondary: {
      50: "#fff1e6",
      100: "#ffd3b8",
      200: "#ffb48a",
      300: "#ff955b",
      400: "#ff7630",
      500: "#e65c16", // secondary
      600: "#b4480f",
      700: "#823409",
      800: "#511f03",
      900: "#210a00",
    },
  };

  const config = defineConfig({
    theme: {
      semanticTokens: {
        colors: {
          text: { value: "#464B50" },
        },
      },
      tokens: {
        colors: {
          primary: { value: "#75C5C1" },
          secondary: { value: "#41245F" },
          cream: { value: "#F7F7F7" },
          gray: { value: "#464B50" },

          brand: {
            50: { value: "#EEF1F9" },
            100: { value: "#b3daff" },
            200: { value: "#81c2ff" },
            300: { value: "#4eaaff" },
            400: { value: "#1a92ff" },
            500: { value: "#0077e6" },
            600: { value: "#005bb4" },
            700: { value: "#004182" },
            800: { value: "#002651" },
            900: { value: "#000c21" },
          },
        },
        radii: {
          sm: { value: "10px" },
          md: { value: "10px" },
          base: { value: "10px" },
        },
      },
    },
  });
  const system = createSystem(defaultConfig, config);
  return <ChakraProvider value={system}>{children}</ChakraProvider>;
}
