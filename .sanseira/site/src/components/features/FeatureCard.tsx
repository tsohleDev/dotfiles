'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useSwipeable } from 'react-swipeable';
import CustomButton from '../widgets/CustomButton';

interface CardProps {
    cardsData: {
        image: string;
        title: string;
        description: string;
        link: string;
    }[];
}

const FeatureCard: React.FC<CardProps> = ({ cardsData }) => {
    const [activeIndex, setActiveIndex] = useState(0); // Tracks the current card
    const [isPaused, setIsPaused] = useState(false);  // Tracks if transitions are paused

    // Auto-transition logic
    useEffect(() => {
        if (!isPaused) {
            const timer = setInterval(() => {
                setActiveIndex((prevIndex) => (prevIndex + 1) % cardsData.length);
            }, 10000);

            return () => clearInterval(timer); // Cleanup timer on unmount
        }
    }, [isPaused, cardsData.length]);

    // Handlers for swipe gestures
    const swipeHandlers = useSwipeable({
        onSwipedLeft: () =>
            setActiveIndex((prevIndex) => (prevIndex + 1) % cardsData.length),
        onSwipedRight: () =>
            setActiveIndex(
                (prevIndex) => (prevIndex - 1 + cardsData.length) % cardsData.length
            ),
        onSwipeStart: () => setIsPaused(true), // Pause when swiping
    });

    // Handle navigation dots click
    const handleNavigation = (index: number) => {
        setActiveIndex(index);
        setIsPaused(true); // Stop auto-transition
    };

    return (
        <div {...swipeHandlers} className="w-full flex flex-col items-center">
            {/* Cards */}
            <div className="w-full flex overflow-hidden">
                {cardsData.map((element, index) => (
                    <div
                        key={index}
                        className={`flex flex-col sm:flex-row items-center bg-white shadow-md rounded-lg w-full transform transition-transform duration-1000 ${index === activeIndex ? 'translate-x-0' : 'translate-x-full'
                            }`}
                        style={{ display: index === activeIndex ? 'flex' : 'none' }}
                    >
                        <div className="relative w-full h-64 sm:h-[40vh] sm:w-[68vw] sm:mx-8">
                            <Image
                                src={element.image}
                                alt={element.title}
                                layout="fill"
                                objectFit="cover"
                            />
                            <h2 className="absolute bottom-0 left-0 bg-white w-[100%] bg-opacity-70 text-secondary font-bold text-2xl p-4">
                                {element.title}
                            </h2>
                        </div>
                        <div className="p-4 w-full sm:flex-col">
                            <p className="text-secondary mb-4 sm:text-2xl sm:mb-12">{element.description}</p>
                            <div className="flex justify-end">
                                <CustomButton text="Learn More" link={element.link} type="primary" />
                            </div>

                        </div>
                    </div>
                ))}
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center mt-4 space-x-2">
                {cardsData.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => handleNavigation(index)}
                        className={`w-3 h-3 rounded-full ${index === activeIndex ? 'bg-primary' : 'bg-gray-300'
                            }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default FeatureCard;
