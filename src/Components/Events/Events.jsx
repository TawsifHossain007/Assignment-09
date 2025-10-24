// Events.jsx
import React from "react";

const eventsData = [
  {
    title: "Winter Pet Fair",
    date: "Nov 30, 2025",
    description:
      "Join us for a fun winter fair with pet activities and giveaways!",
  },
  {
    title: "Cozy Outfit Sale",
    date: "Dec 1-15, 2025",
    description: "Get 20% off all winter pet outfits. Limited time only!",
  },
];

const Events = () => {
  return (
    <section className="py-12 bg-amber-100">
      <h2 className="text-3xl font-bold text-center mb-8">
        Events & Promotions
      </h2>
      <div className="flex flex-wrap justify-center gap-6">
        {eventsData.map((event, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow hover:shadow-lg max-w-sm transition-shadow"
          >
            <h3 className="font-bold text-xl mb-2">{event.title}</h3>
            <p className="text-gray-500 mb-2">{event.date}</p>
            <p className="text-gray-700">{event.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Events;
