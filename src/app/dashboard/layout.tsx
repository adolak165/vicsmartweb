'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'
import Footer from '@/components/Footer'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()
  const pathname = usePathname()
  const [user, setUser] = useState<{ name: string; email: string } | null>(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState<Array<{ name: string; href: string; icon: React.ReactNode }>>([])
  const [showSearchResults, setShowSearchResults] = useState(false)
  const [orderCount, setOrderCount] = useState(0)
  const [unreadMessages, setUnreadMessages] = useState(0)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const features = [
    { name: 'Channel Setup', href: '/dashboard/channel-setup', icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    )},
    { name: 'Video Editing', href: '/dashboard/video-editing', icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    )},
    { name: 'Voice Over', href: '/dashboard/voice-over', icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
      </svg>
    )},
    { name: 'Thumbnail', href: '/dashboard/thumbnail', icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    )},
    { name: 'Monetization', href: '/dashboard/monetization', icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )},
    { name: 'SEO', href: '/dashboard/seo', icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    )}
  ]

  useEffect(() => {
    const userData = localStorage.getItem('user')
    if (userData) {
      setUser(JSON.parse(userData))
      // Example usage of state setters
      // In a real app, these would be updated based on actual data from your backend
      setOrderCount(0)
      setUnreadMessages(0)
    } else {
      router.push('/login')
    }
  }, [router])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (!searchQuery.trim()) {
      setSearchResults([])
      setShowSearchResults(false)
      return
    }

    const results = features.filter(feature =>
      feature.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    setSearchResults(results)
    setShowSearchResults(true)
  }

  const handleSearchResultClick = (href: string) => {
    router.push(href)
    setSearchQuery('')
    setSearchResults([])
    setShowSearchResults(false)
  }

  const handleLogout = () => {
    localStorage.removeItem('user')
    router.push('/login')
  }

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const dropdown = document.getElementById('profile-dropdown')
      if (dropdown && !dropdown.contains(event.target as Node)) {
        setIsDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Close search results when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const searchContainer = document.getElementById('search-container')
      if (searchContainer && !searchContainer.contains(event.target as Node)) {
        setShowSearchResults(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/dashboard" className="text-lg sm:text-2xl font-bold text-purple-600">
                Vicsmart
              </Link>
            </div>
            
            {/* Mobile Navigation Icons */}
            <div className="flex items-center space-x-3 sm:space-x-4">
              {/* Orders Link */}
              <Link 
                href="/dashboard/orders" 
                className="relative flex items-center p-2.5 text-gray-700 hover:text-purple-600 hover:bg-gray-50 rounded-lg transition-colors"
              >
                <svg className="w-6 h-6 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                <span className="hidden sm:inline-block ml-2 font-medium">Orders</span>
                {orderCount > 0 && (
                  <span className="absolute -top-1 -right-1 px-1.5 py-0.5 text-xs font-medium bg-purple-100 text-purple-800 rounded-full min-w-[1.25rem] text-center">
                    {orderCount}
                  </span>
                )}
              </Link>

              {/* Message Icon */}
              <Link 
                href="/dashboard/messages"
                className="relative p-2.5 text-gray-500 hover:text-purple-600 focus:outline-none"
              >
                <svg className="w-6 h-6 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
                {unreadMessages > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full min-w-[1.25rem] h-5 flex items-center justify-center">
                    {unreadMessages}
                  </span>
                )}
              </Link>

              {/* Profile Dropdown */}
              <div className="relative" id="profile-dropdown">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center space-x-2 p-1.5 text-gray-700 hover:text-purple-600 hover:bg-gray-50 rounded-lg transition-colors focus:outline-none"
                >
                  <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                    <span className="text-purple-600 font-medium">
                      {user?.name?.charAt(0)?.toUpperCase() || '?'}
                    </span>
                  </div>
                </button>

                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-64 sm:w-48 bg-white rounded-lg shadow-lg py-1 z-50">
                    <div className="px-4 py-3 border-b border-gray-100">
                      <p className="text-sm font-medium text-gray-900">{user?.name || 'Guest'}</p>
                      <p className="text-sm text-gray-600 truncate">{user?.email}</p>
                    </div>
                    <Link
                      href="/dashboard/profile"
                      className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50"
                    >
                      Profile Settings
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2.5 text-sm text-red-600 hover:bg-gray-50"
                    >
                      Sign out
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Mobile Search Bar */}
          <div className="sm:hidden px-0 pb-3">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value)
                  if (e.target.value.trim()) {
                    const results = features.filter(feature =>
                      feature.name.toLowerCase().includes(e.target.value.toLowerCase())
                    )
                    setSearchResults(results)
                    setShowSearchResults(true)
                  } else {
                    setSearchResults([])
                    setShowSearchResults(false)
                  }
                }}
                placeholder="Search features..."
                className="w-full px-4 py-2.5 text-base text-gray-700 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:bg-white"
              />
              <button
                type="submit"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-purple-600"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </nav>

      {/* Features Navigation */}
      <nav className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
          <div className="h-14 sm:h-12 relative">
            <div className="flex items-center overflow-x-auto hide-scrollbar space-x-3 sm:space-x-6 h-full py-1 sm:py-0">
              {features.map((feature) => {
                const isActive = pathname === feature.href
                return (
                  <Link
                    key={feature.name}
                    href={feature.href}
                    className={`flex items-center space-x-2 px-3 py-2.5 sm:py-2 rounded-lg sm:rounded-md text-sm font-medium transition-colors whitespace-nowrap flex-shrink-0 ${
                      isActive
                        ? 'text-purple-600 bg-purple-50'
                        : 'text-gray-700 hover:text-purple-600 hover:bg-gray-100'
                    }`}
                  >
                    <span className="w-5 h-5">{feature.icon}</span>
                    <span>{feature.name}</span>
                  </Link>
                )
              })}
            </div>
            {/* Gradient fades for scroll indication */}
            <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none sm:hidden" />
            <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none sm:hidden" />
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 px-3 sm:px-0">
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
} 