import React from 'react';
import { motion } from "framer-motion";

const MyProfile = () => {
    return (
        <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="py-10"
    >
      <h1 className="text-3xl font-semibold text-gray-800">I am Profile</h1>
    </motion.div>
    );
};

export default MyProfile;