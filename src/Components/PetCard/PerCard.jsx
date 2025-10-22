import { CircleDollarSign, Star } from 'lucide-react';
import React from 'react';

const PerCard = ({service}) => {
    return (
        <div className='bg-white shadow-lg border border-gray-200 rounded-lg p-4 transform 
        transition 
        duration-300 
        hover:-translate-y-2 
        hover:shadow-2xl 
        hover:bg-orange-300
        cursor-pointer
        group'> 
    <img className='h-[400px] w-[600px]' src={service.image} alt="" />
    <h1 className='border-b border-gray-300 pb-4 text-xl font-semibold pt-4 group-hover:text-white'>{service.serviceName}</h1>

    <div className='flex items-center justify-around gap-16 pt-5 '>
        <p className='flex items-center gap-2 text-black font-medium group-hover:text-white'>
            <Star size={20}/> Rating: {service.rating}
        </p>
        <p className='flex items-center gap-2 text-black font-medium group-hover:text-white'>
            <CircleDollarSign size={20}/> Price: {service.price}$
        </p>
    </div>

    <div className='flex items-center justify-center pt-10 '>
        <button className='btn bg-[#4cb6ba] group-hover:bg-white group-hover:text-black text-white w-fit'>View Details</button>
    </div>
</div>

    );
};

export default PerCard;