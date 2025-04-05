import Image from 'next/image'

const topYoutubers = [
  {
    name: 'PewDiePie',
    subscribers: '110M',
    category: 'Gaming & Entertainment',
    image: '/images/pew.webp'
  },
  {
    name: 'MrBeast',
    subscribers: '378M',
    category: 'Entertainment & Philanthropy',
    image: '/images/youtube2.webp'
  },
  {
    name: 'Markiplier',
    subscribers: '37M',
    category: 'Gaming & Comedy',
    image: '/images/mark.webp'
  },
  {
    name: 'Dude Perfect',
    subscribers: '60M',
    category: 'Sports & Entertainment',
    image: '/images/youtube4.webp'
  }
]

export default function TopYoutubers() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Top YouTubers</h2>
          <p className="text-xl text-gray-600">Discover the most influential creators on YouTube</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {topYoutubers.map((youtuber, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105"
            >
              <div className="relative h-48">
                <Image
                  src={youtuber.image}
                  alt={youtuber.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{youtuber.name}</h3>
                <p className="text-gray-600 mb-2">{youtuber.category}</p>
                <p className="text-blue-600 font-medium">{youtuber.subscribers} subscribers</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 