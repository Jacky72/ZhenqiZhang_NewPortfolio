"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";

const StatusSection = () => {
  return (
    <div className="py-8 xl:gap-16 sm:py-16 max-w-5xl mx-auto">
        <p className="text-black text-2xl text-center mb-7 font-bold">
            Current Status
        </p>
        <div className="sm:border-gray-400 border-2 rounded-2xl py-8 px-16 flex flex-col sm:flex-row items-center gap-3 relative">
            <span className="text-black text-2xl body-font bg-clip-text">
                <TypeAnimation
                    sequence={[
                        "Part-Time IT Consultant, Part-Time Studying Cert III in Information Technology",
                        1000,
                        "Developing Software, Learning Data Analysis",
                        1000,
                        "Exploring New Technologies, Enhancing Skills",
                        1000,
                        "Open to Opportunities",
                        1000,
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                />
            </span>
        </div>
    </div>
  );
};

export default StatusSection;