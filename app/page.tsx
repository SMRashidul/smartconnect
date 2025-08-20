
"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-valley-green/20 via-valley-blue/20 to-valley-purple/20">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-4 h-4 bg-valley-yellow rounded-full animate-bounce-slow"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-valley-pink rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-40 left-20 w-5 h-5 bg-valley-emerald rounded-full animate-bounce-slow delay-1000"></div>
        <div className="absolute bottom-20 right-40 w-3 h-3 bg-valley-orange rounded-full animate-pulse-slow delay-500"></div>
      </div>

      {/* Header */}
      <header className="bg-gradient-to-r from-valley-green to-valley-blue shadow-lg border-b-4 border-valley-yellow relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-valley-yellow rounded-full flex items-center justify-center mr-4 shadow-lg animate-pulse-slow">
                <span className="text-2xl">🌟</span>
              </div>
              <h1 className="text-4xl font-bold text-white drop-shadow-lg">SmartConnect</h1>
            </div>
            <nav className="flex space-x-4">
              <Link href="/login">
                <Button className="bg-valley-pink hover:bg-valley-pink/80 text-white border-2 border-white shadow-lg transform hover:scale-105 transition-all">
                  Login 🔑
                </Button>
              </Link>
              <Link href="/dashboard">
                <Button className="bg-valley-orange hover:bg-valley-orange/80 text-white border-2 border-white shadow-lg transform hover:scale-105 transition-all">
                  Dashboard 📊
                </Button>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
        <div className="text-center mb-16">
          <div className="inline-block animate-bounce-slow mb-6">
            <span className="text-8xl">🚀</span>
          </div>
          <h2 className="text-6xl font-bold bg-gradient-to-r from-valley-green via-valley-blue to-valley-purple bg-clip-text text-transparent mb-6 drop-shadow-lg">
            Connect. Learn. Grow.
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto bg-white/60 p-6 rounded-2xl shadow-lg backdrop-blur-sm border-2 border-valley-yellow/30">
            SmartConnect bridges the gap between students, companies, mentors, and administrators. 
            Build your career, find talent, or guide the next generation in a magical learning environment! ✨
          </p>
          <Link href="/dashboard">
            <Button className="text-xl px-12 py-4 bg-gradient-to-r from-valley-green to-valley-blue text-white shadow-xl transform hover:scale-110 transition-all duration-300 border-4 border-valley-yellow rounded-full">
              🌟 Get Started Now! 🌟
            </Button>
          </Link>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <Card className="text-center hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-gradient-to-br from-valley-blue/90 to-valley-sky/90 border-4 border-valley-yellow text-white backdrop-blur-sm">
            <CardHeader>
              <div className="text-6xl mb-4 animate-bounce-slow">🎓</div>
              <CardTitle className="text-valley-yellow text-2xl font-bold">For Students</CardTitle>
              <CardDescription className="text-white/90 text-lg">
                Launch your career with internships and mentorship
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-white/80 space-y-3">
                <li className="flex items-center">✨ Build professional profiles</li>
                <li className="flex items-center">🎯 Apply to internships</li>
                <li className="flex items-center">🤝 Connect with mentors</li>
                <li className="flex items-center">📈 Track your progress</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-gradient-to-br from-valley-green/90 to-valley-emerald/90 border-4 border-valley-yellow text-white backdrop-blur-sm">
            <CardHeader>
              <div className="text-6xl mb-4 animate-pulse-slow">🏢</div>
              <CardTitle className="text-valley-yellow text-2xl font-bold">For Companies</CardTitle>
              <CardDescription className="text-white/90 text-lg">
                Discover talented students for your programs
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-white/80 space-y-3">
                <li className="flex items-center">📝 Post internship opportunities</li>
                <li className="flex items-center">👥 Review student profiles</li>
                <li className="flex items-center">📋 Manage applications</li>
                <li className="flex items-center">🌟 Connect with top talent</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-gradient-to-br from-valley-purple/90 to-valley-indigo/90 border-4 border-valley-yellow text-white backdrop-blur-sm">
            <CardHeader>
              <div className="text-6xl mb-4 animate-bounce-slow delay-500">🧙‍♂️</div>
              <CardTitle className="text-valley-yellow text-2xl font-bold">For Mentors</CardTitle>
              <CardDescription className="text-white/90 text-lg">
                Guide the next generation of professionals
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-white/80 space-y-3">
                <li className="flex items-center">💡 Share industry expertise</li>
                <li className="flex items-center">🎓 Mentor aspiring professionals</li>
                <li className="flex items-center">🔗 Build meaningful connections</li>
                <li className="flex items-center">📊 Track mentee progress</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-gradient-to-br from-valley-orange/90 to-valley-red/90 border-4 border-valley-yellow text-white backdrop-blur-sm">
            <CardHeader>
              <div className="text-6xl mb-4 animate-pulse-slow delay-1000">👑</div>
              <CardTitle className="text-valley-yellow text-2xl font-bold">For Admins</CardTitle>
              <CardDescription className="text-white/90 text-lg">
                Manage the platform and oversee connections
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-white/80 space-y-3">
                <li className="flex items-center">📈 Monitor platform activity</li>
                <li className="flex items-center">👤 Manage user accounts</li>
                <li className="flex items-center">📊 Generate reports</li>
                <li className="flex items-center">✅ Ensure quality connections</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-valley-yellow via-valley-orange to-valley-pink rounded-3xl shadow-2xl p-8 mb-16 border-4 border-white transform hover:scale-105 transition-all duration-300">
          <h3 className="text-4xl font-bold text-center mb-8 text-white drop-shadow-lg">🎯 Platform Magic Statistics ✨</h3>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="bg-white/90 rounded-2xl p-6 shadow-lg transform hover:scale-110 transition-all">
              <div className="text-5xl font-bold text-valley-blue mb-2">500+</div>
              <div className="text-gray-700 font-semibold">🎓 Active Students</div>
            </div>
            <div className="bg-white/90 rounded-2xl p-6 shadow-lg transform hover:scale-110 transition-all">
              <div className="text-5xl font-bold text-valley-green mb-2">100+</div>
              <div className="text-gray-700 font-semibold">🏢 Partner Companies</div>
            </div>
            <div className="bg-white/90 rounded-2xl p-6 shadow-lg transform hover:scale-110 transition-all">
              <div className="text-5xl font-bold text-valley-purple mb-2">200+</div>
              <div className="text-gray-700 font-semibold">🧙‍♂️ Expert Mentors</div>
            </div>
            <div className="bg-white/90 rounded-2xl p-6 shadow-lg transform hover:scale-110 transition-all">
              <div className="text-5xl font-bold text-valley-orange mb-2">1000+</div>
              <div className="text-gray-700 font-semibold">🌟 Successful Connections</div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 text-white py-12 border-t-4 border-valley-yellow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start mb-4">
                <div className="w-8 h-8 bg-valley-yellow rounded-full flex items-center justify-center mr-3">
                  <span className="text-lg">🌟</span>
                </div>
                <h4 className="text-2xl font-bold text-valley-yellow">SmartConnect</h4>
              </div>
              <p className="text-gray-300">
                Connecting talent with opportunity, one magical connection at a time! ✨
              </p>
            </div>
            <div className="text-center md:text-left">
              <h4 className="text-xl font-semibold mb-4 text-valley-blue">🎓 For Students</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="hover:text-valley-yellow transition-colors">🎯 Find Internships</li>
                <li className="hover:text-valley-yellow transition-colors">🤝 Get Mentorship</li>
                <li className="hover:text-valley-yellow transition-colors">📚 Build Skills</li>
              </ul>
            </div>
            <div className="text-center md:text-left">
              <h4 className="text-xl font-semibold mb-4 text-valley-green">🏢 For Companies</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="hover:text-valley-yellow transition-colors">📝 Post Jobs</li>
                <li className="hover:text-valley-yellow transition-colors">👥 Find Talent</li>
                <li className="hover:text-valley-yellow transition-colors">🤝 Partner Programs</li>
              </ul>
            </div>
            <div className="text-center md:text-left">
              <h4 className="text-xl font-semibold mb-4 text-valley-purple">💬 Support</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="hover:text-valley-yellow transition-colors">❓ Help Center</li>
                <li className="hover:text-valley-yellow transition-colors">📧 Contact Us</li>
                <li className="hover:text-valley-yellow transition-colors">🔒 Privacy Policy</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-valley-yellow mt-8 pt-8 text-center text-gray-300">
            <p className="text-lg">© 2024 SmartConnect. All rights reserved. Made with 💚 and ✨</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
