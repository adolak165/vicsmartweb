import PreviousWork from '@/components/PreviousWork'

const PreviousWorkPage = () => {
  const projects = [
    {
      title: "Finance Channel Growth",
      description: "Grew a finance channel focused on cryptocurrency and stock market analysis from 0 to 100K subscribers",
      metrics: {
        subscribers: "100K+",
        views: "1M+",
        revenue: "$50K+"
      },
      category: "Finance"
    },
    {
      title: "Celebrity News Channel",
      description: "Managed and automated daily celebrity news updates, reaching massive engagement",
      metrics: {
        subscribers: "75K+",
        views: "800K+",
        revenue: "$35K+"
      },
      category: "Celebrity News"
    },
    {
      title: "Documentary Channel",
      description: "Created and managed documentary-style content covering historical events and investigations",
      metrics: {
        subscribers: "60K+",
        views: "500K+",
        revenue: "$30K+"
      },
      category: "Documentary"
    },
    {
      title: "Luxury Lifestyle Channel",
      description: "Developed premium content showcasing luxury products, travel, and high-end experiences",
      metrics: {
        subscribers: "45K+",
        views: "400K+",
        revenue: "$40K+"
      },
      category: "Luxury"
    },
    {
      title: "Tech Review Channel",
      description: "Automated tech review content creation and posting schedule for consistent growth",
      metrics: {
        subscribers: "80K+",
        views: "900K+",
        revenue: "$45K+"
      },
      category: "Tech"
    },
    {
      title: "Gaming Channel",
      description: "Managed multiple gaming series with automated content scheduling and community engagement",
      metrics: {
        subscribers: "120K+",
        views: "1.5M+",
        revenue: "$55K+"
      },
      category: "Gaming"
    }
  ]

  return (
    <main className="min-h-screen pt-20 pb-16 bg-gray-50">
      <section className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">Our Previous Work</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <article 
              key={index} 
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="p-6">
                <div className="inline-block px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm font-semibold mb-4">
                  {project.category}
                </div>
                <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
                <p className="text-gray-600 mb-6">{project.description}</p>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-purple-600 font-bold">{project.metrics.subscribers}</p>
                    <p className="text-sm text-gray-500">Subscribers</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-purple-600 font-bold">{project.metrics.views}</p>
                    <p className="text-sm text-gray-500">Views</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-purple-600 font-bold">{project.metrics.revenue}</p>
                    <p className="text-sm text-gray-500">Revenue</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Call to Action Section */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Grow Your Channel?</h2>
          <p className="text-gray-600 mb-8">Let us help you achieve similar results with our proven strategies</p>
          <a 
            href="/contact" 
            className="inline-block bg-purple-600 text-white px-8 py-3 rounded-full font-bold hover:bg-purple-700 transition-colors"
          >
            Get Started Today
          </a>
        </div>
      </section>
    </main>
  )
}

export default PreviousWorkPage 