"use client";

import { Toaster as SonnerToaster } from "sonner"; // Correct import
import { useTheme } from "next-themes";

const Toaster = (props) => {
  const { theme = "system" } = useTheme();

  return (
    <SonnerToaster
      theme={theme}
      position="top-right"
      {...props}
    />
  );
};

export { Toaster };