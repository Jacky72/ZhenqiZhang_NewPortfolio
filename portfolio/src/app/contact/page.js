"use client";
import React, {useTransition, useState} from 'react';
import Image from 'next/image';


const ContactPage = () => {

    return (
        <section className="min-h-screen bg-[#F4D6B9]">
            <div className="md:px-25 px-15">
                <div className="relative min-h-[80px] md:min-h-[110px]"></div>
                <h1 className="text-black mt-10 mb-10 text-4xl sm:text-5xl lg:text-7xl lg:leading-normal text-center font-extrabold">
                    Contact me now !
                </h1>
                <div className="md:grid md:grid-cols-2 gap-8 mt-10 place-items-center py-8 px-4 xl:gap-16 xl:px-0">
                    <Image src="/Contact.jpg" width={600} height={600} alt="Profile"/>
                    <div className="max-w-2xl flex flex-col items-start mx-auto md:mt-0 mt-13">
                        <h2 className="text-4xl font-bold text-black mb-10 mt-0">Zhenqi Zhang (Jacky)</h2>
                        <p className="font-bold text-xl text-black mb-4">Let&apos;s Connect!</p>
                        <p className="text-black text-lg mb-15">
                            Feel free to reach out for collaboration, project opportunities, or just to connect.<br />
                            I am always open to new ideas and conversations.
                        </p>
                        <p className="text-black lg:text-lg body-font mb-12">
                            <span className="font-bold">Location:</span> Bull Creek, Perth, Western Australia, 6149
                        </p>
                        <div className="flex items-center mb-8">
                            <span className="font-bold text-black mr-4">LinkedIn:</span>
                            <a
                                href="https://www.linkedin.com/in/zhenqizhang"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Image
                                    src="/Linkedin.png"
                                    alt="LinkedIn"
                                    width={48}
                                    height={48}
                                    className="rounded-full cursor-pointer hover:scale-110 transition"
                                />
                            </a>
                        </div>
                        <div className="flex items-center mb-12">
                            <span className="font-bold text-black mr-4">GitHub:</span>
                            <a
                                href="https://github.com/Jacky72"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Image
                                    src="/Github.jpg"
                                    alt="GitHub"
                                    width={48}
                                    height={48}
                                    className="rounded-full aspect-square object-cover cursor-pointer hover:scale-110 transition"
                                />
                            </a>
                        </div>
                        <p className="text-black lg:text-lg body-font mb-8">
                            <span className="font-bold">Phone No:</span> +61 0452 166 691
                        </p>
                    </div>
                </div>
                <div className="relative min-h-[25px]"></div>
            </div>
        </section>
    )
}

export default ContactPage;