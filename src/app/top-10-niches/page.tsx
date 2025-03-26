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
    <main className="min-h-screen pt-20 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Top 10 Profitable YouTube Niches
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {niches.map((niche, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                  {index + 1}
                </span>
                <h2 className="text-2xl font-bold">{niche.title}</h2>
              </div>
              <p className="text-gray-600 mb-4">{niche.description}</p>
              <div className="space-y-2">
                <div className="bg-purple-50 p-3 rounded-lg">
                  <p className="text-purple-600 font-semibold">Potential:</p>
                  <p className="text-gray-600">{niche.potential}</p>
                </div>
                <div className="bg-purple-50 p-3 rounded-lg">
                  <p className="text-purple-600 font-semibold">Target Audience:</p>
                  <p className="text-gray-600">{niche.audience}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Channel?</h2>
          <p className="text-gray-600 mb-8">Let us help you grow in your chosen niche</p>
          <Link 
            href="/contact" 
            className="inline-block bg-purple-600 text-white px-8 py-3 rounded-full font-bold hover:bg-purple-700 transition-colors"
          >
            Get Started Today
          </Link>
        </div>
      </div>
    </main>
  )
}

export default TopNichesPage 