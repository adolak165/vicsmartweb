'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

interface Review {
  id: string
  service: string
  rating: number
  comment: string
  date: string
  reviewer: string
}

interface UserProfile {
  name: string
  email: string
  phone: string
  avatar: string
  bio: string
  location: string
  youtubeChannel: string
  joinDate: string
  totalOrders: number
  activeServices: Array<{
    name: string
    active: boolean
  }>
  reviews: Review[]
  averageRating: number
  username: string
  password: string
}

export default function ProfilePage() {
  const [profile, setProfile] = useState<UserProfile>({
    name: '',
    email: '',
    phone: '',
    avatar: '',
    bio: '',
    location: '',
    youtubeChannel: '',
    joinDate: '',
    totalOrders: 0,
    activeServices: [],
    reviews: [],
    averageRating: 0,
    username: '',
    password: ''
  })
  const [previewUrl, setPreviewUrl] = useState<string>('')

  const reviews: Review[] = [
    {
      id: '1',
      service: 'Video Editing',
      rating: 5,
      comment: 'Thank you for choosing Vicsmart! Your video has been successfully edited and is ready for review.',
      date: '2024-03-15',
      reviewer: 'Vicsmart Team'
    },
    {
      id: '2',
      service: 'Voice Over',
      rating: 4,
      comment: 'Your voice over project has been completed. Please check your inbox for the final audio files.',
      date: '2024-03-10',
      reviewer: 'Vicsmart Team'
    },
    {
      id: '3',
      service: 'Thumbnail Design',
      rating: 5,
      comment: 'Your thumbnail designs are ready! We hope you love the creative options we provided.',
      date: '2024-03-05',
      reviewer: 'Vicsmart Team'
    }
  ]

  useEffect(() => {
    // In a real app, this would fetch from an API
    const userData = localStorage.getItem('user')
    if (userData) {
      const user = JSON.parse(userData)
      // Sample reviews data - in a real app, this would come from an API
      const sampleReviews: Review[] = [
        {
          id: '1',
          service: 'Video Editing',
          rating: 5,
          comment: 'Your video has been successfully edited and is ready for review. Please check your inbox for the final version.',
          date: 'March 15, 2024',
          reviewer: 'Vicsmart Team'
        },
        {
          id: '2',
          service: 'Voice Over',
          rating: 4,
          comment: 'Your voice over project is complete. The audio files have been sent to your inbox.',
          date: 'March 10, 2024',
          reviewer: 'Vicsmart Team'
        },
        {
          id: '3',
          service: 'Thumbnail Design',
          rating: 5,
          comment: 'Your thumbnail designs are ready! We have created multiple options for your review.',
          date: 'March 5, 2024',
          reviewer: 'Vicsmart Team'
        }
      ]

      const averageRating = sampleReviews.reduce((acc, review) => acc + review.rating, 0) / sampleReviews.length

      setProfile({
        name: user.name || 'John Doe',
        email: user.email || 'john@example.com',
        phone: '+1 (555) 123-4567',
        avatar: user.name?.charAt(0).toUpperCase() || 'J',
        bio: 'Content creator and YouTuber passionate about creating engaging videos.',
        location: 'New York, USA',
        youtubeChannel: 'youtube.com/channel/example',
        joinDate: 'March 2024',
        totalOrders: 12,
        activeServices: ['Video Editing', 'Voice Over', 'Thumbnail Design'].map(name => ({ name, active: true })),
        reviews: sampleReviews,
        averageRating,
        username: user.username || '',
        password: user.password || ''
      })
      setPreviewUrl(user.avatar || '')
    }
  }, [])

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        const url = reader.result as string
        setPreviewUrl(url)
        setProfile(prev => ({
          ...prev,
          avatar: url
        }))
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSave = () => {
    // In a real app, this would save to an API
    const userData = localStorage.getItem('user')
    if (userData) {
      const user = JSON.parse(userData)
      localStorage.setItem('user', JSON.stringify({ ...user, ...profile }))
      alert('Profile updated successfully!')
    }
  }

  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div className="px-4 py-6 sm:px-0">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Profile</h1>
          <Link
            href="/dashboard"
            className="text-sm text-purple-600 hover:text-purple-500"
          >
            Back to Dashboard
          </Link>
        </div>

        {/* Profile Content */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-6">
          <div className="p-6">
            <div className="space-y-6">
              {/* Profile Information */}
              <div>
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Profile Information</h2>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      {previewUrl ? (
                        <img
                          src={previewUrl}
                          alt="Profile"
                          className="w-20 h-20 rounded-full object-cover"
                        />
                      ) : (
                        <div className="w-20 h-20 rounded-full bg-purple-100 flex items-center justify-center">
                          <span className="text-3xl font-semibold text-purple-600">
                            {profile.name.charAt(0)}
                          </span>
                        </div>
                      )}
                      <label className="absolute bottom-0 right-0 bg-purple-600 text-white rounded-full p-1 cursor-pointer hover:bg-purple-700 transition-colors">
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleAvatarChange}
                          className="hidden"
                        />
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                      </label>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">{profile.name}</h3>
                      <p className="text-sm text-gray-500">{profile.email}</p>
                      <div className="flex items-center mt-2">
                        <span className="text-yellow-400">★</span>
                        <span className="ml-1 text-gray-600">({profile.reviews.length} reviews)</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Bio</label>
                    <textarea
                      value={profile.bio}
                      onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
                      rows={3}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <Link
                  href="/dashboard/settings"
                  className="text-sm text-purple-600 hover:text-purple-500"
                >
                  Manage Account Settings
                </Link>
                <button
                  onClick={handleSave}
                  className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Reviews</h2>
          </div>
          <div className="divide-y divide-gray-200">
            {reviews.map((review) => (
              <div key={review.id} className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">{review.service}</h3>
                    <p className="text-sm text-gray-500">by {review.reviewer}</p>
                  </div>
                  <div className="flex items-center">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <span
                          key={i}
                          className={`${
                            i < review.rating ? 'text-yellow-400' : 'text-gray-300'
                          }`}
                        >
                          ★
                        </span>
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-gray-500">{review.date}</span>
                  </div>
                </div>
                <p className="mt-2 text-gray-600">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 