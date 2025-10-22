import React from "react";
import { motion } from "framer-motion";
import Banner from "../Banner/Banner";
import { useLoaderData } from "react-router";

const Home = () => {
    const data = useLoaderData();
    console.log(data);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}  
      animate={{ opacity: 1, y: 0 }}    
      transition={{ duration: 0.6, ease: "easeOut" }} 
      className="py-10"
    >
      <div className="flex items-center justify-center">
        <Banner></Banner>
      </div>
    </motion.div>
  );
};

export default Home;
