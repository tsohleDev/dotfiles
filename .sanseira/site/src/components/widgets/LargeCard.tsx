import React from 'react';
import Image from 'next/image';
import safety from '../../../public/safety.svg';
import intelligence from '../../../public/intelegence.svg';
import steerability from '../../../public/steerability.svg';
import scalability from '../../../public/scalability.svg';
import interpretability from '../../../public/interpretability.svg';

interface LargeCardProps {
    title: string;
    subtitle: string;
    content: string;
    reverse: boolean;
}

const LargeCard: React.FC<LargeCardProps> = ({ title, subtitle, content, reverse }) => {
    return (
        <div className={`flex justify-around border-b-4 my-8 py-4 ${reverse ? 'flex-row-reverse' : ''}`}>
            <div className="">
                {title.toLowerCase() === 'safety' && <Image src={safety} alt="Safety" className='w-[50vw] h-[30vh]' />}
                {title.toLowerCase() === 'intelligence' && <Image src={intelligence} alt="Intelligence" className='w-[40vw] h-[30vh]' />}
                {title.toLowerCase() === 'steerability' && <Image src={steerability} alt="Steerability" className='w-[40vw] h-[30vh]' />}
                {title.toLowerCase() === 'scalability' && <Image src={scalability} alt="Scalability" className='w-[40vw] h-[30vh]' />}
                {title.toLowerCase() === 'interpretability' && <Image src={interpretability} alt="Interpretability" className='w-[40vw] h-[30vh]' />}
            </div>
            <div className="w-1/2 flex flex-col justify-center p-4">
                <h1 className="text-4xl font-bold">{title}</h1>
                <h2 className="text-2xl text-gray-600">{subtitle}</h2>
                <p className="mt-4 text-lg">{content}</p>
            </div>
        </div>
    );
};

export default LargeCard;