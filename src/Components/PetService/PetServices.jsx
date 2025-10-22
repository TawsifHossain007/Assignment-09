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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10">
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
