'use client'
import { useState, useEffect } from 'react'

const ReviewsPage = () => {
  const reviews = [
    {
      name: "David Chen",
      role: "Finance YouTuber",
      review: "Working with Vicsmart has been transformative for my channel. Their automation strategies helped me focus on content while they handled everything else.",
      rating: 5,
      image: "/reviews/channel1.jpg", // Single image for simplicity
      channelStats: {
        subscribers: "100K+",
        views: "1M+",
        growth: "+500% in 6 months"
      }
    },
    {
      name: "Sarah Williams",
      role: "Tech Reviewer",
      review: "The team at Vicsmart knows exactly what they're doing. My channel has seen incredible growth since I started working with them.",
      rating: 5,
      image: "/reviews/channel2.jpg",
      channelStats: {
        subscribers: "75K+",
        views: "800K+",
        growth: "+300% in 4 months"
      }
    },
    {
      name: "Michael Brown",
      role: "Educational Content Creator",
      review: "Their SEO expertise and content strategy have helped me reach a much wider audience. Highly recommended!",
      rating: 5,
      image: "/reviews/channel3.jpg",
      channelStats: {
        subscribers: "50K+",
        views: "500K+",
        growth: "+200% in 3 months"
      }
    }
  ]

  return (
    <main className="min-h-screen pt-20 pb-16">
      <section className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">Client Reviews</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <ReviewCard key={index} review={review} />
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Grow Your Channel?</h2>
          <p className="text-gray-600 mb-8">Join our successful clients and transform your YouTube presence</p>
          <a 
            href="/contact" 
            className="inline-block bg-purple-600 text-white px-8 py-3 rounded-full font-bold hover:bg-purple-700 transition-colors"
          >
            Get Started Today
          </a>
        </div>
      </section>
    </main>
  )
}

const ReviewCard = ({ review }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <article 
      className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Section */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={review.image}
          alt={`${review.name}'s YouTube Channel`}
          className={`w-full h-full object-cover transition-transform duration-500 ${
            isHovered ? 'scale-110' : 'scale-100'
          }`}
        />

        {/* Rating Overlay */}
        <div className="absolute top-4 right-4 z-10 bg-white/90 px-3 py-1 rounded-full">
          <div className="flex items-center">
            {[...Array(review.rating)].map((_, i) => (
              <svg
                key={i}
                className="w-5 h-5 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
        </div>

        {/* Hover Overlay */}
        <div 
          className={`absolute inset-0 bg-black/50 flex items-center justify-center transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <span className="text-white font-medium">View Channel</span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        <div className="mb-4">
          <h3 className="text-xl font-bold">{review.name}</h3>
          <p className="text-purple-600">{review.role}</p>
        </div>

        <p className="text-gray-600 mb-6">"{review.review}"</p>

        {/* Channel Stats */}
        <div className="grid grid-cols-3 gap-4 text-center bg-gray-50 p-4 rounded-lg">
          <div>
            <p className="text-purple-600 font-bold">{review.channelStats.subscribers}</p>
            <p className="text-sm text-gray-500">Subscribers</p>
          </div>
          <div>
            <p className="text-purple-600 font-bold">{review.channelStats.views}</p>
            <p className="text-sm text-gray-500">Views</p>
          </div>
          <div>
            <p className="text-purple-600 font-bold">{review.channelStats.growth}</p>
            <p className="text-sm text-gray-500">Growth</p>
          </div>
        </div>
      </div>
    </article>
  )
}

export default ReviewsPage 