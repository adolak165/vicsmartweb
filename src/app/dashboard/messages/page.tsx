'use client'
import { useState } from 'react'
import Link from 'next/link'

interface Message {
  id: number
  sender: string
  content: string
  timestamp: string
  read: boolean
}

export default function MessagesPage() {
  const [messages] = useState<Message[]>([
    {
      id: 1,
      sender: 'Vicsmart',
      content: 'Welcome to Vicsmart! How can we help you today?',
      timestamp: '10:30 AM',
      read: false
    }
  ])

  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null)

  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div className="px-4 py-6 sm:px-0">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Messages</h1>
          <Link
            href="/dashboard"
            className="text-sm text-purple-600 hover:text-purple-500"
          >
            Back to Dashboard
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3 h-[600px]">
            {/* Messages List */}
            <div className="border-r border-gray-200 overflow-y-auto">
              <div className="p-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900">Vicsmart</h2>
              </div>
              <div className="divide-y divide-gray-200">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`p-4 cursor-pointer hover:bg-gray-50 ${
                      selectedMessage?.id === message.id ? 'bg-purple-50' : ''
                    }`}
                    onClick={() => setSelectedMessage(message)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="flex-shrink-0">
                          <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                            <span className="text-lg font-semibold text-purple-600">V</span>
                          </div>
                        </div>
                        <div className="ml-3">
                          <p className="text-sm font-medium text-gray-900">Vicsmart</p>
                          <p className="text-sm text-gray-500 truncate max-w-[150px]">{message.content}</p>
                        </div>
                      </div>
                      <div className="text-xs text-gray-500">{message.timestamp}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Message Content */}
            <div className="md:col-span-2 flex flex-col">
              {selectedMessage ? (
                <>
                  <div className="p-4 border-b border-gray-200">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                        <span className="text-lg font-semibold text-purple-600">V</span>
                      </div>
                      <div className="ml-3">
                        <h3 className="text-lg font-medium text-gray-900">Vicsmart</h3>
                        <p className="text-sm text-gray-500">{selectedMessage.timestamp}</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 p-4 overflow-y-auto">
                    <p className="text-gray-700 whitespace-pre-wrap">{selectedMessage.content}</p>
                  </div>
                  <div className="p-4 border-t border-gray-200">
                    <div className="flex space-x-2">
                      <input
                        type="text"
                        placeholder="Type your message..."
                        className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                      />
                      <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2">
                        Send
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <div className="flex-1 flex items-center justify-center text-gray-500">
                  Select a message to view
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 