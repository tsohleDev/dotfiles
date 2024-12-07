import Image from 'next/image';
import CustomButton from '../widgets/CustomButton';

interface CardProps {
    cardsData: {
        image: string;
        title: string;
        description: string;
        link: string;
    }[];
}

const VerticalFeatureCard: React.FC<CardProps> = ({ cardsData }) => {
    return (
        <div className="w-full flex flex-col items-center my-16">
            {/* Cards */}
            <div className="w-full flex overflow-hidden">
                {cardsData.map((element, index) => (
                    <div
                        key={index}
                        className='flex flex-col items-center bg-white shadow-md rounded-lg mx-16'
                    >
                        <div className="relative w-[20vw] h-[40vh]">
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
                            <div className="flex justify-center">
                                <CustomButton text="Learn More" link={element.link} type="primary" />
                            </div>

                        </div>
                    </div>
                ))}
            </div>
        </div >
    );
};

export default VerticalFeatureCard;
