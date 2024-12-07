import Contact from "@/components/footer/Contact";
import Image from "next/image";
import students from "../../../public/students.svg";
import TextImageGrid from "@/components/widgets/TextImageGrid";
import CustomButton from "@/components/widgets/CustomButton";
import HorizontalFeatureCard from "@/components/features/HorizontalFeature";
import Header from "@/components/Header";
import ExpandableFeatureCard from "@/components/features/ExpandableFeature";

import englishCalender from "../../../public/English calender.png";
import mathCalender from "../../../public/Math calender.png";
import graphHomeWork from "../../../public/Graph Home Work.png";
import graphFollowUp from "../../../public/Graph Follow Up.png";
import mmitApplicationApproved from "../../../public/MMIT Application approved.png";
import studentApplications from "../../../public/Student Applications.png";
import softwareEngineer from "../../../public/Software Engineer.png";
import lawyer from "../../../public/Lawyer.png";

const features = [
    {
        title: "AI Study Calendar",
        description: "Stay organized and stress-free with our AI Study Calendar. It creates personalized, adaptive study plans based on your subjects, pace, and deadlines. Adjusting in real-time, it ensures you're always on track by reshuffling missed sessions and offering smart insights like study tips and review reminders. Master time management and excel in exams with ease.",
        images: [englishCalender, mathCalender],
    },
    {
        title: "HomeWork Assist",
        description: "Conquer any challenge with Sanseira’s AI Assist. Acting as a virtual tutor, it breaks down tough problems, offers tailored explanations, and provides resources suited to your level. With built-in feedback and plagiarism detection, it promotes genuine learning while helping you refine your skills for ethical academic success.",
        images: [graphHomeWork, graphFollowUp],
    },
    {
        title: "Global Opportunities",
        description: "Streamline your path to success with Sanseira’s automated application system for global opportunities. Effortlessly apply for internships, scholarships, and career programs worldwide, saving time while increasing your chances of success.",
        images: [mmitApplicationApproved, studentApplications],
    },
    {
        title: "Career Tools",
        description: "Unlock your full potential with Sanseira’s AI-powered training across diverse career fields. Our platform stores data that proves your skills, allowing you to showcase your expertise on job and internship applications—helping you skip the junior roles and start at the level you deserve.",
        images: [softwareEngineer, lawyer],
    }
];

export default function StudentsPage() {
    return (
        <div className="">
            <Header path="/students" />

            <section
                className="text-center py-16 xs:mb-8 px-8 h-[77svh] sm:flex sm:items-center sm:py-4 sm:h-auto sm:bg-none"
                style={{ backgroundImage: `url('/background.svg')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
                <div className="">
                    <h1 className="text-4xl font-bold text-primary xs:text-6xl">Dear Students</h1>
                    <p className="text-secondary my-4 xs:text-xl xs:my-16 xl:mx-64">
                        We offer AI-driven solutions for personalized learning,
                        career tools, and global opportunities to help you succeed academically and professionally.
                    </p>

                    <div className="flex justify-end space-x-4 mt-4 md:mx-28 lg:mx-[15vw]">
                        <CustomButton text="Get Started" link="/register" type="primary" />
                    </div>
                </div>

                <Image
                    src={students}
                    alt="Students"
                    className="hidden md:block w-[55svw] sm:w-[50vw] sm:h-[65vh] md:h-[60vh]"
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
                    <TextImageGrid image={students} keywords={["Academic Excellence", "Bursaries", "Internships", "Opportunities"]} />
                </div>

                <p className="text-secondary my-8 sm:text-2xl sm:mx-16 py-2 border-l-4 sm:border-l-8 border-primary pl-4 mb-8">
                    Sanseira’s proven study techniques <span className="font-bold text-xl xl:text-2xl text-primary">active recall</span>, <span className="font-bold text-xl xl:text-2xl text-primary">spaced repetition</span>, <span className="font-bold text-xl xl:text-2xl text-primary">Pomodoro</span>, <span className="font-bold text-xl xl:text-2xl text-primary">Feynman</span>, <span className="font-bold text-xl xl:text-2xl text-primary">practice testing</span>, <span className="font-bold text-xl xl:text-2xl text-primary">chunking</span>, and <span className="font-bold text-xl xl:text-2xl text-primary">SQ3R</span> ensure deep learning and retention. With <span className="font-bold text-xl xl:text-2xl text-primary">mnemonics</span> and healthy habits, your chances of failing are close to zero.
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
