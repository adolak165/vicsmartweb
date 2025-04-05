'use client'
import { useState } from 'react'

interface ProjectStats {
  subscribers: string
  views: string
  growth: string
}

interface Project {
  title: string
  description: string
  category: string
  images: string[]
  stats: ProjectStats
}

const PreviousWorkPage = () => {
  const projects: Project[] = [
    {
      title: "Sport Channel Growth",
      description: "Helped scale a Sport channel from 1K to 10K subscribers in 1 months",
      category: "Sport",
      images: [
        "/public/images/sport1.webp",
        "/public/images/sport2.webp",
        "/public/images/sport3.webp"
      ],
      stats: {
        subscribers: "10K+",
        views: "7M+",
        growth: "99%"
      }
    },
    {
      title: "Tech Review Channel",
      description: "Managed content strategy for a growing tech review channel",
      category: "Technology",
      images: [
        "/team/image4.jpg",
        "/team/image5.jpg",
        "/team/image6.jpg"
      ],
      stats: {
        subscribers: "87K+",
        views: "55M+",
        growth: "90%"
      }
    },
    {
      title: "Movie Recap",
      description: "Created automated movie recap content reaching millions",
      category: "Movie Recap",
      images: [
        "/team/image7.jpg",
        "/team/image8.jpg",
        "/team/image9.jpg"
      ],
      stats: {
        subscribers: "11K+",
        views: "3M+",
        growth: "99%"
      }
    }
  ]

  return (
    <main className="min-h-screen pt-20 pb-16">
      <section className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">Our Previous Work</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Grow Your Channel?</h2>
          <p className="text-gray-600 mb-8">Join our successful clients and transform your YouTube presence</p>
          <a 
            href="/contact" 
            className="inline-block bg-purple-600 text-white px-8 py-3 rounded-full font-bold hover:bg-purple-700 transition-colors"
          >
            Start Your Journey
          </a>
        </div>
      </section>
    </main>
  )
}

interface ProjectCardProps {
  project: Project
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === project.images.length - 1 ? 0 : prev + 1
    )
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? project.images.length - 1 : prev - 1
    )
  }

  return (
    <article className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      {/* Image Carousel */}
      <div className="relative h-64">
        <div className="carousel-container h-full">
          <img
            src={project.images[currentImageIndex]}
            alt={`${project.title} - Image ${currentImageIndex + 1}`}
            className="w-full h-full object-cover image-zoom"
          />
          
          {/* Navigation Arrows */}
          <button 
            onClick={prevImage}
            className="carousel-arrow carousel-arrow-prev"
            aria-label="Previous image"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            onClick={nextImage}
            className="carousel-arrow carousel-arrow-next"
            aria-label="Next image"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots Navigation */}
          <div className="carousel-dots">
            {project.images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`carousel-dot ${index === currentImageIndex ? 'active' : ''}`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>

          {/* Category Tag */}
          <div className="absolute top-4 left-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm">
            {project.category}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-6">{project.description}</p>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-4 text-center bg-gray-50 p-4 rounded-lg">
          <div>
            <p className="text-purple-600 font-bold">{project.stats.subscribers}</p>
            <p className="text-sm text-gray-500">Subscribers</p>
          </div>
          <div>
            <p className="text-purple-600 font-bold">{project.stats.views}</p>
            <p className="text-sm text-gray-500">Views</p>
          </div>
          <div>
            <p className="text-purple-600 font-bold">{project.stats.growth}</p>
            <p className="text-sm text-gray-500">Growth</p>
          </div>
        </div>
      </div>
    </article>
  )
}

export default PreviousWorkPage 