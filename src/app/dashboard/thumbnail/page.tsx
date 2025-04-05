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

export default function ThumbnailPage() {
  const [reviews] = useState<Review[]>([
    {
      id: '1',
      userName: 'Sarah Johnson',
      userAvatar: '',
      rating: 5,
      comment: 'The thumbnail design service is amazing! They created eye-catching thumbnails that significantly increased my click-through rate. The attention to detail and creativity is outstanding.',
      date: 'March 16, 2024',
      channelName: 'Fitness Journey',
      subscribers: 25000
    },
    {
      id: '2',
      userName: 'Alex Turner',
      userAvatar: '',
      rating: 5,
      comment: 'I was blown away by the quality of the thumbnails. They perfectly captured the essence of my content and made my videos stand out. The quick turnaround time was a bonus!',
      date: 'March 13, 2024',
      channelName: 'Gaming Pro',
      subscribers: 35000
    },
    {
      id: '3',
      userName: 'Maria Garcia',
      userAvatar: '',
      rating: 4,
      comment: 'Great service overall! The thumbnails are professional and engaging. The only reason for 4 stars is that I had to request a few minor adjustments to match my brand colors.',
      date: 'March 10, 2024',
      channelName: 'Cooking Tips',
      subscribers: 15000
    }
  ])

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Thumbnail Design</h1>
        <p className="mt-2 text-sm text-gray-600">Eye-catching thumbnail designs for your videos</p>
      </div>

      {/* Featured Image */}
      <div className="relative w-full aspect-[9/5] max-w-[900px] max-h-[500px] mb-8 rounded-lg overflow-hidden">
        <Image
          src="/images/se5.jpg"
          alt="Thumbnail Design Services"
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
              Professional thumbnail design services to make your videos stand out. Our creative designers create eye-catching thumbnails that increase click-through rates and attract more viewers.
            </p>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-purple-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-purple-900 mb-2">Basic Package</h3>
                <ul className="list-disc pl-5 space-y-2 text-purple-800">
                  <li>Simple thumbnail design</li>
                  <li>Basic text overlay</li>
                  <li>Standard color scheme</li>
                  <li>One revision</li>
                  <li>24-hour delivery</li>
                </ul>
                <p className="mt-4 text-purple-900 font-medium">Starting at $19</p>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-purple-900 mb-2">Standard Package</h3>
                <ul className="list-disc pl-5 space-y-2 text-purple-800">
                  <li>All Basic features</li>
                  <li>Custom text effects</li>
                  <li>Brand color integration</li>
                  <li>Two revisions</li>
                  <li>12-hour delivery</li>
                </ul>
                <p className="mt-4 text-purple-900 font-medium">Starting at $39</p>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-purple-900 mb-2">Premium Package</h3>
                <ul className="list-disc pl-5 space-y-2 text-purple-800">
                  <li>All Standard features</li>
                  <li>Custom illustrations</li>
                  <li>Advanced effects</li>
                  <li>Unlimited revisions</li>
                  <li>6-hour delivery</li>
                </ul>
                <p className="mt-4 text-purple-900 font-medium">Starting at $79</p>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Design Features</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Eye-catching layouts</li>
                <li>Custom typography</li>
                <li>Professional color schemes</li>
                <li>Brand consistency</li>
                <li>Text effects and overlays</li>
                <li>Custom illustrations</li>
                <li>Multiple design options</li>
                <li>Quick turnaround time</li>
              </ul>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">How It Works</h3>
              <ol className="list-decimal pl-6 space-y-3 text-gray-700">
                <li>Submit your requirements</li>
                <li>Choose your preferred style</li>
                <li>Review initial design</li>
                <li>Request revisions if needed</li>
                <li>Receive final thumbnail</li>
              </ol>
            </div>

            <div className="mt-8 bg-blue-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Need Help?</h3>
              <p className="text-blue-800">
                Our thumbnail design experts are ready to help you create stunning thumbnails that attract more viewers to your content.
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