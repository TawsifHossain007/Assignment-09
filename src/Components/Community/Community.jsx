import React from 'react';
import { motion } from "framer-motion";
import Testimonials from '../TestimonialsData/Testimonials';
import Events from '../Events/Events';
import Fun from '../Fun/Fun';

const Community = () => {
    return (
        <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="py-10"
    >
       <div>
        <Testimonials></Testimonials>
        <Events></Events>
        <Fun></Fun>
       </div>
    </motion.div>
    );
};

export default Community;