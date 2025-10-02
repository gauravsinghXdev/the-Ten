export default function CustomerReviews() {
    const reviews = [
      {
        name: "Ananya Sharma",
        text: "Such a cozy place! Loved the fusion of Indian heritage with a modern café vibe. The pet-friendly environment is a big plus.",
        rating: 5,
      },
      {
        name: "Rohit Mehta",
        text: "Great hospitality and amazing food. The ambiance truly feels like home. Highly recommend for a peaceful evening!",
        rating: 4,
      },
      {
        name: "Priya Kapoor",
        text: "One of the best café experiences I’ve had. Warm staff, delicious coffee, and the vibe is unmatched!",
        rating: 5,
      },
    ];
  
    return (
      <section className="w-full bg-gray-50 py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10">
            Customer Reviews
          </h2>
  
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center"
              >
                {/* Rating */}
                <div className="flex mb-3">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <span key={i} className="text-yellow-500 text-lg">★</span>
                  ))}
                </div>
  
                {/* Review text */}
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {review.text}
                </p>
  
                {/* Name */}
                <h4 className="font-semibold text-gray-800">{review.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  