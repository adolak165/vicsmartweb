'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

interface Order {
  id: string
  service: string
  status: 'pending' | 'in_progress' | 'completed' | 'cancelled'
  date: string
  price: number
  description: string
  progress: number
  deadline: string
  freelancer: {
    name: string
    avatar: string
  }
  reviewSubmitted: boolean
  review?: {
    rating: number
    comment: string
    date: string
  }
}

interface Review {
  rating: number
  comment: string
}

export default function OrdersPage() {
  const [activeTab, setActiveTab] = useState('all')
  const [orders, setOrders] = useState<Order[]>([])
  const [showReviewModal, setShowReviewModal] = useState(false)
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null)
  const [review, setReview] = useState<Review>({
    rating: 5,
    comment: ''
  })

  useEffect(() => {
    // Sample orders data - in a real app, this would come from an API
    const sampleOrders: Order[] = [
      {
        id: 'ORD-001',
        service: 'Video Editing',
        status: 'in_progress',
        date: '2024-03-25',
        price: 49.99,
        description: 'Professional video editing for YouTube content',
        progress: 65,
        deadline: '2024-03-30',
        freelancer: {
          name: 'Sarah Johnson',
          avatar: ''
        },
        reviewSubmitted: false
      },
      {
        id: 'ORD-002',
        service: 'Voice Over',
        status: 'completed',
        date: '2024-03-20',
        price: 29.99,
        description: 'Professional voice over for tutorial video',
        progress: 100,
        deadline: '2024-03-25',
        freelancer: {
          name: 'Mike Chen',
          avatar: ''
        },
        reviewSubmitted: false
      },
      {
        id: 'ORD-003',
        service: 'Thumbnail Design',
        status: 'pending',
        date: '2024-03-26',
        price: 19.99,
        description: 'Eye-catching thumbnail design for new video',
        progress: 0,
        deadline: '2024-03-28',
        freelancer: {
          name: 'Emma Davis',
          avatar: ''
        },
        reviewSubmitted: false
      }
    ]
    setOrders(sampleOrders)
  }, [])

  const filteredOrders = activeTab === 'all' 
    ? orders
    : orders.filter(order => order.status === activeTab)

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800'
      case 'in_progress':
        return 'bg-blue-100 text-blue-800'
      case 'completed':
        return 'bg-green-100 text-green-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'pending':
        return 'Pending'
      case 'in_progress':
        return 'In Progress'
      case 'completed':
        return 'Completed'
      default:
        return status
    }
  }

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (selectedOrder) {
      const newReview = {
        rating: review.rating,
        comment: review.comment,
        date: new Date().toISOString()
      }

      // Update the order's review status and add the review
      setOrders(prevOrders => 
        prevOrders.map(order => 
          order.id === selectedOrder.id 
            ? { 
                ...order, 
                reviewSubmitted: true,
                review: newReview
              }
            : order
        )
      )

      // In a real app, this would save to an API
      console.log('Review submitted:', {
        orderId: selectedOrder.id,
        service: selectedOrder.service,
        ...newReview
      })

      setShowReviewModal(false)
      alert('Thank you for your review!')
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Orders</h1>
          <p className="mt-1 text-sm text-gray-500">Manage your service orders</p>
        </div>
        <Link
          href="/dashboard"
          className="mt-4 sm:mt-0 text-purple-600 hover:text-purple-700 text-sm font-medium"
        >
          Back to Dashboard
        </Link>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200 mb-6">
        <nav className="-mb-px flex space-x-4 overflow-x-auto hide-scrollbar">
          <button
            onClick={() => setActiveTab('all')}
            className={`whitespace-nowrap px-3 py-2 text-sm font-medium border-b-2 ${
              activeTab === 'all'
                ? 'border-purple-500 text-purple-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            All Orders
          </button>
          <button
            onClick={() => setActiveTab('pending')}
            className={`whitespace-nowrap px-3 py-2 text-sm font-medium border-b-2 ${
              activeTab === 'pending'
                ? 'border-purple-500 text-purple-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Pending
          </button>
          <button
            onClick={() => setActiveTab('in_progress')}
            className={`whitespace-nowrap px-3 py-2 text-sm font-medium border-b-2 ${
              activeTab === 'in_progress'
                ? 'border-purple-500 text-purple-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            In Progress
          </button>
          <button
            onClick={() => setActiveTab('completed')}
            className={`whitespace-nowrap px-3 py-2 text-sm font-medium border-b-2 ${
              activeTab === 'completed'
                ? 'border-purple-500 text-purple-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Completed
          </button>
        </nav>
      </div>

      {/* Orders List */}
      <div className="space-y-4">
        {filteredOrders.map((order) => (
          <div
            key={order.id}
            className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
          >
            <div className="p-4 sm:p-6">
              {/* Order Header */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                    <span className="text-purple-600 font-medium">
                      {order.service.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">
                      {order.service}
                    </h3>
                    <p className="text-sm text-gray-500">
                      Order #{order.id}
                    </p>
                  </div>
                </div>
                <div className="mt-2 sm:mt-0">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                    {getStatusText(order.status)}
                  </span>
                </div>
              </div>

              {/* Order Details */}
              <div className="mt-4">
                <p className="text-sm text-gray-600 mb-4">
                  {order.description}
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-500">Price</p>
                    <p className="font-medium text-gray-900">${order.price}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Ordered</p>
                    <p className="font-medium text-gray-900">{new Date(order.date).toLocaleDateString()}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Deadline</p>
                    <p className="font-medium text-gray-900">{new Date(order.deadline).toLocaleDateString()}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Progress</p>
                    <div className="mt-1">
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-purple-600 h-2 rounded-full"
                          style={{ width: `${order.progress}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
                <button
                  className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 w-full sm:w-auto"
                >
                  Message Freelancer
                </button>
                {order.status === 'completed' && !order.reviewSubmitted ? (
                  <button
                    onClick={() => {
                      setSelectedOrder(order)
                      setShowReviewModal(true)
                    }}
                    className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 w-full sm:w-auto"
                  >
                    Leave Review
                  </button>
                ) : order.status === 'completed' && order.reviewSubmitted ? (
                  <div className="flex items-center space-x-2">
                    <span className="text-green-600">Review Submitted</span>
                    <svg className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <Link
                      href={`/dashboard/services/${order.service.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-sm text-purple-600 hover:text-purple-500 ml-2"
                    >
                      View Review
                    </Link>
                  </div>
                ) : (
                  <span className="text-gray-400">Not Available</span>
                )}
              </div>
            </div>
          </div>
        ))}

        {filteredOrders.length === 0 && (
          <div className="text-center py-12">
            <svg
              className="mx-auto h-12 w-12 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <h3 className="mt-2 text-sm font-medium text-gray-900">No orders found</h3>
            <p className="mt-1 text-sm text-gray-500">
              {activeTab === 'all'
                ? "You haven't placed any orders yet."
                : `You don't have any ${activeTab.replace('_', ' ')} orders.`}
            </p>
          </div>
        )}
      </div>

      {/* Review Modal */}
      {showReviewModal && selectedOrder && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-gray-900">Leave a Review</h2>
              <button
                onClick={() => setShowReviewModal(false)}
                className="text-gray-400 hover:text-gray-500"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <form onSubmit={handleReviewSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Rating</label>
                <div className="flex items-center space-x-2 mt-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setReview({ ...review, rating: star })}
                      className="text-yellow-400 hover:text-yellow-500 focus:outline-none"
                    >
                      <svg
                        className={`h-6 w-6 ${star <= review.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Comment</label>
                <textarea
                  value={review.comment}
                  onChange={(e) => setReview({ ...review, comment: e.target.value })}
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                  placeholder="Share your experience..."
                />
              </div>
              <div className="flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => setShowReviewModal(false)}
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-sm font-medium text-white bg-purple-600 border border-transparent rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                >
                  Submit Review
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
} 