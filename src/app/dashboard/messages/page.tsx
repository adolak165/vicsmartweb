'use client'
import { useState } from 'react'
import Link from 'next/link'
import { PaperAirplaneIcon, UserCircleIcon } from '@heroicons/react/24/outline'

interface Message {
  id: number
  sender: string
  content: string
  timestamp: string
  read: boolean
  avatar?: string
}

export default function MessagesPage() {
  const [messages] = useState<Message[]>([
    {
      id: 1,
      sender: 'Vicsmart',
      content: 'Welcome to Vicsmart! How can we help you today?',
      timestamp: '10:30 AM',
      read: false,
      avatar: '/images/logo.png'
    }
  ])

  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null)
  const [newMessage, setNewMessage] = useState('')

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      // Here you would typically send the message to your backend
      setNewMessage('')
    }
  }

  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div className="px-4 py-6 sm:px-0">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Messages</h1>
            <p className="mt-1 text-sm text-gray-500">Chat with our support team</p>
          </div>
          <Link
            href="/dashboard"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors duration-200"
          >
            Back to Dashboard
          </Link>
        </div>

        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3 h-[600px]">
            {/* Messages List */}
            <div className="border-r border-gray-200 overflow-y-auto">
              <div className="p-4 border-b border-gray-200 bg-gray-50">
                <h2 className="text-lg font-semibold text-gray-900">Conversations</h2>
              </div>
              <div className="divide-y divide-gray-200">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`p-4 cursor-pointer transition-colors duration-200 ${
                      selectedMessage?.id === message.id 
                        ? 'bg-purple-50' 
                        : 'hover:bg-gray-50'
                    }`}
                    onClick={() => setSelectedMessage(message)}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="flex-shrink-0">
                        {message.avatar ? (
                          <img
                            src={message.avatar}
                            alt={message.sender}
                            className="w-10 h-10 rounded-full object-cover"
                          />
                        ) : (
                          <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                            <UserCircleIcon className="w-6 h-6 text-purple-600" />
                          </div>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-medium text-gray-900 truncate">
                            {message.sender}
                          </p>
                          <p className="text-xs text-gray-500">{message.timestamp}</p>
                        </div>
                        <p className="text-sm text-gray-500 truncate">{message.content}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Message Content */}
            <div className="md:col-span-2 flex flex-col">
              {selectedMessage ? (
                <>
                  <div className="p-4 border-b border-gray-200 bg-gray-50">
                    <div className="flex items-center space-x-3">
                      {selectedMessage.avatar ? (
                        <img
                          src={selectedMessage.avatar}
                          alt={selectedMessage.sender}
                          className="w-10 h-10 rounded-full object-cover"
                        />
                      ) : (
                        <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                          <UserCircleIcon className="w-6 h-6 text-purple-600" />
                        </div>
                      )}
                      <div>
                        <h3 className="text-lg font-medium text-gray-900">
                          {selectedMessage.sender}
                        </h3>
                        <p className="text-sm text-gray-500">Online</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        {selectedMessage.avatar ? (
                          <img
                            src={selectedMessage.avatar}
                            alt={selectedMessage.sender}
                            className="w-8 h-8 rounded-full object-cover"
                          />
                        ) : (
                          <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                            <UserCircleIcon className="w-5 h-5 text-purple-600" />
                          </div>
                        )}
                        <div className="bg-white p-3 rounded-lg shadow-sm max-w-[80%]">
                          <p className="text-gray-700">{selectedMessage.content}</p>
                          <p className="text-xs text-gray-500 mt-1">{selectedMessage.timestamp}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 border-t border-gray-200 bg-white">
                    <div className="flex space-x-2">
                      <input
                        type="text"
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                        placeholder="Type your message..."
                        className="flex-1 rounded-lg border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 transition-colors duration-200"
                      />
                      <button
                        onClick={handleSendMessage}
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors duration-200"
                      >
                        <PaperAirplaneIcon className="w-5 h-5 mr-2" />
                        Send
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <div className="flex-1 flex flex-col items-center justify-center text-gray-500 bg-gray-50">
                  <UserCircleIcon className="w-16 h-16 text-gray-400 mb-4" />
                  <p className="text-lg font-medium">Select a conversation</p>
                  <p className="text-sm mt-1">Choose a message to start chatting</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 