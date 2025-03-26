export default function TopNiches() {
  const niches = [
    { title: "Finance & Investment", icon: "💰", description: "Stock market, crypto, and personal finance" },
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
    <section id="top-niches" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Top 10 Profitable Niches</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {niches.map((niche, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="text-4xl mb-4">{niche.icon}</div>
              <h3 className="text-xl font-bold mb-2">{niche.title}</h3>
              <p className="text-gray-600">{niche.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 