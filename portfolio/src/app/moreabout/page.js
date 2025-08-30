"use client";
import React, {useTransition, useState} from 'react';
import Link from 'next/link';
import Footer from '../components/footer/footer';
import Image from 'next/image';

const MoreAboutPage = () => {

    return (
        <section className="min-h-screen bg-[#F4D6B9]">
            <div className="px-25">
                <div className="relative min-h-[80px] md:min-h-[110px]"></div>
                <h1 className="text-black mb-10 text-4xl sm:text-5xl lg:text-7xl lg:leading-normal text-center font-extrabold">Do you want to know more about me?</h1>
                <div className="mt-15 body-font grid grid-cols-3 text-black text-center text-4xl font-bold gap-4 lg:gap-8 px-10">
                    <Link href={"#coding"} className="underline-offset-4 hover:underline">
                        Coding
                    </Link>
                    <Link href={"#photographer"} className="underline-offset-4 hover:underline">
                        Photographer
                    </Link>
                    <Link href={"#travel"} className="underline-offset-4 hover:underline">
                        Travel Enthusiast
                    </Link>
                </div>
                <div className="w-full h-px bg-black mt-17 mb-15"/>
                <div id="coding" className="w-full text-black mb-2">
                    <div className="grid grid-cols-1 sm:grid-cols-12 py-5 mt-12">
                        <div className="col-span-6 text-center sm:text-left mt-0"> 
                            <Image src="/Pic04.png" className="w-full h-auto object-cover" width={1000} height={1000} alt="AboutSection image"/>  
                            <h2 className="text-7xl font-extrabold mb-6 mt-10 sm:mt-20 underline decoration-2 underline-offset-6">Coding</h2>
                            <p className="lg:text-lg mb-7 mt-10 sm:mt-15 lg:leading-8.5 body-font">
                                During University, I participated in multiple group assignments.
                                I particularly enjoyed courses like Machine Learning, Web Development, and Human Computer Interface.
                                In Machine Learning, I learned various algorithms such as regression, classification, clustering, and neural networks.
                                I applied these algorithms in practical projects, including a BLEVE prediction model using SVM and Random Forest, and a drone navigation system using reinforcement learning.
                                These experiences enhanced my problem-solving skills and deepened my understanding of machine learning concepts.
                                <br></br><br></br>
                                My journey into web development started with curiosity about how websites work behind the scenes. I learned JavaScript, React, and Node.js to build interactive and responsive web applications. 
                                Through hands-on projects, I discovered the importance of user experience, accessibility, and performance optimization. Web development allows me to blend logic and creativity, turning ideas into real products that people can use and enjoy. 
                                I am passionate about staying updated with the latest technologies and best practices to continuously improve my skills and deliver better solutions.                             
                            </p>
                        </div>
                        {/* Spacer Column */}
                        <div className="col-span-1 hidden sm:block" />
                        <div className="col-span-5 place-self-center mb-6">
                            <Image src="/Pic05.png" className="w-auto h-full object-contain" width={1000} height={1000} alt="AboutSection image"/>  
                            <p className="lg:text-lg mt-7 lg:leading-8.5">
                                <br></br><br></br>
                                Lastly, In the Human Computer Interface course, I was exposed to the preparation work before developing software, including data collection (User persona, competitor analysis, use cases, etc.), data analysis, UI/UX development, usability testing, etc. 
                                I found that I really enjoyed this process and found fun in it, and brought this creativity into my design.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="w-full h-px bg-black mt-17 mb-15"/>
                <div id="photographer" className="w-full text-black mt-7 mb-2">
                    <div className="grid grid-cols-1 sm:grid-cols-12 py-5 mt-12">
                        <div className="col-span-6 text-center sm:text-left mt-0"> 
                            <Image src="/Pic06.jpg" className="w-full h-auto object-cover" width={1000} height={1000} alt="AboutSection image"/>  
                            <h2 className="text-7xl font-extrabold mb-6 mt-10 sm:mt-20 underline decoration-2 underline-offset-6 break-words">Photographer</h2>
                            <p className="lg:text-lg mb-7 mt-10 sm:mt-15 lg:leading-8.5">
                                Whenever I travel, I always bring a camera with me. I think that although the most beautiful scenery is what we see with our eyes, photos make us remember the journey we have taken.
                                In this era of advanced information technology, I can pass these beautiful scenery to my family so that they can also enjoy the beauty of this world.
                                <br></br>
                                <br></br>
                                Welcome to my social media accounts (RedNote/XiaoHongShu). I post some video blogs when I travel.
                                <br></br>
                                <br></br>
                                <span>Click below to view my account </span>
                            </p>
                            <a
                                href="https://www.xiaohongshu.com/user/profile/5f54e3fe0000000001007b94"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center w-15 h-15 bg-white text-black rounded-full hover:bg-purple-300 transition duration-300"
                                style={{
                                    backgroundImage: `url("/Dog.jpg")`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    backgroundRepeat: "no-repeat"
                                }}
                            />
                        </div>
                        {/* Spacer Column */}
                        <div className="col-span-1 hidden sm:block" />
                        <div className="col-span-5 place-self-center mb-6">
                            <Image src="/Pic08.jpg" className="w-auto h-full object-contain" width={1000} height={1000} alt="AboutSection image"/>  
                        </div>
                    </div>
                    <div className="md:grid md:grid-cols-3 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-0">
                        <Image src="/Display01.jpg" className="w-auto aspect-square object-contain" width={1000} height={1000} alt="AboutSection image"/> 
                        <Image src="/Display02.jpg" className="w-auto aspect-square object-contain" width={1000} height={1000} alt="AboutSection image"/> 
                        <Image src="/Display03.jpg" className="w-auto aspect-square object-contain" width={1000} height={1000} alt="AboutSection image"/> 
                    </div>
                </div>
                <div className="w-full h-px bg-black mt-17 mb-15"/>
                <div id="travel" className="w-full text-black mt-7 mb-2">
                    <div className="grid grid-cols-1 sm:grid-cols-12 py-5 mt-12">
                        <div className="col-span-6 text-center sm:text-left mt-0"> 
                            <Image src="/Travel01.jpg" className="w-full h-auto object-cover" width={1000} height={1000} alt="AboutSection image"/>  
                            <h2 className="text-7xl font-extrabold mb-6 mt-10 sm:mt-20 underline decoration-2 underline-offset-6 break-words">Travel Enthusiast</h2>
                            <p className="lg:text-lg mb-7 mt-10 sm:mt-15 lg:leading-8.5">
                                While you are still young, the world is at your feet, and your steps never stop!
                                <br></br>
                                <br></br>
                                Traveling has always been one of my favorite things to do, I like to explore the world through my footsteps. Although I have only explored a small part of the place now, but in the distant future, I believe that my footsteps will definitely pass through more places
                            </p>
                        </div>
                        {/* Spacer Column */}
                        <div className="col-span-1 hidden sm:block" />
                        <div className="col-span-5 place-self-center mb-6">
                            <Image src="/Travel02.jpg" className="w-auto h-full object-contain" width={1000} height={1000} alt="AboutSection image"/>  
                        </div>
                    </div>
                    <div className="md:grid md:grid-cols-3 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-0">
                        <Image src="/Display04.jpg" className="w-auto aspect-square object-contain" width={1000} height={1000} alt="AboutSection image"/> 
                        <Image src="/Display05.jpg" className="w-auto aspect-square object-contain" width={1000} height={1000} alt="AboutSection image"/> 
                        <Image src="/Display06.jpg" className="w-auto aspect-square object-contain" width={1000} height={1000} alt="AboutSection image"/> 
                    </div>
                </div>
            </div>
            <div className="w-full h-px bg-black mt-7 mb-2"/>
        </section>
    )
}

export default MoreAboutPage