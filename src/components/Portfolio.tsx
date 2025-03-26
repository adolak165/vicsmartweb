import Image from 'next/image'

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Add your portfolio items here */}
          <PortfolioItem 
            title="Channel Growth Strategy"
            description="Helped client grow from 0 to 100K subscribers"
            image="/portfolio1.jpg"
          />
          <PortfolioItem 
            title="Content Automation"
            description="Automated content pipeline for daily uploads"
            image="/portfolio2.jpg"
          />
          <PortfolioItem 
            title="Channel Management"
            description="Full-service management of multiple channels"
            image="/portfolio3.jpg"
          />
        </div>
      </div>
    </section>
  )
}

function PortfolioItem({ title, description, image }: { title: string; description: string; image: string }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
      <div className="relative h-48">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  )
} 