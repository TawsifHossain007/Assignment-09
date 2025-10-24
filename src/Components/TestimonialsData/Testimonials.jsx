import React from "react";

const testimonialsData = [
  {
    name: "Alice & Fluffy",
    message: "Our dog loves the cozy outfits from here! Super happy with the service.",
    avatar: "https://i.ibb.co.com/jkcsDDB3/e4f75e2f6b1ef0afa711278b655dfe4a.jpg",
  },
  {
    name: "John & Whiskers",
    message: "Great advice on winter care tips for my cat. Highly recommend!",
    avatar: "https://i.ibb.co.com/gHpKxNd/adorable-baby-child-cute.jpg",
  },
];

const Testimonials = () => {
  return (
    <section className="py-12 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-8">Happy Pet Owners</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {testimonialsData.map((t, index) => (
          <div
            key={index}
            className="bg-white shadow-lg p-6 rounded-lg max-w-xs text-center hover:scale-105 transition-transform"
          >
            <img
              src={t.avatar}
              alt={t.name}
              className="w-16 h-16 mx-auto rounded-full mb-4"
            />
            <p className="text-gray-700 italic">"{t.message}"</p>
            <h4 className="mt-4 font-semibold">{t.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
