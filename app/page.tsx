
'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Navigation Header */}
      <header className="bg-white shadow-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-westcliff-primary to-westcliff-secondary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">SC</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-westcliff-primary">SmartConnect</h1>
                <p className="text-sm text-gray-600">Career Success Platform</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-700 hover:text-westcliff-primary transition-colors">Features</a>
              <a href="#about" className="text-gray-700 hover:text-westcliff-primary transition-colors">About</a>
              <a href="#contact" className="text-gray-700 hover:text-westcliff-primary transition-colors">Contact</a>
              <Link href="/login">
                <Button className="bg-westcliff-primary hover:bg-westcliff-navy text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300">
                  Sign In
                </Button>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="bg-white rounded-2xl shadow-2xl p-12 mx-auto max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-westcliff-primary to-westcliff-secondary bg-clip-text text-transparent">
                Connect Your Future
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Bridge the gap between students, companies, mentors, and institutions with our comprehensive career development platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/login">
                <Button size="lg" className="bg-westcliff-primary hover:bg-westcliff-navy text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl">
                  Get Started Today
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-2 border-westcliff-primary text-westcliff-primary hover:bg-westcliff-primary hover:text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Path</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Whether you're a student seeking opportunities, a company looking for talent, or a mentor ready to guide, 
              we have the tools you need to succeed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Student Card */}
            <Card className="text-center card-hover border-2 border-blue-100 bg-gradient-to-br from-blue-50 to-white">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center">
                  <span className="text-3xl">🎓</span>
                </div>
                <CardTitle className="text-westcliff-primary text-2xl font-bold">Students</CardTitle>
                <CardDescription className="text-gray-600 text-lg">
                  Launch your career with confidence
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-left space-y-2">
                  <div className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Career guidance & mentorship
                  </div>
                  <div className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Job application tracking
                  </div>
                  <div className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Skills assessment tools
                  </div>
                  <div className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Industry connections
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Company Card */}
            <Card className="text-center card-hover border-2 border-green-100 bg-gradient-to-br from-green-50 to-white">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center">
                  <span className="text-3xl">🏢</span>
                </div>
                <CardTitle className="text-westcliff-primary text-2xl font-bold">Companies</CardTitle>
                <CardDescription className="text-gray-600 text-lg">
                  Find exceptional talent efficiently
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-left space-y-2">
                  <div className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Access top student talent
                  </div>
                  <div className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Streamlined recruitment
                  </div>
                  <div className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Campus partnerships
                  </div>
                  <div className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Brand visibility
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Mentor Card */}
            <Card className="text-center card-hover border-2 border-purple-100 bg-gradient-to-br from-purple-50 to-white">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center">
                  <span className="text-3xl">🤝</span>
                </div>
                <CardTitle className="text-westcliff-primary text-2xl font-bold">Mentors</CardTitle>
                <CardDescription className="text-gray-600 text-lg">
                  Shape the next generation
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-left space-y-2">
                  <div className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                    Guide student careers
                  </div>
                  <div className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                    Share industry expertise
                  </div>
                  <div className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                    Build your network
                  </div>
                  <div className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                    Make lasting impact
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Admin Card */}
            <Card className="text-center card-hover border-2 border-orange-100 bg-gradient-to-br from-orange-50 to-white">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center">
                  <span className="text-3xl">👑</span>
                </div>
                <CardTitle className="text-westcliff-primary text-2xl font-bold">Administrators</CardTitle>
                <CardDescription className="text-gray-600 text-lg">
                  Manage and oversee platform success
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-left space-y-2">
                  <div className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                    Platform analytics
                  </div>
                  <div className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                    User management
                  </div>
                  <div className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                    Quality assurance
                  </div>
                  <div className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                    System oversight
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-westcliff-primary to-westcliff-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6 text-shadow">
            Ready to Transform Your Career Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of students, companies, and mentors who are already building successful careers together.
          </p>
          <Link href="/login">
            <Button size="lg" className="bg-white text-westcliff-primary hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl">
              Start Your Journey
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-westcliff-primary to-westcliff-secondary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">SC</span>
                </div>
                <span className="text-xl font-bold">SmartConnect</span>
              </div>
              <p className="text-gray-400">Connecting futures, one opportunity at a time.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Platform</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">For Students</a></li>
                <li><a href="#" className="hover:text-white transition-colors">For Companies</a></li>
                <li><a href="#" className="hover:text-white transition-colors">For Mentors</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Connect</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Facebook</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 SmartConnect. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
