import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import { Outlet } from 'react-router';

const AuthRoot = () => {
    return (
        <div className=' bg-[#FFF9F4]'>
            <div className='w-11/12 mx-auto min-h-screen'>
            <header className='py-4'>
                 <Navbar></Navbar>
            </header>
            <main className='flex items-center justify-center py-30'>
                <Outlet></Outlet>
            </main>
           
            
        </div>
        </div>
        
    );
};

export default AuthRoot;