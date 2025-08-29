"use client";
import React from 'react'
import Link from "next/link";

const OpenMenu = ({ links, onNavigate = () => {}, scrolled = false }) => {
    return (
        <div
        className={`md:hidden border-t ${
            scrolled
            ? "bg-[#f8f4ec] text-[#141312] border-black/10"
            : "bg-[#141312] text-white border-white/10"
        }`}
        >
            <ul className="flex flex-col navbar-font py-2">
                {links.map((link) => (
                <li key={link.title} className="px-4">
                    {link.children ? (
                    <details>
                        <summary className="py-3 text-lg cursor-pointer list-none flex items-center justify-between">
                            <span className="underline-offset-4">{link.title}</span>
                            <span aria-hidden>▾</span>
                        </summary>

                        <ul className="pl-4 pb-2 text-base">
                        {link.children.map((child) => (
                            <li key={child.title}>
                            <Link
                                href={child.path}
                                className="block py-2 underline-offset-4 hover:underline" 
                                onClick={onNavigate}
                            >
                                {child.title}
                            </Link>
                            </li>
                        ))}
                        </ul>
                    </details>
                    ) : (
                    <Link
                        href={link.path}
                        className="block py-3 text-lg underline-offset-4 hover:underline"
                        onClick={onNavigate}
                    >
                        {link.title}
                    </Link>
                    )}
                </li>
                ))}
            </ul>
        </div>
    );
};

export default OpenMenu