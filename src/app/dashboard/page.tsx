'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

export default function DashboardPage() {
  const router = useRouter()
  const [user, setUser] = useState<{ name: string; email: string } | null>(null)
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      image: '/images/imagevideo.webp',
      title: 'Professional Video Editing',
      description: 'Transform your raw footage into engaging content',
      link: '/dashboard/video-editing'
    },
    {
      image: '/images/channelgrowth.webp',
      title: 'Channel Growth Strategies',
      description: 'Grow your YouTube channel with proven techniques',
      link: '/dashboard/channel-setup'
    },
    {
      image: '/images/monetize.webp',
      title: 'Monetization Guide',
      description: 'Learn how to monetize your content effectively',
      link: '/dashboard/monetization'
    }
  ]

  useEffect(() => {
    // In a real app, you would fetch the user data from your backend
    // For now, we'll simulate it with localStorage
    const userData = localStorage.getItem('user')
    if (userData) {
      setUser(JSON.parse(userData))
    } else {
      // Redirect to login if no user data is found
      router.push('/login')
    }
  }, [router])

  // Auto slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-3 sm:py-6 space-y-4 sm:space-y-6">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-purple-600 to-purple-800 rounded-xl shadow-lg overflow-hidden">
          <div className="px-4 py-5 sm:p-6">
            <div className="flex flex-col sm:flex-row items-center sm:items-start sm:justify-between gap-4">
              <div className="text-center sm:text-left">
                <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                  Welcome back, {user?.name}!
                </h1>
                <p className="text-sm sm:text-base text-purple-100">
                  Here&apos;s what&apos;s happening with your account today.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                <Link
                  href="/dashboard/orders"
                  className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-full text-purple-600 bg-white hover:bg-purple-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors"
                >
                  View Orders
                </Link>
                <Link
                  href="/dashboard/profile"
                  className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-full text-white border border-white/30 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors"
                >
                  Edit Profile
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Image Carousel */}
        <div className="relative w-full h-[250px] sm:h-[350px] lg:h-[450px] overflow-hidden rounded-xl shadow-lg">
          {/* Slides */}
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute w-full h-full transition-opacity duration-500 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                  <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-1.5 sm:mb-2">{slide.title}</h2>
                  <p className="text-sm sm:text-base text-white/90 mb-3 sm:mb-4 line-clamp-2 sm:line-clamp-none">{slide.description}</p>
                  <Link
                    href={slide.link}
                    className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-full text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          ))}

          {/* Navigation Buttons */}
          <div className="absolute inset-0 flex items-center justify-between px-2 sm:px-4">
            <button
              onClick={prevSlide}
              className="bg-black/20 hover:bg-black/30 text-white p-1.5 rounded-full focus:outline-none focus:ring-2 focus:ring-white transition-colors"
              aria-label="Previous slide"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="bg-black/20 hover:bg-black/30 text-white p-1.5 rounded-full focus:outline-none focus:ring-2 focus:ring-white transition-colors"
              aria-label="Next slide"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Slide Indicators */}
          <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-1.5">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-white' : 'bg-white/40 hover:bg-white/60'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Fixed Screen Image Section */}
        <div className="relative w-full h-[250px] sm:h-[350px] lg:h-[450px] overflow-hidden rounded-xl shadow-lg">
          <Image
            src="/images/yt6.jpg"
            alt="Dashboard Background"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </div>
  )
} 