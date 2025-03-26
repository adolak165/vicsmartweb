export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceCard 
            title="YouTube Automation"
            description="Full-service YouTube channel management and content creation"
            icon="🎥"
          />
          <ServiceCard 
            title="Content Strategy"
            description="Strategic planning and optimization for maximum engagement"
            icon="📊"
          />
          <ServiceCard 
            title="Video Editing"
            description="Professional video editing and post-production"
            icon="✂️"
          />
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ title, description, icon }: { title: string; description: string; icon: string }) {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
} 