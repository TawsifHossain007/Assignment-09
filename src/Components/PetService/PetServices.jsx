import React from "react";
import PerCard from "../PetCard/PerCard";
import { div } from "framer-motion/client";
import { Link } from "react-router";

const PetServices = ({ data }) => {
  return (
    <div className=" mt-30">
      <h1 className="text-[48px] font-bold text-center">
        Love, Care & Comfort for Pets
      </h1>
      <p className="text-[#5E6472] pt-5 text-center hidden md:block">Discover a range of premium services designed to keep your furry friends happy, healthy, and pampered. From cozy winter coats and professional <br /> grooming to fun playtime, expert training, and wellness treatments, every service is crafted with love and attention to your pet’s unique needs. <br /> Because every pet deserves comfort, care, and a little extra TLC.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-15">
        {data.slice(0, 3).map((service) => (
          <PerCard service={service} key={service.serviceId}></PerCard>
        ))}
      </div>
      <div className="flex items-center justify-center mt-15">
        <Link to={"/services"}>
          {" "}
          <button className="btn bg-[#F2994A] hover:bg-gray-700 text-white w-fit">
            Show All
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PetServices;
