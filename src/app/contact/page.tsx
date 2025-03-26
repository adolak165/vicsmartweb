'use client'
import { useState, useRef } from 'react'

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError('')

    // Get form data
    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get('user_name'),
      email: formData.get('user_email'),
      phone: formData.get('user_phone'),
      subject: formData.get('subject'),
      message: formData.get('message')
    }

    try {
      // For now, just log the form data
      console.log('Form submitted:', data)
      
      // Show success message
      setSubmitSuccess(true)
      if (formRef.current) {
        formRef.current.reset()
      }
      setTimeout(() => setSubmitSuccess(false), 5000)
    } catch (error) {
      console.error('Error:', error)
      setSubmitError('Failed to send message. Please try again later.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">Contact Us</h1>
        
        <div className="max-w-2xl mx-auto">
          {submitSuccess && (
            <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg">
              Thank you for your message! We&apos;ll get back to you soon.
            </div>
          )}

          {submitError && (
            <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-lg">
              {submitError}
            </div>
          )}

          <form ref={formRef} onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8">
            <div className="mb-6">
              <label htmlFor="user_name" className="block text-gray-700 font-medium mb-2">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="user_name"
                name="user_name"
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Your name"
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="user_email" className="block text-gray-700 font-medium mb-2">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="user_email"
                name="user_email"
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Your email"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="user_phone" className="block text-gray-700 font-medium mb-2">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="user_phone"
                name="user_phone"
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Your phone number"
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                Subject <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Subject"
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Your message"
              ></textarea>
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-purple-600 text-white py-3 px-6 rounded-lg font-medium transition-colors ${
                isSubmitting ? 'bg-purple-400 cursor-not-allowed' : 'hover:bg-purple-700'
              }`}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
} 