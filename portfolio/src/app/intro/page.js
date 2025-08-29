"use client";
import React, {useTransition, useState} from 'react';
import Image from 'next/image';
import StatusSection from '../components/status/currentstatus';
import TabButton from '../components/tabbutton/tabbutton';
import Footer from '../components/footer/footer';

const TAB_DATA = [
    {
      title: "Skills",
      id: "skills",
      imgurl: "/Pic01-34.jpg", 
      content: (
        <ul className="list-disc pl-2">
          <li className="list-none mb-1">Programming Languages: Python, Java, C</li>
          <li className="list-none mb-1">SQL (PostgreSQL, MySQL)</li>
          <li className="list-none mb-1">Web Design (React, Express.js, Node.js)</li>
          <li className="list-none mb-1">Agile development practices</li>
          <li className="list-none mb-1">AWS, CI/CD</li>
          <li className="list-none mb-1">Machine Learning (Model Training, Optimization ...)</li>
          <li className="list-none">Leadership (Team collaboration, Mentoring)</li>
        </ul>
      ),
    },
    {
      title: "Education",
      id: "education",
      imgurl: "/Pic02.jpg", 
      content: (
        <ul className="list-disc pl-2">
            <li className="list-none mb-4"> University: Curtin University </li>
            <li className="list-none mb-4"> Degree: Bachelor of Computing </li>
            <li className="list-none"> Major: Computer Science </li>
        </ul>
      ),
    },
    {
        title: "Language",
        id: "language",
        imgurl: "/Pic03.jpg", 
        content: (
          <ul className="list-disc pl-2">
            <li className="list-none mb-4">English - Fluent</li>
            <li className="list-none">Chinese Mandarin - Native</li>
          </ul>
        ),
      },
];

const IntroPage = () => {

    {/* Default to Skills */}
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
        setTab(id);
        });
    };

    return (
        <section className="min-h-screen bg-[#F4D6B9]">
            <div className="px-25">
                <div className="relative min-h-[80px] md:min-h-[110px]"></div>
                <div className="grid grid-cols-1 sm:grid-cols-12">
                    {/* 8 Col for the Intro */}
                    <div className="col-span-8 place-self-center text-center sm:text-left">
                        <h1 className="text-white mb-10 text-4xl sm:text-5xl lg:text-7xl lg:leading-normal font-extrabold">
                            <span className="text-black">
                                Hi, I am {""}
                            </span>
                            <br></br>
                            <span className="text-black">
                                <span>Zhenqi Zhang</span>
                            </span>
                            <br></br>
                            <span className="text-black">
                                <span>Jacky</span>
                            </span>
                        </h1>
                        {/* The most common text colors are: #323232 #646464 #999999, but the color would be too dark if I use any of these */}
                    </div>
                    {/* 4 Col for the Profile Image */}
                    <div className="col-span-4 place-self-center mt-6 lg:mt-0">
                        <div className="rounded-full bg-white w-[250px] h-[250px] lg:w-[310px] lg:h-[310px] sm:w-[200px] sm:h-[200px] relative"> {/* Container and also background of the Profile Image */}
                            <Image src="/pfp.jpg" alt="pfp" className="rounded-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" width={305} height={305}/> {/* Profile Image (Making it rounded and in the center of the background container */}
                        </div>
                    </div>
                </div>
                <div className="border-2 border-gray-400 rounded-2xl px-6 mt-12 py-7 shadow-lg max-w-5xl mx-auto">
                    <p className=" text-black text-center body-font sm:text-lg lg:text-xl lg:leading-8.5">
                        I am a graduate who aspires to become a software engineer or computer scientist.
                        <br></br>
                        I am keen to learn and grow into a mature full-stack engineer, software engineer or data analyst.
                        <br></br>
                        In addition to programming, I am also a photographer, travel enthusiast and graphic designer living in Australia. In the past four years, I taught myself how to shoot, edit and create some of my own short videos. At the same time, I am constantly improving my creativity and problem-solving skills in programming.
                    </p>
                </div>
                <div id="status"><StatusSection/></div>
                <div className="w-full h-px bg-black mt-3 mb-10" id="about"/>
                <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 xl:px-0">
                    <Image src={TAB_DATA.find((t) => t.id === tab).imgurl} width={500} height={500} alt="AboutSection image"/>
                    <div>
                        <h2 className="text-4xl font-bold text-black mb-6 mt-5 heading-font">About Me</h2>
                        <p className="text-black lg:text-lg body-font">
                            I am a Computer Science graduate specializing in Machine Learning, Full-Stack Development, Data Science and Software Development. With sufficient skill in Python, Java, Node.js, C, SQL, and system design.
                            My pervious work experience includes using computer vision and reinforcement learning in robotics and drones (AICode Australia). I have done projects ranging from predictive ML models for BLEVE analysis to full-stack Web App like a Availability Enrolment using React, Express.js, and PostgreSQL.
                            I thrive in Agile teams and value iterative, feedback-driven development. As a mentor to 100+ students, I enjoy creating collaborative, inclusive learning environments. Fluent in English and Mandarin, I bring strong cross-cultural communication and leadership to every project.
                            I&apos;m passionate about building impactful, team-driven solutions while mentoring the next generation of developers.
                        </p>
                        <div className="flex flex-row justify-start mt-8 body-font">
                            <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>
                                {" "}
                                Skills{" "}
                            </TabButton>
                            <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>
                                {" "}
                                Education{" "}
                            </TabButton>
                            <TabButton selectTab={() => handleTabChange("language")} active={tab === "language"}>
                                {" "}
                                Language{" "}
                            </TabButton>
                        </div>
                        <div className="mt-2 min-h-[150px] text-black">
                            {TAB_DATA.find((t) => t.id === tab).content}
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full h-px bg-black mt-7 mb-2" id="about"/>
            <Footer />
        </section>
    )
}

export default IntroPage