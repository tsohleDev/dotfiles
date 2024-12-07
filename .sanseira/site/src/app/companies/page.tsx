import Contact from "@/components/footer/Contact";
import Image from "next/image";
import companies from "../../../public/companies.svg";
import TextImageGrid from "@/components/widgets/TextImageGrid";
import CustomButton from "@/components/widgets/CustomButton";
import HorizontalFeatureCard from "@/components/features/HorizontalFeature";
import Header from "@/components/Header";
import ExpandableFeatureCard from "@/components/features/ExpandableFeature";

import softwareEngineer from "../../../public/Software Engineer.png";
import lawyer from "../../../public/Lawyer.png";
import jobs from "../../../public/Jobs n Internships.png";
import graphFollowUp from "../../../public/Graph Follow Up.png";
import employeeTraining from "../../../public/Create Employee training.png";
import spreadSheet from "../../../public/Spreed sheet.png";

const features = [
    {
        title: "Intelligent Hiring Insights",
        description: "Make informed hiring decisions with Sanseira’s advanced deep learning analytics. Our platform evaluates candidates based on academic performance, technical skills, soft skills, and portfolio projects, providing a comprehensive view of their potential. By identifying strengths, growth areas, and problem-solving abilities, Sanseira helps businesses find the right fit—optimizing hiring efficiency and reducing turnover while boosting team productivity.",
        images: [softwareEngineer, lawyer],
    },
    {
        title: "Talent Pipeline",
        description: "Access a diverse pool of qualified students and graduates seeking internships and volunteer opportunities with Sanseira. Our platform uses deep learning analytics to match candidates with your company’s industry needs, skills, and culture. By offering real-world experience, you can nurture future talent, gain fresh perspectives, and cultivate a mutually beneficial relationship that drives innovation.",
        images: [jobs, graphFollowUp],
    },
    {
        title: "Onboarding Training",
        description: "Enhance your onboarding process with Sanseira’s AI-driven training tools. Our platform provides businesses with data-driven insights into new hires' academic background, technical skills, and soft skills, ensuring they hit the ground running. By identifying strengths and areas for growth, businesses can tailor training programs, reducing ramp-up time and improving productivity from day one.",
        images: [spreadSheet, employeeTraining],
    }
];

export default function StudentsPage() {
    return (
        <div className="">
            <Header path="/companies" />

            <section
                className="text-center py-16 xs:mb-8 px-8 h-[77svh] sm:flex sm:items-center sm:py-4 sm:h-auto sm:bg-none"
                style={{ backgroundImage: `url('/background.svg')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
                <div className="">
                    <h1 className="text-4xl font-bold text-primary xs:text-6xl">Dear Managers</h1>
                    <p className="text-secondary my-4 xs:text-xl xs:my-16 xl:mx-64">
                        We help enterprises streamline hiring
                        and onboarding with AI insights, connecting businesses with top talent ensuring job-ready hires.
                    </p>

                    <div className="flex justify-end space-x-4 mt-4 md:mx-28 lg:mx-[15vw]">
                        <CustomButton text="Get Started" link="/register" type="primary" />
                    </div>
                </div>

                <Image
                    src={companies}
                    alt="Students"
                    className="hidden my-8 md:block w-[55svw] sm:w-[50vw] sm:h-[65vh] md:h-[60vh]"
                />
            </section>

            <section className="text-center py-16 p-8">
                <h2 className="text-4xl sm:text-6xl font-bold text-secondary py-8">
                    Features
                </h2>

                <div className="lg:hidden">
                    {features.slice(0, 2).map((feature, index) => (
                        <ExpandableFeatureCard
                            key={index}
                            title={feature.title}
                            description={feature.description}
                            images={feature.images}
                        />
                    ))}
                </div>

                <div className="hidden lg:block">
                    {features.slice(0, 2).map((feature, index) => (
                        <HorizontalFeatureCard
                            key={index}
                            title={feature.title}
                            description={feature.description}
                            images={feature.images}
                            flip={index % 2 === 0}
                        />
                    ))}
                </div>

                <h2 className="text-2xl sm:text-4xl font-bold text-secondary pt-8">
                    Control Your <br /> Academic Journey
                </h2>

                <div className="sm:hidden" >
                    <TextImageGrid image={companies} keywords={["Right Talent", "AI Training", "Data"]} />
                </div>

                <p className="text-secondary my-8 sm:text-2xl sm:mx-16 py-2 border-l-4 sm:border-l-8 border-primary pl-4 mb-8">
                    Sanseira streamlines business operations by automating <span className="font-bold text-xl xl:text-2xl text-primary">repetitive tasks</span> like <span className="font-bold text-xl xl:text-2xl text-primary">candidate assessments</span> and <span className="font-bold text-xl xl:text-2xl text-primary">onboarding</span>, saving time and reducing costs. Our <span className="font-bold text-xl xl:text-2xl text-primary">AI-driven tools</span> analyze skills and performance, ensuring <span className="font-bold text-xl xl:text-2xl text-primary">smarter hiring decisions</span>. With less administrative overhead and more efficient <span className="font-bold text-xl xl:text-2xl text-primary">talent management</span>, businesses can boost productivity, cut expenses, and enhance their reputation for <span className="font-bold text-xl xl:text-2xl text-primary">innovation</span> and <span className="font-bold text-xl xl:text-2xl text-primary">employee development</span>.
                </p>

                <h3 className="text-2xl sm:text-4xl font-bold text-secondary pt-8">
                    Career Preperation
                </h3>

                <div className="lg:hidden">
                    {features.slice(2).map((feature, index) => (
                        <ExpandableFeatureCard
                            key={index}
                            title={feature.title}
                            description={feature.description}
                            images={feature.images}
                        />
                    ))}
                </div>

                <div className="hidden lg:block">
                    {features.slice(2).map((feature, index) => (
                        <HorizontalFeatureCard
                            key={index}
                            title={feature.title}
                            description={feature.description}
                            images={feature.images}
                            flip={index % 2 === 0}
                        />
                    ))}
                </div>

            </section >

            <section id="contact" className="text-center p-8">
                <h1 className="text-4xl sm:text-6xl font-bold text-secondary py-2">
                    Contact Us
                </h1>

                <p className="text-sm sm:text-2xl text-primary py-2">We'd love to hear from you! <br />Reach out to us for any inquiries or feedback</p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    <Contact title="Email" details={["support@sanseira.com"]} />
                    <Contact title="Phone" details={["+27 63 482 9552"]} />
                    <Contact title="Location" details={["Alx hub", "19 Ameshoff Street", "Braamfontein", "Johannesburg"]} />
                </div>


                <div className="mt-8">
                    <form className="flex justify-around space-y-4">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="border border-secondary rounded px-4 w-[50vw] py-2 h-12 focus:outline-none mr-2 mt-4"
                        />
                        <button type="submit" className="bg-primary text-white px-6 py-3 rounded h-12">
                            Subscribe
                        </button>
                    </form>
                </div>
            </section>
        </div >
    );
}
