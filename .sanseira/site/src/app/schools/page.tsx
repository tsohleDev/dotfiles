import Contact from "@/components/footer/Contact";
import Image from "next/image";
import school from "../../../public/schools.svg";
import TextImageGrid from "@/components/widgets/TextImageGrid";
import CustomButton from "@/components/widgets/CustomButton";
import HorizontalFeatureCard from "@/components/features/HorizontalFeature";
import Header from "@/components/Header";
import ExpandableFeatureCard from "@/components/features/ExpandableFeature";

import createHomeWork from "../../../public/Create Home Work.png";
import noHomeWork from "../../../public/Not Create Home Work.png";
import graphHomeWork from "../../../public/Graph Home Work.png";
import graphFollowUp from "../../../public/Graph Follow Up.png";
import studentApplications from "../../../public/Student Applications.png";
import mmitApplicationApproved from "../../../public/MMIT Application approved.png";
import softwareEngineer from "../../../public/Software Engineer.png";
import lawyer from "../../../public/Lawyer.png";

const features = [
    {
        title: "AI Educator’s Assistant",
        description: "Transform your teaching experience with Sanseira’s AI Educator’s Assistant. Automating grading, lesson planning, exam creation, and assignment generation, it frees up valuable time for teachers to focus on student engagement. Personalized exams and instant feedback eliminate manual work, while tailored assessments ensure academic integrity. Empower teachers to invest more in learning outcomes with less administrative effort.",
        images: [createHomeWork, noHomeWork],
    },
    {
        title: "AI Learner’s Tutor",
        description: "Enhance student learning with Sanseira’s AI Learner’s Tutor. Providing personalized, on-demand tutoring across all subjects, it adapts to each learner’s pace and style. From step-by-step explanations to practice exercises, the tutor identifies weak areas and adjusts difficulty, ensuring continuous improvement—whether for homework or exam prep.",
        images: [graphHomeWork, graphFollowUp],
    },
    {
        title: "Zero Paper System",
        description: "Go fully digital with Sanseira’s Zero Paper System. Streamline academic processes and communication with parents by digitizing assignments, exams, and administrative tasks. With real-time progress reports, fee reminders, and secure parent access, the system fosters better collaboration between schools and families while reducing environmental impact and enhancing organization.",
        images: [studentApplications, mmitApplicationApproved],
    },
    {
        title: "Learners Career Building",
        description: "Prepare students for the future with Sanseira’s Learner Career Building. Integrating technical and soft skills into personalized learning pathways, the platform offers industry-specific projects and real-world scenarios that help students build a portfolio for higher education and the workforce. Guidance on internships, volunteering, and career opportunities ensures a smooth transition from school to professional life.",
        images: [studentApplications, mmitApplicationApproved],
    }
];

export default function StudentsPage() {
    return (
        <div className="">
            <Header path="/schools" />

            <section
                className="text-center py-16 xs:mb-8 px-8 h-[77svh] sm:flex sm:items-center sm:py-4 sm:h-auto sm:bg-none"
                style={{ backgroundImage: `url('/background.svg')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
                <Image
                    src={school}
                    alt="Students"
                    className="hidden my-8 md:block w-[55svw] sm:w-[50vw] sm:h-[65vh] md:h-[60vh]"
                />

                <div className="">
                    <h1 className="text-4xl font-bold text-primary xs:text-6xl">Dear Educators</h1>
                    <p className="text-secondary my-4 xs:text-xl xs:my-16 xl:mx-64">
                        We simplify education with a paperless ecosystem, automating grading,
                        lesson planning,
                        and parent communication
                        for greater efficiency.
                    </p>

                    <div className="flex justify-end space-x-4 mt-4 md:mx-28 lg:mx-[15vw]">
                        <CustomButton text="Get Started" link="/register" type="primary" />
                    </div>
                </div>
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
                    Morden Learning
                </h2>

                <div className="sm:hidden" >
                    <TextImageGrid image={school} keywords={["Save Time", "Save Money", "Big Passes"]} />
                </div>

                <p className="text-secondary my-8 sm:text-2xl sm:mx-16 py-2 border-l-4 sm:border-l-8 border-primary pl-4 mb-8">
                    Sanseira helps schools save time and cut costs by automating repetitive tasks, freeing teachers to focus on student engagement. Our paperless system reduces administrative expenses, while proven study techniques like <span className="font-bold text-xl xl:text-2xl text-primary">active recall</span> and <span className="font-bold text-xl xl:text-2xl text-primary">spaced repetition</span> boost learning and retention. Improve student success and your school’s reputation for efficiency and innovation.
                </p>

                <h3 className="text-2xl sm:text-4xl font-bold text-secondary pt-8">
                    More!
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
