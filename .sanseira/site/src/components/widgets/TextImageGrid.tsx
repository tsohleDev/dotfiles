import React from 'react';
import Image from 'next/image';


interface TextImageGridProps {
    image: string;
    keywords: string[];
}

const TextImageGrid: React.FC<TextImageGridProps> = ({ image, keywords }) => {
    return (
        <div className="grid grid-cols-2 gap-4 my-4">

            <div className="text-sm flex flex-col justify-center items-end">
                {keywords.map((keyword, index) => (
                    <React.Fragment key={index}>
                        <p className="text-primary text-sm sm:text-xl px-2 py-1 mr-2">
                            {keyword}
                        </p>
                        <br />
                    </React.Fragment>
                ))}
            </div>
            <Image src={image} alt="Students" layout="responsive" className="w-full" />
        </div>
    );
};

export default TextImageGrid;