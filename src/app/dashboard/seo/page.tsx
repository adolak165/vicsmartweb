'use client'
import { useState } from 'react'
import Link from 'next/link'
import ReviewSection from '@/components/ReviewSection'

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

export default function SEOPage() {
  const [reviews] = useState<Review[]>([
    {
      id: '1',
      userName: 'Emily Chen',
      userAvatar: '',
      rating: 5,
      comment: 'The SEO service transformed my channel visibility! Their keyword research and optimization strategies helped me reach a much wider audience. My videos now rank higher in search results.',
      date: 'March 20, 2024',
      channelName: 'Digital Marketing Tips',
      subscribers: 38000
    },
    {
      id: '2',
      userName: 'Mark Thompson',
      userAvatar: '',
      rating: 5,
      comment: "I was impressed by their comprehensive SEO approach. They not only optimized my video titles and descriptions but also helped me understand YouTube's algorithm better.",
      date: 'March 17, 2024',
      channelName: 'Tech Tutorials',
      subscribers: 42000
    },
    {
      id: '3',
      userName: 'Rachel Martinez',
      userAvatar: '',
      rating: 4,
      comment: 'Great service overall! The SEO improvements were effective, but I would have liked more specific guidance on competitor analysis and keyword tracking tools.',
      date: 'March 14, 2024',
      channelName: 'Fashion & Style',
      subscribers: 25000
    }
  ])

  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div className="px-4 py-6 sm:px-0">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold text-gray-900">YouTube SEO Services</h1>
          <Link
            href="/dashboard"
            className="text-sm text-purple-600 hover:text-purple-500"
          >
            Back to Dashboard
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="prose max-w-none">
            <p className="text-gray-700 mb-6">
              Professional YouTube SEO services to improve your channel's visibility and reach. Our experts help you optimize your content for better search rankings and increased organic traffic.
            </p>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-purple-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-purple-900 mb-2">Basic Package</h3>
                <ul className="list-disc pl-5 space-y-2 text-purple-800">
                  <li>Keyword research</li>
                  <li>Title optimization</li>
                  <li>Description optimization</li>
                  <li>Basic tags setup</li>
                  <li>Monthly report</li>
                </ul>
                <p className="mt-4 text-purple-900 font-medium">Starting at $39</p>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-purple-900 mb-2">Standard Package</h3>
                <ul className="list-disc pl-5 space-y-2 text-purple-800">
                  <li>All Basic features</li>
                  <li>Competitor analysis</li>
                  <li>Advanced keyword tracking</li>
                  <li>Custom thumbnail optimization</li>
                  <li>Weekly report</li>
                </ul>
                <p className="mt-4 text-purple-900 font-medium">Starting at $79</p>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-purple-900 mb-2">Premium Package</h3>
                <ul className="list-disc pl-5 space-y-2 text-purple-800">
                  <li>All Standard features</li>
                  <li>Channel optimization</li>
                  <li>Playlist optimization</li>
                  <li>Custom SEO strategy</li>
                  <li>Daily report</li>
                </ul>
                <p className="mt-4 text-purple-900 font-medium">Starting at $149</p>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">SEO Features</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Keyword research and analysis</li>
                <li>Title and description optimization</li>
                <li>Tag optimization</li>
                <li>Thumbnail optimization</li>
                <li>Playlist optimization</li>
                <li>Channel optimization</li>
                <li>Competitor analysis</li>
                <li>Performance tracking</li>
              </ul>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">How It Works</h3>
              <ol className="list-decimal pl-6 space-y-3 text-gray-700">
                <li>Channel analysis</li>
                <li>Keyword research</li>
                <li>Content optimization</li>
                <li>Performance monitoring</li>
                <li>Strategy refinement</li>
              </ol>
            </div>

            <div className="mt-8 bg-blue-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Need Help?</h3>
              <p className="text-blue-800">
                Our SEO experts are ready to help you improve your channel's visibility and reach more viewers.
              </p>
            </div>
          </div>

          <div className="mt-8 flex justify-end space-x-4">
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
              Get Started
            </Link>
          </div>
        </div>

        {/* Reviews Section */}
        <ReviewSection serviceName="YouTube SEO" reviews={reviews} />
      </div>
    </div>
  )
} 