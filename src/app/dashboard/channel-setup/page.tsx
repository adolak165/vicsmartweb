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
}

export default function ChannelSetupPage() {
  const [reviews] = useState<Review[]>([
    {
      id: '1',
      userName: 'John Smith',
      userAvatar: '',
      rating: 5,
      comment: 'The channel setup service was excellent! They helped me create a professional brand identity and optimize my channel for better visibility. My subscriber count increased significantly after implementing their recommendations.',
      date: 'March 15, 2024',
      channelName: 'Tech Insights Daily',
      subscribers: 15000
    },
    {
      id: '2',
      userName: 'Sarah Johnson',
      userAvatar: '',
      rating: 4,
      comment: 'Great service overall. The team helped me set up my channel with proper branding and optimization. The only reason I gave 4 stars is that I had to wait a bit longer than expected for the final delivery.',
      date: 'March 10, 2024',
      channelName: 'Creative Corner',
      subscribers: 8500
    },
    {
      id: '3',
      userName: 'Mike Chen',
      userAvatar: '',
      rating: 5,
      comment: 'Professional and thorough service. They not only set up my channel but also provided valuable insights for content strategy. My channel looks much more professional now.',
      date: 'March 5, 2024',
      channelName: 'Gaming Adventures',
      subscribers: 25000
    }
  ])

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Channel Setup</h1>
        <p className="mt-2 text-sm text-gray-600">Optimize your YouTube channel for success</p>
      </div>

      {/* Featured Image */}
      <div className="relative w-full aspect-[9/5] max-w-[900px] max-h-[500px] mb-8 rounded-lg overflow-hidden">
        <Image
          src="/images/channelsetup.webp"
          alt="Channel Setup Services"
          fill
          className="object-cover"
          priority
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, 900px"
        />
      </div>

      <div className="space-y-6">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="prose max-w-none">
            <p className="text-gray-700 mb-6">
              Professional YouTube channel setup services to create a strong foundation for your content. We help you establish a professional presence that attracts and engages viewers.
            </p>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-purple-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-purple-900 mb-2">Basic Package</h3>
                <ul className="list-disc pl-5 space-y-2 text-purple-800">
                  <li>Channel branding setup</li>
                  <li>Basic profile optimization</li>
                  <li>Channel description</li>
                  <li>Initial playlist creation</li>
                  <li>Basic channel art</li>
                </ul>
                <p className="mt-4 text-purple-900 font-medium">Starting at $29</p>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-purple-900 mb-2">Standard Package</h3>
                <ul className="list-disc pl-5 space-y-2 text-purple-800">
                  <li>All Basic features</li>
                  <li>Custom channel layout</li>
                  <li>Advanced branding</li>
                  <li>Channel trailer setup</li>
                  <li>Social media integration</li>
                </ul>
                <p className="mt-4 text-purple-900 font-medium">Starting at $59</p>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-purple-900 mb-2">Premium Package</h3>
                <ul className="list-disc pl-5 space-y-2 text-purple-800">
                  <li>All Standard features</li>
                  <li>Complete channel optimization</li>
                  <li>Custom branding package</li>
                  <li>Channel strategy planning</li>
                  <li>Monetization preparation</li>
                </ul>
                <p className="mt-4 text-purple-900 font-medium">Starting at $99</p>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Setup Features</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Professional channel art and logo design</li>
                <li>Optimized channel description and about section</li>
                <li>Strategic playlist organization</li>
                <li>Custom channel trailer</li>
                <li>Social media integration</li>
                <li>Channel customization and layout</li>
                <li>Initial content strategy</li>
                <li>Monetization preparation</li>
              </ul>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">How It Works</h3>
              <ol className="list-decimal pl-6 space-y-3 text-gray-700">
                <li>Initial consultation to understand your goals</li>
                <li>Channel analysis and strategy development</li>
                <li>Custom branding and design creation</li>
                <li>Channel optimization and setup</li>
                <li>Final review and adjustments</li>
                <li>Launch support and guidance</li>
              </ol>
            </div>

            <div className="mt-8 bg-blue-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Need Help?</h3>
              <p className="text-blue-800">
                Our channel setup experts are ready to help you create a professional YouTube presence that stands out.
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
      </div>
    </div>
  )
} 