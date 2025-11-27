"use client";

import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { MoonIcon, SunSnow } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="rounded-full border-slate-200 dark:border-slate-800">
      {theme === "dark" ? (
        <SunSnow className="h-[1.2rem] w-[1.2rem] transition-all text-amber-500" />
      ) : (
        <MoonIcon className="h-[1.2rem] w-[1.2rem] transition-all text-slate-900" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
