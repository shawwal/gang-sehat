"use client"
import { createContext, useContext, useEffect, useMemo, useState } from "react"
import type React from "react"

export type Role = "guest" | "member" | "admin"
export type User = { email: string; name: string; role: Role }

type AuthContext = {
  user: User | null
  login: (email: string, password: string) => Promise<{ ok: boolean; error?: string }>
  register: (name: string, email: string, password: string) => Promise<{ ok: boolean; error?: string }>
  logout: () => void
}

const AuthCtx = createContext<AuthContext>({
  user: null,
  login: async () => ({ ok: false }),
  register: async () => ({ ok: false }),
  logout: () => {},
})

const MOCK_USERS: Array<{ email: string; password: string; name: string; role: Role }> = [
  { email: "member@example.com", password: "password123", name: "Member", role: "member" },
  { email: "admin@example.com", password: "admin123", name: "Admin", role: "admin" },
]

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const raw = typeof window !== "undefined" ? localStorage.getItem("gs_user") : null
    if (raw) setUser(JSON.parse(raw))
  }, [])

  const persist = (u: User | null) => {
    if (typeof window !== "undefined") {
      if (u) localStorage.setItem("gs_user", JSON.stringify(u))
      else localStorage.removeItem("gs_user")
    }
  }

  const login: AuthContext["login"] = async (email, password) => {
    const found = MOCK_USERS.find((u) => u.email === email && u.password === password)
    if (found) {
      const u: User = { email: found.email, name: found.name, role: found.role }
      setUser(u)
      persist(u)
      return { ok: true }
    }
    return { ok: false, error: "Invalid credentials" }
  }

  const register: AuthContext["register"] = async (name, email, password) => {
    // simple mock: store as member for this demo
    const u: User = { email, name, role: "member" }
    setUser(u)
    persist(u)
    return { ok: true }
  }

  const logout = () => {
    setUser(null)
    persist(null)
  }

  const value = useMemo(() => ({ user, login, register, logout }), [user])

  return <AuthCtx.Provider value={value}>{children}</AuthCtx.Provider>
}

export function useAuth() {
  return useContext(AuthCtx)
}
