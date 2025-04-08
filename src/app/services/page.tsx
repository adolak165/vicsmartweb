'use client'
import Link from 'next/link'

export default function ServicesPage() {
  const mainServices = [
    {
      title: "YouTube Channel Automation",
      description: "Complete hands-free channel management and growth",
      features: [
        "Full Channel setup",
        "Automated thumbnail creation",
        "Comment management and engagement",
        "Analytics tracking and reporting",
        "Trend analysis and implementation",
        "Creation of 30 video and uploading"
      ],
      icon: "🤖",
      price: 997,
      priceDisplay: "Starting at $997/month"
    },
    {
      title: "Content Creation & Editing",
      description: "Professional video production and editing services",
      features: [
        "High-quality video editing",
        "Custom thumbnail design",
        "Engaging titles and descriptions",
        "Music and sound effects",
        "Professional transitions"
      ],
      icon: "🎥",
      price: 497,
      priceDisplay: "Starting at $497/video"
    },
    {
      title: "YouTube SEO & Optimization",
      description: "Advanced optimization for maximum visibility",
      features: [
        "Keyword research and analysis",
        "Title and description optimization",
        "Tag optimization",
        "Playlist organization",
        "Channel optimization"
      ],
      icon: "🎯",
      price: 297,
      priceDisplay: "Starting at $297/month"
    }
  ]

  const additionalServices = [
    {
      title: "Channel Growth Strategy",
      description: "Custom growth plans tailored to your niche",
      icon: "📈"
    },
    {
      title: "Competitor Analysis",
      description: "In-depth analysis of successful channels in your niche",
      icon: "🔍"
    },
    {
      title: "Monetization Setup",
      description: "Complete setup of all revenue streams",
      icon: "💰"
    },
    {
      title: "Community Management",
      description: "Engagement and community building services",
      icon: "👥"
    }
  ]

  return (
    <div className="min-h-screen pt-20 pb-16 bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16 mb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Professional YouTube automation services to help you grow your channel and generate passive income
          </p>
        </div>
      </div>

      {/* Main Services */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {mainServices.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-8">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <svg className="w-5 h-5 text-purple-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <p className="text-purple-600 font-semibold">{service.priceDisplay}</p>
              </div>
              <div className="px-8 py-4 bg-gray-50 border-t">
                <Link 
                  href={{
                    pathname: '/dashboard/payment',
                    query: { 
                      service: service.title,
                      price: service.price
                    }
                  }}
                  className="block w-full bg-purple-600 text-white text-center py-2 px-4 rounded-lg font-medium hover:bg-purple-700 transition-colors"
                >
                  Purchase Now
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Services */}
        <h2 className="text-3xl font-bold text-center mb-8">Additional Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {additionalServices.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-purple-600 text-white rounded-xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your YouTube Journey?</h2>
          <p className="text-xl mb-6">Let&apos;s discuss how we can help you achieve your YouTube goals</p>
          <button className="bg-white text-purple-600 py-3 px-8 rounded-full font-bold hover:bg-gray-100 transition-colors">
            Schedule a Consultation
          </button>
        </div>
      </div>
    </div>
  )
} 