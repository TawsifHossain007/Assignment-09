import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import { Outlet, useLocation } from "react-router";
import { AnimatePresence, motion } from "framer-motion";

const Root = () => {
  const location = useLocation();

  return (
    <div className="bg-[#FFF9F4] min-h-screen">
      <div className="w-11/12 mx-auto">
        <Navbar />
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
        <Footer />
      </div>
    </div>
  );
};

export default Root;
