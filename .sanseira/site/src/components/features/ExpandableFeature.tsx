'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface ExpandableWidgetProps {
    images: any[];
    title: string;
    description: string;
}

const ExpandableFeatureCard: React.FC<ExpandableWidgetProps> = ({
    title,
    images,
    description,
}) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded((prev) => !prev);
    };

    return (
        <div className="border border-gray-300 rounded-lg shadow-md p-4 bg-primary transition-all my-4 sm:mx-16 duration-300">
            {/* Header Section */}
            <div
                onClick={toggleExpand}
                className="cursor-pointer flex justify-between"
            >
                <div className="flex flex-col items-start">
                    <h2 className="text-lg sm:text-3xl font-bold text-start text-white">{title}</h2>
                </div>
                <button
                    className="text-white font-bold text-xl sm:text-2xl mx-2"
                    aria-label={isExpanded ? 'Collapse' : 'Expand'}
                >
                    {isExpanded ? '-' : '+'}
                </button>
            </div>

            {/* Collapsible Content */}
            {isExpanded && (
                <div className="mt-4">
                    <div className="overflow-hidden my-4 sm:mx-32">
                        <Image
                            src={images[0]}
                            alt={`${title} image`}
                            className="rounded-lg w-[90vh] h-[40vh]"
                        />
                    </div>
                    <p className='text-start text-white sm:text-xl'>{description}</p>
                </div>
            )}
        </div>
    );
};

export default ExpandableFeatureCard;
