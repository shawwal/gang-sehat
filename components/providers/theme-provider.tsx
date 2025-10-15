"use client"
import { createContext, useContext, useEffect, useState } from "react"
import type React from "react"

type Theme = "light" | "dark"
const ThemeCtx = createContext<{ theme: Theme; setTheme: (t: Theme) => void }>({ theme: "light", setTheme: () => {} })

export function ThemeProvider({
  children,
  defaultTheme = "light" as Theme,
}: { children: React.ReactNode; defaultTheme?: Theme }) {
  const [theme, setThemeState] = useState<Theme>(defaultTheme)
  useEffect(() => {
    const stored = (typeof window !== "undefined" && (localStorage.getItem("theme") as Theme)) || defaultTheme
    document.documentElement.classList.toggle("dark", stored === "dark")
    setThemeState(stored)
  }, [defaultTheme])
  const setTheme = (t: Theme) => {
    setThemeState(t)
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", t)
    }
    document.documentElement.classList.toggle("dark", t === "dark")
    // set a cookie for SSR compatibility
    document.cookie = `theme=${t}; path=/; max-age=31536000`
  }
  return <ThemeCtx.Provider value={{ theme, setTheme }}>{children}</ThemeCtx.Provider>
}

export function useTheme() {
  return useContext(ThemeCtx)
}
