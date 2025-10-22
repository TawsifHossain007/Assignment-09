import React from "react";
import { motion } from "framer-motion";
import { useLoaderData } from "react-router";
import PerCard from "../PetCard/PerCard";

const Services = () => {
    const data = useLoaderData()
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="py-10"
    >
       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10">
        {data.map((service) => (
          <PerCard service={service} key={service.serviceId}></PerCard>
        ))}
      </div>
    </motion.div>
  );
};

export default Services;
