'use client'
import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path

  const navLinks = [
    { href: '/services', label: 'Services' },
    { href: '/top-niches', label: 'Top 10 Niche' },
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
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-bold text-purple-600">
            Vicsmart
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${
                  isActive(link.href) ? 'text-purple-600' : 'text-gray-700'
                } hover:text-purple-600 transition-colors`}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center space-x-4 ml-4">
              {authLinks.map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`${
                    index === 0
                      ? 'px-4 py-2 rounded-full border-2 border-purple-600 text-purple-600 hover:bg-purple-50 transition-all duration-300'
                      : 'px-4 py-2 rounded-full bg-purple-600 text-white hover:bg-purple-700 transition-all duration-300'
                  } font-medium`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
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
          <div className="md:hidden py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block py-2 ${
                  isActive(link.href) ? 'text-purple-600' : 'text-gray-700'
                } hover:text-purple-600 transition-colors`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="border-t border-gray-200 my-2"></div>
            <div className="flex flex-col space-y-2">
              {authLinks.map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`${
                    index === 0
                      ? 'px-4 py-2 rounded-full border-2 border-purple-600 text-purple-600 hover:bg-purple-50 transition-all duration-300 text-center'
                      : 'px-4 py-2 rounded-full bg-purple-600 text-white hover:bg-purple-700 transition-all duration-300 text-center'
                  } font-medium`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header 