"use client"

import { useAuth } from "@/contexts/auth-context"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const data = [
  { name: "Jan", value: 400 },
  { name: "Feb", value: 300 },
  { name: "Mar", value: 600 },
  { name: "Apr", value: 800 },
  { name: "May", value: 700 },
  { name: "Jun", value: 900 },
]

export default function Dashboard() {
  const { user } = useAuth()

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">Welcome back, {user?.email}</h1>
        <div className="flex space-x-4">
          <div className="text-right">
            <p className="text-sm text-gray-400">Account Balance</p>
            <p className="text-2xl font-bold text-white">$0.00</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-400">Active Mining</p>
            <p className="text-2xl font-bold text-white">$0.00</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-gray-800 text-white">
          <CardHeader>
            <CardTitle>Total Deposit</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">$0.00</p>
          </CardContent>
        </Card>

        <Card className="bg-gray-800 text-white">
          <CardHeader>
            <CardTitle>Last Deposit</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">n/a</p>
          </CardContent>
        </Card>

        <Card className="bg-gray-800 text-white">
          <CardHeader>
            <CardTitle>Withdraw Total</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">$0.00</p>
          </CardContent>
        </Card>

        <Card className="bg-gray-800 text-white">
          <CardHeader>
            <CardTitle>Last Withdrawal</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">n/a</p>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-gray-800 text-white">
        <CardHeader>
          <CardTitle>Earnings Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="name" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#1F2937",
                    border: "none",
                    borderRadius: "0.5rem",
                    color: "#fff",
                  }}
                />
                <Line type="monotone" dataKey="value" stroke="#10B981" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gray-800 text-white">
        <CardHeader>
          <CardTitle>Referral Link</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-4">
            <input
              type="text"
              value={`https://example.com/ref=${user?.uid}`}
              readOnly
              className="flex-1 bg-gray-700 text-white px-4 py-2 rounded-md"
            />
            <button
              onClick={() => navigator.clipboard.writeText(`https://example.com/ref=${user?.uid}`)}
              className="px-4 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700"
            >
              Copy link
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

