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

        <div className="flex-1 pt-10">
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
          <div className="pt-15 flex flex-col md:flex-row items-center gap-6">
            <h1  className="text-[#F2994A] font-semibold text-[20px] border-r-0 md:border-r-4 border-gray-300 pr-4">Email: <span className="text-black">{service.providerEmail}</span> </h1>
            <h1 className="text-[#F2994A] font-semibold text-[20px]">Category: <span className="text-black">{service.category}</span></h1>
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
          <form
  className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4"
  onSubmit={(e) => {
    e.preventDefault(); 
    const form = e.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim();

    if (!name || !email) {
      toast.error("Please fill in all fields!");
      return;
    }

    handleBook(); 
  }}
>
  <label className="label">Name</label>
  <input required type="text" name="name" className="input" placeholder="Name" />

  <label className="label">Email</label>
  <input required type="email" name="email" className="input" placeholder="Email" />

  <button
    type="submit"
    className={`btn bg-[#F2994A] text-white mt-4 ${
      isInstalled ? "opacity-70 pointer-events-none" : ""
    }`}
  >
    {isInstalled ? "Booked" : "Book a Slot"}
  </button>
</form>

        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
