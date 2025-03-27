'use client'
import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path

  const navLinks = [
    { href: '/top-niches', label: 'Top 10 Niche' },
    { href: '/services', label: 'Services' },
    { href: '/previous-work', label: 'Previous Work' },
    { href: '/reviews', label: 'Review' },
    { href: '/contact', label: 'Contact' }
  ]

  const authLinks = [
    { href: '/login', label: 'Login' },
    { href: '/signup', label: 'Sign Up' }
  ]

  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <nav className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-14 sm:h-16">
          <div className="flex items-center">
            <Link href="/" className="text-lg sm:text-xl font-bold text-purple-600 whitespace-nowrap">
              Vicsmart
            </Link>
          </div>

          <div className="hidden md:flex items-center">
            <div className="flex items-center space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`${
                    isActive(link.href) ? 'text-purple-600' : 'text-gray-600'
                  } hover:text-purple-600 transition-colors text-sm whitespace-nowrap`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="flex items-center space-x-3 ml-6">
              {authLinks.map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`${
                    index === 0
                      ? 'px-3 py-1.5 rounded-full border border-purple-600 text-purple-600 hover:bg-purple-50 transition-all duration-300'
                      : 'px-3 py-1.5 rounded-full bg-purple-600 text-white hover:bg-purple-700 transition-all duration-300'
                  } text-sm font-medium whitespace-nowrap`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <button
            className="md:hidden p-1.5 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-5 h-5 text-gray-600"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden absolute left-0 right-0 top-14 bg-white border-t border-gray-100 shadow-lg">
            <div className="px-4 py-2 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block py-2 px-2 rounded-lg ${
                    isActive(link.href) 
                      ? 'text-purple-600 bg-purple-50' 
                      : 'text-gray-600 hover:bg-gray-50'
                  } transition-colors text-sm`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="border-t border-gray-100 my-2"></div>
              <div className="flex flex-col space-y-2 pb-2">
                {authLinks.map((link, index) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`${
                      index === 0
                        ? 'px-4 py-2 rounded-full border border-purple-600 text-purple-600 hover:bg-purple-50 transition-all duration-300 text-center'
                        : 'px-4 py-2 rounded-full bg-purple-600 text-white hover:bg-purple-700 transition-all duration-300 text-center'
                    } text-sm font-medium`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header 