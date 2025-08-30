"use client";
import React, {useTransition, useState} from 'react';
import Footer from '../components/footer/footer';
import Image from 'next/image';

const experienceData = [
    {
        id:1,
        title: "AICode Australia",
        description: "Programming Robot and Drone Teacher, Teaching Instructor",
        image: "/Exp01.png",
        time: "Sep 2021 - Nov 2022",
        tag: ["Teaching", "AI Programming"],
        previewUrl: "https://www.aicodeaustralia.com.au/",
        short: `During my time at AICode Australia, I contributed to the development of innovative AI and robotics education programs, 
                combining technical expertise with teaching experience. I also supported students in numerous competitions, acting as a mentor and guide, 
                while giving speeches at universities and schools to showcase our robots and drones. 
                This experience enhanced my ability to bridge technical work with public communication and educational outreach.`
    },
    {
        id:2,
        title: "Junior Engineer",
        description: "Programming Teacher for after school lessons, Teaching Instructor",
        image: "/Exp02.png",
        time: "Sep 2021 - June 2022",
        tag: ["Teaching"],
        previewUrl: "https://www.juniorengineers.com.au/",
        short: `At Junior Engineers, I developed strong communication and teaching skills by delivering coding workshops across a variety of platforms and programming languages. 
                In addition to teaching, I led and mentored new instructors, guiding them on how to successfully structure and present classes to engage students. 
                This experience deepened my leadership abilities while reinforcing my technical teaching expertise.`
    },
    {
        id:3,
        title: "Priority Construction",
        description: "IT Consulting",
        image: "/Exp03.png",
        time: "Jan 2023 - Present",
        tag: ["IT Consulting"],
        previewUrl: "https://www.priorityconst.com.au/",
        short: `At Priority Construction, I have taken on a hybrid role that combines IT support with administrative responsibilities. Beyond setting up and managing emails, 
                website hosting, cloud storage, backups, and data documentation, I also assist with day-to-day business operations. This includes preparing and maintaining company records, 
                managing digital files, creating workflow templates, and supporting team collaboration through digital platforms. Acting as both IT support and an administrative coordinator, 
                I help ensure smooth communication, organized documentation, and reliable technical infrastructure, allowing the business to operate more efficiently and focus on project delivery.`
    },
    {
        id:4,
        title: "Ceejay Engineering",
        description: "IT Consulting, Data Analysis and Database Management",
        image: "/Exp04.png",
        time: "June 2023 - Present",
        tag: ["IT Consulting", "Data Analysis", "Database Management"],
        previewUrl: "https://www.ceejayengineering.com.au/",
        short: `At Ceejay Engineering, I manage both IT infrastructure and business data, ensuring smooth technical operations while contributing to data-driven decision-making. 
                My responsibilities include configuring and maintaining networks, troubleshooting hardware/software issues, and managing databases. 
                I also analyze operational and financial data to generate insights and predictions that support business planning. In addition, I help improve internal workflows, making processes such as job intake, 
                invoicing, quoting, production scheduling, and quality checks more efficient and time-saving. This blend of IT support and data analysis allows me to deliver value across both the technical and business sides of the company.`
    }
];

const ExperiencePage = () => {

    const [selectedExp, setSelectedExp] = useState(null);

    return (
        <section className="min-h-screen bg-[#F4D6B9]">
            <div className="px-25">
                <div className="relative min-h-[80px] md:min-h-[110px]"></div>
                <h1 className="text-black mt-10 mb-10 text-4xl sm:text-5xl lg:text-7xl lg:leading-normal text-center font-extrabold">Work Experience</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-25">
                    {experienceData.map((exp) => (
                        <button
                            key={exp.id}
                            onClick={() => setSelectedExp(exp)}
                            className="block bg-[#f1c9a3] rounded-xl shadow-lg p-6 hover:scale-105 transition-transform duration-200 cursor-pointer border-2 border-black/10"
                        >
                            <h2 className="text-2xl font-bold text-black mb-5">{exp.title}</h2>
                            <p className="text-black mb-5">{exp.description}</p>
                            <div className="flex flex-wrap gap-2 mb-5 justify-center">
                                {exp.tag.map((tag, idx) => (
                                    <span
                                        key={idx}
                                        className="bg-[#F4D6B9] text-black px-3 py-1 rounded-full text-s font-semibold border border-black"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <span className="text-sm text-black">{exp.time}</span>
                        </button>
                    ))}
                </div>
            </div>
            {selectedExp && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-transparent bg-opacity-50 backdrop-blur-sm">
                    <div className="bg-white rounded-xl shadow-2xl p-8 max-w-md w-full md:max-w-3xl relative border-2 border-black/50 justify-center text-center overflow-y-auto max-h-[95vh]">
                        <button
                            className="absolute top-2 right-4 text-3xl font-bold text-gray-500 hover:text-black"
                            onClick={() => setSelectedExp(null)}
                            aria-label="Close"
                        >
                            &times;
                        </button>
                        <h2 className="text-2xl font-bold text-black mb-8 underline">{selectedExp.title}</h2>
                        <Image
                            src={selectedExp.image}
                            alt={selectedExp.title}
                            width={350}
                            height={200}
                            className="rounded mb-12 border-2 border-gray-300 justify-center mx-auto"
                        />
                        <p className="text-gray-700 mb-12 text-center px-15">{selectedExp.short}</p>
                        <a
                            href={selectedExp.previewUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 underline mb-8 block"
                        >
                            Visit Website
                        </a>
                        <span className="text-sm text-gray-500">{selectedExp.time}</span>
                    </div>
                </div>
            )}
        </section>
    )
}

export default ExperiencePage