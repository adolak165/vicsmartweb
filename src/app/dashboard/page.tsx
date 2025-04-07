'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

export default function DashboardPage() {
  const router = useRouter()
  const [user, setUser] = useState<{ name: string; email: string } | null>(null)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [currentTipSlide, setCurrentTipSlide] = useState(0)

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

  const tipSlides = [
    {
      image: '/images/tip1.webp',
      title: 'Celebrity Gossip',
      description: 'Get the latest scoop on your favorite stars with the ultimate celebrity gossip destination!'
    },
    {
      image: '/images/tip2.webp',
      title: 'Animal',
      description: 'Unleash the animal kingdom with the best animal content on the web!'
    },
    {
      image: '/images/tip3.webp',
      title: 'Gardening',
      description: 'Grow your green thumb with the best gardening tips and tricks on the web!'
    },
    {
      image: '/images/tip4.webp',
      title: 'Basketball',
      description: 'Dribble through the best basketball content on the web!'
    },
    {
      image: '/images/tip5.webp',
      title: 'True Crime',
      description: 'Uncover the truth with the best true crime content on the web!'
    },
    {
      image: '/images/tip6.webp',
      title: 'Fitness & Health',
      description: 'Create workout routines and health tips'
    },
    {
      image: '/images/tip7.webp',
      title: 'Travel Vlogging',
      description: 'Share travel experiences and tips'
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

  // Auto slide functionality for main carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(timer)
  }, [])

  // Auto slide functionality for tips carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTipSlide((prev) => (prev + 1) % tipSlides.length)
    }, 4000)

    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const nextTipSlide = () => {
    setCurrentTipSlide((prev) => (prev + 1) % tipSlides.length)
  }

  const prevTipSlide = () => {
    setCurrentTipSlide((prev) => (prev - 1 + tipSlides.length) % tipSlides.length)
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

        {/* New Tips Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Column - Carousel */}
          <div className="relative w-full h-[896px] overflow-hidden rounded-xl shadow-lg">
            {tipSlides.map((slide, index) => (
              <div
                key={index}
                className={`absolute w-full h-full transition-opacity duration-500 ${
                  index === currentTipSlide ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <div className="relative w-full h-full bg-gray-100">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                </div>
              </div>
            ))}

            {/* Navigation Buttons */}
            <div className="absolute inset-0 flex items-center justify-between px-4">
              <button
                onClick={prevTipSlide}
                className="bg-black/20 hover:bg-black/30 text-white p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-white transition-colors"
                aria-label="Previous slide"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextTipSlide}
                className="bg-black/20 hover:bg-black/30 text-white p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-white transition-colors"
                aria-label="Next slide"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Slide Indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
              {tipSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTipSlide(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentTipSlide ? 'bg-white' : 'bg-white/40 hover:bg-white/60'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="flex flex-col justify-start p-4 lg:p-6">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
              Top 5 YouTube Channel Ideas to Start in 2025
            </h2>
            <div className="space-y-4">
              {tipSlides.slice(0, 5).map((tip, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-7 h-7 rounded-full bg-purple-100 flex items-center justify-center">
                    <span className="text-purple-600 font-bold text-sm">{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-gray-900">{tip.title}</h3>
                    <p className="text-sm text-gray-600 mt-0.5">{tip.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <Link
                href="/dashboard/messages"
                className="inline-flex items-center px-5 py-2.5 text-sm font-medium rounded-full text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors"
              >
                Get Started with Your Channel
              </Link>
            </div>

            {/* New Content Section */}
            <div className="mt-8 space-y-4">
              <h3 className="text-xl font-bold text-gray-900">
                Want to save time and money without compromising on quality? That's what we're here for.
              </h3>
              <p className="text-gray-600">
                We built Vicsmart to help independent and results-oriented Youtubers like you get talented freelancers for all your business needs.
              </p>
              <p className="text-gray-600">
                On Vicsmart, Will excited to offer my services to your business through the Catalog, competing alongside thousands of other talented professionals. These services are sold like convenient grab-and-go items in a real store. On our platform, there are no confusing and costly hourly rates.
              </p>
              <p className="text-gray-600">
                There's also no more haggling over price and deadlines. Prices, deadlines, and services included are specified in advance, saving you time, money, and energy.
              </p>
              <p className="text-gray-600">
                You can shop freelance services with confidence on Vicsmart. If anything ever goes wrong, you're protected by our 100% Money Back Guarantee, one-of-a-kind Buyer Protection Program, and incredible Support Team.
              </p>
              <div className="mt-4">
                <Link
                  href="/dashboard/services"
                  className="inline-flex items-center px-5 py-2.5 text-sm font-medium rounded-full text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors"
                >
                  Why wait? Get things done today!
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 