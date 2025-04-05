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

export default function VoiceOverPage() {
  const [reviews] = useState<Review[]>([
    {
      id: '1',
      userName: 'Lisa Chen',
      userAvatar: '',
      rating: 5,
      comment: 'The voice-over service is exceptional! The voice artist perfectly matched my content style and delivered exactly what I needed. The quality and professionalism were outstanding.',
      date: 'March 17, 2024',
      channelName: 'Educational Insights',
      subscribers: 15000
    },
    {
      id: '2',
      userName: 'Michael Rodriguez',
      userAvatar: '',
      rating: 5,
      comment: 'I was amazed by the variety of voices available and the quick turnaround time. The voice-over added a professional touch to my videos and improved viewer engagement.',
      date: 'March 14, 2024',
      channelName: 'Tech Tutorials',
      subscribers: 25000
    },
    {
      id: '3',
      userName: 'Sophie Anderson',
      userAvatar: '',
      rating: 4,
      comment: 'Great service with professional voice artists. The only reason for 4 stars is that I had to wait a bit longer than expected for my second revision.',
      date: 'March 10, 2024',
      channelName: 'Gaming World',
      subscribers: 30000
    }
  ])

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Voice Over</h1>
        <p className="mt-2 text-sm text-gray-600">Professional voice over services for your videos</p>
      </div>

      {/* Featured Video */}
      <div className="relative w-full aspect-[9/5] max-w-[900px] max-h-[500px] mb-8 rounded-lg overflow-hidden">
        <video
          src="/images/se4.mp4"
          className="w-full h-full object-cover"
          controls
          autoPlay
          muted
          loop
        >
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="space-y-6">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Voice-Over Services</h1>
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
              Professional voice-over services to bring your content to life. Our talented voice artists deliver high-quality narrations that engage and captivate your audience.
            </p>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-purple-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-purple-900 mb-2">Basic Package</h3>
                <ul className="list-disc pl-5 space-y-2 text-purple-800">
                  <li>Up to 500 words</li>
                  <li>Standard voice selection</li>
                  <li>Basic audio quality</li>
                  <li>One revision</li>
                  <li>24-hour delivery</li>
                </ul>
                <p className="mt-4 text-purple-900 font-medium">Starting at $29</p>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-purple-900 mb-2">Standard Package</h3>
                <ul className="list-disc pl-5 space-y-2 text-purple-800">
                  <li>Up to 1000 words</li>
                  <li>Premium voice selection</li>
                  <li>High-quality audio</li>
                  <li>Two revisions</li>
                  <li>12-hour delivery</li>
                </ul>
                <p className="mt-4 text-purple-900 font-medium">Starting at $49</p>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-purple-900 mb-2">Premium Package</h3>
                <ul className="list-disc pl-5 space-y-2 text-purple-800">
                  <li>Unlimited words</li>
                  <li>Custom voice selection</li>
                  <li>Studio-quality audio</li>
                  <li>Unlimited revisions</li>
                  <li>6-hour delivery</li>
                </ul>
                <p className="mt-4 text-purple-900 font-medium">Starting at $99</p>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Voice-Over Features</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Professional voice artists</li>
                <li>Multiple voice options</li>
                <li>High-quality audio recording</li>
                <li>Custom pacing and tone</li>
                <li>Background music options</li>
                <li>Multiple language support</li>
                <li>Audio post-processing</li>
                <li>Quick turnaround time</li>
              </ul>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">How It Works</h3>
              <ol className="list-decimal pl-6 space-y-3 text-gray-700">
                <li>Submit your script</li>
                <li>Choose your preferred voice</li>
                <li>Specify requirements</li>
                <li>Review and request changes</li>
                <li>Receive final audio</li>
              </ol>
            </div>

            <div className="mt-8 bg-blue-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Need Help?</h3>
              <p className="text-blue-800">
                Our voice-over experts are ready to help you create professional narrations that enhance your content.
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
        <ReviewSection reviews={reviews} />
      </div>
    </div>
  )
} 