export default function Reviews() {
  const reviews = [
    {
      name: "John Smith",
      role: "Content Creator",
      comment: "Vicsmart helped me grow my channel from 0 to 100K subscribers in just 6 months. Their automation strategies are incredible!",
      rating: 5
    },
    {
      name: "Sarah Johnson",
      role: "Business Owner",
      comment: "The team at Vicsmart is professional and delivers results. My business channel has seen tremendous growth.",
      rating: 5
    },
    {
      name: "Mike Williams",
      role: "YouTuber",
      comment: "Their content strategy and automation tools saved me countless hours. Highly recommended!",
      rating: 5
    }
  ]

  return (
    <section id="reviews" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Client Reviews</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-4">&ldquo;{review.comment}&rdquo;</p>
              <div>
                <p className="font-bold">{review.name}</p>
                <p className="text-gray-500 text-sm">{review.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 