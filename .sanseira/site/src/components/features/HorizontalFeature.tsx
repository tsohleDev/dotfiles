'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import CustomButton from '../widgets/CustomButton';

interface CardProps {
    images: any[];
    title: string;
    description: string;
    flip: boolean;
}

const HorizontalFeatureCard: React.FC<CardProps> = ({ title, description, images, flip }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const randomInterval = Math.floor(Math.random() * 6 + 5) * 1000;
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, randomInterval);

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div
            className={`flex items-center bg-white shadow-md rounded-lg py-4 lx:mx-32 my-4 ${!flip ? 'flex-row-reverse' : '2'}`}
        >
            <div className="relative w-[60vw] h-[60vh] py-8 px-16 ">
                <div className="w-full h-full overflow-hidden mx-8 my-16">
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
                        >
                            <Image
                                src={image}
                                alt={`${title} image ${index + 1}`}
                                layout="fill"
                                objectFit="cover"
                                className={`${flip ? "rounded-l-lg" : "rounded-r-lg"}`}
                            />
                        </div>
                    ))}
                </div>
            </div>

            <div className="p-4 w-full sm:flex-col">
                <h2 className="text-secondary font-bold text-4xl p-4">
                    {title}
                </h2>
                <p className="text-secondary mb-4 sm:text-2xl sm:mb-12">{description}</p>
            </div>
        </div>
    );
};

export default HorizontalFeatureCard;
