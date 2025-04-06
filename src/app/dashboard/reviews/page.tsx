'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface Review {
  id: string
  userName: string
  userAvatar: string
  rating: number
  comment: string
  date: string
  channelName: string
  subscribers: number
  category: string
  service: string
}

export default function ReviewsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [sortBy, setSortBy] = useState<string>('date')

  const [reviews] = useState<Review[]>([
    {
      id: '1',
      userName: 'John Smith',
      userAvatar: '/images/pew.webp',
      rating: 5,
      comment: 'The channel setup service was excellent! They helped me create a professional brand identity and optimize my channel for better visibility. My subscriber count increased significantly after implementing their recommendations.',
      date: 'March 15, 2024',
      channelName: 'Tech Insights Daily',
      subscribers: 15000,
      category: 'Channel Setup',
      service: 'Channel Setup'
    },
    {
      id: '2',
      userName: 'Sarah Johnson',
      userAvatar: '/images/pew.webp',
      rating: 4,
      comment: 'Great service overall. The team helped me set up my channel with proper branding and optimization. The only reason I gave 4 stars is that I had to wait a bit longer than expected for the final delivery.',
      date: 'March 10, 2024',
      channelName: 'Creative Corner',
      subscribers: 8500,
      category: 'Video Editing',
      service: 'Video Editing'
    },
    {
      id: '3',
      userName: 'Mike Chen',
      userAvatar: '/images/pew.webp',
      rating: 5,
      comment: 'Professional and thorough service. They not only set up my channel but also provided valuable insights for content strategy. My channel looks much more professional now.',
      date: 'March 5, 2024',
      channelName: 'Gaming Adventures',
      subscribers: 25000,
      category: 'SEO Optimization',
      service: 'SEO Optimization'
    },
    {
      id: '4',
      userName: 'Emma Wilson',
      userAvatar: '/images/pew.webp',
      rating: 5,
      comment: 'The voice-over service was outstanding! The quality of the voice work was professional and engaging. It really helped elevate my content to the next level.',
      date: 'March 1, 2024',
      channelName: 'Movie Reviews',
      subscribers: 45000,
      category: 'Voice Over',
      service: 'Voice Over'
    },
    {
      id: '5',
      userName: 'David Brown',
      userAvatar: '/images/pew.webp',
      rating: 5,
      comment: 'The thumbnail design service exceeded my expectations. The designs are eye-catching and have significantly improved my click-through rate.',
      date: 'February 28, 2024',
      channelName: 'Tech Tutorials',
      subscribers: 32000,
      category: 'Thumbnail Design',
      service: 'Thumbnail Design'
    },
    {
      id: '6',
      userName: 'Lisa Anderson',
      userAvatar: '/images/pew.webp',
      rating: 5,
      comment: 'The monetization strategy they provided was exactly what my channel needed. I\'ve seen a significant increase in revenue since implementing their recommendations.',
      date: 'February 25, 2024',
      channelName: 'Cooking Master',
      subscribers: 75000,
      category: 'Monetization',
      service: 'Monetization'
    }
  ])

  const categories = ['all', ...new Set(reviews.map(review => review.category))]
  
  const filteredReviews = reviews
    .filter(review => selectedCategory === 'all' || review.category === selectedCategory)
    .sort((a, b) => {
      if (sortBy === 'date') {
        return new Date(b.date).getTime() - new Date(a.date).getTime()
      } else if (sortBy === 'rating') {
        return b.rating - a.rating
      } else if (sortBy === 'subscribers') {
        return b.subscribers - a.subscribers
      }
      return 0
    })

  const averageRating = reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Client Reviews</h1>
        <p className="mt-2 text-sm text-gray-600">See what our clients have to say about our services</p>
        
        {/* Overall Rating */}
        <div className="mt-4 flex items-center">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-6 h-6 ${
                  i < Math.round(averageRating) ? 'text-yellow-400' : 'text-gray-300'
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.363 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="ml-2 text-gray-600">{averageRating.toFixed(1)} out of 5 ({reviews.length} reviews)</span>
        </div>
      </div>

      {/* Filters */}
      <div className="mb-6 flex flex-col sm:flex-row gap-4">
        <div className="flex-1">
          <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
            Filter by Service
          </label>
          <select
            id="category"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category === 'all' ? 'All Services' : category}
              </option>
            ))}
          </select>
        </div>
        <div className="flex-1">
          <label htmlFor="sort" className="block text-sm font-medium text-gray-700 mb-1">
            Sort by
          </label>
          <select
            id="sort"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
          >
            <option value="date">Most Recent</option>
            <option value="rating">Highest Rating</option>
            <option value="subscribers">Most Subscribers</option>
          </select>
        </div>
      </div>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredReviews.map((review) => (
          <div key={review.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
            <div className="p-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src={review.userAvatar}
                      alt={review.userName}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="ml-4 flex-1">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-medium text-gray-900">{review.userName}</h3>
                      <p className="text-sm text-gray-500">{review.channelName}</p>
                      <p className="text-sm text-gray-500">{review.subscribers.toLocaleString()} subscribers</p>
                    </div>
                    <div className="flex items-center">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className={`w-4 h-4 ${
                              i < review.rating ? 'text-yellow-400' : 'text-gray-300'
                            }`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.363 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="ml-2 text-sm text-gray-500">{review.date}</span>
                    </div>
                  </div>
                  <div className="mt-2">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                      {review.category}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-gray-600">{review.comment}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="mt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="text-sm text-gray-600">
          Showing {filteredReviews.length} of {reviews.length} reviews
        </div>
        <div className="flex space-x-4">
          <Link
            href="/dashboard"
            className="inline-flex justify-center py-2 px-4 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
          >
            Back to Dashboard
          </Link>
          <Link
            href="/dashboard/messages"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
          >
            Leave a Review
          </Link>
        </div>
      </div>
    </div>
  )
} 