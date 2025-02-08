"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useAuth } from "@/contexts/auth-context"
import { Home, PiggyBank, History, Users, Shield, Settings, LogOut } from "lucide-react"

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: Home },
  { name: "Deposit", href: "/dashboard/deposit", icon: PiggyBank },
  { name: "History", href: "/dashboard/history", icon: History },
  { name: "Referrals", href: "/dashboard/referrals", icon: Users },
  { name: "Security", href: "/dashboard/security", icon: Shield },
  { name: "Settings", href: "/dashboard/settings", icon: Settings },
]

export default function Sidebar() {
  const pathname = usePathname()
  const { logout } = useAuth()

  return (
    <div className="w-64 bg-gray-800 text-white">
      <div className="h-16 flex items-center px-6">
        <Link href="/dashboard" className="text-xl font-bold">
          Investment Dashboard
        </Link>
      </div>

      <nav className="mt-6">
        <div className="px-3 space-y-1">
          {navigation.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`
                  flex items-center px-3 py-2 rounded-md text-sm font-medium
                  ${isActive ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white"}
                `}
              >
                <item.icon className="mr-3 h-5 w-5" />
                {item.name}
              </Link>
            )
          })}
        </div>
      </nav>

      <div className="absolute bottom-0 w-64 p-4">
        <button
          onClick={() => logout()}
          className="w-full flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
        >
          <LogOut className="mr-3 h-5 w-5" />
          Sign out
        </button>
      </div>
    </div>
  )
}

