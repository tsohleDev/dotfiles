import React from 'react';

interface PartnerProps {
    imageUrl: string;
    name: string;
}

const Partner: React.FC<PartnerProps> = ({ imageUrl, name }) => {
    return (
        <div className="flex flex-col items-center my-5">
            <img src={imageUrl} alt={name} style={{ width: '80px', height: '80px', borderRadius: '50%' }} />
            <h3 className="text-sm font-bold mt-2">{name.toUpperCase()}</h3>
        </div>
    );
};

export default Partner;