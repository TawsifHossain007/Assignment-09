import { s } from "framer-motion/client";
import { BookmarkCheck, CircleDollarSign, Star } from "lucide-react";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

const ServiceCard = ({ service }) => {
  const [isInstalled, setIsInstalled] = useState(false);

  const handleBook = () => {
    toast("Booking Successful!");
    setIsInstalled(true);
  };

  return (
    <div className="max-w-[1200px] mx-auto my-20 px-4 sm:px-6 lg:px-0">
      <div className="flex flex-col lg:flex-row gap-10 border-b border-gray-300 pb-8 lg:pb-16">
        <div className="flex-shrink-0 flex justify-center lg:justify-start">
          <img
            src={service.image}
            className="w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] lg:w-[350px] lg:h-[350px] border border-gray-300 rounded-md shadow-lg"
            alt=""
          />
        </div>

        <div className="flex-1 pt-15">
          <div className="border-b border-gray-300 pb-2">
            <p className="font-bold text-2xl sm:text-3xl lg:text-4xl">
              {service.serviceName}
            </p>
            <p className="font-bold text-lg sm:text-xl text-[#627382] mt-1">
              Developed By{" "}
              <span className="text-[#F2994A]">{service.providerName}</span>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start gap-6 mt-6 sm:mt-8">
            <div className="flex flex-col items-center sm:items-start">
              <CircleDollarSign className=""></CircleDollarSign>
              <p className="text-[#001931] font-normal text-sm mt-2">Price</p>
              <p className="font-extrabold text-2xl sm:text-3xl text-[#F2994A]">
                {service.price} $
              </p>
            </div>
            <div className="flex flex-col items-center sm:items-start">
              <Star></Star>
              <p className="text-[#001931] font-normal text-sm mt-2">
                Average Ratings
              </p>
              <p className="font-extrabold text-2xl sm:text-3xl text-[#F2994A]">
                {service.rating}
              </p>
            </div>
            <div className="flex flex-col items-center sm:items-start">
              <BookmarkCheck></BookmarkCheck>
              <p className="text-[#001931] font-normal text-sm mt-2">
                Slots Available
              </p>
              <p className="font-extrabold text-2xl sm:text-3xl text-[#F2994A]">
                {service.slotsAvailable}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 pt-20">
        {/* Description */}
        <div className="pt-0 md:pt-10 pb-8 text-center md:text-left">
          <p className="text-[#627382] font-">{service.description}</p>
        </div>

        {/* form */}
        <div className="flex flex-col gap-6 items-center justify-center md:border-l border-l-0 border-gray-300 pl-10">
          <h1 className="font-bold text-2xl">Book Now!</h1>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
            <label className="label">Name</label>
            <input type="text" className="input" placeholder="Name" />

            <label className="label">Email</label>
            <input type="email" className="input" placeholder="Email" />

            <button
              onClick={handleBook}
              className={`btn bg-[#F2994A] text-white mt-4 ${
                isInstalled ? "opacity-70 pointer-events-none" : ""
              }`}
            >
              {isInstalled ? "Booked" : "Book a Slot"}
            </button>
            <ToastContainer></ToastContainer>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
