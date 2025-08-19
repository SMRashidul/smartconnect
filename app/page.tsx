
"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <h1 className="text-3xl font-bold text-gray-900">SmartConnect</h1>
            </div>
            <nav className="flex space-x-4">
              <Link href="/login">
                <Button variant="outline">Login</Button>
              </Link>
              <Link href="/dashboard">
                <Button>Dashboard</Button>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Connect. Learn. Grow.
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            SmartConnect bridges the gap between students, companies, mentors, and administrators. 
            Build your career, find talent, or guide the next generation.
          </p>
          <Link href="/dashboard">
            <Button className="text-lg px-8 py-3">
              Get Started
            </Button>
          </Link>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-blue-600">For Students</CardTitle>
              <CardDescription>
                Launch your career with internships and mentorship
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Build professional profiles</li>
                <li>• Apply to internships</li>
                <li>• Connect with mentors</li>
                <li>• Track your progress</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-green-600">For Companies</CardTitle>
              <CardDescription>
                Discover talented students for your internship programs
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Post internship opportunities</li>
                <li>• Review student profiles</li>
                <li>• Manage applications</li>
                <li>• Connect with top talent</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-purple-600">For Mentors</CardTitle>
              <CardDescription>
                Guide the next generation of professionals
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Share industry expertise</li>
                <li>• Mentor aspiring professionals</li>
                <li>• Build meaningful connections</li>
                <li>• Track mentee progress</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-orange-600">For Admins</CardTitle>
              <CardDescription>
                Manage the platform and oversee connections
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Monitor platform activity</li>
                <li>• Manage user accounts</li>
                <li>• Generate reports</li>
                <li>• Ensure quality connections</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Stats Section */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Platform Statistics</h3>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600">500+</div>
              <div className="text-gray-600">Active Students</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600">100+</div>
              <div className="text-gray-600">Partner Companies</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600">200+</div>
              <div className="text-gray-600">Expert Mentors</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600">1000+</div>
              <div className="text-gray-600">Successful Connections</div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">SmartConnect</h4>
              <p className="text-gray-300">
                Connecting talent with opportunity, one connection at a time.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">For Students</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Find Internships</li>
                <li>Get Mentorship</li>
                <li>Build Skills</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">For Companies</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Post Jobs</li>
                <li>Find Talent</li>
                <li>Partner Programs</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Help Center</li>
                <li>Contact Us</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2024 SmartConnect. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
