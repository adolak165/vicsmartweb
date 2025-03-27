'use client'
import Link from 'next/link'

const TopNichesPage = () => {
  const niches = [
    {
      title: "Finance & Investment",
      description: "Stock market tips, cryptocurrency insights, and personal finance advice.",
      potential: "High revenue potential with premium ad rates",
      audience: "Growing interest in financial literacy"
    },
    {
      title: "Technology Reviews",
      description: "Latest gadgets, software reviews, and tech tutorials.",
      potential: "Regular content opportunities with new product releases",
      audience: "Tech-savvy viewers with purchasing power"
    },
    {
      title: "Health & Wellness",
      description: "Fitness tips, healthy recipes, and wellness advice.",
      potential: "Steady growth in health consciousness",
      audience: "Health-focused individuals of all ages"
    },
    {
      title: "Educational Content",
      description: "Academic tutorials, skill development, and online courses.",
      potential: "High engagement and long-term viewer retention",
      audience: "Students and lifelong learners"
    },
    {
      title: "Gaming & Entertainment",
      description: "Game reviews, walkthroughs, and entertainment news.",
      potential: "Strong community engagement and sponsorship opportunities",
      audience: "Gaming enthusiasts of all ages"
    },
    {
      title: "Business & Marketing",
      description: "Marketing strategies, business tips, and entrepreneurship advice.",
      potential: "High-value audience and B2B opportunities",
      audience: "Entrepreneurs and business professionals"
    },
    {
      title: "Lifestyle & Fashion",
      description: "Fashion trends, lifestyle tips, and personal development.",
      potential: "Brand collaborations and affiliate marketing",
      audience: "Style-conscious individuals"
    },
    {
      title: "Food & Cooking",
      description: "Recipe tutorials, cooking tips, and food reviews.",
      potential: "Consistent viewer interest and sponsorship opportunities",
      audience: "Food enthusiasts and home cooks"
    },
    {
      title: "Travel & Adventure",
      description: "Travel guides, destination reviews, and adventure vlogs.",
      potential: "Tourism partnerships and lifestyle brand collaborations",
      audience: "Travel enthusiasts and adventure seekers"
    },
    {
      title: "DIY & Crafts",
      description: "Craft tutorials, DIY projects, and home improvement guides.",
      potential: "Product integration and workshop opportunities",
      audience: "Creative individuals and hobbyists"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Top 10 Profitable YouTube Niches
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the most lucrative niches for your YouTube channel and maximize your earning potential
          </p>
        </div>

        {/* Niches Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {niches.map((niche, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10"
            >
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <span className="flex-shrink-0 w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center text-lg font-bold">
                    {index + 1}
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-white">{niche.title}</h2>
                </div>
                <p className="text-gray-300 mb-6">{niche.description}</p>
                
                {/* Details Table */}
                <div className="space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 py-3 border-t border-white/10">
                    <span className="text-purple-400 font-medium w-32">Revenue Potential:</span>
                    <span className="text-gray-300">{niche.potential}</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 py-3 border-t border-white/10">
                    <span className="text-purple-400 font-medium w-32">Target Audience:</span>
                    <span className="text-gray-300">{niche.audience}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Ready to Start Your YouTube Journey?
          </h2>
          <p className="text-gray-300 mb-8 text-lg">
            Let us help you grow and succeed in your chosen niche
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-purple-600 border border-transparent rounded-full hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors"
          >
            Get Started Today
          </Link>
        </div>
      </main>
    </div>
  )
}

export default TopNichesPage 