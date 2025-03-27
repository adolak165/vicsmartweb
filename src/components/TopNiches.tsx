export default function TopNiches() {
  const niches = [
    { title: "Finance & Investment", icon: "💰", description: "Stock market analysis, cryptocurrency updates, personal finance tips, and wealth building strategies" },
    { title: "Tech Reviews", icon: "📱", description: "Latest gadgets and technology reviews" },
    { title: "Health & Fitness", icon: "💪", description: "Workout routines and healthy living" },
    { title: "Gaming", icon: "🎮", description: "Game reviews and walkthroughs" },
    { title: "Educational", icon: "📚", description: "Tutorial and how-to content" },
    { title: "Lifestyle", icon: "🌟", description: "Daily vlogs and lifestyle content" },
    { title: "Food & Cooking", icon: "🍳", description: "Recipes and cooking tutorials" },
    { title: "Travel", icon: "✈️", description: "Travel guides and experiences" },
    { title: "Business & Marketing", icon: "📈", description: "Business tips and marketing strategies" },
    { title: "Entertainment", icon: "🎬", description: "Movie reviews and entertainment news" }
  ]

  return (
    <section className="py-12 sm:py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 text-white">Top 10 Profitable YouTube Niches</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {niches.map((niche, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:bg-white/15 border border-white/10"
            >
              <div className="text-3xl sm:text-4xl mb-4">{niche.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-white">{niche.title}</h3>
              <p className="text-gray-300 text-sm sm:text-base">{niche.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 