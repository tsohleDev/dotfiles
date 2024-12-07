import React from 'react';

interface CustomButtonProps {
    text: string;
    type: 'primary' | 'secondary';
    link: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({ text, type, link }) => {
    return (
        <>
            <a href={link}>
                <button
                    className={
                        type === 'primary'
                            ? 'bg-primary text-white px-3 py-2 text-xs xs:text-xl sm:text-4xl md:text-2xl rounded'
                            : 'bg-transparent border border-secondary text-secondary px-3 py-2 text-xs xs:text-xl sm:text-4xl md:text-2xl rounded'
                    }
                >
                    {text}
                </button>
            </a>
        </>
    );
};

export default CustomButton;