'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const MobileMenu: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isOpen]);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="md:hidden">
            <div >
                <button className="text-primary focus:outline-none" onClick={toggleMenu}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>
            </div>

            {isOpen && (
                <div className="absolute top-0 left-0 w-full h-[100vh] bg-white flex flex-col items-center space-y-4 z-50"
                    style={{ backgroundImage: `url('/background.svg')`, backgroundSize: 'cover', backgroundPosition: 'left' }}
                >
                    <div className='flex justify-end w-full p-4'>


                        <button className="text-primary" onClick={toggleMenu}>
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                    </div>
                    <Link href="/" className="text-primary text-xl font-bold my-16" onClick={toggleMenu}>Home</Link>
                    <Link href="/students" className="text-primary text-xl font-bold my-16" onClick={toggleMenu}>Students</Link>
                    <Link href="/companies" className="text-primary text-xl font-bold my-16" onClick={toggleMenu}>Companies</Link>
                    <Link href="/schools" className="text-primary text-xl font-bold my-16" onClick={toggleMenu}>Schools</Link>
                </div>
            )}
        </div>
    );
};

export default MobileMenu;