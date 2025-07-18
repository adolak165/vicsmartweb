'use client'
import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { XMarkIcon, CheckIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'

interface Message {
  id: number
  sender: string
  content: string
  timestamp: string
  read: boolean
  avatar?: string
  attachments?: {
    type: 'image' | 'video' | 'file'
    url: string
    name: string
    size?: string
    progress?: number
  }[]
}

export default function MessagesPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      sender: 'Vicsmart',
      content: 'Welcome to Vicsmart! How can we help you today?',
      timestamp: '10:30 AM',
      read: false,
      avatar: '/images/logo.png'
    }
  ])

  const [newMessage, setNewMessage] = useState('')
  const [error, setError] = useState('')
  const [isSending, setIsSending] = useState(false)
  const [attachments, setAttachments] = useState<File[]>([])
  const [previewUrls, setPreviewUrls] = useState<string[]>([])
  const fileInputRef = useRef<HTMLInputElement>(null)

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes'
    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
  }

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || [])
    if (files.length > 0) {
      // Clear previous attachments if any
      setAttachments([])
      setPreviewUrls([])
      
      // Process new files
      const newAttachments = files.map(file => {
        // Create preview URL for images and videos
        let previewUrl = ''
        if (file.type.startsWith('image/') || file.type.startsWith('video/')) {
          previewUrl = URL.createObjectURL(file)
        }
        return { file, previewUrl }
      })
      
      setAttachments(newAttachments.map(item => item.file))
      setPreviewUrls(newAttachments.map(item => item.previewUrl))
    }
  }

  const removeAttachment = (index: number) => {
    // Revoke the object URL to prevent memory leaks
    if (previewUrls[index]) {
      URL.revokeObjectURL(previewUrls[index])
    }
    
    setAttachments(prev => prev.filter((_, i) => i !== index))
    setPreviewUrls(prev => prev.filter((_, i) => i !== index))
  }

  const validateMessage = (message: string) => {
    if (!message.trim() && attachments.length === 0) {
      setError('Message cannot be empty')
      return false
    }
    if (message.length > 1000) {
      setError('Message is too long (max 1000 characters)')
      return false
    }
    setError('')
    return true
  }

  const handleSendMessage = () => {
    if (!validateMessage(newMessage)) return

    setIsSending(true)
    
    // Create a new message with attachments
    const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    const newMessageObj: Message = {
      id: messages.length + 1,
      sender: 'You',
      content: newMessage,
      timestamp: currentTime,
      read: true,
      attachments: attachments.map((file, index) => ({
        type: file.type.startsWith('image/') ? 'image' as const : 
              file.type.startsWith('video/') ? 'video' as const : 'file' as const,
        url: previewUrls[index] || '',
        name: file.name,
        size: formatFileSize(file.size),
        progress: 0
      }))
    }

    // Add the new message immediately
    setMessages(prev => [...prev, newMessageObj])
    
    // Simulate upload progress
    const uploadProgress = attachments.map((_, index) => {
      let progress = 0
      const interval = setInterval(() => {
        progress += Math.random() * 20
        if (progress >= 100) {
          clearInterval(interval)
          // Update the message with completed upload
          setMessages(prev => {
            const newMessages = [...prev]
            const lastMessage = newMessages[newMessages.length - 1]
            if (lastMessage && lastMessage.sender === 'You' && lastMessage.attachments) {
              lastMessage.attachments[index].progress = 100
            }
            return newMessages
          })
        } else {
          // Update progress
          setMessages(prev => {
            const newMessages = [...prev]
            const lastMessage = newMessages[newMessages.length - 1]
            if (lastMessage && lastMessage.sender === 'You' && lastMessage.attachments) {
              lastMessage.attachments[index].progress = progress
            }
            return newMessages
          })
        }
      }, 200)
      return interval
    })
    
    // Clear the input and attachments after a short delay
    setTimeout(() => {
      // Clear upload progress intervals
      uploadProgress.forEach(interval => clearInterval(interval))
      
      setNewMessage('')
      setAttachments([])
      setPreviewUrls([])
      setIsSending(false)
      
      // Scroll to bottom of messages
      const messagesContainer = document.querySelector('.messages-container')
      if (messagesContainer) {
        messagesContainer.scrollTop = messagesContainer.scrollHeight
      }
    }, 2000) // Increased delay to show upload progress
  }

  // Cleanup function to revoke object URLs when component unmounts
  useEffect(() => {
    return () => {
      previewUrls.forEach(url => {
        if (url) {
          URL.revokeObjectURL(url)
        }
      })
    }
  }, [previewUrls])

  return (
    <div className="max-w-7xl mx-auto py-4 sm:py-6 px-2 sm:px-6 lg:px-8">
      <div className="px-2 sm:px-4 py-4 sm:py-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 sm:mb-8 gap-2">
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Messages</h1>
            <p className="mt-1 text-xs sm:text-sm text-gray-500">Chat with our support team</p>
          </div>
          <Link
            href="/dashboard"
            className="inline-flex items-center justify-center px-3 sm:px-4 py-2 border border-transparent text-xs sm:text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors duration-200"
          >
            Back to Dashboard
          </Link>
        </div>

        <div className="h-[calc(100vh-8rem)] sm:h-[calc(100vh-12rem)] bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="flex flex-col h-full">
            {/* Chat Header */}
            <div className="p-3 sm:p-4 border-b border-gray-200 bg-gradient-to-r from-purple-600 to-purple-800">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/20 flex items-center justify-center ring-2 ring-white/30">
                  <Image
                    src="/images/avatar-placeholder.png"
                    alt="User avatar"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-medium text-white">
                    Vicsmart Support
                  </h3>
                  <div className="flex items-center space-x-1">
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full"></span>
                    <p className="text-xs sm:text-sm text-white/80">Online</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-2 sm:p-4 space-y-3 sm:space-y-4 bg-gray-50 messages-container">
              {messages.map((message) => (
                <div 
                  key={message.id} 
                  className={`flex items-start space-x-2 sm:space-x-3 ${
                    message.sender === 'You' ? 'justify-end' : ''
                  }`}
                >
                  {message.sender !== 'You' && (
                    message.avatar ? (
                      <Image
                        src={message.avatar}
                        alt={message.sender}
                        width={32}
                        height={32}
                        className="w-6 h-6 sm:w-8 sm:h-8 rounded-full object-cover ring-2 ring-white"
                      />
                    ) : (
                      <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-purple-100 flex items-center justify-center ring-2 ring-white">
                        <Image
                          src="/images/avatar-placeholder.png"
                          alt="User avatar"
                          width={24}
                          height={24}
                          className="rounded-full"
                        />
                      </div>
                    )
                  )}
                  <div className={`bg-white p-2 sm:p-3 rounded-lg shadow-sm max-w-[85%] sm:max-w-[80%] ${
                    message.sender === 'You' ? 'bg-purple-100' : ''
                  }`}>
                    <p className="text-sm sm:text-base text-gray-700">{message.content}</p>
                    {message.attachments && message.attachments.length > 0 && (
                      <div className="mt-2 space-y-2">
                        {message.attachments.map((attachment, index) => (
                          <div key={index} className="relative group">
                            {attachment.type === 'image' && (
                              <div className="relative rounded-lg overflow-hidden">
                                <Image
                                  src={attachment.url}
                                  alt={attachment.name}
                                  width={200}
                                  height={200}
                                  className="max-w-full h-auto rounded-lg"
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-1.5 sm:p-2 text-white text-xs">
                                  <p className="truncate">{attachment.name}</p>
                                  <p>{attachment.size}</p>
                                </div>
                              </div>
                            )}
                            {attachment.type === 'video' && (
                              <div className="relative rounded-lg overflow-hidden">
                                <video
                                  src={attachment.url}
                                  controls
                                  className="max-w-full h-auto rounded-lg"
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-1.5 sm:p-2 text-white text-xs">
                                  <p className="truncate">{attachment.name}</p>
                                  <p>{attachment.size}</p>
                                </div>
                              </div>
                            )}
                            {attachment.type === 'file' && (
                              <div className="flex items-center p-2 sm:p-3 bg-gray-50 rounded-lg border border-gray-200 hover:border-purple-300 transition-colors duration-200">
                                <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                                  <Image
                                    src="/images/attachment.png"
                                    alt="Attachment"
                                    width={20}
                                    height={20}
                                    className="text-purple-600"
                                  />
                                </div>
                                <div className="ml-2 sm:ml-3 flex-1 min-w-0">
                                  <p className="text-xs sm:text-sm font-medium text-gray-900 truncate">
                                    {attachment.name}
                                  </p>
                                  <p className="text-xs text-gray-500">{attachment.size}</p>
                                </div>
                              </div>
                            )}
                            {attachment.progress !== undefined && attachment.progress < 100 && (
                              <div className="absolute inset-0 bg-black/50 rounded-lg flex items-center justify-center">
                                <div className="w-12 h-12 sm:w-16 sm:h-16 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
                                <span className="absolute text-white text-xs sm:text-sm font-medium">
                                  {Math.round(attachment.progress)}%
                                </span>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                    <div className="flex items-center justify-end mt-1 space-x-1">
                      <p className="text-[10px] sm:text-xs text-gray-500">{message.timestamp}</p>
                      {message.sender === 'You' && (
                        <div className="flex items-center">
                          <CheckIcon className={`w-3 h-3 ${
                            message.read ? 'text-blue-500' : 'text-gray-400'
                          }`} />
                          {message.read && (
                            <CheckIcon className="w-3 h-3 -ml-1 text-blue-500" />
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Message Input */}
            <div className="p-2 sm:p-4 border-t border-gray-200 bg-white">
              {error && (
                <div className="mb-2 p-2 text-xs sm:text-sm text-red-600 bg-red-50 rounded">
                  {error}
                </div>
              )}
              
              {/* File Previews */}
              {previewUrls.length > 0 && (
                <div className="mb-2 flex flex-wrap gap-1.5 sm:gap-2">
                  {previewUrls.map((url, index) => (
                    <div key={index} className="relative group">
                      {attachments[index].type.startsWith('image/') && (
                        <div className="relative w-16 h-16 sm:w-24 sm:h-24 rounded-lg overflow-hidden">
                          <Image
                            src={url}
                            alt={`Preview ${index}`}
                            width={96}
                            height={96}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                            <button
                              onClick={() => removeAttachment(index)}
                              className="p-1 sm:p-1.5 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors duration-200"
                            >
                              <XMarkIcon className="w-3 h-3 sm:w-4 sm:h-4" />
                            </button>
                          </div>
                          <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-1 text-white text-[10px] sm:text-xs">
                            <p className="truncate">{attachments[index].name}</p>
                            <p>{formatFileSize(attachments[index].size)}</p>
                          </div>
                        </div>
                      )}
                      {attachments[index].type.startsWith('video/') && (
                        <div className="relative w-16 h-16 sm:w-24 sm:h-24 rounded-lg overflow-hidden">
                          <video
                            src={url}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                            <button
                              onClick={() => removeAttachment(index)}
                              className="p-1 sm:p-1.5 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors duration-200"
                            >
                              <XMarkIcon className="w-3 h-3 sm:w-4 sm:h-4" />
                            </button>
                          </div>
                          <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-1 text-white text-[10px] sm:text-xs">
                            <p className="truncate">{attachments[index].name}</p>
                            <p>{formatFileSize(attachments[index].size)}</p>
                          </div>
                        </div>
                      )}
                      {!attachments[index].type.startsWith('image/') && !attachments[index].type.startsWith('video/') && (
                        <div className="relative w-16 h-16 sm:w-24 sm:h-24 rounded-lg overflow-hidden bg-gray-50 border border-gray-200 group-hover:border-purple-300 transition-colors duration-200">
                          <div className="absolute inset-0 flex flex-col items-center justify-center p-1 sm:p-2">
                            <Image
                              src="/images/attachment.png"
                              alt="Attachment"
                              width={24}
                              height={24}
                              className="text-purple-600 mb-0.5 sm:mb-1"
                            />
                            <p className="text-[10px] sm:text-xs text-gray-700 text-center truncate w-full">
                              {attachments[index].name}
                            </p>
                            <p className="text-[10px] sm:text-xs text-gray-500">
                              {formatFileSize(attachments[index].size)}
                            </p>
                          </div>
                          <button
                            onClick={() => removeAttachment(index)}
                            className="absolute top-0.5 right-0.5 sm:top-1 sm:right-1 p-0.5 sm:p-1 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                          >
                            <XMarkIcon className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                          </button>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}

              <div className="flex space-x-1.5 sm:space-x-2">
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileSelect}
                  className="hidden"
                  multiple
                  accept="image/*,video/*,.pdf,.doc,.docx,.txt"
                />
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="inline-flex items-center px-2 sm:px-3 py-1.5 sm:py-2 border border-gray-300 text-xs sm:text-sm font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors duration-200"
                >
                  <Image
                    src="/images/attachment.png"
                    alt="Attach"
                    width={20}
                    height={20}
                    className="mr-1 sm:mr-2"
                  />
                  <span className="hidden sm:inline">Attach</span>
                </button>
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => {
                    setNewMessage(e.target.value)
                    if (error) setError('')
                  }}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Type your message..."
                  className="flex-1 rounded-lg border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 transition-colors duration-200 text-sm"
                  disabled={isSending}
                />
                <button
                  onClick={handleSendMessage}
                  disabled={isSending}
                  className={`inline-flex items-center px-2 sm:px-4 py-1.5 sm:py-2 border border-transparent text-xs sm:text-sm font-medium rounded-lg text-white transition-colors duration-200 ${
                    isSending 
                      ? 'bg-purple-400 cursor-not-allowed' 
                      : 'bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500'
                  }`}
                >
                  <Image
                    src="/images/send.png"
                    alt="Send"
                    width={20}
                    height={20}
                    className="mr-1 sm:mr-2"
                  />
                  <span className="hidden sm:inline">{isSending ? 'Sending...' : 'Send'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 