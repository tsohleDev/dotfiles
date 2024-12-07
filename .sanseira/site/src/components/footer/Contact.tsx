'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

interface ContactProps {
    title: string;
    details: Array<string>;
}

const Contact: React.FC<ContactProps> = ({ title, details }) => {
    const [isClient, setIsClient] = useState(false);

    // Ensure that we only render client-specific logic after mount
    useEffect(() => {
        setIsClient(true);
    }, []);

    // Avoid any dynamic data causing hydration mismatch
    const renderIcon = () => {
        if (!isClient) return null; // Skip icon rendering until client-side
        if (title === "Location") return <LocationOnIcon style={{ fontSize: 60 }} />;
        if (title === "Phone") return <PhoneIcon style={{ fontSize: 60 }} />;
        return <EmailIcon style={{ fontSize: 60 }} />;
    };

    return (
        <div className={`flex items-center space-x-2 ${title === 'Location' ? 'col-span-2 sm:col-span-1 justify-center' : 'flex-col'}`}>
            {renderIcon()}
            <p className="text-secondary text-xs sm:text-xl">
                {details.length === 1 ? details[0] : details.map((element, index) => (
                    <React.Fragment key={index}>
                        {element} <br />
                    </React.Fragment>
                ))}
            </p>
        </div>
    );
};

export default Contact;
