'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

interface UserProfile {
  username: string
  password: string
  activeServices: Array<{
    name: string
    active: boolean
  }>
  email: string
}

export default function SettingsPage() {
  const [profile, setProfile] = useState<UserProfile>({
    username: '',
    password: '',
    activeServices: [],
    email: ''
  })

  useEffect(() => {
    // In a real app, this would fetch from an API
    const userData = localStorage.getItem('user')
    if (userData) {
      const user = JSON.parse(userData)
      setProfile({
        username: user.username || '',
        password: user.password || '',
        activeServices: user.activeServices || [],
        email: user.email || ''
      })
    }
  }, [])

  const handleSave = () => {
    // In a real app, this would save to an API
    const userData = localStorage.getItem('user')
    if (userData) {
      const user = JSON.parse(userData)
      localStorage.setItem('user', JSON.stringify({ ...user, ...profile }))
      alert('Settings updated successfully!')
    }
  }

  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div className="px-4 py-6 sm:px-0">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
          <Link
            href="/dashboard"
            className="text-sm text-purple-600 hover:text-purple-500"
          >
            Back to Dashboard
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="p-6">
            <div className="space-y-6">
              {/* Account Information */}
              <div>
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Account Information</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Username</label>
                    <input
                      type="text"
                      value={profile.username}
                      onChange={(e) => setProfile({ ...profile, username: e.target.value })}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Password</label>
                    <input
                      type="password"
                      value={profile.password}
                      onChange={(e) => setProfile({ ...profile, password: e.target.value })}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                      type="email"
                      value={profile.email}
                      onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Active Services</label>
                    <div className="mt-2 space-y-2">
                      {profile.activeServices.map((service, index) => (
                        <div key={index} className="flex items-center">
                          <input
                            type="checkbox"
                            checked={service.active}
                            onChange={() => {
                              const newServices = [...profile.activeServices]
                              newServices[index] = { ...service, active: !service.active }
                              setProfile({ ...profile, activeServices: newServices })
                            }}
                            className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                          />
                          <label className="ml-2 block text-sm text-gray-900">{service.name}</label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-end">
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
      </div>
    </div>
  )
} 