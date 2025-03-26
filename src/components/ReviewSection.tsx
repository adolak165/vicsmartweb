'use client'
import { useState } from 'react'

interface Review {
  id: string
  userName: string
  userAvatar: string
  rating: number
  comment: string
  date: string
  channelName: string
  subscribers: number
}

interface ReviewSectionProps {
  serviceName: string
  reviews: Review[]
}

export default function ReviewSection({ serviceName, reviews }: ReviewSectionProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden mt-8">
      <div className="px-8 py-6 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-gray-900">Client Reviews</h2>
          <div className="flex items-center">
            <div className="flex items-center">
              <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.363 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="ml-2 text-lg font-semibold text-gray-900">
                {(reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length).toFixed(1)}
              </span>
            </div>
            <span className="ml-2 text-sm text-gray-500">({reviews.length} reviews)</span>
          </div>
        </div>
      </div>

      <div className="divide-y divide-gray-200">
        {reviews.map((review) => (
          <div key={review.id} className="p-6">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                  <span className="text-lg font-semibold text-purple-600">
                    {review.userName.charAt(0)}
                  </span>
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
                <p className="mt-2 text-sm text-gray-600">{review.comment}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 