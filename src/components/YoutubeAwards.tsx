import Image from 'next/image'

const awards = [
  {
    name: 'Diamond Play Button',
    description: 'Awarded for reaching 10 million subscribers',
    image: '/images/diamondplay.webp',
    requirements: '10M+ Subscribers'
  },
  {
    name: 'Gold Play Button',
    description: 'Awarded for reaching 1 million subscribers',
    image: '/images/award3.jpg',
    requirements: '1M+ Subscribers'
  },
  {
    name: 'Silver Play Button',
    description: 'Awarded for reaching 100 thousand subscribers',
    image: '/images/award4.jpg',
    requirements: '100K+ Subscribers'
  },
  {
    name: 'Red diamond Play Button',
    description: 'Awarded for reaching 100 million subscribers',
    image: '/images/award5.png',
    requirements: '100M+ Subscribers'
  }
]

export default function YoutubeAwards() {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">YouTube Creator Awards</h2>
          <p className="text-xl text-gray-600">Milestone achievements for YouTube creators</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {awards.map((award, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 transform transition-all hover:scale-105 hover:shadow-xl"
            >
              <div className="relative h-[137px] w-[306px] mx-auto mb-4">
                <Image
                  src={award.image}
                  alt={award.name}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{award.name}</h3>
                <p className="text-gray-600 mb-3">{award.description}</p>
                <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                  {award.requirements}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 