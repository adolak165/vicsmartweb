export default function PreviousWork() {
  const projects = [
    {
      title: "Finance Channel Growth",
      views: "1M+",
      subscribers: "100K+",
      duration: "6 months"
    },
    {
      title: "Tech Review Channel",
      views: "500K+",
      subscribers: "50K+",
      duration: "3 months"
    },
    {
      title: "Educational Content",
      views: "2M+",
      subscribers: "150K+",
      duration: "8 months"
    }
  ]

  return (
    <section id="previous-work" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Previous Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-bold mb-4">{project.title}</h3>
              <div className="space-y-2">
                <p className="text-gray-600">{project.views}</p>
                <p className="text-gray-600">{project.subscribers}</p>
                <p className="text-gray-600">{project.duration}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 