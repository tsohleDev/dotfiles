import ExpandableWidget from "@/components/widgets/ExpandableCard";
import FeatureCard from "../components/features/FeatureCard";
import Contact from "@/components/footer/Contact";
import Image from "next/image";
import { CardData, AIMetrics, PartnerData } from "@/types";
import Partner from "@/components/widgets/Partner";
import LeftBorderText from "@/components/widgets/LeftBorderText";
import Pricing from "@/components/pricing";
import CustomButton from "@/components/widgets/CustomButton";
import LargeCard from "@/components/widgets/LargeCard";
import milevaArt from "../../public/mileva mobile.svg";
import VerticalFeatureCard from "@/components/features/VerticalFeatureCard";
import Header from "@/components/Header";

const cardsData: CardData[] = [
  {
    title: "For Students",
    description: "Sanseira offers personalized AI tutoring, advanced learning analytics, career-building resources, and automated application support tailored to every academic journey.",
    image: "students.svg",
    link: "/students",
  },
  {
    title: "For Companies",
    description: "We deliver analytics on applicants, covering academics, soft and technical expertise, to reduce training costs and time while offering employee upskilling",
    image: "companies.svg",
    link: "/companies",
  },
  {
    title: "For Schools",
    description: "Our AI-driven solutions automate grading and assessments, alleviate administrative burdens, and cut expenses with a hands-free, paperless management approach.",
    image: "schools.svg",
    link: "/schools",
  },
];

const aiMetrics: AIMetrics[] = [
  {
    title: "Safety",
    shortDescription: "Ensuring non-harmful, ethical content generation.",
    fullDescription:
      "We prioritize the generation of content that is non-harmful, accurate, and aligned with good morals and behavior. Our AI ensures that all content is designed to support the educational needs of students without being misleading or harmful.",
  },
  {
    title: "Intelligence",
    shortDescription: "Achieving high academic performance across levels.",
    fullDescription:
      "Our AI is capable of excelling in academic tests, scoring over 80% on undergraduate exams on average, 90% when provided with textbooks and study guides, and almost always 100% on high school studies. It can perform at high academic standards, demonstrating its deep understanding and adaptability.",
  },
  {
    title: "Steerability",
    shortDescription: "Customizable learning experiences and focused improvement.",
    fullDescription:
      "Our AI allows users to customize their learning experience and tailor it to their preferences. It also tracks weak points in a learner's progress and works to improve them, offering personalized support and targeted learning interventions.",
  },
  {
    title: "Scalability",
    shortDescription: "Adapting to individual and organizational needs.",
    fullDescription:
      "Our AI is scalable, adapting to the needs of individual users, schools, and companies. It can accommodate various learning styles, preferences, and goals, ensuring a personalized experience for all users.",
  },
  {
    title: "Interpretability",
    shortDescription: "Offering transparency and insights.",
    fullDescription:
      "Our AI is transparent, providing explanations, feedback, and insights to users. It offers clear, understandable information, enabling users to make informed decisions and choices.",
  },
];

const partners: PartnerData[] = [
  {
    url: 'alx.svg',
    name: 'Alx',
  },
  {
    url: 'aws.svg',
    name: 'AWS',
  },
  {
    url: 'sand.svg',
    name: 'Sand',
  },
  {
    url: 'openai.svg',
    name: 'Open AI',
  },
  {
    url: 'google.svg',
    name: 'Google',
  },
  {
    url: 'anthropic.svg',
    name: 'Anthropic',
  }
]


export default function HomePage() {
  return (
    <div className="">
      <Header path="/" />

      <section id="hero" className="text-center xs:my-8 2xl:my-12 px-4">
        <h1 className="text-xl xs:text-4xl sm:text-6xl text-primary py-2">
          Revolutionizing <span className="font-bold">Learning</span> <br />with <span className="font-bold">AI-Powered Solutions</span>
        </h1>

        <div className="flex justify-between items-center">
          <p className="text-secondary   mb-4 hidden">
            Personalized AI Tutoring | Retention Analytics | Career Advancements
          </p>

          <p className="text-secondary sm:text-4xl xl:text-6xl sm:my-4 text-right mb-4 sm:mx-8 xl:mx-64 md:mx-32">
            The Modern Way <br />Of Learning. <br />Powered By <span className="font-bold">AI</span>
          </p>

          <Image
            src={milevaArt}
            alt="Sanseira Logo"
            className="w-[55vw] sm:w-[50vw] sm:h-[65vh] md:w-[47vw] md:h-[60vh]"
          />
        </div>
        <div className="flex justify-end space-x-4 mt-4 md:mx-28 lg:mx-[15vw]">
          <CustomButton text="Get Started" link="/register" type="primary" />
          <CustomButton text="Learn More" link="#about" type="secondary" />

        </div>
      </section>

      <section id="features" className="text-center px-4">
        <h2 className="text-4xl sm:text-6xl font-bold text-secondary py-8">
          What We Offer
        </h2>

        <div className="hidden xl:block">
          <VerticalFeatureCard cardsData={cardsData} />
        </div>
        <div className="block xl:hidden">
          <FeatureCard cardsData={cardsData} />
        </div>
      </section>

      <section id="about" className="text-center px-4">
        <h2 className="text-4xl sm:text-6xl font-bold text-secondary py-8">
          Our AI
        </h2>

        <LeftBorderText text="Our AI is named Mileva, inspired by Mileva Marić, Albert Einstein's first wife, whose contributions were instrumental to his academic and scientific achievements. At Sanseira, we aspire to nurture the next generation of  Einsteins — problem solvers and innovators who will shape the future." />

        {aiMetrics.map((metric, index) => (
          <div key={index}>
            <div className="hidden xl:block">
              <LargeCard
                title={metric.title}
                subtitle={metric.shortDescription}
                content={metric.fullDescription}
                reverse={index % 2 === 0} />
            </div>
            <div className="block xl:hidden">
              <ExpandableWidget
                title={metric.title}
                subtitle={metric.shortDescription}
                content={metric.fullDescription} />
            </div>
          </div>
        ))
        }
      </section>

      <section id="partners" className="text-center px-4">
        <h2 className="text-4xl sm:text-6xl font-bold text-secondary pt-8">
          Sponsors & Partners
        </h2>

        <div className="grid grid-cols-3 gap-4 py-4">
          {partners.map((element, index) => (
            <Partner key={index} imageUrl={element.url} name={element.name} />
          ))}
        </div>

        <LeftBorderText text="At Sanseira, we are proud to collaborate with leading industry sponsors and partners who share our vision of revolutionizing education through AI. Together, we provide students with cutting-edge tools, personalized learning experiences, and real-world projects that bridge the gap between education and employment. With the support of our trusted partners, we empower learners to unlock their full potential and become the innovators and problem-solvers of tomorrow." />
      </section>

      <section id="pricing" className="text-center px-4">
        <h2 className="text-4xl sm:text-6xl font-bold text-secondary py-8">
          Pricing
        </h2>

        <Pricing />
      </section>

      <section id="contact" className="text-center px-4">
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

        {/* <div className="mt-8">
          <a href="https://chat.whatsapp.com/your-group-link" className="bg-primary text-white px-6 py-3 rounded">
            Join WhatsApp Group
          </a>
        </div> */}
      </section>
    </div>
  );
}
