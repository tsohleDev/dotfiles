'use client'
import React, { useState } from 'react';

interface ExpandableWidgetProps {
    title: string;
    subtitle: string;
    content: React.ReactNode;
}

const ExpandableWidget: React.FC<ExpandableWidgetProps> = ({
    title,
    subtitle,
    content,
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
                    <p className="text-sm sm:text-xl sm:py-2 font-medium text-start text-white">{subtitle}</p>
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
                    <p className='text-start text-white'>{content}</p>
                </div>
            )}
        </div>
    );
};

export default ExpandableWidget;
