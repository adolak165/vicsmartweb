'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'
import Footer from '@/components/Footer'
import { useAuth } from '@/contexts/AuthContext'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()
  const pathname = usePathname()
  const { user, loading } = useAuth()
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState<Array<{ name: string; href: string; icon: React.ReactNode; description: string }>>([])
  const [showSearchResults, setShowSearchResults] = useState(false)
  const [orderCount, setOrderCount] = useState(0)
  const [unreadMessages, setUnreadMessages] = useState(0)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [showNotifications, setShowNotifications] = useState(false)
  const [notifications, setNotifications] = useState([
    { 
      id: 1, 
      message: 'Your order #1234 has been completed', 
      time: '2 hours ago', 
      read: false,
      type: 'order',
      link: '/dashboard/orders/1234'
    },
    { 
      id: 2, 
      message: 'New message from support team', 
      time: '1 day ago', 
      read: false,
      type: 'message',
      link: '/dashboard/messages'
    },
    { 
      id: 3, 
      message: 'Your video editing service is in progress', 
      time: '2 days ago', 
      read: true,
      type: 'service',
      link: '/dashboard/video-editing'
    }
  ])
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Update order count and unread messages based on notifications
  useEffect(() => {
    const unreadOrders = notifications.filter(n => !n.read && n.type === 'order').length
    const unreadMsg = notifications.filter(n => !n.read && n.type === 'message').length
    setOrderCount(unreadOrders)
    setUnreadMessages(unreadMsg)
  }, [notifications])

  const features = [
    { 
      name: 'Channel Setup', 
      href: '/dashboard/channel-setup',
      keywords: ['youtube channel', 'setup', 'channel optimization', 'channel creation', 'youtube setup'],
      description: 'Setup and optimize your YouTube channel for success',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      )
    },
    { 
      name: 'Video Editing', 
      href: '/dashboard/video-editing',
      keywords: ['edit video', 'video production', 'editing', 'cuts', 'transitions', 'effects'],
      description: 'Professional video editing services for your content',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      )
    },
    { 
      name: 'Voice Over', 
      href: '/dashboard/voice-over',
      keywords: ['voice', 'narration', 'audio', 'recording', 'voice acting', 'voice talent'],
      description: 'Professional voice over services for your videos',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
        </svg>
      )
    },
    { 
      name: 'Thumbnail', 
      href: '/dashboard/thumbnail',
      keywords: ['thumbnail design', 'cover image', 'youtube thumbnail', 'graphic design', 'thumbnails'],
      description: 'Eye-catching thumbnail designs for better click-through rates',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    { 
      name: 'Monetization', 
      href: '/dashboard/monetization',
      keywords: ['money', 'revenue', 'income', 'ads', 'sponsorship', 'youtube money', 'earnings'],
      description: 'Maximize your YouTube channel revenue and earnings',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    { 
      name: 'SEO', 
      href: '/dashboard/seo',
      keywords: ['search optimization', 'rankings', 'youtube seo', 'visibility', 'tags', 'description'],
      description: 'Optimize your videos for better search rankings',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      )
    }
  ]

  useEffect(() => {
    if (!loading) {
      if (!user) {
        router.push('/login')
      }
    }
  }, [user, loading, router])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (!searchQuery.trim()) {
      setSearchResults([])
      setShowSearchResults(false)
      return
    }

    const searchTerms = searchQuery.toLowerCase().split(' ')
    const results = features.filter(feature => {
      const nameMatch = feature.name.toLowerCase().includes(searchQuery.toLowerCase())
      const keywordMatch = feature.keywords.some(keyword => 
        searchTerms.some(term => keyword.toLowerCase().includes(term))
      )
      const descriptionMatch = feature.description.toLowerCase().includes(searchQuery.toLowerCase())
      return nameMatch || keywordMatch || descriptionMatch
    })

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
    if (window.confirm('Are you sure you want to sign out?')) {
      localStorage.removeItem('user')
      router.push('/login')
    }
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

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    )
  }

  if (!user) {
    return null
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Main Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/dashboard" className="text-xl sm:text-2xl font-bold text-purple-600">
                Vicsmart
              </Link>
            </div>

            {/* Desktop Search Bar */}
            <div className="hidden sm:flex flex-1 justify-center px-6">
              <div className="w-full max-w-lg relative">
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
                    className="w-full px-4 py-2 text-sm text-gray-700 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:bg-white"
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

                {/* Desktop Search Results Dropdown */}
                {showSearchResults && searchResults.length > 0 && (
                  <div className="absolute z-50 w-full mt-1 bg-white rounded-lg shadow-lg border border-gray-200 max-h-96 overflow-y-auto">
                    {searchResults.map((result) => (
                      <button
                        key={result.href}
                        onClick={() => handleSearchResultClick(result.href)}
                        className="w-full px-4 py-3 flex items-center space-x-3 hover:bg-gray-50 focus:outline-none"
                      >
                        <div className="text-gray-500 flex-shrink-0">
                          {result.icon}
                        </div>
                        <div className="flex flex-col items-start">
                          <span className="text-gray-700 font-medium">{result.name}</span>
                          <span className="text-gray-500 text-sm">{result.description}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Right Navigation Items */}
            <div className="flex items-center space-x-4">
              {/* Orders Link */}
              <Link 
                href="/dashboard/orders" 
                className="relative flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-purple-600 rounded-lg transition-colors"
              >
                <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                <span>Orders</span>
                {orderCount > 0 && (
                  <span className="absolute -top-1 -right-1 px-1.5 py-0.5 text-xs font-medium bg-purple-100 text-purple-800 rounded-full min-w-[1.25rem] text-center">
                    {orderCount}
                  </span>
                )}
              </Link>

              {/* Notifications */}
              <div className="relative">
                <Link
                  href="/dashboard/notifications"
                  className="relative p-2 text-gray-700 hover:text-purple-600 rounded-lg transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    setShowNotifications(!showNotifications);
                  }}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                </Link>

                {showNotifications && (
                  <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg py-1 z-50">
                    <div className="px-4 py-2 border-b border-gray-100">
                      <div className="flex justify-between items-center">
                        <Link
                          href="/dashboard/notifications"
                          className="text-sm font-medium text-gray-900 hover:text-purple-600"
                        >
                          Notifications
                        </Link>
                        <button
                          onClick={() => {
                            setNotifications(notifications.map(n => ({ ...n, read: true })))
                          }}
                          className="text-xs text-purple-600 hover:text-purple-700"
                        >
                          Mark all as read
                        </button>
                      </div>
                    </div>
                    <div className="max-h-96 overflow-y-auto">
                      {notifications.length > 0 ? (
                        notifications.map((notification) => (
                          <Link
                            key={notification.id}
                            href={notification.link}
                            className={`block px-4 py-3 hover:bg-gray-50 ${
                              !notification.read ? 'bg-purple-50' : ''
                            }`}
                            onClick={() => {
                              setNotifications(notifications.map(n => 
                                n.id === notification.id ? { ...n, read: true } : n
                              ))
                            }}
                          >
                            <p className="text-sm text-gray-700">{notification.message}</p>
                            <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                          </Link>
                        ))
                      ) : (
                        <div className="px-4 py-3 text-sm text-gray-500 text-center">
                          No notifications
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* Message Icon */}
              <Link 
                href="/dashboard/messages"
                className="relative p-2 text-gray-700 hover:text-purple-600 rounded-lg transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
                {unreadMessages > 0 && (
                  <span className="absolute -top-1 -right-1 px-1.5 py-0.5 text-xs font-medium bg-red-500 text-white rounded-full min-w-[1.25rem] text-center">
                    {unreadMessages}
                  </span>
                )}
              </Link>

              {/* Profile Dropdown */}
              <div className="relative" id="profile-dropdown">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center p-2 text-gray-700 hover:text-purple-600 rounded-lg transition-colors focus:outline-none"
                >
                  <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                    <span className="text-purple-600 font-medium">
                      {user?.user_metadata?.name?.charAt(0)?.toUpperCase() || 'A'}
                    </span>
                  </div>
                </button>

                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1 z-50">
                    <div className="px-4 py-2 border-b border-gray-100">
                      <p className="text-sm font-medium text-gray-900">{user?.user_metadata?.name || 'Guest'}</p>
                      <p className="text-sm text-gray-600 truncate">{user?.email}</p>
                    </div>
                    <Link
                      href="/dashboard/profile"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                    >
                      Profile Settings
                    </Link>
                    <Link
                      href="/dashboard/orders"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                    >
                      Order History
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-50"
                    >
                      Sign out
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Mobile Search Bar */}
          <div className="sm:hidden px-2 pb-3">
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
                className="w-full px-4 py-2 text-sm text-gray-700 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:bg-white"
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

            {/* Mobile Search Results Dropdown */}
            {showSearchResults && searchResults.length > 0 && (
              <div className="absolute z-50 w-[calc(100%-1rem)] mx-2 mt-1 bg-white rounded-lg shadow-lg border border-gray-200 max-h-[60vh] overflow-y-auto">
                {searchResults.map((result) => (
                  <button
                    key={result.href}
                    onClick={() => handleSearchResultClick(result.href)}
                    className="w-full px-4 py-3 flex items-center space-x-3 hover:bg-gray-50 focus:outline-none"
                  >
                    <div className="text-gray-500 flex-shrink-0">
                      {result.icon}
                    </div>
                    <div className="flex flex-col items-start">
                      <span className="text-gray-700 font-medium">{result.name}</span>
                      <span className="text-gray-500 text-sm">{result.description}</span>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Features Navigation */}
      <nav className="bg-white border-b border-gray-200">
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
      <main className="flex-1 bg-white">
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
} 