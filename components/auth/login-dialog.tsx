"use client"
import { useState } from "react"
import type React from "react"

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useAuth } from "@/components/providers/auth-provider"
import { useRouter, usePathname } from "next/navigation"

export default function LoginDialog({ label = "Masuk" }: { label?: string }) {
  const [open, setOpen] = useState(false)
  const [email, setEmail] = useState("member@example.com")
  const [password, setPassword] = useState("password123")
  const [error, setError] = useState<string | null>(null)
  const { login } = useAuth()
  const router = useRouter()
  const pathname = usePathname()

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const res = await login(email, password)
    if (res.ok) {
      setOpen(false)
      setError(null)
      router.refresh?.()
      router.push(pathname || "/")
    } else setError(res.error || "Login failed")
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" size="sm">
          {label}
        </Button>
      </DialogTrigger>
      <DialogContent className="backdrop-blur supports-[backdrop-filter]:bg-background/70">
        <DialogHeader>
          <DialogTitle>Masuk</DialogTitle>
        </DialogHeader>
        <form onSubmit={onSubmit} className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="text-destructive text-sm">{error}</p>}
          <Button type="submit" className="w-full">
            Masuk
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
