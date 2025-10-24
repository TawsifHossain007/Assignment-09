import React from "react";
import { motion } from "framer-motion";
import { Snowflake, Thermometer, Droplets, Utensils, PawPrint } from "lucide-react";

const tipsData = [
  {
    id: 1,
    title: "Keep Them Warm",
    description: "Make sure your pets have cozy blankets and warm spots to sleep in during chilly nights.",
    icon: <Thermometer className="w-8 h-8 text-[#F2994A]" />,
  },
  {
    id: 2,
    title: "Hydration Matters",
    description: "Cold weather can make pets drink less water — keep fresh water available at all times.",
    icon: <Droplets className="w-8 h-8 text-[#F2994A]" />,
  },
  {
    id: 3,
    title: "Balanced Nutrition",
    description: "Provide nutritious meals to maintain their energy levels during winter.",
    icon: <Utensils className="w-8 h-8 text-[#F2994A]" />,
  },
  {
    id: 4,
    title: "Protect Their Paws",
    description: "Clean and moisturize paws to avoid dryness or cracks caused by cold surfaces.",
    icon: <PawPrint className="w-8 h-8 text-[#F2994A]" />,
  },
  {
    id: 5,
    title: "Limit Outdoor Time",
    description: "Avoid keeping your pets outside for too long; short walks are best in cold conditions.",
    icon: <Snowflake className="w-8 h-8 text-[#F2994A]" />,
  },
  {
  id: 6,
  title: "Regular Vet Checkups",
  description: "Cold weather can worsen certain conditions like arthritis — schedule a winter checkup to keep your pet healthy and active.",
  icon: <Thermometer className="w-8 h-8 text-[#F2994A]" />,
},
];

const WinterCareTips = () => {
  return (
    <section className="bg-[#FFF9F4] py-12 px-4 md:px-10 pt-20">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10"
      >
        ❄️ Winter Care Tips for Pets
      </motion.h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {tipsData.map((tip, index) => (
          <motion.div
            key={tip.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white border border-gray-200 shadow-md rounded-2xl p-6 flex flex-col items-start hover:shadow-lg hover:-translate-y-1 transition-transform duration-300"
          >
            <div className="mb-4">{tip.icon}</div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{tip.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{tip.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WinterCareTips;
