"use client";

import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/context/themeContext";

type ThemeToggleProps = {
  lightLabel?: string;
  darkLabel?: string;
};

export default function ThemeToggle({
  lightLabel = "Switch to light theme",
  darkLabel = "Switch to dark theme",
}: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();
  const nextThemeLabel = theme === "light" ? darkLabel : lightLabel;

  return (
    <Button
      type="button"
      variant="outline"
      size="icon-lg"
      className="theme-button"
      onClick={toggleTheme}
      aria-label={nextThemeLabel}
      title={nextThemeLabel}
    >
      {theme === "light" ? <Moon aria-hidden="true" /> : <Sun aria-hidden="true" />}
    </Button>
  );
}
