
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";

export default function Login() {
  const [selectedRole, setSelectedRole] = useState<string>("");

  const roles = [
    { id: "student", name: "Student", icon: "🎓", color: "valley-blue", description: "Join to find internships and mentors" },
    { id: "company", name: "Company", icon: "🏢", color: "valley-green", description: "Recruit talented students" },
    { id: "mentor", name: "Mentor", icon: "🧙‍♂️", color: "valley-purple", description: "Guide the next generation" },
    { id: "admin", name: "Admin", icon: "👑", color: "valley-orange", description: "Manage the platform" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-valley-green/20 via-valley-blue/20 to-valley-purple/20 flex items-center justify-center p-4">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-4 h-4 bg-valley-yellow rounded-full animate-bounce-slow"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-valley-pink rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-40 left-20 w-5 h-5 bg-valley-emerald rounded-full animate-bounce-slow delay-1000"></div>
        <div className="absolute bottom-20 right-40 w-3 h-3 bg-valley-orange rounded-full animate-pulse-slow delay-500"></div>
      </div>

      <div className="w-full max-w-4xl relative">
        <Card className="bg-white/95 backdrop-blur-sm border-4 border-valley-yellow shadow-2xl">
          <CardHeader className="text-center bg-gradient-to-r from-valley-green to-valley-blue text-white rounded-t-lg">
            <div className="text-6xl mb-4 animate-bounce-slow">🌟</div>
            <CardTitle className="text-4xl font-bold">Welcome to SmartConnect!</CardTitle>
            <p className="text-xl mt-2">Choose your role to get started ✨</p>
          </CardHeader>
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {roles.map((role) => (
                <div
                  key={role.id}
                  className={`p-6 rounded-2xl border-4 cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                    selectedRole === role.id
                      ? `border-${role.color} bg-gradient-to-br from-${role.color}/20 to-${role.color}/10 shadow-lg`
                      : "border-gray-200 hover:border-valley-yellow bg-white hover:shadow-lg"
                  }`}
                  onClick={() => setSelectedRole(role.id)}
                >
                  <div className="text-center">
                    <div className="text-5xl mb-4 animate-pulse-slow">{role.icon}</div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{role.name}</h3>
                    <p className="text-gray-600">{role.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    📧 Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-valley-blue focus:outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    🔒 Password
                  </label>
                  <input
                    type="password"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-valley-blue focus:outline-none transition-colors"
                    placeholder="••••••••"
                  />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/dashboard" className="flex-1">
                  <Button 
                    className="w-full py-4 text-lg bg-gradient-to-r from-valley-green to-valley-blue text-white border-2 border-valley-yellow shadow-lg transform hover:scale-105 transition-all rounded-xl"
                    disabled={!selectedRole}
                  >
                    🚀 Login & Start Journey!
                  </Button>
                </Link>
                <Button 
                  variant="outline"
                  className="flex-1 py-4 text-lg border-2 border-valley-purple text-valley-purple hover:bg-valley-purple hover:text-white transition-all rounded-xl"
                >
                  ✨ Create New Account
                </Button>
              </div>

              <div className="text-center pt-4">
                <Link href="/" className="text-valley-blue hover:text-valley-purple transition-colors">
                  ← Back to Home
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
