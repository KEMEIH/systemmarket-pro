'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Search, 
  Star, 
  ShoppingCart, 
  Eye, 
  Code2,
  GraduationCap,
  Hotel,
  Store,
  TrendingUp,
  Heart,
  Building2,
  Database,
  Shield,
  Zap,
  Users,
  Award,
  Clock,
  ArrowRight,
  CheckCircle,
  PlayCircle,
  Download,
  Settings,
  Layout,
  Sparkles,
  User,
  Phone,
  CreditCard,
  PayPal
} from 'lucide-react'

const featuredProducts = [
  {
    id: 1,
    title: 'Complete School Management System',
    description: 'Full-featured school management with student records, fees, exams, and reporting.',
    price: 15000,
    rating: 4.9,
    reviews: 128,
    category: 'School Systems',
    tech: ['React', 'Laravel', 'MySQL'],
    image: '/images/school-system.jpg',
    demoUrl: '/demo/school-system',
    vendor: 'TechEd Solutions',
    featured: true
  },
  {
    id: 2,
    title: 'Hotel Management Pro',
    description: 'Complete hotel management with booking, inventory, POS, and guest management.',
    price: 20000,
    rating: 4.8,
    reviews: 94,
    category: 'Hotel Systems',
    tech: ['Next.js', 'Node.js', 'PostgreSQL'],
    image: '/images/hotel-system.jpg',
    demoUrl: '/demo/hotel-system',
    vendor: 'LuxurySoft',
    featured: true
  },
  {
    id: 3,
    title: 'Advanced POS System',
    description: 'Powerful point of sale with inventory, customer management, and analytics.',
    price: 12000,
    rating: 4.7,
    reviews: 156,
    category: 'POS Systems',
    tech: ['Vue.js', 'Laravel', 'MySQL'],
    image: '/images/pos-system.jpg',
    demoUrl: '/demo/pos-system',
    vendor: 'RetailTech',
    featured: true
  },
  {
    id: 4,
    title: 'Prediction Hub Platform',
    description: 'Complete sports prediction platform with tipsters, subscriptions, and payments.',
    price: 25000,
    rating: 4.9,
    reviews: 67,
    category: 'Prediction Systems',
    tech: ['Next.js', 'Node.js', 'PostgreSQL'],
    image: '/images/prediction-system.jpg',
    demoUrl: '/demo/prediction-system',
    vendor: 'DataPredict',
    featured: true
  },
  {
    id: 5,
    title: 'Hospital Management System',
    description: 'Comprehensive hospital management with patient records, appointments, and billing.',
    price: 18000,
    rating: 4.6,
    reviews: 82,
    category: 'Hospital Systems',
    tech: ['React', 'Django', 'PostgreSQL'],
    image: '/images/hospital-system.jpg',
    demoUrl: '/demo/hospital-system',
    vendor: 'HealthTech',
    featured: true
  },
  {
    id: 6,
    title: 'E-Commerce Platform Pro',
    description: 'Full-featured e-commerce with multi-vendor support, payments, and analytics.',
    price: 22000,
    rating: 4.8,
    reviews: 203,
    category: 'E-Commerce',
    tech: ['Next.js', 'Node.js', 'MongoDB'],
    image: '/images/ecommerce-system.jpg',
    demoUrl: '/demo/ecommerce-system',
    vendor: 'ShopTech',
    featured: true
  }
]

const categories = [
  { name: 'School Systems', count: 28, icon: GraduationCap, color: 'from-blue-500 to-purple-500' },
  { name: 'Hotel Systems', count: 15, icon: Hotel, color: 'from-amber-500 to-orange-500' },
  { name: 'POS Systems', count: 22, icon: Store, color: 'from-green-500 to-emerald-500' },
  { name: 'Prediction Systems', count: 18, icon: TrendingUp, color: 'from-purple-500 to-pink-500' },
  { name: 'Hospital Systems', count: 12, icon: Building2, color: 'from-red-500 to-rose-500' },
  { name: 'E-Commerce', count: 30, icon: ShoppingCart, color: 'from-cyan-500 to-blue-500' },
  { name: 'Inventory Systems', count: 16, icon: Database, color: 'from-indigo-500 to-purple-500' },
  { name: 'LMS Systems', count: 20, icon: Layout, color: 'from-teal-500 to-green-500' },
]

const testimonials = [
  {
    name: 'John Kamau',
    role: 'School Director',
    content: 'The school management system transformed our operations. We saved 40% on administrative costs.',
    rating: 5
  },
  {
    name: 'Sarah Ochieng',
    role: 'Hotel Manager',
    content: 'Best investment we made. The hotel system paid for itself in 3 months.',
    rating: 5
  },
  {
    name: 'Michael Otieno',
    role: 'Business Owner',
    content: 'The POS system is incredibly powerful. My inventory management has never been easier.',
    rating: 5
  }
]

const faqs = [
  {
    question: 'How do I purchase a system?',
    answer: 'Simply browse our catalog, view the live demo, and click "Buy Now". You can pay via M-PESA or PayPal.'
  },
  {
    question: 'Can I customize a system?',
    answer: 'Yes! Every system has a "Request Customization" button. You can request custom features, branding, or modifications.'
  },
  {
    question: 'What happens after purchase?',
    answer: 'You\'ll receive a ZIP file download immediately, along with documentation, license key, and installation guide.'
  },
  {
    question: 'Can I resell the systems?',
    answer: 'Yes, you can become a vendor! Sign up as a developer, upload your systems, and earn commissions on every sale.'
  }
]

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-xl border-b border-white/10">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">System<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Market</span></span>
            </Link>
            
            <div className="hidden md:flex items-center gap-8">
              <Link href="/systems" className="text-gray-300 hover:text-white transition">Browse</Link>
              <Link href="/vendors" className="text-gray-300 hover:text-white transition">Vendors</Link>
              <Link href="/blog" className="text-gray-300 hover:text-white transition">Blog</Link>
              <Link href="/about" className="text-gray-300 hover:text-white transition">About</Link>
            </div>

            <div className="flex items-center gap-4">
              <Link href="/login" className="text-gray-300 hover:text-white transition">Login</Link>
              <Link href="/register" className="bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-2 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-purple-500/20 border border-purple-500/30 rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-sm text-purple-300">🔥 200+ Systems Available</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Premium Ready-Made
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400">
                Systems for Every Business
              </span>
            </h1>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
              Browse, test, and purchase complete software systems. From school management to e-commerce - all ready to deploy.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for systems... (e.g., School Management, POS, E-Commerce)"
                  className="w-full pl-12 pr-32 py-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-2 rounded-xl font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition">
                  Search
                </button>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Link href="/systems" className="bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition flex items-center gap-2">
                Browse Systems
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/custom-request" className="bg-white/10 backdrop-blur-sm border border-white/20 px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition flex items-center gap-2">
                <Settings className="w-5 h-5" />
                Request Custom Software
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">Browse by Category</h2>
              <p className="text-gray-400">Find the perfect system for your business</p>
            </div>
            <Link href="/categories" className="text-purple-400 hover:text-purple-300 flex items-center gap-1">
              View All
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((category, index) => {
              const Icon = category.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group cursor-pointer"
                >
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all hover:scale-105 hover:shadow-xl hover:shadow-purple-500/10">
                    <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-white font-semibold">{category.name}</h3>
                    <p className="text-gray-400 text-sm">{category.count} Systems</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Featured Systems */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">🔥 Featured Systems</h2>
              <p className="text-gray-400">Most popular and highly rated systems</p>
            </div>
            <Link href="/systems" className="text-purple-400 hover:text-purple-300 flex items-center gap-1">
              View All
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all hover:shadow-xl hover:shadow-purple-500/10">
                  <div className="relative h-48 bg-gradient-to-br from-purple-900/50 to-pink-900/50 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute top-4 left-4 flex gap-2">
                      {product.featured && (
                        <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-xs font-semibold px-3 py-1 rounded-full">Featured</span>
                      )}
                      <span className="bg-black/50 backdrop-blur-sm text-xs font-semibold px-3 py-1 rounded-full">
                        {product.category}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4 flex gap-2">
                      <button className="w-8 h-8 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-purple-500/50 transition">
                        <Heart className="w-4 h-4 text-white" />
                      </button>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center gap-2 text-white">
                        <Eye className="w-4 h-4" />
                        <span className="text-sm">{product.rating} ★ ({product.reviews} reviews)</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-lg font-bold text-white group-hover:text-purple-400 transition">
                        {product.title}
                      </h3>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-white">KES {product.price.toLocaleString()}</div>
                      </div>
                    </div>

                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">{product.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {product.tech.map((tech, i) => (
                        <span key={i} className="bg-white/10 text-xs px-3 py-1 rounded-full text-gray-300">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
                      <User className="w-4 h-4" />
                      <span>{product.vendor}</span>
                    </div>

                    <div className="flex gap-2">
                      <Link href={product.demoUrl} className="flex-1 bg-white/10 border border-white/20 px-4 py-2 rounded-xl text-center text-sm font-semibold hover:bg-white/20 transition flex items-center justify-center gap-2">
                        <PlayCircle className="w-4 h-4" />
                        View Demo
                      </Link>
                      <button className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-2 rounded-xl text-center text-sm font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition flex items-center justify-center gap-2">
                        <ShoppingCart className="w-4 h-4" />
                        Buy Now
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 bg-black/30">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Search, step: 1, title: 'Browse Systems', desc: 'Explore our catalog of ready-made systems by category' },
              { icon: PlayCircle, step: 2, title: 'View Live Demo', desc: 'Test the system before you buy' },
              { icon: ShoppingCart, step: 3, title: 'Purchase Securely', desc: 'Pay via M-PESA or PayPal' },
              { icon: Download, step: 4, title: 'Download & Install', desc: 'Get ZIP file, documentation, and license key' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="relative inline-block">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {item.step}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Methods Info */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-3xl p-12">
            <h2 className="text-3xl font-bold text-white text-center mb-8">💳 Secure Payment Options</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 text-center">
                <Phone className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-white font-bold text-lg mb-2">M-PESA (Kenya)</h3>
                <p className="text-gray-400 text-sm">Pay instantly via M-PESA STK push. No registration required.</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 text-center">
                <PayPal className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-white font-bold text-lg mb-2">PayPal (International)</h3>
                <p className="text-gray-400 text-sm">Pay with PayPal from anywhere in the world.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-xl font-bold text-white">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-300">{testimonial.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 bg-black/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6"
              >
                <h3 className="text-white font-semibold text-lg mb-2">{faq.question}</h3>
                <p className="text-gray-400">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-3xl p-12 text-center">
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Build Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Browse our catalog of premium systems and find the perfect solution for your needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/systems" className="bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition flex items-center gap-2">
                Browse Systems
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/vendor/register" className="bg-white/10 backdrop-blur-sm border border-white/20 px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition">
                Become a Vendor
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <Code2 className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold text-white">System<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Market</span></span>
              </div>
              <p className="text-gray-400 text-sm">Premium ready-made systems for African businesses.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Marketplace</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/systems" className="hover:text-white transition">Browse Systems</Link></li>
                <li><Link href="/vendors" className="hover:text-white transition">Vendors</Link></li>
                <li><Link href="/custom-request" className="hover:text-white transition">Custom Software</Link></li>
                <li><Link href="/blog" className="hover:text-white transition">Blog</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">For Vendors</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/vendor/register" className="hover:text-white transition">Become a Vendor</Link></li>
                <li><Link href="/vendor/dashboard" className="hover:text-white transition">Vendor Dashboard</Link></li>
                <li><Link href="/vendor/earnings" className="hover:text-white transition">Earnings</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/contact" className="hover:text-white transition">Contact Us</Link></li>
                <li><Link href="/faq" className="hover:text-white transition">FAQ</Link></li>
                <li><Link href="/terms" className="hover:text-white transition">Terms</Link></li>
                <li><Link href="/privacy" className="hover:text-white transition">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-8 text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} SystemMarket Pro. All rights reserved. Made with ❤️ in Kenya
          </div>
        </div>
      </footer>
    </div>
  )
}
