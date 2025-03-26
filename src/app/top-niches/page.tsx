export default function TopNichesPage() {
  const niches = [
    {
      title: "Finance & Investment",
      description: "Stock market analysis, cryptocurrency updates, personal finance tips, and wealth building strategies",
      potential: "High revenue potential through affiliate marketing, sponsorships, and financial products",
      icon: "💰"
    },
    {
      title: "Celebrity News & Updates",
      description: "Latest celebrity gossip, entertainment news, red carpet events, and celebrity lifestyle coverage",
      potential: "Strong monetization through ads and entertainment partnerships",
      icon: "🌟"
    },
    {
      title: "Documentary Style Content",
      description: "In-depth storytelling, investigative journalism, historical events, and human interest stories",
      potential: "Premium sponsorship opportunities and potential streaming platform partnerships",
      icon: "🎥"
    },
    {
      title: "Luxury Lifestyle",
      description: "High-end products, luxury travel, premium real estate, and exclusive experiences",
      potential: "Lucrative brand deals and affluent audience monetization",
      icon: "✨"
    },
    {
      title: "Tech Reviews",
      description: "Latest gadgets, software reviews, tech tutorials and comparisons",
      potential: "Strong affiliate income and tech sponsorships",
      icon: "📱"
    },
    {
      title: "Gaming & eSports",
      description: "Game reviews, walkthroughs, gaming news and tournaments",
      potential: "Gaming sponsorships and merchandise opportunities",
      icon: "🎮"
    },
    {
      title: "Health & Fitness",
      description: "Workout routines, nutrition advice, wellness tips and health guides",
      potential: "Fitness product partnerships and course sales",
      icon: "💪"
    },
    {
      title: "DIY & Crafts",
      description: "Creative projects, home improvement, crafting tutorials and upcycling",
      potential: "Craft supply partnerships and course creation",
      icon: "🔨"
    },
    {
      title: "Cooking & Recipes",
      description: "Recipe tutorials, cooking tips, food reviews and kitchen hacks",
      potential: "Cooking product affiliates and sponsorships",
      icon: "🍳"
    },
    {
      title: "Pet Care & Training",
      description: "Pet care advice, training tutorials, product reviews and pet entertainment",
      potential: "Pet product partnerships and brand deals",
      icon: "🐾"
    }
  ]

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">Top 10 Profitable YouTube Niches</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {niches.map((niche, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">{niche.icon}</div>
              <h2 className="text-2xl font-bold mb-4">{niche.title}</h2>
              <p className="text-gray-600 mb-6">{niche.description}</p>
              <p className="text-gray-600 mb-6">Potential: {niche.potential}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 