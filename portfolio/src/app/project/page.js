"use client";
import React, {useTransition, useState} from 'react';
import Link from 'next/link';
import Footer from '../components/footer/footer';
import Image from 'next/image';

const projectData = [
  {
    id: 1,
    title: "EverydayTracking",
    description: "A daily tracking app including Todo List, Task Recording etc",
    image: "/Proj01.png",
    time: "2025",
    tag: ["Full Stack", "Web App", "Productivity"],
    previewUrl: "https://github.com/yourusername/EverydayTracking",
    short: `A full-featured daily tracking app where users can manage tasks, record activities, 
            and organize their schedules. Built with modern JavaScript frameworks, focusing on usability and clean UI design.`
  },
  {
    id: 2,
    title: "PriorityConstWeb",
    description: "Official company website for Priority Construction",
    image: "/Proj02.png",
    time: "2025",
    tag: ["Web Development", "Business Website"],
    previewUrl: "https://github.com/yourusername/PriorityConstWeb",
    short: `Developed and deployed the official website for Priority Construction. 
            Responsible for frontend development, hosting on Cloudflare, and ensuring responsive design for business use.`
  },
  {
    id: 3,
    title: "ZhenqiZhang_Portfolio",
    description: "My personal developer portfolio",
    image: "/Proj03.png",
    time: "2025",
    tag: ["Portfolio", "Frontend"],
    previewUrl: "https://github.com/yourusername/ZhenqiZhang_Portfolio",
    short: `Designed and built a personal portfolio website to showcase my skills, experience, and projects. 
            Implemented responsive design with interactive sections for photos, videos, and contact information.`
  },
  {
    id: 4,
    title: "ZhenqiZhang_PhotoGallery",
    description: "Dynamic photo gallery web app",
    image: "/Proj04.png",
    time: "2025",
    tag: ["Frontend", "Photo Gallery"],
    previewUrl: "https://github.com/yourusername/ZhenqiZhang_PhotoGallery",
    short: `A responsive photo gallery project where users can browse locations, 
            navigate image carousels, and preview collections dynamically using folder data.`
  },
  {
    id: 5,
    title: "C-Programming-Customer-Service",
    description: "Threading simulator for customer service queue system",
    image: "/Proj05.png",
    time: "2024",
    tag: ["C Programming", "Threading", "Simulation"],
    previewUrl: "https://github.com/yourusername/C-Programming-Customer-Service",
    short: `Developed a simulator in C using threading to model customer service queues at a bank, 
            where customers wait in line for available staff. Strengthened skills in concurrency and process synchronization.`
  },
  {
    id: 6,
    title: "Machine-Learning",
    description: "Training ML models for predictions",
    image: "/Proj06.png",
    time: "2024",
    tag: ["Machine Learning", "Python"],
    previewUrl: "https://github.com/yourusername/Machine-Learning",
    short: `Implemented and trained machine learning models to analyze datasets and predict outcomes. 
            Gained experience in feature engineering, training, and evaluation of predictive models.`
  },
  {
    id: 7,
    title: "VoiceTextRecognise",
    description: "Speech and image text recognition system",
    image: "/Proj07.png",
    time: "2024",
    tag: ["Python", "AI", "Text Recognition"],
    previewUrl: "https://github.com/yourusername/VoiceTextRecognise",
    short: `Built an application that can recognize and extract text from both speech and images. 
            Applied natural language processing and computer vision concepts to enhance recognition accuracy.`
  },
  {
    id: 8,
    title: "Machine-Perception",
    description: "Image processing and perception project",
    image: "/Proj08.png",
    time: "2024",
    tag: ["Computer Vision", "Machine Perception"],
    previewUrl: "https://github.com/yourusername/Machine-Perception",
    short: `Focused on image processing and machine perception techniques. 
            Explored algorithms for analyzing and understanding visual data through Jupyter Notebook experiments.`
  }
];

const ProjectsPage = () => {

    const [selectedExp, setSelectedExp] = useState(null);

    return (
        <section className="min-h-screen bg-[#F4D6B9]">
            <div className="px-25">
                <div className="relative min-h-[80px] md:min-h-[110px]"></div>
                <h1 className="text-black mb-10 text-4xl sm:text-5xl lg:text-7xl lg:leading-normal text-center font-extrabold">Projects</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
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
                    <div className="bg-white rounded-xl shadow-2xl p-8 max-w-md w-full md:max-w-2xl relative border-2 border-black/50 justify-center text-center overflow-y-auto max-h-[95vh]">
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
                            className="rounded mb-8 border-2 border-gray-300 justify-center mx-auto"
                        />
                        <p className="text-gray-700 mb-8">{selectedExp.short}</p>
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
            <div className="w-full h-px bg-black mt-7 mb-2"/>
            <Footer />
        </section>
    )
}

export default ProjectsPage