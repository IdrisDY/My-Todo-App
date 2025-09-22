"use client";

import {
  ChakraProvider,
  defineConfig,
  createSystem,
  defaultConfig,
} from "@chakra-ui/react";
import { jakartaSans } from "@/app/layout";

export function Provider({ children }: { children: React.ReactNode }) {
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
          green: {
            50: { value: "#E9F5F7" },
          },
          gray: {
            200: { value: "#E9F5F7" },
            300: { value: "#CDD6E9" },
            400: { value: "#7988A9" },
            350: { value: "#BAC1CC" },
            800: { value: "#464B50" },
          },
          pink: {
            value: "#F6ECFF",
          },
        },
        fonts: {
          heading: { value: jakartaSans.style.fontFamily },
          body: { value: jakartaSans.style.fontFamily },
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
