import React from "react";
import { motion } from "framer-motion";
import Banner from "../Banner/Banner";
import { useLoaderData } from "react-router";
import PetServices from "../PetService/PetServices";
import WinterCareTips from "../WinterCareTips/WinterCareTips";

const Home = () => {
    const data = useLoaderData();
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}  
      animate={{ opacity: 1, y: 0 }}    
      transition={{ duration: 0.6, ease: "easeOut" }} 
      className="py-10"
    >
      <div>
        <Banner></Banner>
        <PetServices data={data}></PetServices>
        <WinterCareTips></WinterCareTips>
      </div>
    </motion.div>
  );
};

export default Home;
