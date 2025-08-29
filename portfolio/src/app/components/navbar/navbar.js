"use client"
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { usePathname } from "next/navigation";
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from "@heroicons/react/24/solid";
import OpenMenu from "./openmenu"

const navLinks = [
    {
        title: "Home",
        path: "/",
        children: [
            { title: "Current Status", path: "/#status" },
            { title: "About Me", path: "/#about" },
        ],
    },
    {
        title: "More About Me",
        path: "/moreabout",
    },
    {
        title: "Experience",
        path: "/experience",
    },
    {
        title: "Projects",
        path: "/projects",
    },
    {
        title: "Contact",
        path: "/contact",
    },
]

const Navbar = () => {

    const [navbarOpen, setNavbarOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false)
    const [progress, setProgress] = useState(0);
    const [openDropdown, setOpenDropdown] = useState(null);
    const scrollVal = 450;
    const pathname = usePathname();
    const isHome = pathname === "/";

    useEffect(() => {
        const handleScroll = () => {
            const y = window.scrollY;
            const { scrollHeight, clientHeight } = document.documentElement;
            const total = Math.max(1, scrollHeight - clientHeight);
            if (!isHome) {
                setScrolled(true)
            } else {
                setScrolled(y > scrollVal);
            }
            setProgress((y / total) * 100);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        window.addEventListener("resize", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleScroll);
        };
    }, [isHome]);

    {/* This useEffect is to make sure that the Navbar is closed when we enlarge the webpage from small width to wide width */}
    useEffect(() => {
        {/* Small screen width = 768 Large screen width = 1080, 1600, 1800 ... Based on different resolution */}
        setScrolled(!isHome);
        const handleResize = () => {
            {/* If detected that the screen width is larger than 768, hide the button and display the NavBar */}
            if (window.innerWidth >= 768) {
                setNavbarOpen(false);
            }
        };
    
        window.addEventListener("resize", handleResize);
    
        return () => window.removeEventListener("resize", handleResize);
    }, [isHome]);

    return (
        <nav className={`fixed navbar-font mx-auto top-0 left-0 right-0 z-10 min-h-65px max-h-65px border-b-2 border-black transition-colors duration-300 navbar-section text-black`}> {/* Common NavBar Height = 60 to 100px bg-[#96affc]*/}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[4px] bg-white/15">
                <div
                className="h-full bg-[#ac8c04] transition-[width] duration-100"
                style={{ width: `${progress}%` }}
                />
            </div>
            <div className="flex flex-wrap items-center justify-between mx-auto lg:px-20 px-5 py-2 min-h-[65px]">
                <Link href={"/"} className="flex items-center gap-3 md:gap-6"> 
                    <span className="text-xl md:text-2xl max-[350px]:text-sm font-semibold hover:text-[#ac8c04]"> My Portfolio </span>
                </Link>
                <div className="mobile-menu block md:hidden">  {/* Hide the NavBar for small screens */}
                {
                    !navbarOpen ? (
                    <button onClick={() => setNavbarOpen(true)} className={`flex item-center px-3 py-2 border-2 rounded ${scrolled ? "border-[#ac8c04] text-[#ac8c04] hover:text-[#ac8c04] hover:border-[#ac8c04]": "border-slate-200 text-slate-200 hover:text-white hover:border-white"}`}><Bars3Icon className="h-5 w-5"/></button>
                    ) : (
                    <button onClick={() => setNavbarOpen(false)} className={`flex item-center px-3 py-2 border-2 rounded ${scrolled ? "border-[#ac8c04] text-[#ac8c04] hover:text-[#ac8c04] hover:border-[#ac8c04]": "border-slate-200 text-slate-200 hover:text-white hover:border-white"}`}><XMarkIcon className="h-5 w-5"/></button>
                    )
                }
                </div>
                <div className="hidden md:block md:w-auto" id="navbar">
                    <ul className="flex p-4 md:p-0 md:flex-row md:space-x-12 mt-0 text-xl font-bold">
                        {navLinks.map((link) => (
                            <li key={link.title} className="relative group" onMouseEnter={() => setOpenDropdown(link.title)} onMouseLeave={() => setOpenDropdown(null)}>
                                {link.children ? (
                                <>
                                    <Link href={link.path} className="inline-flex items-center gap-1 underline-offset-4 hover:underline" onFocus={() => setOpenDropdown(link.title)} onClick={() => setOpenDropdown(null)}>
                                    {link.title}
                                    <ChevronDownIcon className="h-4 w-4" />
                                    </Link>

                                    <div
                                    className={`
                                        absolute left-0 top-full mt-2 w-44 rounded-md border shadow-lg z-50
                                        transition-all duration-150
                                        ${openDropdown === link.title ? "visible opacity-100 translate-y-0" : "invisible opacity-0 -translate-y-1"}
                                        ${scrolled ? "bg-white text-[#ac8c04] border-black/3": "bg-[#141312] text-white border-white/10"}
                                    `}
                                    >
                                    {link.children.map((child) => (
                                        <Link key={child.title} href={child.path} className={`block px-3 py-2 ${scrolled ? "hover:bg-black/5" : "hover:bg-[#f8f4ec]/9"}`}>
                                        {child.title}
                                        </Link>
                                    ))}
                                    </div>
                                </>
                                ) : (
                                <Link href={link.path} className="underline-offset-4 hover:underline">
                                    {link.title}
                                </Link>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            {navbarOpen ? (
                <OpenMenu
                    links={navLinks}
                    scrolled={scrolled}
                    onNavigate={() => setNavbarOpen(false)}
                />
            ) : null}
        </nav>
    )
}

export default Navbar