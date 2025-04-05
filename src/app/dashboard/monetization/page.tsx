'use client'
import { useState } from 'react'
import Link from 'next/link'
import ReviewSection from '@/components/ReviewSection'
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
}

export default function MonetizationPage() {
  const [reviews] = useState<Review[]>([
    {
      id: '1',
      userName: 'Robert Smith',
      userAvatar: '',
      rating: 5,
      comment: 'The monetization service helped me optimize my channel for maximum revenue. Their strategies and recommendations were spot-on, and I saw a significant increase in my earnings.',
      date: 'March 19, 2024',
      channelName: 'Tech Reviews Pro',
      subscribers: 45000
    },
    {
      id: '2',
      userName: 'Jennifer Lee',
      userAvatar: '',
      rating: 5,
      comment: 'I was struggling to monetize my channel until I found this service. They provided comprehensive guidance on ad placement, sponsorship opportunities, and revenue optimization.',
      date: 'March 16, 2024',
      channelName: 'Lifestyle Tips',
      subscribers: 28000
    },
    {
      id: '3',
      userName: 'Thomas Wilson',
      userAvatar: '',
      rating: 4,
      comment: 'Great service overall! The monetization strategies were effective, but I would have liked more specific guidance on affiliate marketing opportunities.',
      date: 'March 13, 2024',
      channelName: 'Gaming Universe',
      subscribers: 32000
    }
  ])

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Monetization</h1>
        <p className="mt-2 text-sm text-gray-600">Maximize your YouTube channel revenue</p>
      </div>

      {/* Featured Image */}
      <div className="relative w-full aspect-[9/5] max-w-[900px] max-h-[500px] mb-8 rounded-lg overflow-hidden">
        <Image
          src="/images/se6.png"
          alt="Monetization Services"
          fill
          className="object-cover"
          priority
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, 900px"
        />
      </div>

      <div className="px-4 py-6 sm:px-0">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Channel Monetization Services</h1>
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
              Professional channel monetization services to maximize your YouTube revenue. Our experts help you optimize your content and implement effective monetization strategies.
            </p>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-purple-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-purple-900 mb-2">Basic Package</h3>
                <ul className="list-disc pl-5 space-y-2 text-purple-800">
                  <li>Ad revenue optimization</li>
                  <li>Basic sponsorship guidance</li>
                  <li>Revenue analytics review</li>
                  <li>One consultation call</li>
                  <li>Basic strategy report</li>
                </ul>
                <p className="mt-4 text-purple-900 font-medium">Starting at $49</p>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-purple-900 mb-2">Standard Package</h3>
                <ul className="list-disc pl-5 space-y-2 text-purple-800">
                  <li>All Basic features</li>
                  <li>Advanced sponsorship matching</li>
                  <li>Custom monetization strategy</li>
                  <li>Monthly consultation calls</li>
                  <li>Detailed analytics report</li>
                </ul>
                <p className="mt-4 text-purple-900 font-medium">Starting at $99</p>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-purple-900 mb-2">Premium Package</h3>
                <ul className="list-disc pl-5 space-y-2 text-purple-800">
                  <li>All Standard features</li>
                  <li>Premium brand partnerships</li>
                  <li>Revenue optimization suite</li>
                  <li>Weekly consultation calls</li>
                  <li>Comprehensive strategy plan</li>
                </ul>
                <p className="mt-4 text-purple-900 font-medium">Starting at $199</p>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Monetization Features</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Ad revenue optimization</li>
                <li>Sponsorship opportunities</li>
                <li>Affiliate marketing setup</li>
                <li>Merchandise integration</li>
                <li>Membership program setup</li>
                <li>Super Chat optimization</li>
                <li>Channel memberships</li>
                <li>Revenue analytics</li>
              </ul>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">How It Works</h3>
              <ol className="list-decimal pl-6 space-y-3 text-gray-700">
                <li>Channel analysis</li>
                <li>Strategy development</li>
                <li>Implementation planning</li>
                <li>Regular optimization</li>
                <li>Performance tracking</li>
              </ol>
            </div>

            <div className="mt-8 bg-blue-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Need Help?</h3>
              <p className="text-blue-800">
                Our monetization experts are ready to help you maximize your channel&apos;s revenue potential.
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