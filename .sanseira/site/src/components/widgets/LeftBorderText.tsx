import React from 'react';

interface LeftBorderTextProps {
    text: string;
}

const LeftBorderText: React.FC<LeftBorderTextProps> = ({ text }) => {
    return (
        <p className="text-secondary sm:text-2xl sm:mx-32 py-2 border-l-4 sm:border-l-8 border-primary pl-4 mb-8">
            {text}
        </p>
    );
};

export default LeftBorderText;