'use client'
import { useState, useEffect } from 'react'
import { BellIcon } from '@heroicons/react/24/outline'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

interface Notification {
  id: string
  type: 'order' | 'payment' | 'system'
  title: string
  message: string
  read: boolean
  createdAt: string
}

export default function NotificationsPage() {
  const router = useRouter()
  const [notifications, setNotifications] = useState<Notification[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const userData = localStorage.getItem('user')
    if (!userData) {
      router.push('/login')
    }
  }, [router])

  const handleNotificationClick = (notificationId: string) => {
    setNotifications(notifications.map(notif => 
      notif.id === notificationId ? { ...notif, read: true } : notif
    ))
  }

  const getTypeColor = (type: Notification['type']) => {
    switch (type) {
      case 'order':
        return 'bg-green-50 border-green-200 text-green-800'
      case 'payment':
        return 'bg-blue-50 border-blue-200 text-blue-800'
      case 'system':
        return 'bg-yellow-50 border-yellow-200 text-yellow-800'
      default:
        return 'bg-gray-50 border-gray-200 text-gray-800'
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-red-50 p-4 rounded-lg">
          <p className="text-red-800">{error}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="bg-white shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-semibold text-gray-900">Notifications</h1>
                <Link
                  href="/dashboard"
                  className="text-sm text-purple-600 hover:text-purple-500"
                >
                  Back to Dashboard
                </Link>
              </div>

              {notifications.length === 0 ? (
                <div className="text-center py-12">
                  <BellIcon className="mx-auto h-12 w-12 text-gray-400" />
                  <h3 className="mt-2 text-sm font-medium text-gray-900">No notifications</h3>
                  <p className="mt-1 text-sm text-gray-500">You don't have any notifications yet.</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {notifications.map((notification) => (
                    <div
                      key={notification.id}
                      onClick={() => handleNotificationClick(notification.id)}
                      className={`p-4 rounded-lg border cursor-pointer transition-colors ${
                        notification.read 
                          ? 'bg-white border-gray-200 hover:bg-gray-50' 
                          : 'bg-purple-50 border-purple-200 hover:bg-purple-100'
                      }`}
                    >
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2">
                            <span className={`px-2 py-1 text-xs font-medium rounded-full ${getTypeColor(notification.type)}`}>
                              {notification.type}
                            </span>
                            {!notification.read && (
                              <span className="h-2 w-2 bg-purple-600 rounded-full"></span>
                            )}
                          </div>
                          <h3 className="mt-2 text-sm font-medium text-gray-900">
                            {notification.title}
                          </h3>
                          <p className="mt-1 text-sm text-gray-500">
                            {notification.message}
                          </p>
                        </div>
                        <span className="text-xs text-gray-500 ml-4">
                          {new Date(notification.createdAt).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 