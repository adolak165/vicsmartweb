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

export default function VideoEditingPage() {
  const [reviews] = useState<Review[]>([
    {
      id: '1',
      userName: 'David Wilson',
      userAvatar: '',
      rating: 5,
      comment: 'The video editing service is outstanding! They transformed my raw footage into a professional-looking video that exceeded my expectations. The attention to detail and creative input was invaluable.',
      date: 'March 18, 2024',
      channelName: 'Travel Adventures',
      subscribers: 20000
    },
    {
      id: '2',
      userName: 'Emma Thompson',
      userAvatar: '',
      rating: 5,
      comment: 'I was impressed by their quick turnaround time and high-quality work. They added perfect transitions, effects, and background music that enhanced my content significantly.',
      date: 'March 15, 2024',
      channelName: 'Cooking Master',
      subscribers: 12000
    },
    {
      id: '3',
      userName: 'James Brown',
      userAvatar: '',
      rating: 4,
      comment: 'Great service overall! The editing was professional and they followed my instructions well. The only reason for 4 stars is that I had to request a few minor adjustments.',
      date: 'March 12, 2024',
      channelName: 'Tech Reviews',
      subscribers: 18000
    }
  ])

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Video Editing</h1>
        <p className="mt-2 text-sm text-gray-600">Professional video editing services for your content</p>
      </div>

      {/* Featured Video */}
      <div className="relative w-full aspect-[9/5] max-w-[900px] max-h-[500px] mb-8 rounded-lg overflow-hidden">
        <video
          src="/images/videoedit.mp4"
          className="w-full h-full object-cover"
          controls
          playsInline
          poster="/images/videoedit-poster.jpg"
        >
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="space-y-6">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Video Editing Services</h1>
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
              Professional video editing services to enhance your content quality and engage your audience. We transform your raw footage into polished, professional videos that stand out.
            </p>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-purple-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-purple-900 mb-2">Basic Package</h3>
                <ul className="list-disc pl-5 space-y-2 text-purple-800">
                  <li>Basic video trimming</li>
                  <li>Simple transitions</li>
                  <li>Background music</li>
                  <li>Basic color correction</li>
                  <li>Text overlays</li>
                </ul>
                <p className="mt-4 text-purple-900 font-medium">Starting at $39</p>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-purple-900 mb-2">Standard Package</h3>
                <ul className="list-disc pl-5 space-y-2 text-purple-800">
                  <li>All Basic features</li>
                  <li>Advanced transitions</li>
                  <li>Custom effects</li>
                  <li>Advanced color grading</li>
                  <li>Motion graphics</li>
                </ul>
                <p className="mt-4 text-purple-900 font-medium">Starting at $79</p>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-purple-900 mb-2">Premium Package</h3>
                <ul className="list-disc pl-5 space-y-2 text-purple-800">
                  <li>All Standard features</li>
                  <li>3D effects</li>
                  <li>Custom animations</li>
                  <li>Professional color grading</li>
                  <li>Sound design</li>
                </ul>
                <p className="mt-4 text-purple-900 font-medium">Starting at $149</p>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Editing Features</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Professional video trimming and cutting</li>
                <li>Custom transitions and effects</li>
                <li>Color correction and grading</li>
                <li>Text and graphic overlays</li>
                <li>Background music and sound effects</li>
                <li>Motion graphics and animations</li>
                <li>Multi-camera editing</li>
                <li>Green screen effects</li>
              </ul>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">How It Works</h3>
              <ol className="list-decimal pl-6 space-y-3 text-gray-700">
                <li>Upload your raw footage</li>
                <li>Specify your editing requirements</li>
                <li>Review initial edit</li>
                <li>Request revisions if needed</li>
                <li>Receive final edited video</li>
              </ol>
            </div>

            <div className="mt-8 bg-blue-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Need Help?</h3>
              <p className="text-blue-800">
                Our video editing experts are ready to help you create professional-quality videos that engage your audience.
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