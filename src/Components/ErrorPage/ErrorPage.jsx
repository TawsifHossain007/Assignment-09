import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className='flex flex-col justify-center items-center'>
           <img src="https://i.ibb.co.com/5XLWmbb9/orange-cones-404-warning-vector-656853-3576.jpg" alt="" />
           <p className='font-normal text-[20px] text-[#6886a1]'>The page you are looking for is not available.</p>
           <button className='text-white bg-gradient-to-r from-[#dc7317] to-[#F2994A] py-3 px-8 rounded-lg mt-6 cursor-pointer'> <Link to="/">Go Back!</Link></button>
        </div>
    );
};

export default ErrorPage;