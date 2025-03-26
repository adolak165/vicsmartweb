import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-32 flex items-center justify-center">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/50 z-10"></div>
          {/* Add your background image here */}
          <div className="absolute inset-0">
            {/* Replace src with your image path */}
            <Image
              src="/images/monetize.jpg"
              alt="Hero Background"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 text-center relative z-30">
        <div className="max-w-3xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Transform Your YouTube Presence with Automation
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-white/90 mb-6">
            Professional YouTube automation services delivering high-quality content, 
            advanced SEO optimization, and proven growth strategies
          </p>

          {/* Value Proposition */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 transform transition-all duration-200 hover:scale-105 hover:bg-white/20 cursor-pointer">
              <h3 className="text-white font-semibold mb-2">Passive Income</h3>
              <p className="text-white/80 text-sm">Generate revenue while we manage your channel</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 transform transition-all duration-200 hover:scale-105 hover:bg-white/20 cursor-pointer">
              <h3 className="text-white font-semibold mb-2">Expert Strategy</h3>
              <p className="text-white/80 text-sm">Data-driven content optimization for maximum growth</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 transform transition-all duration-200 hover:scale-105 hover:bg-white/20 cursor-pointer">
              <h3 className="text-white font-semibold mb-2">Full Automation</h3>
              <p className="text-white/80 text-sm">Hands-free channel management and content creation</p>
            </div>
          </div>

          {/* Call to Action */}
          <p className="text-lg text-white/90 mb-8">
            Get in touch today and let&apos;s get started on your journey to passive income success!
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/contact" 
              className="bg-white text-purple-600 py-3 px-8 rounded-full font-bold hover:bg-gray-100 transition-all duration-200 hover:scale-105 hover:shadow-lg active:scale-95 inline-block"
            >
              Start Your Journey
            </Link>
            <Link 
              href="/previous-work" 
              className="border-2 border-white text-white py-3 px-8 rounded-full font-bold hover:bg-white/10 transition-all duration-200 hover:scale-105 hover:shadow-lg active:scale-95 inline-block"
            >
              View Our Results
            </Link>
          </div>

          {/* Social Proof */}
          <div className="mt-12 flex justify-center items-center space-x-8 text-white/80">
            <div className="transform transition-all duration-200 hover:scale-105 cursor-pointer">
              <span className="block text-2xl font-bold">50+</span>
              <span className="text-sm">Channels Managed</span>
            </div>
            <div className="h-8 w-px bg-white/20"></div>
            <div className="transform transition-all duration-200 hover:scale-105 cursor-pointer">
              <span className="block text-2xl font-bold">1M+</span>
              <span className="text-sm">Views Generated</span>
            </div>
            <div className="h-8 w-px bg-white/20"></div>
            <div className="transform transition-all duration-200 hover:scale-105 cursor-pointer">
              <span className="block text-2xl font-bold">100%</span>
              <span className="text-sm">Client Satisfaction</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 