
import React from "react";

const factsData = [
  "Cats have 32 muscles in each ear!",
  "Dogs' noses are wet to help absorb scent chemicals.",
  "Rabbits can't vomit, so their diet is very important.",
];

const Fun = () => {
  return (
    <section className="py-12 bg-cyan-100">
      <h2 className="text-3xl font-bold text-center mb-8">Did You Know?</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {factsData.map((fact, index) => (
          <div
            key={index}
            className="bg-orange-100 p-6 rounded-lg shadow hover:bg-orange-300 transition-colors max-w-xs"
          >
            <p className="text-gray-800 font-medium text-center">{fact}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Fun;
